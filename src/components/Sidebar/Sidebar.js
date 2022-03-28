import React, { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
import { teamIdState } from "../../atoms/teamAtom"
import { useRecoilState } from "recoil";
import { PlusIcon, XIcon } from '@heroicons/react/solid'
import getBootstrap from "../../utils/data/getBootstrap";
import getManagerInfo from "../../utils/data/getManagerInfo";


export function Sidebar() {
    const [teams, setTeams] = useState([]);
    const [teamId, setTeamId] = useRecoilState(teamIdState);
    const [inputValue, setUserInput] = useState('')

    const fetchData = async () => {
      let myTeamsArray = [];
      const cookies = new Cookies();
      const [data] = await Promise.all([
          cookies.getAll()
      ]);

      var i = 0;
      for (const key in data) {
          
        myTeamsArray.push({
            id: i,
            teamId: key,
            teamName: data[key]
          });
          i = i + 1;
      }
      setTeams(myTeamsArray)
    }
    useEffect(() => {
      fetchData();
    }, [teamId]);


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

              var name = data.name;
              const cookies = new Cookies();
              var date = new Date;
              date.setDate(date.getDate() + 364);
            
              cookies.set(inputValue, data.name, {
                path: "/",
                expires: date
                });
            setTeamId(inputValue)
          }
    }

    const unfollowTeam = (unfollowId) => {
        const cookies = new Cookies();
        cookies.remove(unfollowId)
        if (unfollowId == teamId) {
            setTeamId(1)
            // check if they follow teams
                // check if they have a favorite
                        // return fav
                // return first followed team
            // return hogcrankcers fc >:)
        } else {
            //else just stay here and figure out how to get the sidebar component to refresh.
        }






        // if they removed the current 'teamId' 
            // check if they follow teams
                // check if they have a favorite
                        // return fav
                // return first followed team
        //else just stay here and figure out how to get the sidebar component to refresh.
            // return the default value, which is set to hogcrankers if they have none
    }

    const favTeam = (favTeamId) => {
        const cookies = new Cookies();
        cookies.set(favTeamId, )
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
                            <li key={team.teamId}>
                                <a href="#" className="flex flex-row items-center h-12  text-gray-500 hover:text-gray-800">
                                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                                    <span onClick={() => setTeamId(team.teamId)} className="text-sm font-medium">{team.teamName}</span>
                                    <XIcon className="h-5 w-5" onClick={() => unfollowTeam(team.teamId)}/>
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