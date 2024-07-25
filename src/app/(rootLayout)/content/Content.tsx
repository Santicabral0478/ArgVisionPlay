"use client";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { GetAllContent } from "../../../../utils/GetAllContent/GetAllContent";
import ContentCard from "@/components/ContentCard";
import { GetContentByTitle } from "../../../../utils/GetContentByTitle/GetContentByTitle";
import SecLoader from "@/components/SecLoader"; 

export interface IContent {
  _id: string;
  title: string;
  description: string;
  year: number;
  genre: string[];
  director: string;
  duration: string;
  language: string;
  classification: string;
  poster: string;
  backImg: string;
  rate: number;
  videolink: string;
  platformcategory: string;
}

export const Content = () => {
  const [allContent, setAllContent] = useState<IContent[]>();
  const [searchReq, setSearchReq] = useState('');
  const [isHiddenSpecial, setIsHiddenSpecial] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Estado de carga
  const [noResults, setNoResults] = useState(false); // Estado de resultados

  const handleOnSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true); // Inicia el loader
    setNoResults(false); // Resetea el estado de no resultados
    try {
      const title = searchReq;
      const searchResponse = await GetContentByTitle(title);
      setAllContent(searchResponse);
      if (searchResponse.length === 0) {
        setNoResults(true); // Si no hay resultados, establece noResults a true
      }
      if (searchReq) {
        setIsHiddenSpecial("hidden-special");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // Termina el loader
    }
  }

  useEffect(() => {
    const fetchContentData = async () => {
      try {
        const data: IContent[] = await GetAllContent();
        console.log("Datos recibidos:", data);
        setAllContent(data);
      } catch (error) {
        console.error("Error al obtener los datos del perfil:", error);
      }
    };
    fetchContentData();
  }, []);

  if(!allContent){
    return(
      <SecLoader/>
    )
  }

  return (
    <>
      <div className="section-search">
        <div className="container">
          <div className="form-filter-searchset">
            <form onSubmit={handleOnSearch} className="form-searchset">
              <div className="form-control-searchset">
                <input
                  type="text"
                  placeholder="Type something"
                  className="input-searchset input-alt-searchset"
                  value={searchReq}
                  onChange={(e) => {
                    setSearchReq(e.target.value);
                  }}
                />
                <span className="input-border-searchset input-border-alt-searchset"></span>
              </div>
              <button type="submit" className="submit-searchset">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {isLoading && <SecLoader />}

      {!isLoading && noResults && (
        <section className="no-there-fav">
            <h1>{`Not found...`}</h1>
        </section>
      )}

      {!isLoading && !noResults && (
        <section className="top-search">
          <div className="container">
            <div className={`special-content-add-container ${isHiddenSpecial}`}>
              <div style={{ backgroundImage: "url(https://res.cloudinary.com/dytw1ig6r/image/upload/v1721849980/Arg%20vision/Avatar/v07227lhazbl4avspdg2.webp)" }} className="special-content">
                <div className="container-gradient"></div>
                <div className="str-container">
                  <h2>Avatar 2</h2>
                  <p>Avatar: The Way of Water</p>
                  <div className="badge-wrapper">
                    <div className="badge badge-fill">PG-13</div>
                    <div className="badge badge-outline">HD</div>
                  </div>
                  <Link href={"/content/66a062bdb3391d3be8561924"}>
                    <button>
                      View now
                    </button>
                  </Link>
                </div>
              </div>

              <div className="content-public">
                <div className="add-gradient"></div>
                <div className="str-content-public">
                  <div className="h2-p-cont">
                    <h2>All Content</h2>
                    <p>Str public</p>
                  </div>

                  <button className="button-suscribe">
                    <p>Subscribe</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <ul className="movies-list has-scrollbar">
              {allContent.map((content) => (
                <ContentCard key={content._id} content={content} />
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Content;
