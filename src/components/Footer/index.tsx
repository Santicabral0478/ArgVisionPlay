import Image from "next/image";
import Link from "next/link";

export const Footer = ()=>{
    return(
        <footer className="footer">

        <div className="footer-top">
          <div className="container">
    
            <div className="footer-brand-wrapper">
    
               <Image className="footer-logo-top" height={200} width={200} alt="Footer logo" src={"/slogan-logo.png"}  ></Image>            
    
              <ul className="footer-list">
    
                <li>
                  <a href="./index.html" className="footer-link">Home</a>
                </li>
    
                <li>
                  <a href="#" className="footer-link">Movie</a>
                </li>
    
                <li>
                  <a href="#" className="footer-link">TV Show</a>
                </li>
    
                <li>
                  <a href="#" className="footer-link">Web Series</a>
                </li>
    
                <li>
                  <a href="#" className="footer-link">Pricing</a>
                </li>
    
              </ul>
    
            </div>
    
            <div className="divider"></div>
    
            <div className="quicklink-wrapper">
    
              <ul className="quicklink-list">
    
                <li>
                  <a href="#" className="quicklink-link">Faq</a>
                </li>
    
                <li>
                  <a href="#" className="quicklink-link">Help center</a>
                </li>
    
                <li>
                  <a href="#" className="quicklink-link">Terms of use</a>
                </li>
    
                <li>
                  <a href="#" className="quicklink-link">Privacy</a>
                </li>

    
              </ul>
    
            </div>
    
          </div>
        </div>
    
        <div className="footer-bottom">
          <div className="container">
    
            <p className="copyright">
              &copy; 2024 <a>ArgVision</a>. All Rights Reserved. by <Link href={"https://santiagocabral.vercel.app"}>Santiago Cabral</Link>
            </p>

          </div>
        </div>
    
      </footer>
    )
}

export default Footer;