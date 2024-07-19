"use client";
import { useEffect, useState } from "react";
import { useUserContext } from "@/components/context";
import SecLoader from "@/components/SecLoader";

const Profile = () => {
  const { token, idUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token || !idUser) {
      window.location.href = '/login';
    } else {
      setIsLoading(false);
    }
  }, [token, idUser]);

  if (isLoading) {
    return (
        <SecLoader/>
    );
  }

  return (
    <section className="profile">
      <div className="container">
        <div className="edit-flex-container">
          <div className="left-container-profile">
            <div className="avatar-inf-container">
              <div className="avatar-container">
                {/* <Image src={"/"} ></Image> */}
                : )
              </div>
              <div className="name-inf-container">
                <h1>Name Lastname</h1>
                <p>email@examplo.com</p>
                <ul className="list-inf-container">
                  <li><p>+123456789</p></li>
                  <li><p>male</p></li>
                  <li><p>genre</p></li>
                </ul>
              </div>
            </div>

            <div className="edit-prof-cont">
              <button className="edit-profile-btn">
                <div>
                  <div className="pencil"></div>
                  <div className="folder">
                    <div className="top">
                      <svg viewBox="0 0 24 27">
                        <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                      </svg>
                    </div>
                    <div className="paper"></div>
                  </div>
                </div>
                Edit Profile
              </button>
            </div>
          </div>

          <div className="right-container-profile">
            <div className="change-create-cont">
              <div className="card-creator">
                <div className="header-creator">
                  <div className="div_image_v-creator">
                    <div className="image-creator">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M20 7L9.00004 18L3.99994 13" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="content-creator">
                    <span className="title-creator">Order validated</span>
                    <p className="message-creator">Thank you for your purchase. your package will be delivered within 2 days of your purchase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="inf-app-cont">
              <div className="table">
                <p>Informacion general</p>
                <ul>
                  <li>
                    <span>profile</span>
                    <span>User</span>
                  </li>
                  <div className="sep-gradient"></div>
                  <li>
                    <span>profile</span>
                    <span>User</span>
                  </li>
                  <div className="sep-gradient"></div>
                  <li>
                    <span>profile</span>
                    <span>User</span>
                  </li>
                  <div className="sep-gradient"></div>
                  <li>
                    <span>profile</span>
                    <span>User</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="inf-app-cont">
              <div className="table">
                <button className="logout-button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                  </svg>
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
