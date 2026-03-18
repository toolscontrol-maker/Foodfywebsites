import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
    return (
        <section className="section cta-section" id="registro" style={{ background: '#fff', padding: '5rem 0' }}>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>

                <div style={{
                    textAlign: 'center',
                    maxWidth: '720px',
                    margin: '0 auto',
                    padding: '3.5rem 2rem',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-lg)'
                }}>

                    <div className="badge" style={{ marginBottom: '1.5rem' }}>
                        Nuevas herramientas cada mes
                    </div>

                    <h2 style={{
                        fontSize: 'var(--fs-h2)',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        marginBottom: '1rem',
                        color: 'var(--text-primary)'
                    }}>
                        Empieza a transformar tu negocio hoy
                    </h2>

                    <p style={{
                        fontSize: '1rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '2rem',
                        maxWidth: '500px',
                        margin: '0 auto 2rem auto',
                        fontWeight: 400,
                        lineHeight: 1.6
                    }}>
                        Prueba los agentes IA y transforma la manera en la que vendes, interactúas y gestionas tu negocio.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <a href="/contacto" className="btn btn-primary btn-large">
                            Empezar por 1€/mes <ArrowRight size={18} />
                        </a>
                        <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 400 }}>
                            Promoción válida para los primeros 3 meses. Sin compromiso de permanencia.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CtaSection;
