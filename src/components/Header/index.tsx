import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from 'react-responsive';

import LogoFMM from '../../assets/logo_fmm.png';
import './styles.css';

const HomeNavigation = ({ onMobile = false }) => (
    <nav className={onMobile ? 'menu-mobile' : 'menu'}>
        <a href='#sobre' className='menu-link'>Sobre a feira</a>
        <a href='#trilhas' className='menu-link'>Trilhas</a>
        <a href='#organizacao' className='menu-link'>Organização</a>
    </nav>
)

export function Header() {
    const location = useLocation();
    const isSmallScreen = useMediaQuery({ query: '(max-width: 960px)' });
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    function toggleMenu() {
        setIsMenuOpened(prev => !prev);
    }

    if (isSmallScreen) {
        return (
            <>
                <header className='header'>
                    <img src={LogoFMM} alt='Logo FMM' className='logo' />
                    {isMenuOpened
                        ? <IoClose className='menu-button closed' size={32} color='white' onClick={toggleMenu} />
                        : <IoMenu className='menu-button openned' size={32} color='white' onClick={toggleMenu} />}
                </header>
                {isMenuOpened && (
                    <div className='menu-mobile-container'>
                        <HomeNavigation onMobile />
                        <Link
                            className='header-button'
                            style={{ alignSelf:'stretch', width: 'auto' }}
                            to={location.pathname === '/' ? 'popular-vote' : '/'}
                        >
                            {location.pathname === '/' ? 'Voto popular' : 'Voltar'}
                        </Link>
                    </div>
                )}
            </>
        )
    }

    return (
        <header className='header'>
            <img src={LogoFMM} alt='Logo FMM' className='logo' />

            {location.pathname === '/' && <HomeNavigation />}

            <Link to={location.pathname === '/' ? 'popular-vote' : '/'} className='header-button'>
                {location.pathname === '/' ? 'Voto popular' : 'Voltar'}
            </Link>
        </header>
    )
}