
import React, { useEffect, useState } from "react";
import getManagersTeam from "../../hooks/getManagersTeam"
import getBootstrap from "../../hooks/getBootstrap"
import getPlayer_Name from "../../hooks/getPlayer_Name"

function MyTeam() {
    useEffect(() => {

        // set team list to 'data'
        getManagersTeam(27356,28).then(data => {
            var root = document.getElementById('root');
            // loop through team 'data'
            for(const element of data.picks) {
                getBootstrap().then(allJson => {
                    var i = 0;
                    var name = '';
                    
                    // this is sus but open all json data to find player information based on element.element (id from team list)
                    for (i=0; i < allJson.elements.length; i++) {
                        if (allJson.elements[i].id == element.element) {
                            name = allJson.elements[i].first_name + ' ' + allJson.elements[i].second_name
                            root.insertAdjacentHTML('beforebegin',
                             `<tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10">
                                        <img class="h-10 w-10 rounded-full" src="https://resources.premierleague.com/premierleague/photos/players/250x250/p${allJson.elements[i].code}.png" alt="">
                                    </div>
                                    <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900">${name}</div>        
                                    </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap><div class="text-sm text-gray-900">${allJson.elements[i].form}</div></td>
                                <td class="px-6 py-4 whitespace-nowrap><div class="text-sm text-gray-900">${allJson.elements[i].transfers_in_event}</div></td>
                                <td class="px-6 py-4 whitespace-nowrap><div class="text-sm text-gray-900">${allJson.elements[i].transfers_out_event}</div></td>
                             </tr>`)
                             break;
                        }

                    }    
                })
                
            }
        })
    }, []);

    
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Form</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transfers In (GW)</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transfers Out (GW)</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
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