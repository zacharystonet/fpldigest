import React, { useEffect, useState } from "react";
import { Timeline } from 'react-twitter-widgets'

function FplTwitter() {

    return (
        <Timeline
                    dataSource={{
                    sourceType: 'profile',
                    screenName: 'OfficialFPL'
                }}
                    options={{
                    height: '1000'
                }}
        />
    )
}

export default FplTwitter;