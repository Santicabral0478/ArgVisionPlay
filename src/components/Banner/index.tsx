"use client"

import Image from "next/image";
import Link from "next/link";

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
        <strong>Discover</strong>, Watch, Enjoy - Your Way,
        </h1>

        <div className="meta-wrapper">

          <div className="badge-wrapper">
            <div className="badge badge-fill">All Content</div>
          </div>

          <div className="ganre-wrapper">
            <a>Movies</a>

            <a>Series</a>
          </div>

        </div>

        <Link href={"/content"}>
          <button className="btn btn-primary">
            <span>View All</span>
          </button>
        </Link>

      </div>

    </div>
  </section>
  );
};

export default Banner;
