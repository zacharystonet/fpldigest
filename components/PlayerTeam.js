import getTeam  from "../hooks/getTeam";
import getPlayer  from "../hooks/getPlayer";
import React, { useEffect, useState } from "react";



 function PlayerTeam() {



    const [teamName, setTeamName] = useState(null);
    const [overallPoints, setOverallPoints] = useState(null);
    useEffect(() => {
        getTeam(27356).then(data => {
            setTeamName(data.name)
            setOverallPoints(data.summary_overall_points)
        })
    }, []); 

    const [playerList, setPlayerList] = useState([]);
    useEffect(() => {
        getTeam(27356).then(data => {
            
        })
    }, []); 


    return (
        <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">
            <header className="absolute top-5 right-8">
                <div className="flex items-center bg-black space-x-3 
                    opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 text-white">
                    <h2>{teamName}</h2>
                </div>
            </header>
            <div>
                <h2>Overall summary</h2>
                <p>Total points: {overallPoints}</p>

            </div>

         </div>
    )
}

export default PlayerTeam;