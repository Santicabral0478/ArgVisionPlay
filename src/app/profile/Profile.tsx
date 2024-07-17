import Image from "next/image";

export const Profile = ()=>{

    return(
        <section className="profile">
            <div className="container">
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

                <div className="edit-conf-log">

                </div>
            </div>
        </section>
    )
}

export default Profile;