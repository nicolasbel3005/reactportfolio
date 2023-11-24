import { Link, useLocation } from 'react-router-dom';

function Header() {
    const currentPage = useLocation().pathname;
    
    return (
        <header>
            <h1>NICO</h1>
        </header>
    )
}

export default Header;