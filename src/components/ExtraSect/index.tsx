import Image from "next/image";
import Link from "next/link";

export const ExtraSect = ()=>{

    
    return(
        <section className="service">
        <div className="container">

          <div className="service-banner">
            <figure className="service-image">
              <Image width={400} height={400} alt="Service image" src={"/service-1.jpg"} ></Image>
            </figure>


            <div className="service-btn-fancy">
              <Link className="fancy-service " href={"/"}>
                <span className="top-key-service"></span>
                <span className="text-service">Buy Tickets</span>
                <span className="bottom-key-1-service"></span>
                <span className="bottom-key-2-service"></span>
              </Link>
            </div>
          </div>

          <div className="service-content">

            <p className="service-subtitle">Our Servicess</p>

            <h2 className="h2 service-title">Download Your Shows Watch Offline.</h2>

            <p className="service-text">
              Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of
              passages of lorem
              Ipsum available, but the majority have suffered alteration in some injected humour.
            </p>

            <ul className="service-list">

              <li>
                <div className="service-card">

                  <div className="card-icon">
                    {/* <ion-icon name="tv"></ion-icon> */}
                  </div>

                  <div className="card-content">
                    <h3 className="h3 card-title">Enjoy on Your TV.</h3>

                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.
                    </p>
                  </div>

                </div>
              </li>

              <li>
                <div className="service-card">

                  <div className="card-icon">
                    {/* <ion-icon name="videocam"></ion-icon> */}
                  </div>

                  <div className="card-content">
                    <h3 className="h3 card-title">Watch Everywhere.</h3>

                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.
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