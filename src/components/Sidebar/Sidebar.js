import React, { useEffect, useState } from "react";
import { teamIdState } from "../../atoms/teamAtom"
import { useRecoilState } from "recoil";
import { PlusIcon, XIcon, HeartIcon } from '@heroicons/react/solid'
import getBootstrap from "../../utils/data/getBootstrap";
import getManagerInfo from "../../utils/data/getManagerInfo";
import ls from "local-storage"


export function Sidebar() {
    const [teams, setTeams] = useState([]);
    const [teamId, setTeamId] = useRecoilState(teamIdState);
    const [inputValue, setUserInput] = useState('')
    const lStorage = require('local-storage-json');
    const [isRemoving, setIsRemoving] = useState(false);

    const fetchData = async () => {
      let myTeamsArray = [];
      for (let i = 0; i < localStorage.length; i++){
          const key = localStorage.key(i);
          if (key.includes("Profile", 0)) {
            const teamInfo = ls.get(key)
             myTeamsArray.push({
                id: i,
                teamId: teamInfo.id,
                teamName: teamInfo.teamName
              }); 
            }  
    }
      setTeams(myTeamsArray)
      setIsRemoving(false)
    }
    useEffect(() => {
      fetchData();
    }, [teamId, isRemoving]);


    const followTeam = async () => {
        if (inputValue !== "") {
            let gwId = null;
            const [bootstrap] = await Promise.all([getBootstrap()]);
            for (let i in bootstrap.events) {
              if (bootstrap.events[i].is_current) {
                  gwId = bootstrap.events[i].id     
              }
            }
            const [data] = await Promise.all([
                getManagerInfo(inputValue, gwId)
            ]);

            let myObject = {
                teamName: data.name,
                favorite: false,
                id: inputValue
            };

            lStorage.set("Profile:" + inputValue, myObject)  

            setTeamId(inputValue)
          }
    }

    const unfollowTeam = (unfollowId) => {
        
        ls.remove("Profile:" + unfollowId)


        // check if we unfollowed the team we are viewing currently
         if (unfollowId == teamId ) {
            let favTeam = getFavTeam();
            let followedTeam = getFirstFollowedTeam();
            // check for fav team
            if (!!favTeam) {
                setTeamId(favTeam)
            } else if (!!followedTeam) { 
                // no fav team so get a followed team
                setTeamId(followedTeam)
            } else {
                // no followed team so set to hogcrankers fc
                setTeamId(27356)
                }
            }
            setIsRemoving(true) 
        }  


    //returns the id of the team a user selected as favorite
     function getFavTeam() { 
        for (let i = 0; i < localStorage.length; i++){
            let key = ls.get(localStorage.key(i));
            if (key.favorite == true) {
                return key.id
            }
        }
        return null  
    }

    function getFirstFollowedTeam() { 
        for (let i = 0; i < localStorage.length; i++){
            let key = localStorage.key(i);
            if (key.includes("Profile", 0)) {
                let teamInfo = ls.get(key)
                return teamInfo.id
            }
        }
        return null
    }


    function doesFavExist() { 
        for (let i = 0; i < localStorage.length; i++){
            let key = ls.get(localStorage.key(i));
            if (key.favorite == true) {
                return true
            }
        }
        return false  
    }

    function doesFollowExist() { 
        for (let i = 0; i < localStorage.length; i++){
            const key = localStorage.key(i);
            if (key.includes("Profile", 0)) {
                return true
            }
        }
        return false
    }





    // set a favorite team in local storage
    const favTeam = (newFavTeamId) => {
        let currentFavTeamId = getFavTeam()
        if (newFavTeamId != currentFavTeamId) {
            // set the users current favorite team if they have one, to false
            if (!!currentFavTeamId) {
                let currentFavTeam = ls.get("Profile:" + currentFavTeamId)
                currentFavTeam.favorite = false
                ls.set("Profile:" + currentFavTeamId, currentFavTeam)
            }

            // set new fav team
            let newFavTeam = ls.get("Profile:" + newFavTeamId)
            newFavTeam.favorite = true
            ls.set("Profile:" + newFavTeamId, newFavTeam)
        }
    }
    

    return(
        <div className="min-h-screen flex flex-row bg-gray-100">
            <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
                <div className="flex items-center justify-center h-20 shadow-md">
                    <h1 className="text-3xl text-blue-500">fpldigest</h1>
                </div>
                <ul className="flex flex-col py-4">
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                        <span className="text-sm font-medium">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                        <span className="text-sm font-medium">Stats</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
                        <span className="text-sm font-medium">Price Changes</span>
                        </a>
                    </li>
                </ul>

                {/* stored cookie IDs for teams */}
                <hr className="border-t-[.1px] border-gray-200" />

                <ul className="flex flex-col py-4">
                    {teams.map((team) => (
                            <li className= "group" key={team.teamId}>
                                <a href="#" className="flex flex-row items-center h-12  text-gray-500 hover:text-gray-800">
                                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                                    <span onClick={() => setTeamId(team.teamId)} className="text-sm font-medium">{team.teamName}</span>
                                    <XIcon className="invisible group-hover:visible opacity-50 hover:opacity-100 h-5 w-5" onClick={() => unfollowTeam(team.teamId)}/>
                                    <HeartIcon className="invisible group-hover:visible opacity-50 hover:opacity-100 h-5 w-5" onClick={() => favTeam(team.teamId)}/>
                                </a>
                            </li>
                    ))}
                </ul>    
                <div className="flex items-center py-3">
                    <input type="text" value={inputValue} onInput={e => setUserInput(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" placeholder="Team ID"  />
                    <button className="flex items-center space-x-2 hover:text-gray">
                    <PlusIcon className="h-5 w-5" onClick={followTeam}/>
                    </button>
                </div>
            </div>  
        </div>
    );
}

export default Sidebar;