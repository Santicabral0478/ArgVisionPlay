"use client"

import Image from "next/image";

const Banner = () => {


  return (
    <section className="hero">
      <div className="back-img-container">
        <div className="space-color"></div>
        <div className="image-container-back"></div>
      </div>
    <div className="container">

      <div className="hero-content">

        <h1 className="h1 hero-title">
          Unlimited <strong>Movie</strong>, TVs Shows, & More.
        </h1>

        <div className="meta-wrapper">

          <div className="badge-wrapper">
            <div className="badge badge-fill">PG 18</div>

            <div className="badge badge-outline">HD</div>
          </div>

          <div className="ganre-wrapper">
            <a href="#">Romance,</a>

            <a href="#">Drama</a>
          </div>

        </div>

        <button className="btn btn-primary">
          {/* <ion-icon name="play"></ion-icon> */}

          <span>Watch now</span>
        </button>

      </div>

    </div>
  </section>
  );
};

export default Banner;
