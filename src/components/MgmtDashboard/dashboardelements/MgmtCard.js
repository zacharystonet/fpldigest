import React, { useEffect, useState } from "react";
import getManagerInfo  from "../../../utils/data/getManagerInfo";
import { useRecoilState, useRecoilValue } from "recoil";
import { teamIdState, teamState } from "../../../atoms/teamAtom";

function MgmtCard() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [teamName, setTeamName] = useState(null);
    const [overallPoints, setOverallPoints] = useState(null);
    const [currentGWPoints, setCurrentGWPoints] = useState(null);
    const [overallRank, setOverallRank] = useState(null);
    const teamId = useRecoilValue(teamIdState); // value we clicked in sidebar

    const fetchData = async () => {
        const [managerInfo] = await Promise.all([
            getManagerInfo(teamId)
          ]);

          setFirstName(managerInfo.player_first_name);
          setLastName(managerInfo.player_last_name);
          setTeamName(managerInfo.name);
          setOverallPoints(managerInfo.summary_overall_points);
          setCurrentGWPoints(managerInfo.summary_event_points);
          setOverallRank(managerInfo.summary_overall_rank);

    }

    useEffect(() => {
        fetchData();   
      }, [teamId]);

    return (
        <div className="flex bg-white shadow-lg rounded-sm border border-slate-200">
            <div className="px-5 pt-5 font-bold text-xl mb-2">Team Summary</div>

            <div className="flex grid-cols-2 gap-6 px-5 pt-5 text-xl mb-2">
                <div>
                    <p className="text-gray-700 text-base"><b>Name:</b> {teamName} </p>
                    <p className="text-gray-700 text-base"><b>Manager:</b> {firstName} {lastName}</p>
                </div>
                <div>
                    <p className="text-gray-700 text-base"><b>Overall Rank:</b> {overallRank}</p>
                    <p className="text-gray-700 text-base"><b>Total points:</b> {overallPoints}</p>
                    <p className="text-gray-700 text-base"><b>Current GW points:</b> {currentGWPoints}</p>
                </div>

            </div>
        </div> 
    )
}

export default MgmtCard;