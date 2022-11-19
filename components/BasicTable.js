import React, { useMemo } from 'react'
import { useTable, useSortBy, useGlobalFilter, useFilters, usePagination} from 'react-table'
import V_MOCK_DATA from './V_MOCK_DATA.json'
import { COLUMNS } from './columns'
import GlobalFilter from './GlobalFilter'
import Link from "next/link";
export const BasicTable = () => {
    
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => V_MOCK_DATA, [])

   

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      nextPage,
      canNextPage,
      previousPage,
      canPreviousPage,
      pageOptions,
      prepareRow,
      state,
      setGlobalFilter,
    } = useTable(
      {
        columns,
        data,
      },

      useGlobalFilter,
      useSortBy,
      usePagination
    );

      const { globalFilter } = state
      const { pageIndex } = state
   

    return (
      <>
        <div className="user-left-container">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          <span className="user-right-container">
            <button className="add-button">
              {" "}
              <Link href="vehicle/addvehicle">Add Vehicle + </Link>
            </button>{" "}
          </span>
        </div>
        <br />
        <table id="btable" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                id="btable"
                className="btable"
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? "▼"
                          : "▲"
                        : " "}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr id="btable" {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div id="page-buttons">
            <span>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>
            </span>
          <button onClick={() => previousPage()} disabled ={!canPreviousPage}> Previous </button>
          <button onClick={() => nextPage()} disabled ={!canNextPage}> Next </button>
        </div>
      </>
    );
}

export default BasicTable;
