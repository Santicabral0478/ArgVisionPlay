"use client";
import { useState, useEffect, useDebugValue } from "react";
import Image from "next/image";
import { useUserContext } from "@/components/context";
import SecLoader from "@/components/SecLoader";

export const IdProducts = ({ params }: { params : any}) => {
  const { token, idUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token || !idUser) {
      window.location.href = '/login';
    } else {
      setIsLoading(false);
    }
  }, [token, idUser]);

  if (isLoading) {
    return (
        <SecLoader/>
    );
  }
  
    return (
       <>

      <section style={{backgroundImage: "url(/movie-4.png)"}} className="movie-detail">
          <div className="gradient-movie-detail"></div>
        <div className="container">


          <figure className="movie-detail-banner">

            <img src="/movie-4.png" alt="Free guy movie poster"/>

          <button className="button-play-movie">
            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path></svg>
          </button>

          </figure>

          <div className="movie-detail-content">

            <h1 className="h1 detail-title">
              Free <strong>Guy</strong>
            </h1>

            <div className="meta-wrapper">

              <div className="badge-wrapper">
                <div className="badge badge-fill">PG 13</div>

                <div className="badge badge-outline">HD</div>
              </div>

              <div className="ganre-wrapper">
                <a href="#">Comedy,</a>

                <a href="#">Action,</a>

                <a href="#">Adventure,</a>

                <a href="#">Science Fiction</a>
              </div>

              <div className="date-time">

                <div>
                  {/* <ion-icon name="calendar-outline"></ion-icon> */}

                  <time >2021</time>
                </div>

                <div>
                  {/* <ion-icon name="time-outline"></ion-icon> */}

                  <time >115 min</time>
                </div>

              </div>

            </div>

            <p className="storyline">
              A bank teller called Guy realizes he is a background character in an open world video game called Free
              City that will
              soon go offline.
            </p>

            <div className="details-actions">

              <button className="share">
                <Image width={100} height={100} alt="logo star plus" src={"/starplus.png"}></Image>
              </button>

              <div className="title-wrapper">
                <p className="title">Prime Video</p>

                <p className="text">Streaming Channels</p>

              <button className="btn btn-primary">
                <span>Watch Now</span>
              </button>
              </div>


            </div>


          </div>

        </div>
      </section>

       </>
    );
};

export default IdProducts;
