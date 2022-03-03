import getTeam  from "../hooks/getTeam";
//import { getTeam } from 'fpl-api-js'
import React, { useEffect, useState } from "react";



function PlayerTeam() {
    const playerTeamData = getTeam(23752);
    const test = JSON.stringify(playerTeamData);

    return (
        <div>
            {test}
        </div>
    )
}

export default PlayerTeam;