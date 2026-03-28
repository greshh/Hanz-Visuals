"use client"
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import Footer from "../footer";
import filters from "../filters.json";
import FilterDropdown from "./filter-dropdown";
import FileView from "./file-view";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../projects-data";

interface Filter {
  name: string;
  key: string;
  type: string;
  colour: string;
}

interface FiltersByCategory {
  [category: string]: string[];
}

export default function ProjectsClient() {
  const router = useRouter();

  const [filterOpen, setFilterOpen] = useState(false);
  const [currentFile, setCurrentFile] = useState("");

  const searchParams = useSearchParams();
  const filtersParam = searchParams.get("filters");
  const selectedFilterNames = filtersParam
  ? filtersParam.split(",")
  : [];

  // An array of objects of type Filter derived from URL
  const selectedFilters = filters.filter(f =>
    selectedFilterNames.includes((f.key).toLowerCase())
  );

  // An array that separates "media" and "sports" tags from "filters" JSON
  const filtersByCategory: FiltersByCategory = {};
  for (const filter of selectedFilters) {
    if (!filtersByCategory[filter.type]) filtersByCategory[filter.type] = [];
    filtersByCategory[filter.type].push(filter.key.toLowerCase());
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
    const filterName = (filter.key).toLowerCase();
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

  const openFile = (name: string) => {
    setCurrentFile(name);
  }

  useEffect(()=>{
  },[currentFile])

  return (
    <div>
      {currentFile != "" && <FileView name={currentFile} type={currentFile.slice(-3)} setCurrentFile={setCurrentFile}/>}
      <div className="bg-white w-full z-10">
        <div className="flex bg-gradient-to-b from-neutral-950 to-neutral-500 w-full h-60 md:h-[90vh] justify-center items-center">
          <h1 className="text-white font-humane text-9xl md:text-[200px] lg:text-[400px] font-semibold tracking-wider">{("Projects").toUpperCase()}</h1>
        </div>
        <div className="h-12 md:h-40 relative">
          <div className="absolute top-0 left-0 w-full h-10 md:h-20 bg-gradient-to-b from-neutral-300 to-white"/>
        </div>
        <FilterDropdown selectedFilters={selectedFilters} router={router} filterOpen={filterOpen} setFilterOpen={setFilterOpen}/>
        <div className="pl-10 md:pl-52 pr-10 md:pr-32 mb-20 min-h-[25rem]" id="filter">
          <div className="flex flex-row gap-4 mb-10">
            <img 
              src="/projects/filter.svg" 
              alt="filter button" 
              onClick={()=>setFilterOpen(prev=>!prev)}
              className="cursor-pointer w-10 h-10"
            />
            {selectedFilters.length > 0 ? (selectedFilters.map(f=>(
              <div 
                className="flex w-fit text-nowrap flex-row gap-2 py-1 px-3 text-center rounded-2xl items-center text-black font-anonymouspro" 
                style={{backgroundColor: f.colour}}
                key={f.key}
              >
                <img 
                  src="/projects/remove-filter.svg" 
                  alt={"remove " + f.key} 
                  className="w-2/3 h-2/3 cursor-pointer"
                  onClick={()=>{toggleChecked(f)}}
                />
                <p className="text-center font-bold">{f.name}</p>
              </div>
            ))) : (
              <div className="flex flex-col justify-center">
                <div className="flex flex-row gap-3 md:gap-4">
                  <img src="/projects/arrow.svg" alt="arrow left" className="mx-auto"/>
                  <p className="text-black italic font-anonymouspro font-semibold h-full whitespace-nowrap text-base md:text-xl">select filters!</p>
                </div>
              </div>
            )}
          </div>
          <div className="w-fit">
              <div className="flex flex-wrap gap-5 lg:gap-9 xl:gap-9 font-anonymouspro">
              {projectList.length > 0 ? (projectList.map(p=>{
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
                  p.link?.includes("projects") ? (
                    <Link href={p.link} className="block w-full md:w-60" key={p.name}>
                      <div 
                        className="relative group flex flex-col items-end justify-end text-right h-full md:h-80 object-cover transition-shadow duration-300 hover:shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
                        key={p.name}
                      >
                        <Image 
                          src={`/projects/cover/${p.key}.jpg`}
                          alt={p.name}
                          width={240}
                          height={320}
                          quality={100}
                          sizes="(min-width: 768px) 240px, 100vw"
                          className="absolute top-0 object-cover z-0 h-full md:h-80 w-full"
                        />
                        <div className="bg-gradient-to-t from-neutral-300 to-[#e5e5e5e1] w-full md:w-60 h-40 md:h-fit p-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-500 z-10 flex flex-col justify-center items-end">
                          {p.tags.includes("photos") && <div 
                            className="bg-[#E6D7C3] w-fit flex flex-row gap-2 py-1 px-3 text-center rounded-2xl text-base items-center text-black font-anonymouspro mb-2" 
                            key="photos"
                          >
                            <p className="text-center font-bold">Photos</p>
                          </div>}
                          {p.tags.includes("videos") && <div 
                            className="bg-[#C2D0DE] flex flex-row gap-2 py-1 px-3 text-center text-base rounded-2xl items-center text-black font-anonymouspro mb-2" 
                            key="videos"
                          >
                            <p className="text-center font-bold">Videos</p>
                          </div>}
                          {p.tags.includes("graphics") && <div 
                            className="bg-[#D9B3FF] flex flex-row gap-2 py-1 px-3 text-center rounded-2xl items-center text-base text-black font-anonymouspro mb-2" 
                            key="graphics"
                          >
                            <p className="text-center font-bold">Graphics</p>
                          </div>}
                          <p className="text-black leading-none font-phonk text-2xl text-ellipsis">{p.name.toUpperCase()}</p>
                          <p className="text-black text-base font-semibold">{startDate && <span>{startDate}</span>}{p.endDate && <span> - {endDate}</span>}</p>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full md:w-60"
                        key={p.name}
                      >
                        <div 
                          className="relative group flex flex-col items-end justify-end text-right h-full md:h-80 object-cover transition-shadow duration-300 hover:shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
                          key={p.name}
                        >
                          <Image 
                            src={`/projects/cover/${p.key}.jpg`}
                            alt={p.name}
                            width={240}
                            height={320}
                            quality={100}
                            sizes="(min-width: 768px) 240px, 100vw"
                            className="absolute top-0 object-cover z-0 h-full md:h-80 w-full"
                          />
                          <div className="bg-gradient-to-t from-neutral-300 to-[#e5e5e5e1] w-full md:w-60 h-40 md:h-fit p-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-500 z-10 flex flex-col justify-center items-end">
                          {p.tags.includes("photos") && <div 
                            className="bg-[#E6D7C3] w-fit flex flex-row gap-2 py-1 px-3 text-center rounded-2xl text-base items-center text-black font-anonymouspro mb-2" 
                            key="photos"
                          >
                            <p className="text-center font-bold">Photos</p>
                          </div>}
                          {p.tags.includes("videos") && <div 
                            className="bg-[#C2D0DE] flex flex-row gap-2 py-1 px-3 text-center text-base rounded-2xl items-center text-black font-anonymouspro mb-2" 
                            key="videos"
                          >
                            <p className="text-center font-bold">Videos</p>
                          </div>}
                          {p.tags.includes("graphics") && <div 
                            className="bg-[#D9B3FF] flex flex-row gap-2 py-1 px-3 text-center rounded-2xl items-center text-base text-black font-anonymouspro mb-2" 
                            key="graphics"
                          >
                            <p className="text-center font-bold">Graphics</p>
                          </div>}
                            <p className="text-black leading-none font-phonk text-2xl text-ellipsis">{p.name.toUpperCase()}</p>
                            <p className="text-black text-base font-semibold">{startDate && <span>{startDate}</span>}{p.endDate && <span> - {endDate}</span>}</p>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div 
                        className="relative group flex flex-col items-end justify-end text-right h-full md:h-80 w-full md:w-60 object-cover transition-shadow duration-300 hover:shadow-[0_4px_10px_rgba(0,0,0,0.5)] cursor-pointer"
                        key={p.name}
                        onClick={()=>{openFile(p.file ? p.file : "")}}
                      >
                        <Image 
                          src={`/projects/cover/${p.key}.jpg`}
                          alt={p.name}
                          width={240}
                          height={320}
                          quality={100}
                          sizes="(min-width: 768px) 240px, 100vw"
                          className="absolute top-0 object-cover z-0 h-full md:h-80 w-full"
                        />
                        <div className="bg-gradient-to-t from-neutral-300 to-[#e5e5e5e1] w-full md:w-60 h-40 md:h-fit p-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:transition-opacity md:duration-500 z-10 flex flex-col justify-center items-end">
                          {p.tags.includes("photos") && <div 
                            className="bg-[#E6D7C3] w-fit flex flex-row gap-2 py-1 px-3 text-center rounded-2xl text-base items-center text-black font-anonymouspro mb-2" 
                            key="photos"
                          >
                            <p className="text-center font-bold">Photos</p>
                          </div>}
                          {p.tags.includes("videos") && <div 
                            className="bg-[#C2D0DE] flex flex-row gap-2 py-1 px-3 text-center text-base rounded-2xl items-center text-black font-anonymouspro mb-2" 
                            key="videos"
                          >
                            <p className="text-center font-bold">Videos</p>
                          </div>}
                          {p.tags.includes("graphics") && <div 
                            className="bg-[#D9B3FF] flex flex-row gap-2 py-1 px-3 text-center rounded-2xl items-center text-base text-black font-anonymouspro mb-2" 
                            key="graphics"
                          >
                            <p className="text-center font-bold">Graphics</p>
                          </div>}
                          <p className="text-black leading-none font-phonk text-2xl text-ellipsis">{p.name.toUpperCase()}</p>
                          <p className="text-black text-base font-semibold">{startDate && <span>{startDate}</span>}{p.endDate && <span> - {endDate}</span>}</p>
                        </div>
                      </div>
                    )
                  )
                )
              })) : (
                <p className="italic text-center w-full text-base md:text-xl">No results found</p>
              )}
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  )
}