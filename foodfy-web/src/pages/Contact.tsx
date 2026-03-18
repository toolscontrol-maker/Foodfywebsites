import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, MessageCircle, Instagram, CheckCircle, ArrowLeft, ExternalLink } from 'lucide-react';
import './Contact.css';

type Channel = 'whatsapp' | 'telefono' | 'instagram';

const PHONE_NUMBER = '+34611171571';
const PHONE_DISPLAY = '+34 611 171 571';
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER.replace('+', '')}?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20Foodfy`;
const INSTAGRAM_URL = 'https://instagram.com/foodfy.es';

const Contact: React.FC = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [business, setBusiness] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [instagram, setInstagram] = useState('');
    const [message, setMessage] = useState('');
    const [selectedChannels, setSelectedChannels] = useState<Channel[]>([]);
    const [submitted, setSubmitted] = useState(false);

    const toggleChannel = (channel: Channel) => {
        setSelectedChannels(prev =>
            prev.includes(channel)
                ? prev.filter(c => c !== channel)
                : [...prev, channel]
        );
    };

    const isValid = name.trim() && email.trim() && selectedChannels.length > 0;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isValid) return;
        console.log({
            name, business, email, phone, instagram, message,
            preferredChannels: selectedChannels
        });
        setSubmitted(true);
    };

    return (
        <div className="contact-page">
            <div className="contact-top-bar">
                <img
                    src="/logo.png"
                    alt="Foodfy"
                    className="nav-logo"
                    onClick={() => navigate('/')}
                />
            </div>

            <div className="contact-main-container">
                <div className="contact-content-box">
                    {!submitted ? (
                        <>
                            <h1 className="contact-title">
                                Queremos conocerte
                            </h1>
                            <p className="contact-subtitle">
                                Escríbenos directamente o déjanos tus datos y nos ponemos en contacto contigo.
                            </p>

                            {/* Direct contact options */}
                            <div className="contact-direct">
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="contact-direct-btn whatsapp"
                                >
                                    <MessageCircle size={20} />
                                    <div>
                                        <span className="contact-direct-label">WhatsApp</span>
                                        <span className="contact-direct-value">{PHONE_DISPLAY}</span>
                                    </div>
                                    <ExternalLink size={16} className="contact-direct-arrow" />
                                </a>

                                <a
                                    href={`tel:${PHONE_NUMBER}`}
                                    className="contact-direct-btn phone"
                                >
                                    <Phone size={20} />
                                    <div>
                                        <span className="contact-direct-label">Llámanos</span>
                                        <span className="contact-direct-value">{PHONE_DISPLAY}</span>
                                    </div>
                                    <ExternalLink size={16} className="contact-direct-arrow" />
                                </a>

                                <a
                                    href={INSTAGRAM_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="contact-direct-btn instagram"
                                >
                                    <Instagram size={20} />
                                    <div>
                                        <span className="contact-direct-label">Instagram</span>
                                        <span className="contact-direct-value">@foodfy.es</span>
                                    </div>
                                    <ExternalLink size={16} className="contact-direct-arrow" />
                                </a>
                            </div>

                            <div className="contact-divider">
                                <span>o déjanos tus datos</span>
                            </div>

                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="contact-form-row">
                                    <div>
                                        <label className="contact-label">Nombre *</label>
                                        <input
                                            type="text"
                                            className="contact-input"
                                            placeholder="Tu nombre"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="contact-label">Negocio</label>
                                        <input
                                            type="text"
                                            className="contact-input"
                                            placeholder="Nombre del restaurante"
                                            value={business}
                                            onChange={(e) => setBusiness(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="contact-label">Email *</label>
                                    <input
                                        type="email"
                                        className="contact-input"
                                        placeholder="tu@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="contact-form-row">
                                    <div>
                                        <label className="contact-label">Teléfono</label>
                                        <input
                                            type="tel"
                                            className="contact-input"
                                            placeholder="+34 612 345 678"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="contact-label">Instagram</label>
                                        <input
                                            type="text"
                                            className="contact-input"
                                            placeholder="@tu_usuario"
                                            value={instagram}
                                            onChange={(e) => setInstagram(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="contact-label">Mensaje (opcional)</label>
                                    <textarea
                                        className="contact-textarea"
                                        placeholder="Cuéntanos sobre tu negocio o cualquier duda que tengas..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>

                                <p className="contact-preferred-label">
                                    ¿Cómo prefieres que te contactemos? *
                                </p>
                                <div className="contact-channels">
                                    <button
                                        type="button"
                                        className={`contact-channel-btn ${selectedChannels.includes('whatsapp') ? 'selected' : ''}`}
                                        onClick={() => toggleChannel('whatsapp')}
                                    >
                                        <MessageCircle size={18} />
                                        WhatsApp
                                    </button>
                                    <button
                                        type="button"
                                        className={`contact-channel-btn ${selectedChannels.includes('telefono') ? 'selected' : ''}`}
                                        onClick={() => toggleChannel('telefono')}
                                    >
                                        <Phone size={18} />
                                        Llamada
                                    </button>
                                    <button
                                        type="button"
                                        className={`contact-channel-btn ${selectedChannels.includes('instagram') ? 'selected' : ''}`}
                                        onClick={() => toggleChannel('instagram')}
                                    >
                                        <Instagram size={18} />
                                        Instagram
                                    </button>
                                </div>

                                <button
                                    type="submit"
                                    className="contact-submit-btn"
                                    disabled={!isValid}
                                >
                                    Enviar mis datos
                                </button>

                                <p className="contact-legal">
                                    Tus datos se usarán únicamente para ponernos en contacto contigo.
                                    <br />
                                    Consulta nuestra <a href="#">Política de privacidad</a>.
                                </p>
                            </form>
                        </>
                    ) : (
                        <div className="contact-success">
                            <div className="contact-success-icon">
                                <CheckCircle size={36} color="#fff" />
                            </div>
                            <h2>Hemos recibido tus datos</h2>
                            <p>
                                Nuestro equipo se pondrá en contacto contigo lo antes posible
                                {selectedChannels.includes('whatsapp') && ' por WhatsApp'}
                                {selectedChannels.includes('telefono') && ' por teléfono'}
                                {selectedChannels.includes('instagram') && ' por Instagram'}.
                            </p>
                            <button
                                className="contact-back-btn"
                                onClick={() => navigate('/')}
                            >
                                <ArrowLeft size={18} />
                                Volver al inicio
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
