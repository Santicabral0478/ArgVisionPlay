"use client";
import { useEffect, useState } from "react";
import { useUserContext } from "@/components/context";
import SecLoader from "@/components/SecLoader";
import { GetProfileData } from "../../../../utils/GetProfileData/GetProfileData";

const Profile = () => {
  const { token, clearToken, idUser, clearIdUser } = useUserContext();
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<any>({});

  const handleLogOut = () => {
    clearIdUser();
    clearToken();
    window.location.href = "/login"; 
  };

  useEffect(() => {
    if (!token || !idUser) {
      window.location.href = '/login';
    } else {
      setIsLoading(false);
    }
  }, [token, idUser]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await GetProfileData(idUser, token);
        console.log(data);
        setUserData(data);
        
      } catch (error) {
        console.error("Error al obtener los datos del perfil:", error);
      }
    };

    if (idUser && token) {
      fetchUserData();
    }
  }, [idUser, token]);

  if (isLoading) {
    return <SecLoader />;
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
                <div className="edit-container">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/></svg>
                </div>
              </div>
              <div className="name-inf-container">
                <h1>{userData.name}</h1>
                <p>{userData.email}</p>
                <ul className="list-inf-container">
                  <li><p>{userData.phone}</p></li>
                  <li><p>{userData.age} años</p></li>
                  <li>
                    {
                      userData.genre === "male" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#6190ee"><path d="M289.8 46.8c3.7-9 12.5-14.8 22.2-14.8l112 0c13.3 0 24 10.7 24 24l0 112c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4L321 204.2c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c37 0 71.4 11.4 99.8 31l52.6-52.6L295 73c-6.9-6.9-8.9-17.2-5.2-26.2zM400 80s0 0 0 0s0 0 0 0s0 0 0 0zM176 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224z"/></svg>
                      )
                      :
                      (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#ec6dc8"><path d="M80 176a112 112 0 1 1 224 0A112 112 0 1 1 80 176zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1l0 34.9-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-34.9z"/></svg>
                      )
                    }
                  </li>
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
                <button onClick={handleLogOut} className="logout-button">
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
