import React, { useEffect, useState } from "react";
import MgmtCard from "./dashboardelements/MgmtCard"
import MyTeam from "./dashboardelements/MyTeam"

 function MgmtDash() {    
    return (
        <main>
            <div>
                <MgmtCard />
            </div>

            <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-9xl ">    
                <MyTeam />
            </div>
        </main>
        

    )
}

export default MgmtDash;