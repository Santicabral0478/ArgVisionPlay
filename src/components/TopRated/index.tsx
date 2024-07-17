export const TopRated = ()=>{


    return(
        <section className="top-rated">
        <div className="container">

          <h2 className="h2 section-title">Top Rated Movies</h2>

          <ul className="filter-list">

            <li>
              <button className="filter-btn">Movies</button>
            </li>

            <li>
              <button className="filter-btn">TV Shows</button>
            </li>

            <li>
              <button className="filter-btn">Documentary</button>
            </li>

            <li>
              <button className="filter-btn">Sports</button>
            </li>

          </ul>

          <ul className="movies-list  has-scrollbar">

            <li>
              <div className="movie-card">

                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img src="/upcoming-1.png" alt="The Northman movie poster"/>
                  </figure>
                </a>

                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">The Northman</h3>
                  </a>

                  <time>2022</time>
                </div>

                <div className="card-meta">
                  <div className="badge badge-outline">HD</div>

                  <div className="duration">
                    {/* <ion-icon name="time-outline"></ion-icon> */}

                    <time>137 min</time>
                  </div>

                  <div className="rating">
                    {/* <ion-icon name="star"></ion-icon> */}

                    <data>8.5</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div className="movie-card">

                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img src="/upcoming-1.png" alt="The Northman movie poster"/>
                  </figure>
                </a>

                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">The Northman</h3>
                  </a>

                  <time>2022</time>
                </div>

                <div className="card-meta">
                  <div className="badge badge-outline">HD</div>

                  <div className="duration">
                    {/* <ion-icon name="time-outline"></ion-icon> */}

                    <time>137 min</time>
                  </div>

                  <div className="rating">
                    {/* <ion-icon name="star"></ion-icon> */}

                    <data>8.5</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div className="movie-card">

                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img src="/upcoming-1.png" alt="The Northman movie poster"/>
                  </figure>
                </a>

                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">The Northman</h3>
                  </a>

                  <time>2022</time>
                </div>

                <div className="card-meta">
                  <div className="badge badge-outline">HD</div>

                  <div className="duration">
                    {/* <ion-icon name="time-outline"></ion-icon> */}

                    <time>137 min</time>
                  </div>

                  <div className="rating">
                    {/* <ion-icon name="star"></ion-icon> */}

                    <data>8.5</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div className="movie-card">

                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img src="/upcoming-1.png" alt="The Northman movie poster"/>
                  </figure>
                </a>

                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">The Northman</h3>
                  </a>

                  <time>2022</time>
                </div>

                <div className="card-meta">
                  <div className="badge badge-outline">HD</div>

                  <div className="duration">
                    {/* <ion-icon name="time-outline"></ion-icon> */}

                    <time>137 min</time>
                  </div>

                  <div className="rating">
                    {/* <ion-icon name="star"></ion-icon> */}

                    <data>8.5</data>
                  </div>
                </div>

              </div>
            </li>

            <li>
              <div className="movie-card">

                <a href="./movie-details.html">
                  <figure className="card-banner">
                    <img src="/upcoming-1.png" alt="The Northman movie poster"/>
                  </figure>
                </a>

                <div className="title-wrapper">
                  <a href="./movie-details.html">
                    <h3 className="card-title">The Northman</h3>
                  </a>

                  <time>2022</time>
                </div>

                <div className="card-meta">
                  <div className="badge badge-outline">HD</div>

                  <div className="duration">
                    {/* <ion-icon name="time-outline"></ion-icon> */}

                    <time>137 min</time>
                  </div>

                  <div className="rating">
                    {/* <ion-icon name="star"></ion-icon> */}

                    <data>8.5</data>
                  </div>
                </div>

              </div>
            </li>


          </ul>

        </div>
      </section>
    )
}