import getTeam  from "../hooks/getTeam";
//import { getTeam } from 'fpl-api-js'
import React, { useEffect, useState } from "react";



function PlayerTeam() {
    const playerTeamData = getTeam(23752);
    

    /*useEffect(() => {
        setTeam(getTeam(23752));
        console.log(playerTeamData)
      });*/
      
      const test = JSON.stringify(playerTeamData);

    return (
        <div>
            {test}
        </div>
    )
}

export default PlayerTeam;