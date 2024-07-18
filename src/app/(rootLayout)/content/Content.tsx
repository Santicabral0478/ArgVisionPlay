import Link from "next/link";

export const Content = ()=>{
    return(
        <>
            <div className="section-search">

                <div className="container">

                    <div className="form-filter-searchset">
                        <div className="form-searchset">
                            <div className="form-control-searchset">
                                <input
                                    type="text"
                                    placeholder="Type something"
                                    className="input-searchset input-alt-searchset"
                                />
                                <span className="input-border-searchset input-border-alt-searchset"></span>
                            </div>
                            <button className="submit-searchset">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                            </button>
                        </div>

                        <ul className="filter-list-searchset">
                            <li>
                                <button className="filter-btn">Movies</button>
                            </li>

                            <li>
                                <button className="filter-btn">TV Shows</button>
                            </li>

                            <li>
                                <button className="filter-btn">Anime</button>
                            </li>
                        </ul>

                    </div>

                </div>
            </div>


        <section className="top-search">
            <div className="container">

            <div className="special-content-add-container">

                <div style={{backgroundImage: "url(/movie-4.png)"}} className="special-content">
                <div className="container-gradient"></div>
                    <div className="str-container">
                        <h2>Title Movie</h2>
                        <p>description Movie</p>
                        <div className="badge-wrapper">
                            <div className="badge badge-fill">PG 18</div>

                            <div className="badge badge-outline">HD</div>
                        </div>
                        <button>View Now</button>
                    </div>
                </div>

                <div className="content-public">
                    <div className="add-gradient"></div>
                    <div className="str-content-public">
                        <div className="h2-p-cont">
                            <h2>
                                All Content
                            </h2>
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
                                stroke-width="4"
                            >
                                <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                ></path>
                            </svg>
                        </button>

                    </div>
                </div>


            </div>

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
        </>
    )
}

export default Content;