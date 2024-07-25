"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RegisterRequest from "../../../../utils/RegisterRequest/RegisterRequest";
import VerifyRegister from "../../../../utils/VerifyRegister/VerifyRegister";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [age, setAge] = useState("");
    const [genre, setGenre] = useState("male");
    const avatar1 = "https://res.cloudinary.com/dytw1ig6r/image/upload/v1721905486/Arg%20vision/AvatarProfile/kf03bpoywtjibib6bpeh.jpg";
    const [avatar, setAvatar] = useState(avatar1);
    const [verificationCode, setVerificationCode] = useState("");
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const [showVerification, setShowVerification] = useState<boolean>(false);
    const [alertOp, setAlertOp] = useState("");
    const [succOp, setSuccOp ] = useState("");
    const [passwordInput, setPasswordInput] = useState("password");


    const handleChangeTypeInput = ()=>{
      if(passwordInput === "password") setPasswordInput("text")
        else setPasswordInput("password")
    }

    const redirectLogin = () => {
        setTimeout(()=>{
            window.location.href = '/login';
        }, 5000)
    };

    const alertOpTime = ()=>{
        setAlertOp("active-alert")
        setTimeout(()=>{
            setAlertOp("")
        }, 5000)
    }

    const succOpTime = ()=>{
        setSuccOp("active-alert")
        setTimeout(()=>{
            setSuccOp("")
        }, 5000)
    }

    const handleInputChange = (e: any) => {
        const value = e.target.value.slice(0, 6);
        setVerificationCode(value);
      };

    const validateForm = () => {
        if (name.trim().split(" ").length < 2) {
            alertOpTime()
            return "The name must contain at least 2 words.";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alertOpTime()
            return "The email is not valid.";
        }

        if (phone.length < 10 || phone.length > 15) {
            alertOpTime()
            return "The telephone number must be between 10 and 15 digits.";
        }

        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?¿]).{8,}$/;
        if (!passwordPattern.test(password)) {
            alertOpTime();
            return "The password must have at least 1 capital letter, 1 number, 1 special sign and at least 8 characters.";
        }

        if (password !== confirmPassword) {
            alertOpTime()
            return "Passwords must be the same";
        }

        const ageNumber = parseInt(age, 10);
        if (isNaN(ageNumber) || ageNumber < 18 || ageNumber > 100) {
            alertOpTime()
            return "Age must be between 18 and 100 years old.";
        }

        return "";
    };

    const handleRegister = async () => {
        const errorMsg = validateForm();
        if (errorMsg) {
            setError(errorMsg);
            return;
        }

        try {
            const response = await RegisterRequest(name, email, password, phone, parseInt(age, 10), genre, avatar);
            const responseData = await response

            if (response) {
                setShowVerification(true);
                succOpTime()
                setSuccess("Registration successful. enter the code sent to your email address");
                setError("");
            } else {
                alertOpTime()
                setError("Error registering user.");
                setSuccess(""); 
            }
        } catch (err: any) {
            alertOpTime()
            setError("Error registering user.");
            setSuccess("");
        }
    };

    const handleVerification = async () => {
        alertOpTime();
        if (verificationCode.length !== 6) {
            setError("The verification code must be 6 digits long.");
            return;
        }

        try {
            const response: any = await VerifyRegister(name, email, password, phone, verificationCode, parseInt(age, 10), genre, avatar);

            if (response) {
                redirectLogin()
                succOpTime()
                setSuccess(`Successful verification. redirect to login in 5 seconds.`);
                setError("");  

            } else {
                alertOpTime()
                setError("Error verifying the code. Please try again.");
                setSuccess(""); 
            }
        } catch (err: any) {
            alertOpTime()
            setError("Error verifying the code. Please try again.");
            setSuccess(""); 
        }
    };

    return (
        <section className="login">
            <div className="form-container-register">
                <div className="log-title-container">
                    <h1>Register</h1>
                    <Image width={100} height={100} alt="Image Login" src={"/responsivelogo.png"} />
                </div>
                {!showVerification ? (
                    <form className="form" onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
                            <div className={`alert-container ${alertOp}`}>
                                <div className="error-alert">
                                    <div className="alert-content">
                                    <div className="icon-container">
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="#d65563"
                                        className="icon"
                                        >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                                        ></path>
                                        </svg>
                                    </div>
                                    <div className="text-container">
                                        {error && <p className="error-message">{error}</p>}
                                        <p className="description">Form Error...</p>
                                    </div>
                                    </div>
                                </div>
                            </div>


                        <div className="register-input-flex-one">
                            <input 
                                type="text" 
                                className="input" 
                                placeholder="Name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                            />
                            <input 
                                type="email" 
                                className="input" 
                                placeholder="Email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <input 
                                type="number" 
                                className="input" 
                                placeholder="Phone" 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                            />
                        </div>
                        <div className="flex-button-container">
                            <div className="password-container-input">
                                <input
                                type={passwordInput}
                                className="input"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                />
                                <button type='button' onClick={handleChangeTypeInput}>
                                {
                                    passwordInput === "password" ?
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/></svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
                                }
                                </button>
                            </div>
                            <input 
                                type="password" 
                                className="input" 
                                placeholder="Confirm password" 
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                            />
                        </div>
                        <div className="flex-button-container">
                            <input 
                                type="number" 
                                className="input" 
                                placeholder="Age" 
                                value={age} 
                                onChange={(e) => setAge(e.target.value)} 
                            />
                            <select 
                                className="input" 
                                value={genre} 
                                onChange={(e) => setGenre(e.target.value)}
                            >
                                <option value="masculino">Male</option>
                                <option value="femenino">Female</option>
                            </select>
                        </div>
                        <div className="sep-gradient"></div>
                        <div className="flex-button-container">
                            <button type="submit" className="form-btn-register">
                                <span>Register</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
                                </svg>
                            </button>
                            <Link href={"/login"}>
                                <button type="button" className="form-btn">
                                    <span>I have an account</span>
                                </button>
                            </Link>
                        </div>
                        {success && <p style={{color: "green"}} className="success-message">{success}</p>}
                    </form>
                ) : (
                    <div className="verification-container">
                        <div className={`alert-container ${alertOp}`}>
                                <div className="error-alert">
                                    <div className="alert-content">
                                    <div className="icon-container">
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="#d65563"
                                        className="icon"
                                        >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                                        ></path>
                                        </svg>
                                    </div>
                                    <div className="text-container">
                                        {error && <p style={{color: "#d65563"}} className="error-message">{error}</p>}
                                        <p className="description">Form error..</p>
                                    </div>
                                    </div>
                                </div>
                        </div>

                        <div className={`alert-container alert-container-suc ${succOp}`}>
                            <div className="error-alert">
                                <div className="alert-content">
                                <div className="icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 448 512" fill="#6cdc62"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                </div>
                                <div className="text-container">
                                    {success && <p style={{color: "#6cdc62"}} className="error-message">{success}</p>}
                                    <p className="description">Success</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <h2>Verify your email address</h2>
                        <form className="verification-form" onSubmit={(e) => { e.preventDefault(); handleVerification(); }}>
                            <input 
                                type="number" 
                                className="input" 
                                value={verificationCode} 
                                onChange={handleInputChange}
                            />
                            <button type="submit" className="form-btn">
                                <span>Send</span>
                            </button>
                        </form>
                    </div>
                )}
            </div>


        </section>
    );
};

export default Register;
