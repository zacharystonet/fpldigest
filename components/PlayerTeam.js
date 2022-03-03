import getTeam  from "../hooks/getTeam";
import getPlayer  from "../hooks/getPlayer";
import React, { useEffect, useState } from "react";



 function PlayerTeam() {



    const [teamName, setTeamName] = useState(null);
    useEffect(() => {
        getTeam(27356).then(data => {
            setTeamName(data.name)
        })
    }, []); 

    const [playerList, setPlayerList] = useState([]);
    useEffect(() => {
        getTeam(27356).then(data => {
            
        })
    }, []); 

    


    return (
        <header className="absolute top-5 right-8">
            <div className="flex items-center bg-black space-x-3 
                opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 text-white">
                <h2>{teamName}</h2>
            </div>
         </header>
    )
}

export default PlayerTeam;