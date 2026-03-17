import React, { useEffect, useState, useRef } from "react";
import filters from "../filters.json";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface Filter {
  name: string;
  type: string;
  colour: string;
}

interface Props {
  selectedFilters: Filter[];
  router: AppRouterInstance;
  filterOpen: boolean;
  setFilterOpen: Function;
}

export default function FilterDropdown(props: Props) {
  const { selectedFilters, router, filterOpen, setFilterOpen } = props;

  const selectedFiltersNames = selectedFilters.map(f => (f.name).toLowerCase());

  const media: Filter[] = [];
  const sport: Filter[] = [];

  for (const filter of filters) {
    if (filter.type === "media") {
      media.push(filter);
    } else {
      sport.push(filter);
    }
  }

  const isSelected = (filterName: string) => selectedFilters.some(f => f.name === filterName);

  const toggleChecked = (filter: Filter) => {
    const filterName = (filter.name).toLowerCase();
    const current = new Set(selectedFiltersNames);

    if (current.has(filterName)) {
      current.delete(filterName);
    } else {
      current.add(filterName);
    }

    const newFilters = Array.from(current).join(",");

    if (newFilters) {
      router.replace(`?filters=${newFilters}`, { scroll: false });
    } else {
      router.replace("/projects", { scroll: false });
    }
  }

  return (
    <div className={`absolute left-0 max-w-16 min-w-fit h-fit lg:w-48 bg-white shadow-lg border-2 rounded-r-lg border-l-0 py-4 px-5 trasnform transition-transform duration-300 font-anonymouspro
    ${filterOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-3 items-center">
          <p className="font-bold font-phonk text-xl tracking-wider">{("Filters").toUpperCase()}</p>
          <img 
            src="/projects/remove-filter.svg" 
            alt={"close dropdown"} 
            className="w-5 h-5 cursor-pointer"
            onClick={()=>{setFilterOpen(false)}}
          />
        </div>
        <p className="font-phonk my-2 text-base underline tracking-wider">{("Media").toUpperCase()}</p>
        {media.map((filter)=>
          <div 
            className="flex flex-row items-center w-full box-border gap-3 cursor-pointer" 
            onClick={()=>toggleChecked(filter)} 
            key={filter.name}
          >
            <img 
              src={isSelected(filter.name) === true ? 
              "/projects/filter-dropdown/checked.svg" : 
              "/projects/filter-dropdown/unchecked.svg"} 
              alt="checkbox"
            />
            <p>{filter.name}</p>
          </div>
        )}
        <p className="font-phonk my-2 text-base underline tracking-wider">{("Sport").toUpperCase()}</p>
        {sport.map((filter)=>
          <div 
            className="flex flex-row items-center w-full box-border gap-3 cursor-pointer" 
            onClick={()=>toggleChecked(filter)} 
            key={filter.name}
          >
            <img 
              src={isSelected(filter.name) === true ? 
              "/projects/filter-dropdown/checked.svg" : 
              "/projects/filter-dropdown/unchecked.svg"} 
              alt="checkbox"
            />
            <p>{filter.name}</p>
          </div>
        )}
      </div>
    </div>
  )
}