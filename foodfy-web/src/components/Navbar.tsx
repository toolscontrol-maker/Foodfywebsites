import React from 'react';
import { Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar" style={{
            position: 'fixed',
            top: '8px',
            left: '0',
            right: '0',
            zIndex: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            pointerEvents: 'none' // permite hacer clic detrás del nav donde no haya elementos
        }}>
            <div className="navbar-capsule" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                padding: 'var(--nav-padding, 0.5rem 0.5rem 0.5rem 1.5rem)',
                borderRadius: '999px',
                width: 'fit-content',
                maxWidth: '95%',
                border: '1px solid var(--border-color)',
                gap: 'var(--nav-gap, 2.5rem)',
                pointerEvents: 'auto',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                transition: 'all 0.2s ease'
            }}>

                <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', height: '100%' }}>
                    <img src="/logo.png" alt="Foodfy" style={{
                        height: '44px',
                        width: 'auto'
                    }} />
                </a>

                <div className="instagram-wrapper" style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginLeft: 'calc(var(--nav-gap) * -0.5)',
                    marginRight: 'calc(var(--nav-gap) * -0.3)'
                }}>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="instagram-link" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', transition: 'var(--transition)' }}>
                        <Instagram size={16} />
                    </a>
                </div>

                {/* En móvil se muestran los links con gaps reducidos ajustados por CSS variables */}
                <div style={{ display: 'flex', gap: 'var(--nav-link-gap, 2rem)' }} className="nav-links">
                    <a href="#servicios-futuros" className="nav-link-custom" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, fontSize: 'var(--nav-font-size, 0.875rem)', transition: 'var(--transition)' }}>Servicios</a>
                    <a href="#pricing" className="nav-link-custom" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500, fontSize: 'var(--nav-font-size, 0.875rem)', transition: 'var(--transition)' }}>Pricing</a>
                </div>

                <div>
                    <a href="/contacto" className="btn btn-primary" style={{
                        padding: '0.5rem 1.25rem',
                        fontSize: '0.8rem',
                        borderRadius: '999px',
                        fontWeight: 600
                    }}>
                        Acceder
                    </a>
                </div>
            </div>

            <style>
                {`
                :root {
                    --nav-gap: 2.5rem;
                    --nav-link-gap: 2rem;
                    --nav-padding: 0.5rem 0.5rem 0.5rem 1.5rem;
                    --nav-font-size: 0.875rem;
                    --logo-height: 40px;
                }
                @media (max-width: 768px) {
                    :root {
                        --nav-gap: 1.25rem;
                        --nav-link-gap: 0.75rem;
                        --nav-padding: 0.35rem 0.35rem 0.35rem 1rem;
                        --nav-font-size: 0.7rem;
                        --logo-height: 28px;
                    }
                }
                @media (max-width: 480px) {
                    :root {
                        --nav-gap: 0.6rem;
                        --nav-link-gap: 0.5rem;
                        --nav-padding: 0.3rem 0.3rem 0.3rem 0.75rem;
                        --nav-font-size: 0.6rem;
                        --logo-height: 22px;
                    }
                    .navbar-capsule .btn { padding: 0.35rem 0.75rem !important; font-size: 0.65rem !important; }
                }
                @media (max-width: 360px) {
                    :root {
                        --nav-gap: 0.4rem;
                        --nav-link-gap: 0.35rem;
                        --nav-padding: 0.25rem 0.25rem 0.25rem 0.6rem;
                        --nav-font-size: 0.55rem;
                        --logo-height: 20px;
                    }
                }
                .navbar img { height: var(--logo-height) !important; }
                `}
            </style>
        </nav>
    );
};

export default Navbar;
