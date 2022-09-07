/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
import React, { HTMLProps, useEffect, useRef } from 'react';
import {
  Column,
  useFilters,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
  Row,
  IdType,
} from 'react-table';
import { Body } from './body/body';
import { DefaultColumnFilter } from './default-column-filter/default-column-filter';
import { Header } from './header/header';
import { Pagination } from './pagination/pagination';

const IndeterminateCheckbox = ({
  indetermiante,
  ...rest
}: { indetermiante?: boolean } & HTMLProps<HTMLInputElement>) => {
  const ref = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (typeof indetermiante === 'boolean') {
      ref.current.indeterminate = !rest.checked && indetermiante;
    }
  }, [indetermiante, rest.checked]);

  return <input type="checkbox" ref={ref} {...rest} />;
};

export type TableContainerProps<T extends {}> = {
  columns: Column<T>[];
  data: Array<T>;
  handleSelectedRow?: (model: T) => void;
  handleSelectedAllRow?: (models: T[]) => void;
  handleRowSelection: (model: T) => void;
};

export const TableContainer = <T extends {}>({
  columns,
  data,
  handleSelectedRow,
  handleSelectedAllRow,
  handleRowSelection,
}: TableContainerProps<T>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, defaultColumn: { Filter: DefaultColumnFilter } },
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'select',
          Header: ({ toggleRowSelected, isAllPageRowSelected, page }) => {
            const modifiedOnChange = (event: {
              currentTarget: { checked: boolean | undefined };
            }) => {
              page.forEach((row) => {
                toggleRowSelected(row.id, event.currentTarget.checked);
              });
              handleSelectedAllRow?.(
                event.currentTarget.checked
                  ? page.map((row) => row.original)
                  : [],
              );
            };
            let selectedRowsInCurrentPage = 0;
            page.forEach((row) => {
              row.isSelected && selectedRowsInCurrentPage++;
            });
            const checked = isAllPageRowSelected || selectedRowsInCurrentPage;

            return (
              <div>
                <IndeterminateCheckbox
                  onChange={modifiedOnChange}
                  checked={checked}
                />
              </div>
            );
          },
          Cell: ({
            row,
            toggleRowSelected,
          }: {
            row: Row<T>;
            toggleRowSelected: (
              rowId: IdType<T>,
              set?: boolean | undefined,
            ) => void;
          }) => (
            <div>
              <IndeterminateCheckbox
                {...row.getToggleRowSelectedProps()}
                onChange={() => {
                  toggleRowSelected(row.id);
                  handleSelectedRow?.(JSON.parse(JSON.stringify(row.original)));
                }}
                checked={row.isSelected}
              />
            </div>
          ),
        },
        ...columns,
      ]);
    },
  );

  return (
    <div className="flex flex-col w-full pt-6">
      <table className="min-w-full bg-white" {...getTableProps()}>
        <Header headerGroups={headerGroups} />
        <Body
          page={page}
          getTableBodyProps={getTableBodyProps}
          prepareRow={prepareRow}
          handleRowSelection={handleRowSelection}
        />
      </table>
      <Pagination
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        pageOptions={pageOptions}
        pageCount={pageCount}
        page={page}
        gotoPage={gotoPage}
        nextPage={nextPage}
        previousPage={previousPage}
        setPageSize={setPageSize}
        amountOfElements={data.length}
        state={{ pageIndex, pageSize }}
      />
    </div>
  );
};
