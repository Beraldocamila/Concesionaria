"use client";

import "./header.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.trim()) {
            router.push(`/productos?buscar=${search}`);
            setSearch("");
        }
    };

    return (
        <header className="header-container">
            <div className="nav-logo">
                <Link href="/">
                    <img src="/img/ConcesionariaCarsLogo.jpg" alt="Logo Concesionaria" className="logo-img" />
                </Link>
            </div>

            <nav className="nav-links">
                <a href="/">Inicio</a>
                <a href="/productos">Productos</a>
                <a href="/contacto">Contacto</a>
            </nav>

            <div className="nav-right">
                <form className="nav-search" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Buscar auto..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit" aria-label="Buscar auto">
                        <FaSearch />
                    </button>
                </form>

                <Link href="/login" className="icon-user" title="Ingresar / Registrarse">
                    <FaUser />
                </Link>

            </div>
        </header>
    );
}