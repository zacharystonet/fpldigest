import getTeam  from "../hooks/getTeam";
import getPlayer  from "../hooks/getPlayer";
import React, { useEffect, useState } from "react";



 function PlayerTeam() {


    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [teamName, setTeamName] = useState(null);
    const [overallPoints, setOverallPoints] = useState(null);
    const [currentGWPoints, setCurrentGWPoints] = useState(null);
    
    useEffect(() => {
        getTeam(27356).then(data => {
            setFirstName(data.player_first_name);
            setLastName(data.player_last_name);
            setTeamName(data.name);
            setOverallPoints(data.summary_overall_points);
            setCurrentGWPoints(data.summary_event_points);
            
        })
    }, []); 

    const [playerList, setPlayerList] = useState([]);
    useEffect(() => {
        getTeam(27356).then(data => {
            
        })
    }, []); 


    return (
        
        <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <div class="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Team Summary</div>
                    <p className="text-gray-700 text-base">Name: {teamName} </p>
                    <p className="text-gray-700 text-base">Total points: {overallPoints}</p>
                    <p className="text-gray-700 text-base">Current GW points: {currentGWPoints}</p>
                </div>
            </div>
        </div>
    )
}

export default PlayerTeam;