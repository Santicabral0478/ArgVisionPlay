import Link from "next/link";

export const Cta = ()=>{


    return(
        <section className="cta">

          <div className="cta-gradient">
          </div>
        <div className="container">

          <div className="title-wrapper">
            <h2 className="cta-title">Trial start first 30 days.</h2>

            <p className="cta-text">
              Enter your email to create or restart your membership.
            </p>
          </div>
        </div>
      </section>
    )
}

export default Cta;