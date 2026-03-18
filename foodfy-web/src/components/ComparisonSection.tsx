import React from 'react';
import { Check, X, ArrowRight } from 'lucide-react';
import './ComparisonSection.css';

const ComparisonSection: React.FC = () => {
    return (
        <section className="section" id="pricing" style={{ background: 'var(--bg-surface)', padding: '5rem 0' }}>
            <div className="container">

                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: 'var(--fs-h2)', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                        Por qué Foodfy
                    </h2>
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400, lineHeight: 1.6 }}>
                        Hasta un 70% de ahorro anual frente a soluciones independientes.
                    </p>
                </div>

                <div className="comparison-container">

                    {/* Traditional Stack */}
                    <div className="brutalist-comparison-card traditional">
                        <h3 className="comp-title" style={{ fontWeight: 600, fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
                            Herramientas sueltas
                        </h3>

                        <div className="price-tag text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
                            <div className="price-amount" style={{ color: '#ef4444', textDecoration: 'line-through', fontSize: '2.5rem' }}>&gt;600€</div>
                            <div className="price-period">/mes estimado</div>
                        </div>

                        <ul className="comp-list">
                            <li><X className="text-red" size={24} style={{ flexShrink: 0 }} /> <span>Desarrollos a medida (Agencias/Freelancers)</span></li>
                            <li><X className="text-red" size={24} style={{ flexShrink: 0 }} /> <span>Suscripciones web (Hostinger, Shopify, etc)</span></li>
                            <li><X className="text-red" size={24} style={{ flexShrink: 0 }} /> <span>Software de Facturación (Holded, Anfix)</span></li>
                            <li><X className="text-red" size={24} style={{ flexShrink: 0 }} /> <span>CRMs y Email Marketing separados</span></li>
                            <li style={{ marginTop: '0.75rem', color: '#ef4444', fontWeight: 600, fontSize: '0.9rem' }}>Caos operativo y datos desconectados</li>
                        </ul>
                    </div>

                    <div className="brutalist-comparison-vs">VS</div>

                    {/* Foodify Stack */}
                    <div className="brutalist-comparison-card foodify">
                        <div className="brutalist-absolute-top">LA SOLUCIÓN DEFINITIVA</div>

                        <h3 className="comp-title" style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                            Ecosistema Foodfy
                        </h3>

                        <div className="price-tag text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
                            <div className="price-amount" style={{ color: 'var(--text-primary)' }}>1€</div>
                            <div className="price-period" style={{ fontWeight: 500 }}>/mes <span style={{ fontWeight: 400 }}>(Primeros 3 meses)</span></div>
                        </div>

                        <ul className="comp-list">
                            <li><Check className="text-green" size={24} style={{ flexShrink: 0 }} /> <span style={{ fontWeight: 700 }}>IA 24/7 (Ventas y Atención)</span></li>
                            <li><Check className="text-green" size={24} style={{ flexShrink: 0 }} /> <span style={{ fontWeight: 700 }}>Web Corporativa + Pedidos Propios</span></li>
                            <li><Check className="text-green" size={24} style={{ flexShrink: 0 }} /> <span style={{ fontWeight: 700 }}>Facturación Automática Incluida</span></li>
                            <li><Check className="text-green" size={24} style={{ flexShrink: 0 }} /> <span style={{ fontWeight: 700 }}>App Completa (Dashboard, CRM, KDS)*</span></li>
                            <li style={{ marginTop: '0.75rem', color: '#10B981', fontWeight: 600, fontSize: '0.9rem' }}>Todo centralizado en 1 solo lugar</li>
                        </ul>

                        <div style={{ marginTop: '2rem' }}>
                            <a href="/contacto" className="btn btn-primary cta-full" style={{ padding: '0.75rem' }}>
                                Empezar por 1€ <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="brutalist-savings-banner" style={{ marginTop: '3rem' }}>
                    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                            No pagues por lo que podemos unificar
                        </h3>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 400, maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
                            Foodfy te entrega el expertise tecnológico de las grandes cadenas por una fracción del coste. Actualizaciones mensuales constantes sin fees ocultos.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ComparisonSection;
