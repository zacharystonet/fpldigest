
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
        getManagersTeam(27356,28).then(data => {
            //console.log(data)
            var root = document.getElementById('root');
            
            for(const element of data.picks) {
                getBootstrap().then(allJson => {
                    var i = 0;
                    var name = '';
                    for (i=0; i < allJson.elements.length; i++) {
                        if (allJson.elements[i].id == element.element) {
                            name = allJson.elements[i].first_name + ' ' + allJson.elements[i].second_name
                            root.insertAdjacentHTML('beforebegin',
                             `<tr>
                                <td class="px-6 py-4 whitespace-nowrap><div class="text-sm text-gray-900">${name}</div></td>
                                <td class="px-6 py-4 whitespace-nowrap><div class="text-sm text-gray-900">${allJson.elements[i].form}</div></td>
                                <td class="px-6 py-4 whitespace-nowrap><div class="text-sm text-gray-900">${allJson.elements[i].transfers_in_event}</div></td>
                                <td class="px-6 py-4 whitespace-nowrap><div class="text-sm text-gray-900">${allJson.elements[i].transfers_out_event}</div></td>
                             </tr>`)
                             break;
                        }
                        console.log(i)

                    }    
                })
                
            }
            //data.picks.forEach(element => root.insertAdjacentHTML('beforebegin', `<tr><td>${element.element}</td><td>${element.position}</td></tr>`)); 
        })
    }, []); 

    




    return (
/*         <div>
            <table class="table-auto">
                <thead>
                    <tr>
                        <td>
                        <b>Player</b>
                        </td>
                        <td>
                        <b>Form</b>
                        </td>
                        <td>
                        <b>Transfers In this GW</b>
                        </td>
                        <td>
                        <b>Transfers Out this GW</b>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr id="root"></tr>
                </tbody>    
            </table>
        </div> */

        <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Form</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transfers In (GW)</th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transfers Out (GW)</th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr id="root"></tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
         </div>


    )
}

export default MyTeam;