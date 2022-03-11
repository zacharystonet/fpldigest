import React, { useEffect, useState } from "react";
import { Timeline, Tweet } from 'react-twitter-widgets'


function FplTwitter() {

    return (
        <div className="bg-white shadow-lg rounded-sm border border-slate-200">
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'TwitterDev'
                    }}
                    options={{
                        height: '400'
                     }}
            />
            
        </div>

    )
}

export default FplTwitter;