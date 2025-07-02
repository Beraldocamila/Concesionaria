import "./header.css";

export default function Header() {
    return (
        <header className="header-container">
            <div className="nav-logo">
                <img src="/img/ConcesionariaCarsLogo.jpg" alt="Logo Concesionaria" className="logo-img" />
            </div>

            <nav className="nav-links">
                <a href="/">Inicio</a>
                <a href="/productos">Productos</a>
                <a href="/contacto">Contacto</a>
                <a href="/nosotros">Nosotros</a>
            </nav>

            <div className="nav-account">
                <a href="/login" className="login-btn">Login</a>
                <a href="/register" className="register-btn">Registro</a>
            </div>
        </header>
    );
}