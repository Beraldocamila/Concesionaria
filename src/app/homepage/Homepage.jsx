"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./homepage.css";

export default function HomePage() {
    const router = useRouter();
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setFadeIn(true);
    }, []);

    const handleGoToProducts = () => {
        router.push("/productos");
    };

    return (
        <main className={`homepage-container ${fadeIn ? "fade-in" : ""}`}>
            <h1 className="homepage-title">Bienvenidos a Cars</h1>
            <div className="line"></div>
            <p className="homepage-subtitle">
                <span className="text-bg">Tu lugar confiable para encontrar el auto ideal en Argentina.</span>
            </p>

            <ul className="list">
                <li><FaCheckCircle className="icon" /> Asesoramiento personalizado</li>
                <li><FaCheckCircle className="icon" /> Autos de calidad y garantía</li>
                <li><FaCheckCircle className="icon" /> Financiamiento flexible</li>
            </ul>

            <button className="btn-primary" onClick={handleGoToProducts}>
                Ver Autos
            </button>

            <p className="contact">
                <span className="text-bg">
                    ¿Tenés dudas? <Link href="/contacto">Contactanos</Link> y te ayudamos a elegir.
                </span>
            </p>
        </main>
    );
}