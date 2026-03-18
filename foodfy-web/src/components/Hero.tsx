import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const DYNAMIC_TEXTS = ["restaurante", "dark kitchen", "negocio"];

const Hero: React.FC = () => {
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % DYNAMIC_TEXTS.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section style={{
            paddingTop: 'clamp(7rem, 15vh, 11rem)',
            paddingBottom: 'var(--space-lg)',
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '80vh'
        }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>

                <div style={{ marginBottom: '2rem' }}>
                    <span className="badge" style={{ fontSize: '0.78rem' }}>
                        Agentes IA para hostelería
                    </span>
                </div>

                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw + 1rem, 3.75rem)',
                    lineHeight: 1.1,
                    fontWeight: 800,
                    letterSpacing: '-0.035em',
                    margin: '0 auto 1.25rem auto',
                    color: 'var(--text-primary)'
                }}>
                    El futuro de tu{' '}
                    <span style={{
                        display: 'inline-block',
                        borderBottom: '3px solid var(--text-primary)',
                        paddingBottom: '2px'
                    }}>
                        {DYNAMIC_TEXTS[textIndex]}
                    </span>
                </h1>

                <p style={{
                    fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                    fontWeight: 400,
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                    maxWidth: '540px',
                    margin: '0 auto 2.5rem auto'
                }}>
                    Un ecosistema todo-en-uno que automatiza, vende y gestiona tu negocio de hostelería con inteligencia artificial.
                </p>

                <div className="hero-ctas" style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <a href="/contacto" className="btn btn-primary btn-large">
                        Empezar con mi agente <ArrowRight size={18} />
                    </a>
                    <a href="#servicios-futuros" className="btn btn-outline btn-large">
                        Ver servicios
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
