
import React, { useEffect, useState } from "react";
import getManagersTeam from "../../hooks/getManagersTeam"
import getBootstrap from "../../hooks/getBootstrap"

function getName(playerId) {
    var i = 0;
    var name = '';
    //const [mgmtTeamData, setMgmtTeamData] = useState('');

     useEffect(() => {
        getBootstrap().then(data => {
            console.log(data)

            for (i=0; i < data.elements.length; i++) {
                if (data.elements[i].id == playerId) {
                    console.log(data.elements[i].second_name)
                }
                
            }          

        })

        
    }, []); 
}

function MyTeam() {

    
/*     var i = 0;
    var name = '';
    //const [mgmtTeamData, setMgmtTeamData] = useState('');

     useEffect(() => {
        getBootstrap().then(data => {
            console.log(data)

            for (i=0; i < data.elements.length; i++) {
                if (data.elements[i].id == 233) {
                    console.log(data.elements[i].second_name)
                }
                
            }          

        })

        
    }, []);  */


    
    useEffect(() => {
        getManagersTeam(27356,27).then(data => {
            //console.log(data)
            var root = document.getElementById('root');
            
            for(const element of data.picks) {
                getBootstrap().then(allJson => {
                    var i = 0;
                    var name = '';
                    for (i=0; i < allJson.elements.length; i++) {
                        if (allJson.elements[i].id == element.element) {
                            name = allJson.elements[i].first_name + ' ' + allJson.elements[i].second_name
                            root.insertAdjacentHTML('beforebegin', `<tr><td>${name}</td><td>${element.position}</td></tr>`)
                        }
                    }    
                })
                
            }
            //data.picks.forEach(element => root.insertAdjacentHTML('beforebegin', `<tr><td>${element.element}</td><td>${element.position}</td></tr>`)); 
        })
    }, []); 

    //console.log(mgmtTeamData);




    return (
        <div>
            <table>
                <thead>
                <tr>
                    <td>
                    <b>Player</b>
                    </td>
                    <td>
                    <b>Position</b>
                    </td>
                </tr>
                </thead>
                <tbody>
                    <tr id="root"></tr>
                </tbody>    
            </table>
        </div>
    )
}

export default MyTeam;