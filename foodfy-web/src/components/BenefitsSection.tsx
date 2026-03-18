import React from 'react';
import { Bot, Layout, CreditCard } from 'lucide-react';
import './BenefitsSection.css';

const BENEFITS = [
    {
        icon: <Bot size={48} strokeWidth={1.5} />,
        title: 'AGENTE IA',
        tool: 'IA 24/7',
        desc: 'EL AGENTE QUE NUNCA DUERME. ATIENDE WHATSAPP Y LLAMADAS SIN PERDER UN SOLO PEDIDO.'
    },
    {
        icon: <Layout size={48} strokeWidth={1.5} />,
        title: 'WEB MAKER',
        tool: 'WEB AUTOMÁTICA',
        desc: 'TU TIENDA LISTA EN SEGUNDOS. WEB OPTIMIZADA PARA VENDER MÁS Y MEJOR DESDE EL DÍA 1.'
    },
    {
        icon: <img src="/control-total-icon.png" alt="Control Total" style={{ width: '72px', height: '72px', objectFit: 'contain' }} />,
        title: 'CONTROL TOTAL',
        tool: 'DASHBOARD',
        desc: 'MÉTRICAS QUE TE HACEN CRECER. GESTIONA STOCK, PEDIDOS Y FINANZAS DESDE UN SOLO LUGAR.'
    },
    {
        icon: <CreditCard size={48} strokeWidth={1.5} />,
        title: 'TPV & COBROS',
        tool: 'OMNICANAL',
        desc: 'PUNTO DE VENTA INTEGRADO. TODO TU LOCAL FÍSICO Y ONLINE SINCRONIZADO AL INSTANTE.'
    }
];

const BenefitsSection: React.FC = () => {
    return (
        <section className="section" id="razones" style={{ background: '#fff', borderTop: '1px solid var(--border-color)' }}>
            <div className="container">

                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: 'var(--fs-h2)', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
                        Razones para elegirnos
                    </h2>
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 400, lineHeight: 1.6 }}>
                        El poder de un ecosistema unificado frente a herramientas sueltas.
                    </p>
                </div>

                <div className="benefits-grid">
                    {BENEFITS.map((benefit, idx) => (
                        <div className="brutalist-benefit-card" key={idx}>
                            <div className="brutalist-benefit-icon">
                                {benefit.icon}
                            </div>

                            <div className="brutalist-badge" style={{ marginBottom: '1rem', border: '1px solid var(--border-color)', background: 'var(--bg-surface)', color: 'var(--text-secondary)', fontWeight: 600, padding: '0.2rem 0.75rem', borderRadius: 'var(--radius-full)', display: 'inline-block', fontSize: '0.75rem' }}>
                                {benefit.tool}
                            </div>

                            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-primary)', textAlign: 'center' }}>
                                {benefit.title}
                            </h3>

                            <p style={{ fontSize: '0.875rem', fontWeight: 400, color: 'var(--text-secondary)', textAlign: 'center', lineHeight: 1.5 }}>
                                {benefit.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BenefitsSection;
