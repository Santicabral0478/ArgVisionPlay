"use client";


export const IdProducts = ({ params }: { params : any}) => {

    return (
       <>



  <main>
    <article>


      <section className="movie-detail">
        <div className="container">

          <figure className="movie-detail-banner">

            <img src="/movie-4.png" alt="Free guy movie poster"/>

            <button className="play-btn">
              {/* <ion-icon name="play-circle-outline"></ion-icon> */}
            </button>

          </figure>

          <div className="movie-detail-content">

            <p className="detail-subtitle">New Episodes</p>

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
                {/* <ion-icon name="share-social"></ion-icon> */}

                <span>Share</span>
              </button>

              <div className="title-wrapper">
                <p className="title">Prime Video</p>

                <p className="text">Streaming Channels</p>
              </div>

              <button className="btn btn-primary">
                {/* <ion-icon name="play"></ion-icon> */}

                <span>Watch Now</span>
              </button>

            </div>

            <a href="./assets/images/movie-4.png" download className="download-btn">
              <span>Download</span>

              {/* <ion-icon name="download-outline"></ion-icon> */}
            </a>

          </div>

        </div>
      </section>






      <section className="tv-series">
        <div className="container">

          <p className="section-subtitle">Best TV Series</p>

          <h2 className="h2 section-title">World Best TV Series</h2>

          <ul className="movies-list">

            <li>
              <div className="movie-card">

                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img src="/series-1.png" alt="Moon Knight movie poster"/>
                  </figure>
                </a>

                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">Moon Knight</h3>
                  </a>

                  <time >2022</time>
                </div>

                <div className="card-meta">
                  <div className="badge badge-outline">2K</div>

                  <div className="duration">
                    {/* <ion-icon name="time-outline"></ion-icon> */}

                    <time >47 min</time>
                  </div>

                  <div className="rating">
                    {/* <ion-icon name="star"></ion-icon> */}

                    <data>8.6</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div className="movie-card">

                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img src="/series-2.png" alt="Halo movie poster"/>
                  </figure>
                </a>

                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">Halo</h3>
                  </a>

                  <time >2022</time>
                </div>

                <div className="card-meta">
                  <div className="badge badge-outline">2K</div>

                  <div className="duration">
                    {/* <ion-icon name="time-outline"></ion-icon> */}

                    <time >59 min</time>
                  </div>

                  <div className="rating">
                    {/* <ion-icon name="star"></ion-icon> */}

                    <data>8.8</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div className="movie-card">

                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img src="/series-3.png" alt="Vikings: Valhalla movie poster"/>
                  </figure>
                </a>

                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">Vikings: Valhalla</h3>
                  </a>

                  <time >2022</time>
                </div>

                <div className="card-meta">
                  <div className="badge badge-outline">2K</div>

                  <div className="duration">
                    {/* <ion-icon name="time-outline"></ion-icon> */}

                    <time >51 min</time>
                  </div>

                  <div className="rating">
                    {/* <ion-icon name="star"></ion-icon> */}

                    <data>8.3</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div className="movie-card">

                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img src="/series-4.png" alt="Money Heist movie poster"/>
                  </figure>
                </a>

                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">Money Heist</h3>
                  </a>

                  <time >2017</time>
                </div>

                <div className="card-meta">
                  <div className="badge badge-outline">4K</div>

                  <div className="duration">
                    {/* <ion-icon name="time-outline"></ion-icon> */}

                    <time >70 min</time>
                  </div>

                  <div className="rating">
                    {/* <ion-icon name="star"></ion-icon> */}

                    <data>8.3</data>
                  </div>
                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

    </article>
  </main>


       </>
    );
};

export default IdProducts;
