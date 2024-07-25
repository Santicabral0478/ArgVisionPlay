"use client"
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css"
import { useEffect, useRef, useState } from "react";

export const Header = ()=>{
  const [isOcc, setIsOcc] : any = useState("");
  const [isActive, setIsActive]: any = useState("");

  const scrollTimeout: any = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
        setIsOcc("header-occ");


      lastScrollY.current = currentScrollY;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setIsOcc("")
      }, 1000); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const handleOnClickActive = ()=>{
    if(isActive === "active"){
        setIsActive("")
        document.body.style.overflow = 'auto';
      }
      else {
        setIsActive("active")
        document.body.style.overflow = 'hidden';
      }
  }

  const handleOnCloseSideNavbar = ()=>{
    setIsActive("");
    document.body.style.overflow = 'auto';
  }

    return(
        <header className={`header ${isOcc} header-${isActive}`} data-header>
        <div className="container">
    
          <div onClick={handleOnCloseSideNavbar} className={`overlay ${isActive}`} data-overlay></div>
    
          <Link className="width-logo" href={"/"}>
            <Image className="header-logo" alt="Logo" width={300} height={100} src={"/logoheaderwidth.png"}></Image>
          </Link>

          <Link className="responsive-logo" href={"/"}>
            <Image className="header-logo" alt="Logo" width={300} height={100} src={"/responsivelogo.png"}></Image>
          </Link>
    
          <div className="header-actions">
    
            <Link href={"/content"}>
              <button onClick={handleOnCloseSideNavbar} className="search-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
              </button>
            </Link>
    
            <Link onClick={handleOnCloseSideNavbar} className={styles.button} href="/content">
              <span className={styles.button__iconwrapper}>
                  <svg width="10" className={styles.button__iconsvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15">
                      <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                  </svg>
                  
                  <svg className={`${styles.button__iconsvg}  ${styles.button__iconsvgcopy}`} xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 14 15">
                      <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                  </svg>
              </span>
              Explore All
            </Link>
    
          </div>
    
          <button onClick={handleOnClickActive} className="menu-open-btn" data-menu-open-btn>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
          </button>
    
          <nav className={`navbar ${isActive}`} data-navbar>
    
            <div className="navbar-top">
    
              <Link onClick={handleOnCloseSideNavbar} className="navbar-top-logo" href={"/"}>
                <Image width={200} height={200} alt="Logo Arg Media play" src={"/loaderlogo.png"} ></Image>
              </Link>
    
              <button onClick={handleOnCloseSideNavbar} className="menu-close-btn" data-menu-close-btn>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
              </button>
    
            </div>

            
            <div className="actions-navbar-side">
            <Link onClick={handleOnCloseSideNavbar} href={"/content"}>
              <button className="search-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
              </button>
            </Link>
      
              <Link onClick={handleOnCloseSideNavbar} className={styles.button} href="/content">
                <span className={styles.button__iconwrapper}>
                    <svg width="10" className={styles.button__iconsvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15">
                        <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                    </svg>
                    
                    <svg className={`${styles.button__iconsvg}  ${styles.button__iconsvgcopy}`} xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 14 15">
                        <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                    </svg>
                </span>
                Explore All
              </Link>
            </div>
    
            <ul className="navbar-list">
    
              <li>
                 <Link onClick={handleOnCloseSideNavbar} className="navbar-link" href={"/"}>
                    Home
                 </Link>
              </li>
    
              <li>
                 <Link onClick={handleOnCloseSideNavbar} className="navbar-link" href={"/profile"}>
                  Profile
                 </Link>
              </li>
    
              <li>
                <Link onClick={handleOnCloseSideNavbar} className="navbar-link" href={"/favorite"}>
                  Favorite
                </Link>
              </li>
    
            </ul>

    
          </nav>
    
        </div>
      </header>
    )
}

export default Header;