import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Tienda de Autos</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/categoria/Ford">Ford</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categoria/Toyota">Toyota</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categoria/Chevrolet">Chevrolet</Link>
                        </li>
                    </ul>
                    <form className="d-flex carrito" role="search">
                        <CartWidget />
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
