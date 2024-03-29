import React from 'react'
import { useTable, useSortBy } from 'react-table'

export function Table({ columns, data }) {

   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({ columns, data }, useSortBy)
   
   return (
     <table className='min-w-full divide-y divide-gray-200' {...getTableProps()} style={{ /*border: 'solid 1px blue' */}}>
       <thead className="bg-gray-50">
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                 {...column.getHeaderProps(column.getSortByToggleProps())}>
                 {column.render('Header')}
                 <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' ▼'
                          : ' ▲'
                        : ''}
                    </span>
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody className="bg-white divide-y divide-gray-200" {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td className="name px-6 py-4 whitespace-nowrap" {...cell.getCellProps()}>
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
   )
  }