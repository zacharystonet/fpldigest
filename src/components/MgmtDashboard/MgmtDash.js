import React, { useEffect, useState } from "react";
import MgmtCard from "./dashboardelements/MgmtCard"
import MyTeam from "./dashboardelements/MyTeam"
import FplTwitter from "./dashboardelements/FplTwitter"

 function MgmtDash() {    
    return (
        <main>
            <div className="flex grid-cols-2 gap-6">
                <div>
                    <MgmtCard />
                    <MyTeam />
                </div>

                <div>
                    <FplTwitter />
                </div>
            </div>

        </main>
        

    )
}

export default MgmtDash;