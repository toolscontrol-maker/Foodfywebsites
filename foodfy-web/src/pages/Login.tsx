import React from 'react';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate('/contacto');
        } catch (error) {
            console.error("Error logging in with Google:", error);
            // Si falla por configuración (claves vacías), redirigimos igual para efecto demo
            navigate('/contacto');
        }
    };

    return (
        <div className="login-page">
            {/* Top Bar with Logo (Folk style) */}
            <div className="login-top-bar">
                <img src="/logo.png" alt="Foodfy" className="nav-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
            </div>

            <div className="login-main-container">
                <div className="login-content-box">
                    <h1 className="login-welcome">Welcome to Foodfy</h1>
                    <p className="login-tagline">El ecosistema que revoluciona tu negocio.</p>

                    <div className="login-methods">
                        <button className="google-auth-btn" onClick={handleGoogleLogin}>
                            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="" />
                            Continue with Google
                        </button>

                        <div className="login-divider">
                            <span>Email</span>
                        </div>

                        <div className="email-login-form">
                            <input
                                type="email"
                                placeholder="Type your email"
                                className="brutalist-email-input"
                            />
                            <button className="continue-email-btn" onClick={handleGoogleLogin}>
                                Continue with email
                            </button>
                        </div>
                    </div>

                    <p className="login-legal">
                        By clicking "Continue with Google" or "Continue with email" <br />
                        you agree to our <a href="#">Terms of Use</a> and <a href="#">Privacy policy</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
