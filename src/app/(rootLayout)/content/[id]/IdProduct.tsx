"use client";
import { useState, useEffect, useDebugValue, useRef } from "react";
import Image from "next/image";
import SecLoader from "@/components/SecLoader";
import { IContent } from "../Content";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { GetContentSpec } from "../../../../../utils/GetContentSpec/GetContentSpec";
import { useUserContext } from "@/components/context";

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
  const [controls, setControls] = useState(true)

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
        console.log("Datos recibidos:", data);
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

  if (!content || isLoading) {
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
                <div className="badge badge-fill">PG 13</div>

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
       </>
    );
};

export default IdProducts;
