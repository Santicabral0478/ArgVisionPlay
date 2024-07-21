"use client"
import React, { useState } from 'react';
import ChangePasswordRequest from '../../../../utils/ChangePasswordRequest/ChangePasswordRequest';
import VerifyChangePassword from '../../../../utils/VerifyChangePassword/VerifyChangePassword';
import Image from 'next/image';
import Link from 'next/link';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [code, setCode] = useState('');
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [alertOp, setAlertOp] = useState("");
  const [passwordInput, setPasswordInput] = useState("password");

  const handleChangeTypeInput = () => {
    if (passwordInput === "password") setPasswordInput("text");
    else setPasswordInput("password");
  };

  const handleInputChange = (e: any) => {
    const value = e.target.value.slice(0, 6);
    setCode(value);
  };

  const alertOpTime = ()=>{
    setAlertOp("active-alert")
    setTimeout(()=>{
        setAlertOp("")
    }, 5000)
  }

  const handleEmailSubmit = async (e: any) => {
    e.preventDefault();
    setError('');
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Por favor, introduce un email válido.');
      alertOpTime()
      return;
    }
    const response = await ChangePasswordRequest(email);
    if (response) {
      setStep(2);
    } else {
      setError('Error al enviar el código. Por favor, intenta nuevamente.');
      alertOpTime()
    }
  };

  const handlePasswordSubmit = (e: any) => {
    e.preventDefault();
    setError('');
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?¿]).{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      setError('La contraseña debe tener al menos una letra mayúscula, un número, un carácter especial y debe ser de al menos 8 caracteres.');
      alertOpTime()
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      alertOpTime()
      return;
    }
    setStep(3);
  };

  const handleCodeSubmit = async (e: any) => {
    e.preventDefault();
    setError('');
    const response = await VerifyChangePassword(email, code, newPassword);
    if (response) {
      // Redirige al usuario al login
      window.location.href = '/login';
    } else {
      setError('Error en la verificación. Por favor, intenta nuevamente.');
      // Reinicia el proceso en caso de error
      alertOpTime()
      setStep(1);
      setEmail('');
      setNewPassword('');
      setConfirmPassword('');
      setCode('');
    }
  };

  return (
    <>
      <section className="login">
        <div className="form-container">
          <div className="log-title-container">
            <h1>Cambiar contraseña</h1>
            <Image width={100} height={100} alt="Image Login" src={"/responsivelogo.png"} />
          </div>
          {step === 1 && (
            <form className="form" onSubmit={handleEmailSubmit}>
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
              <h2 className='gray-text'>Introduce tu Mail</h2>
              <input
                type="email"
                className="input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="form-btn">
                <span>Log in</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
              </button>
              <Link href={"/"}>
                <button className="form-btn-home">
                  <span>Home</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                </button>
              </Link>
            </form>
          )}

          {step === 2 && (
            <form className="form" onSubmit={handlePasswordSubmit}>
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
              <h2 className='gray-text'>Cambiar contraseña</h2>
              
              <div className="password-container-input">
                <input
                  type={passwordInput}
                  className="input"
                  placeholder="Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button type='button' onClick={handleChangeTypeInput}>
                  {passwordInput === "password" ?
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"/></svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480c80.8 0 145.5-36.8 192.6-80.6c42.8-38.5 74.1-90.5 88.9-126.2c3.3-7.9 3.3-16.7 0-24.6C529.1 208 497.8 156 450.9 112.6C403.5 68.8 338.8 32 288 32zM32 268.3c11.8-27.6 38.5-79.3 82.5-121.8C158 103 214.2 64 288 64c62.5 0 115.1 26.7 156.1 63.1c26.4 23.9 47.3 50.9 61.4 74.9c11.7 19.9 20.2 39.6 24.9 52c-11.8 27.6-38.5 79.3-82.5 121.8C418 409 361.8 448 288 448c-62.5 0-115.1-26.7-156.1-63.1c-26.4-23.9-47.3-50.9-61.4-74.9c-11.7-19.9-20.2-39.6-24.9-52zM288 192a64 64 0 1 0 0 128 64 64 0 1 0 0-128z"/></svg>
                  }
                </button>
              </div>
              <input
                type={passwordInput}
                className="input"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button type="submit" className="form-btn">
                <span>Continuar</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
              </button>
            </form>
          )}

          {step === 3 && (
            <form className="form" onSubmit={handleCodeSubmit}>
            
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
              <h2 className='gray-text'>Introduce el codigo</h2>
              <input
                type="text"
                className="input"
                placeholder="Verification Code"
                value={code}
                onChange={handleInputChange}
              />
              <button type="submit" className="form-btn">
                <span>Verificar</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default PasswordReset;
