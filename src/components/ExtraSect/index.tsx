"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const ExtraSect = ()=>{

  const back1 = "/service-1.jpg"
  const back2 = "/service-2.jpg"
  const back3 = "/service-3.jpg"

  const [actImage, setActImage] = useState(back1);

  const handleOnchangeBackTwo = ()=>{
    setActImage(back2);
    setTimeout(()=>{
      setActImage(back1);
    }, 8000)
  }

  const handleOnchangeBackTree = ()=>{
    setActImage(back3);
    setTimeout(()=>{
      setActImage(back1);
    }, 8000)
  }
    
    return(
        <section className="service">
        <div className="container">

          <div className="service-banner">
            <figure className="service-image">
              <Image width={400} height={400} alt="Service image" src={actImage} ></Image>
            </figure>


            <div className="service-btn-fancy">
              <Link className="fancy-service " href={"/content"}>
                <span className="top-key-service"></span>
                <span className="text-service">Discover All</span>
                <span className="bottom-key-1-service"></span>
                <span className="bottom-key-2-service"></span>
              </Link>
            </div>
          </div>

          <div className="service-content">

            <h2 className="h2 service-title">Your Entertainment, Our Top Priority</h2>

            <p className="service-text">
            Experience Arg Vision Play: Download content freely, register quickly, and create your own media. Share it privately or with our community. Enjoy a personalized, high-quality streaming experience. Your Vision, Your Entertainment.
            </p>

            <ul className="service-list">

              <li>
                <div className="service-card">

                  <div className="card-icon">
                  </div>

                  <div onClick={handleOnchangeBackTwo} className="card-content">
                    <h3 className="h3 card-title">Available on all devices</h3>

                    <p className="card-text">
                    Access our platform from any device and enjoy seamless content wherever you are.
                    </p>
                  </div>

                </div>
              </li>

              <li>
                <div className="service-card">

                  <div className="card-icon">
                  </div>

                  <div onClick={handleOnchangeBackTree} className="card-content">
                    <h3 className="h3 card-title">Available everywhere</h3>

                    <p className="card-text">
                      No geographical limits—enjoy your content wherever you are.
                    </p>
                  </div>

                </div>
              </li>

            </ul>

          </div>

        </div>
      </section>
    )
}

export default ExtraSect;