import React, { useEffect, useState } from "react";
import getManagerInfo  from "../../hooks/getManagerInfo";

function MgmtCard() {


    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [teamName, setTeamName] = useState(null);
    const [overallPoints, setOverallPoints] = useState(null);
    const [currentGWPoints, setCurrentGWPoints] = useState(null);
    
    useEffect(() => {
        getManagerInfo(27356).then(data => {
            setFirstName(data.player_first_name);
            setLastName(data.player_last_name);
            setTeamName(data.name);
            setOverallPoints(data.summary_overall_points);
            setCurrentGWPoints(data.summary_event_points);
        })
    }, []); 

    const [mgmtTeamData, setMgmtTeamData] = useState([]);
    useEffect(() => {

    }, []); 

    
    return (
        <div className="flex bg-white shadow-lg rounded-sm border border-slate-200">
            <div className="px-5 pt-5">
                <div className="font-bold text-xl mb-2">Team Summary</div>
                <p className="text-gray-700 text-base">Name: {teamName} </p>
                <p className="text-gray-700 text-base">Total points: {overallPoints}</p>
                <p className="text-gray-700 text-base">Current GW points: {currentGWPoints}</p>
            </div>
        </div> 
    )
}

export default MgmtCard;