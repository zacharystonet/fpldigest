
import React, { useEffect, useState, useRef } from "react";
import getManagersTeam from "../../hooks/getManagersTeam"
import getBootstrap from "../../hooks/getBootstrap"
import DataTable, {createTheme} from 'react-data-table-component';
import getManagerInfo  from "../../hooks/getManagerInfo";
import { getJSON, reqType } from "../../hooks/baseRequest";
import { useTable } from 'react-table';
//import getPlayer_Name from "../../hooks/getPlayer_Name"






function MyTeamTable() {
    const columns = [
        {
          name: "Player",
          selector: (row) => row.player,
          sortable: true,
          grow: 2,
          
        },
        {
          name: "Form",
          selector: (row) => row.form,
          sortable: true,
          center: true,
        },
        {
          name: "Transfers In (GW)",
          selector: (row) => row.transfersin,
          sortable: true,
          center: true,
        },
        {
          name: "Transfers Out (GW)",
          selector: (row) => row.transfersout,
          sortable: true,
          center: true,
        },
      ];
  
      const [teamArray, setTeamArray] = useState([]);
      const fetchData = async () => {
        var managersteam = [];
        const [bootstrap, data] = await Promise.all([
          getBootstrap(),
          getManagersTeam(27356, 28)
        ]);
    
        for (var i in data.picks) {
          for (var j in bootstrap.elements) {
            if (data.picks[i].element == bootstrap.elements[j].id) {
              managersteam.push({
                player: bootstrap.elements[j].first_name + ' ' + bootstrap.elements[j].second_name,
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

      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
       } = useTable({ columns, teamArray })
       return (
        <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
       </thead>
       
       )
}



function MyTeamTest() {

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
}

  export function MyTeam() {
    const customStyles = {
        	headRow: {
        		style: {
                    width:'auto'
        		},
        	},
        	headCells: {
        		style: {
        			color: '#202124',
        			fontSize: '14px',
        		},
        	
        	},
        	pagination: {
        		style: {
        			border: 'none',
        		},
        	},
        };

    const columns = [
      {
        name: "Player",
        selector: (row) => row.player,
        sortable: true,
        grow: 2,
        
      },
      {
        name: "Form",
        selector: (row) => row.form,
        sortable: true,
        center: true,
      },
      {
        name: "Transfers In (GW)",
        selector: (row) => row.transfersin,
        sortable: true,
        center: true,
      },
      {
        name: "Transfers Out (GW)",
        selector: (row) => row.transfersout,
        sortable: true,
        center: true,
      },
    ];

    const [teamArray, setTeamArray] = useState([]);
    const fetchData = async () => {
      var managersteam = [];
      const [bootstrap, data] = await Promise.all([
        getBootstrap(),
        getManagersTeam(27356, 28)
      ]);
  
      for (var i in data.picks) {
        for (var j in bootstrap.elements) {
          if (data.picks[i].element == bootstrap.elements[j].id) {
            managersteam.push({
              player: bootstrap.elements[j].first_name + ' ' + bootstrap.elements[j].second_name,
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
  
    return <DataTable columns={columns} data={teamArray} customStyles={customStyles} highlightOnHover />;
  }

  

  // createTheme creates a new theme named solarized that overrides the build in dark theme
createTheme('TeamList', {
    text: {
      primary: '#000000',
      
    },
    background: {
      default: '#FFFFFF',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#DDDCDC',
    },
  }, 'dark');




export default MyTeam;
