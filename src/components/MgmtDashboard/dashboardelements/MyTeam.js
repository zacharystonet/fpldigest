import React, { useEffect, useState, useMemo } from "react";
import getManagersTeam from "../../../utils/data/getManagersTeam";
import getBootstrap from "../../../utils/data/getBootstrap";
import getPlayerMatchData from "../../../utils/data/getPlayerMatchData"

import {Table} from "../../../utils/tables/tables";


export function MyTeam() {

  const [teamArray, setTeamArray] = useState([]);
  const fetchData = async () => {
    var managersteam = [];
    const [bootstrap, data] = await Promise.all([
      getBootstrap(),
      getManagersTeam(27356, 28)
    ]);
    const [playerMatchData] = await Promise.all([
      getPlayerMatchData(28)
    ]);
    console.log(bootstrap)
    console.log(data)

    for (var i in data.picks) {
      for (var j in bootstrap.elements) {
        if (data.picks[i].element == bootstrap.elements[j].id) {

          var gwpoints = playerMatchData.elements[bootstrap.elements[j].id - 1].stats.total_points // the event list starts playerIDs on index 1? why?

          if (data.picks[i].is_captain) {
            gwpoints = gwpoints * 2
          }
          managersteam.push({
            player: bootstrap.elements[j].first_name + ' ' + bootstrap.elements[j].second_name,
            gwpoints: gwpoints,
            form: bootstrap.elements[j].form,
            transfersin: bootstrap.elements[j].transfers_in_event,
            transfersout: bootstrap.elements[j].transfers_out_event,
          });
          break;
        }
      }
    }
    setTeamArray(managersteam);
  }

  useEffect(() => {
    fetchData();    
  }, []);




 const columns = React.useMemo(
   () => [
     {
       Header: 'Player',
       accessor: 'player', // accessor is the "key" in the data
     },
     {
      Header: 'GW Points',
      accessor: 'gwpoints',
     },
     {
       Header: 'Form',
       accessor: 'form',
     },
     {
      Header: 'Transfers In (GW)',
      accessor: 'transfersin',
    },
    {
      Header: 'Transfers Out (GW)',
      accessor: 'transfersout',
    },
   ],
   []
 )
 return (
   <Table columns={columns} data={teamArray} />
 )
 
}


export default MyTeam;




 /*function MyTeamTest() {

    useEffect(() => {

        // set team list to 'data'
        getManagersTeam(27356,28).then(data => {
            var root = document.getElementById('root');

            //console.log(data)
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
                                <td class="name px-6 py-4 whitespace-nowrap">
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
                    <table id="teamTable" className="min-w-full divide-y divide-gray-200">
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
} */
