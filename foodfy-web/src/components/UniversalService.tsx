import React from 'react';
import { Store, Utensils, Bike, ChevronRight, Rocket } from 'lucide-react';
import './UniversalService.css';

const LOCALS = [
    {
        icon: <Utensils size={32} />,
        title: 'RESTAURANTES',
        desc: 'SALA TRADICIONAL, DIGITALIZACIÓN DE CARTA Y COMANDAS EN UN SOLO ECOSISTEMA.'
    },
    {
        icon: <Store size={32} />,
        title: 'DARK KITCHENS',
        desc: 'GESTIÓN MULTIMARCA ULTRA-OPTIMIZADA DISEÑADA PARA VOLUMEN Y RAPIDEZ EXTREMA.'
    },
    {
        icon: <Bike size={32} />,
        title: 'LOCAL DELIVERY',
        desc: 'RUTAS AUTOMÁTICAS Y CONTROL DE DRIVERS SIN DEPENDER DE PLATAFORMAS EXTERNAS.'
    },
    {
        icon: <Rocket size={32} />,
        title: 'NUEVOS DELIVERYS',
        desc: 'PERSONAS QUE SUEÑAN CON UN DELIVERY LO TIENEN MÁS FÁCIL QUE NUNCA, EMPIEZA TU DELIVERY HOY MISMO.'
    }
];

const UniversalService: React.FC = () => {
    return (
        <section className="section" id="para-todos" style={{ background: '#fff', padding: '5rem 0', borderTop: '1px solid var(--border-color)' }}>
            <div className="container">

                <div className="universal-grid">
                    <div className="universal-content">
                        <h2 style={{ textAlign: 'left', fontSize: 'var(--fs-h2)', color: 'var(--text-primary)', lineHeight: 1.15 }}>
                            Un servicio para todos
                        </h2>
                        <p style={{ textAlign: 'left', marginLeft: 0, fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400, marginTop: '1rem', lineHeight: 1.6 }}>
                            Da igual si estás en la ciudad o en un pueblo, si tienes mesas o si solo cocinas para llevar.
                            La tecnología de Foodfy se adapta a tu operativa.
                        </p>

                        <div className="locals-grid" style={{ marginTop: '2rem' }}>
                            {LOCALS.map((local, idx) => (
                                <div className="brutalist-local-card" key={idx}>
                                    <div className="local-icon-wrapper">
                                        <div className="brutalist-icon">{local.icon}</div>
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.3rem' }}>{local.title}</h4>
                                        <p style={{ fontSize: '0.875rem', fontWeight: 400, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{local.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a href="#pricing" className="btn btn-primary btn-large" style={{ marginTop: '2rem' }}>
                            Elige tu plan <ChevronRight size={18} />
                        </a>
                    </div>

                    <div className="universal-visuals">
                        {/* Visual: Collage locales + multi-dispositivo Brutalist */}
                        <div className="brutalist-collage-container">
                            <div className="brutalist-collage-main">
                                <div className="brutalist-image-ph">ESPACIO PARA FOTO DE RESTAURANTE</div>
                                <div className="brutalist-status-badge">Activo Rural</div>
                            </div>
                            <div className="brutalist-collage-secondary">
                                <div className="brutalist-image-ph" style={{ background: '#27272a', color: '#fff' }}>APP DELIVERY</div>
                                <div className="brutalist-status-badge" style={{ bottom: 'auto', top: '-10px' }}>+50 pedidos/h</div>
                            </div>
                            <div className="brutalist-device-mockup">
                                <div className="brutalist-pos-screen">
                                    <h5 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem', marginBottom: '0.75rem', fontSize: '0.8rem' }}>Foodfy POS</h5>
                                    <div style={{ height: 24, width: '100%', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 4, marginBottom: 8 }}></div>
                                    <div style={{ height: 24, width: '100%', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 4, marginBottom: 8 }}></div>
                                    <div style={{ height: 24, width: '60%', background: 'var(--text-primary)', borderRadius: 4, marginBottom: 8 }}></div>
                                </div>
                                <div className="brutalist-pos-stand"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default UniversalService;
