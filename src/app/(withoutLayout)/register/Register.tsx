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
    const [genre, setGenre] = useState("masculino");
    const [avatar, setAvatar] = useState("...");
    const [verificationCode, setVerificationCode] = useState("");
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const [showVerification, setShowVerification] = useState<boolean>(false);
    const [alertOp, setAlertOp] = useState("");
    const [succOp, setSuccOp ] = useState("");

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
            return "El nombre debe contener al menos 2 palabras.";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alertOpTime()
            return "El email no es válido.";
        }

        if (phone.length < 10 || phone.length > 15) {
            alertOpTime()
            return "El teléfono debe tener entre 10 y 15 dígitos.";
        }

        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?¿]).{8,}$/;
        if (!passwordPattern.test(password)) {
            alertOpTime();
            return "La contraseña debe tener al menos 1 mayúscula, 1 número, 1 signo especial y al menos 8 caracteres.";
        }

        if (password !== confirmPassword) {
            alertOpTime()
            return "Las contraseñas no coinciden.";
        }

        const ageNumber = parseInt(age, 10);
        if (isNaN(ageNumber) || ageNumber < 18 || ageNumber > 100) {
            alertOpTime()
            return "La edad debe estar entre 18 y 100 años.";
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
                setSuccess("Registro exitoso. ingresa el código.");
                setError("");
            } else {
                alertOpTime()
                setError("Error al registrar usuario.");
                setSuccess(""); 
            }
        } catch (err: any) {
            alertOpTime()
            setError("Error al registrar usuario.");
            setSuccess("");
        }
    };

    const handleVerification = async () => {
        alertOpTime();
        if (verificationCode.length !== 6) {
            setError("El código de verificación debe tener 6 dígitos.");
            return;
        }

        try {
            const response: any = await VerifyRegister(name, email, password, phone, verificationCode, parseInt(age, 10), genre, avatar);

            if (response) {
                redirectLogin()
                setSuccess(`Verificación exitosa. redirigir a login en 5 segundos`);
                setError("");  
                setTimeout(()=>{

                }, )
            } else {
                setError("Error al verificar el código. Inténtalo de nuevo.");
                setSuccess(""); 
            }
        } catch (err: any) {
            setError("Error al verificar el código. Inténtalo de nuevo.");
            setSuccess(""); 
        }
    };

    return (
        <section className="login">
            <div className="form-container-register">
                <div className="log-title-container">
                    <h1>Regístrate</h1>
                    <Image width={100} height={100} alt="Image Login" src={"/responsivelogo.png"} />
                </div>
                {!showVerification ? (
                    <form className="form" onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
                        {/* <ul className="select-avatar-list">
                            <li className="avatar-cont"></li>
                            <li className="avatar-cont"></li>
                            <li className="avatar-cont"></li>
                            <li className="avatar-cont"></li>
                        </ul> */}


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
                                        <p className="description">Error el formulario</p>
                                    </div>
                                    </div>
                                </div>
                            </div>


                        <div className="register-input-flex-one">
                            <input 
                                type="text" 
                                className="input" 
                                placeholder="Nombre" 
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
                                placeholder="Teléfono" 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)} 
                            />
                        </div>
                        <div className="flex-button-container">
                            <input 
                                type="password" 
                                className="input" 
                                placeholder="Contraseña" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                            <input 
                                type="password" 
                                className="input" 
                                placeholder="Confirmar Contraseña" 
                                value={confirmPassword} 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                            />
                        </div>
                        <div className="flex-button-container">
                            <input 
                                type="number" 
                                className="input" 
                                placeholder="Edad" 
                                value={age} 
                                onChange={(e) => setAge(e.target.value)} 
                            />
                            <select 
                                className="input" 
                                value={genre} 
                                onChange={(e) => setGenre(e.target.value)}
                            >
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>
                            </select>
                        </div>
                        <Link className="link-reset-password" href={"/"}>Olvidé mi contraseña</Link>
                        <div className="sep-gradient"></div>
                        <div className="flex-button-container">
                            <button type="button" className="form-btn">
                                <span>Iniciar sesión</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/>
                                </svg>
                            </button>
                            <button type="submit" className="form-btn-register">
                                <span>Registrarse</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
                                </svg>
                            </button>

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
                                        <p className="description">Error el formulario</p>
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
                                        <p className="description">Operacion exitosa</p>
                                    </div>
                                    </div>
                                </div>
                        </div>
                        <h2>Verifica tu correo</h2>
                        <form className="verification-form" onSubmit={(e) => { e.preventDefault(); handleVerification(); }}>
                            <input 
                                type="number" 
                                className="input" 
                                value={verificationCode} 
                                onChange={handleInputChange}
                            />
                            <button type="submit" className="form-btn">
                                <span>Enviar</span>
                            </button>
                        </form>
                    </div>
                )}
            </div>


        </section>
    );
};

export default Register;
