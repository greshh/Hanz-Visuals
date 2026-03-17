"use client"
import React, { useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import Footer from "../footer";
import filters from "../filters.json";
import FilterDropdown from "./filter-dropdown";
import Link from "next/link";
import { projects } from "../projects-data";

interface Filter {
  name: string;
  type: string;
  colour: string;
}

interface FiltersByCategory {
  [category: string]: string[];
}

export default function ProjectsClient() {
  const router = useRouter();

  const [filterOpen, setFilterOpen] = useState(false);

  const searchParams = useSearchParams();
  const filtersParam = searchParams.get("filters");
  const selectedFilterNames = filtersParam
  ? filtersParam.split(",")
  : [];

  // An array of objects of type Filter derived from URL
  const selectedFilters = filters.filter(f =>
    selectedFilterNames.includes((f.name).toLowerCase())
  );

  // An array that separates "media" and "sports" tags from "filters" JSON
  const filtersByCategory: FiltersByCategory = {};
  for (const filter of selectedFilters) {
    if (!filtersByCategory[filter.type]) filtersByCategory[filter.type] = [];
    filtersByCategory[filter.type].push(filter.name.toLowerCase());
  }

  // A list of projects filtered based on selectedFilters
  const projectList = projects
  .filter(project => {
    return Object.entries(filtersByCategory).every(([category, names]) => {
      return project.tags.some(tag => names.includes(tag));
    });
  })
  .sort((a, b) => (b.startDate ?? "").localeCompare(a.startDate ?? ""))

  const toggleChecked = (filter: Filter) => {
    const filterName = (filter.name).toLowerCase();
    const current = new Set(selectedFilterNames);

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
    <div className="bg-white w-full">
      <div className="flex bg-gradient-to-b from-neutral-950 to-neutral-500 w-full h-60 md:h-[90vh] justify-center items-center">
        <h1 className="text-white font-humane text-9xl md:text-[200px] lg:text-[400px] font-semibold tracking-wider">{("Projects").toUpperCase()}</h1>
      </div>
      <div className="h-12 md:h-40 relative">
        <div className="absolute top-0 left-0 w-full h-10 md:h-20 bg-gradient-to-b from-neutral-400 to-white"/>
      </div>
      <FilterDropdown selectedFilters={selectedFilters} router={router} filterOpen={filterOpen} setFilterOpen={setFilterOpen}/>
      <div className="px-10 md:px-52 mb-20 min-h-[25rem]" id="filter">
        <div className="flex flex-row gap-4 mb-10">
          <img 
            src="/projects/filter.svg" 
            alt="filter button" 
            onClick={()=>setFilterOpen(prev=>!prev)}
            className="cursor-pointer w-10 h-10"
          />
          {selectedFilters.length > 0 ? (selectedFilters.map(f=>(
            <div 
              className="flex flex-row gap-2 py-1 px-3 text-center rounded-2xl items-center text-black font-anonymouspro" 
              style={{backgroundColor: f.colour}}
              key={f.name}
            >
              <img 
                src="/projects/remove-filter.svg" 
                alt={"remove " + f.name} 
                className="w-2/3 h-2/3 cursor-pointer"
                onClick={()=>{toggleChecked(f)}}
              />
              <p className="text-center font-bold">{f.name}</p>
            </div>
          ))) : (
            <div className="flex flex-col justify-center w-fit">
              <div className="flex flex-row gap-3 md:gap-4">
                <img src="/projects/arrow.svg" alt="arrow left" className="mx-auto"/>
                <p className="text-black italic font-anonymouspro font-semibold h-fit text-base md:text-xl">select filters!</p>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-row flex-wrap gap-10 font-anonymouspro">
          {projectList.map(p=>{
            let startDate = "";
            let endDate = "";

            if (p.startDate) {
              const [startYear, startMonth, startDay] = p.startDate.split("-");
              startDate = `${startDay}/${startMonth}/${startYear}`;
            }

            if (p.endDate) {
              const [endYear, endMonth, endDay] = p.endDate.split("-");
              endDate = `${endDay}/${endMonth}/${endYear}`;
            }

            return (
              p.link.includes("projects") ? (
                <Link href={p.link} className="block w-full md:w-60" key={p.name}>
                  <div 
                    className="group flex flex-col items-end justify-end text-right h-full md:h-80 transition-shadow duration-300 hover:shadow-[0_4px_10px_rgba(0,0,0,0.5)] bg-[length:120%] bg-[position:40%_40%]" 
                    style={{ backgroundImage: p.key ? `url(/projects/cover/${p.key}.jpg)` : "none" }} 
                    key={p.name}
                  >
                    <div className="bg-[#e5e5e5e1] p-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-500">
                      <p className="text-black leading-none font-phonk text-2xl">{p.name.toUpperCase()}</p>
                      <p className="text-black text-base">{startDate && <span>{startDate}</span>}{p.endDate && <span> - {endDate}</span>}</p>
                    </div>
                  </div>
                </Link>
              ) : (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full md:w-60"
                  key={p.name}
                >
                  <div 
                    className="group flex flex-col items-end justify-end text-right h-full md:h-80 bg-[length:120%] bg-[position:40%_40%] transition-shadow duration-300 hover:shadow-[0_4px_10px_rgba(0,0,0,0.5)]" 
                    style={{ backgroundImage: p.key ? `url(/projects/cover/${p.key}.jpg)` : "none" }} 
                    key={p.name}
                  >
                    <div className="bg-[#e5e5e5e1] p-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-500">
                      <p className="text-black leading-none font-phonk text-2xl">{p.name.toUpperCase()}</p>
                      <p className="text-black text-base">{startDate && <span>{startDate}</span>}{p.endDate && <span> - {endDate}</span>}</p>
                    </div>
                  </div>
                </a>
              )
            )
          })}
        </div>
      </div>
      <Footer/>
    </div>
  )
}