"use client"

import { useState, useEffect } from "react"; 
import { GetContentByCategory } from "../../../utils/GetContentByCategory/GetContentByCategory";
import Content, { IContent } from "@/app/(rootLayout)/content/Content";
import ContentCard from "../ContentCard";
import LoaderContent from "../LoaderContent";

export const Upcoming = ()=>{
    const [contentByCategory, setContentByCategory] = useState<IContent[]>();
    const [selectedCategory, setSelected] = useState<"movie" | "serie">("movie");

    useEffect(()=>{
      const selectedData = async ()=>{
        try{
          const data = await  GetContentByCategory(selectedCategory);
          setContentByCategory(data);
        } catch(error){
          console.error();
        }
      } 
      selectedData()
    }, [selectedCategory])

    if(!contentByCategory){
      return <LoaderContent/>
    }

    return(
        <section className="upcoming">
        <div className="container">

          <div className="flex-wrapper">

            <div className="title-wrapper">
              <h2 className="h2 section-title">Upcoming Movies</h2>
            </div>

            <ul className="filter-list">

              <li>
                <button onClick={()=>{setSelected("movie")}} className="filter-btn">Movies</button>
              </li>

              <li>
                <button onClick={()=>{setSelected("serie")}} className="filter-btn">Series</button>
              </li>

            </ul>

          </div>

          <ul className="movies-list  has-scrollbar">

          {
            contentByCategory.map((content)=>{
              return(
                <ContentCard content={content}/>
              )
            })
          }

          </ul>

        </div>
      </section>
    )
}

export default Upcoming;