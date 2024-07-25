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
                  <a href="/" className="footer-link">Home</a>
                </li>
    
                <li>
                  <a href="/content" className="footer-link">All Content</a>
                </li>
    
                <li>
                  <a href="/profile" className="footer-link">My Profile</a>
                </li>
    
                <li>
                  <a href="/favorite" className="footer-link">Favorites list</a>
                </li>

              </ul>
    
            </div>
    
            <div className="divider"></div>
  
          </div>
        </div>
    
        <div className="footer-bottom">
          <div className="container">
    
            <p className="copyright">
              &copy; 2024 <a>ArgVision</a>. All Rights Reserved. by <Link href={"https://greenstudios.vercel.app"}>Green Studios</Link>
            </p>

          </div>
        </div>
    
      </footer>
    )
}

export default Footer;