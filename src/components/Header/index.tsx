import { Link, useLocation } from 'react-router-dom';

import LogoFMM from '../../assets/logo_fmm.png';
import './styles.css';

export function Header() {
    const location = useLocation();

    return (
        <header className='header'>
            <img src={LogoFMM} alt='Logo FMM' className='logo' />

            {
                location.pathname === '/' &&
                <nav className='menu'>
                    <a href='#sobre'>Sobre a feira</a>
                    <a href='#trilhas'>Trilhas</a>
                    <a href='#organizacao'>Organização</a>
                </nav>
            }

            <Link to={location.pathname === '/' ? 'popular-vote' : '/'} className='header-button'>
                {location.pathname === '/' ? 'Voto popular' : 'Voltar'}
            </Link>
        </header>
    )
}