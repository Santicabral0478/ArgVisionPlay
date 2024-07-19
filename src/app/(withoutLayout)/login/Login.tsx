"use client";
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { loginRequest } from '../../../../utils/LoginRequest/LoginRequest';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [alertOp, setAlertOp] = useState("");

  const alertOpTime = ()=>{
    setAlertOp("active-alert")
    setTimeout(()=>{
        setAlertOp("")
    }, 5000)
}


  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      alertOpTime()
      setError('Email no válido');
      return;
    }

    if (password.length < 6) {
      alertOpTime()
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    try {
      await loginRequest(email, password);
      window.location.href = '/';
    } catch (error: any) {
      alertOpTime()
      setError(error.message);
    }
  };

  return (
    <section className="login">
      <div className="form-container">
        <div className="log-title-container">
          <h1>Bienvenido</h1>
          <Image width={100} height={100} alt="Image Login" src={"/responsivelogo.png"}></Image>
        </div>
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
        <form className="form" onSubmit={handleLogin}>
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link href={"/"} className="link-reset-password">Olvidé mi contraseña</Link>
          <div className="sep-gradient"></div>
          <div className="flex-button-container">
            <button type="submit" className="form-btn">
              <span>Log in</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
            </button>
            <Link href={"/register"}>
                <button className="form-btn-register">
                  <span>Register</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
                </button>
            </Link>
          </div>
          <Link href={"/"}>
            <button className="form-btn-home">
              <span>Home</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Login;
