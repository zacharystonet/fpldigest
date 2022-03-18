
import React, { useEffect, useState } from "react";
import Cookies from 'universal-cookie';
import getManagerInfo  from "../../utils/data/getManagerInfo"
import TeamForm from "./TeamForm"
import { teamIdState } from "../../atoms/teamAtom"
import { useRecoilState, useRecoilValue } from "recoil";

export function Sidebar() {
    const [teams, setTeams] = useState([]);
    const [teamId, setTeamId] = useRecoilState(teamIdState);

    

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
    }, []);
    
    //console.log(teams)

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
                                <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                                <span onClick={() => setTeamId(team.teamId)} className="text-sm font-medium">{team.teamName}</span>
                                </a>
                            </li>
                    ))}
                </ul>    
                <TeamForm />

            </div>  
        </div>
    );
}

export default Sidebar;