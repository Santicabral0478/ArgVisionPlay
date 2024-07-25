"use client";
import { useState, useEffect, useDebugValue, useRef } from "react";
import Image from "next/image";
import SecLoader from "@/components/SecLoader";
import { IContent } from "../Content";
import "video.js/dist/video-js.css";
import { GetContentSpec } from "../../../../../utils/GetContentSpec/GetContentSpec";
import { useUserContext } from "@/components/context";
import { AddToFavorite } from "../../../../../utils/AddToFavorite/AddToFavorite";
import { TopRated } from "@/components/TopRated";
import { GetContentByRate } from "../../../../../utils/GetContentByRate/GetContentByRate";
import ContentCard from "@/components/ContentCard";

export const IdProducts = ({ params }: { params : any}) => {
  const { token, idUser } = useUserContext();
  const [content, setContent] = useState<IContent | null>(null);
  const [player, setPlayer] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<any>(null);
  const [playerOcc, setPlayerOcc] = useState("");
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [isConfirmAdd, setIsConfirmAdd] = useState(false);
  const [controls, setControls] = useState(true)
  const userId = idUser;

  const [contentByRate, setContentByRate] = useState<IContent[]>()

  useEffect(()=>{
    const fetchDataByRate= async ()=>{
      try{
        const dataByRate = await GetContentByRate();
        setContentByRate(dataByRate);
      } catch(error){
        throw error
      }
    }

    fetchDataByRate();
  }, [])

  const handlePause = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const id = setTimeout(() => {
      if (videoRef.current && videoRef.current.paused) {
        setPlayerOcc("player-occ")
        setControls(false)
      }
    }, 1000);
    setTimeoutId(id);
  };

  const AddContentToFavorite = async(movieId: string)=>{
    try{
      const confirmAdd = await AddToFavorite(userId, movieId, token);
      setIsConfirmAdd(confirmAdd);
    } catch (err){
      setIsConfirmAdd(false);
    }
  }

  const handleClosePlayer = ()=>{
    setPlayerOcc("")
    setPlayer(false)
    setControls(true)
  }

  const handleEnded = () => {
    setVideoEnded(true);
    setPlayerOcc("player-occ")
    setControls(false)
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setVideoEnded(false);
    setPlayerOcc("")
    setControls(true)
    }
  };

  useEffect(() => {
  if (!token || !idUser) {
    window.location.href = '/login';
  } else {
    setIsLoading(false);
  }
  }, [token, idUser]);

  useEffect(() => {
    const fetchContentData = async () => {
      try {
        const data: IContent = await GetContentSpec(params.id, token);
        setContent(data);
      } catch (error) {
        console.error("Error al obtener los datos del perfil:", error);
      }
    };
    fetchContentData();
  }, [params.id]);

  useEffect(() => {
    if (videoRef.current) {
      if (playerRef.current) {
        playerRef.current.dispose();
      }

      playerRef.current = player;
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [content]);

  const playerHandler = ()=>{
    if(!player)
      setPlayer(true)
    else setPlayer(false)
  }

  if (!content || isLoading || !contentByRate) {
    return <SecLoader />; 
  }

  
    return (
       <>

      { 
      !player ?
      (
      <section style={{backgroundImage: `url(${content.backImg})`}} className="movie-detail">
          <div className="gradient-movie-detail"></div>
          <div className="card-text-container">
            <div className="container">

              <figure className="movie-detail-banner">

          <Image width={300} height={500} src={content.poster} alt="poster"></Image>

          <button onClick={playerHandler} className="button-play-movie">
          <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path></svg>
          </button>

              </figure>

            <div className="movie-detail-content">

          <h1 className="h1 detail-title">
          {content.title}
          </h1>

          <div className="meta-wrapper">

            <div className="badge-wrapper">
              <div className="badge badge-fill">{content.classification}</div>

              <div className="badge badge-outline">HD</div>
            </div>

            <div className="ganre-wrapper">
              {
                content.genre.map((genre)=>(
                  <a>{genre}</a>
                ))
              }
            </div>

            <div className="date-time">

              <div>
                {/* <ion-icon name="calendar-outline"></ion-icon> */}

                <time >{content.year}</time>
              </div>

              <div>
                {/* <ion-icon name="time-outline"></ion-icon> */}

                <time>{content.duration}</time>
              </div>

            </div>

          </div>

          <p className="storyline">
            {content.description}
          </p>

          <div className="details-actions">

            <div className="title-wrapper">
              <p className="title">Favoritos</p>

              <p className="text">Agregar a tu lista de favoritos</p>

              {
                !isConfirmAdd ? (
                  <button onClick={()=>{
                    AddContentToFavorite(content._id)
                  }} className="btn btn-primary">
                    <span>Add to Favorite</span>
                    <svg width={"10px"} fill="#f0f0f0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/></svg>
                  </button>
                ):(
                  <div className="added-favorite-cont">
                    <span>Agregado</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                  </div>
                )
              }
            </div>


          </div>


            </div>

            </div>
          </div>
      </section>

      ):(

        <section
        style={{ backgroundImage: `url(${content.backImg})` }}
        className="movie-detail">

        <div className="gradient-movie-detail"></div>
        <div className="container">
          <div className="player-container">
            <video
              ref={videoRef}
              onPause={handlePause}
              onEnded={handleEnded}
              className="movie-video"
              controls={controls}
              autoPlay
              preload="auto"
            >
              <source src={content.videolink} type="video/mp4" />
            </video>
            <div className={`container-pause ${playerOcc} `}>
            
                <h2>{content.title}</h2>
                <p>{content.description}</p>
                <div className="badge-wrapper">
                <div className="badge badge-fill">{content.classification}</div>

                <div className="badge badge-outline">HD</div>
                </div>
                <button className="play-video-btn" onClick={handlePlay}>
                  Play
                </button>
                <button onClick={handleClosePlayer} className="close-video" >
                  <span>Salir</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </button>
            </div>
          </div>
        </div>
      </section>
      
      )}

      <section style={{backgroundColor: "#010610"}} className="top-rated">
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
       </>
    );
};

export default IdProducts;
