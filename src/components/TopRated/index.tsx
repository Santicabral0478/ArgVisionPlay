"use client"
import { GetContentByRate } from "../../../utils/GetContentByRate/GetContentByRate"
import { useState, useEffect } from "react"
import { IContent } from "@/app/(rootLayout)/content/Content"
import ContentCard from "../ContentCard"
import LoaderContent from "../LoaderContent"

export const TopRated = ()=>{
  const [contentByRate, setContentByRate] = useState<IContent[]>()

  useEffect(()=>{
    const fetchDataByRate= async ()=>{
      try{
        const dataByRate = await GetContentByRate();
        setContentByRate(dataByRate);
      } catch(error){
        console.log(error);
      }
    }

    fetchDataByRate();
  }, [])


  if(!contentByRate){
    return(
      <LoaderContent/>
    )
  }

    return(
        <section className="top-rated">
        <div className="container">

          <h2 className="h2 section-title">Top 5 rated</h2>

          <ul className="movies-list  has-scrollbar"> 
            {
              contentByRate.map((content)=>{
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