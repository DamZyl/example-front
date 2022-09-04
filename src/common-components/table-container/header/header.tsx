/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { HeaderGroup } from 'react-table';
import { Filter } from '../filter/filter';

interface HeaderProps<T extends {}> {
  headerGroups: HeaderGroup<T>[];
}

export const Header = <T extends {}>({ headerGroups }: HeaderProps<T>) => (
  <thead className="bg-white">
    {headerGroups.map((headerGroup) => (
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column) => {
          const { isSorted, isSortedDesc } = column;
          const sortedIcon = () => {
            if (isSorted) {
              if (isSortedDesc) {
                return (
                  <ChevronDownIcon className="h-5 w-5 flex-none rounded text-gray-400" />
                );
              }
              return (
                <ChevronUpIcon className="h-5 w-5 flex-none rounded text-gray-400" />
              );
            }
            return (
              <div
                role="presentation"
                className="h-5 w-5 flex-none rounded opacity-0"
              />
            );
          };
          const sortedText = () => {
            if (isSorted) {
              if (isSortedDesc) {
                return 'Wyłącz sortowanie';
              }
              return 'Sortuj malejąco';
            }
            return 'Sortuj rosnąco';
          };

          return (
            <th
              scope="col"
              className="text-sm font-semibold text-gray-900 align-top px-2"
              {...column.getHeaderProps()}
            >
              <div
                {...column.getSortByToggleProps({
                  title: `${sortedText()}`,
                })}
                className="flex flex-col gap-1"
              >
                <h3 className="inline-flex gap-1 whitespace-nowrap uppercase">
                  {column.render('Header')}
                  <span className="flex-shrink-0 basis-5 rounded text-gray-400">
                    {sortedIcon()}
                  </span>
                </h3>
              </div>
              <Filter column={column} />
            </th>
          );
        })}
      </tr>
    ))}
  </thead>
);
