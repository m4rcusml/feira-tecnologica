import LogoFeira from '../../assets/logo_feira.png';
import './styles.css';

export function Footer() {
    return (
        <footer className='footer'>
            <div>
                <img src={LogoFeira} alt='Logo FMM' className='logo' />
            </div>

            <div>
                <h3>Endereço</h3>
                <p>
                    Av. Ministro Mário Andreazza, n. 916 - Distrito Industrial - Manaus (AM) | CEP: 69075-830 | CNPJ: 15.769.292/0001-07
                </p>
            </div>

            <div>
                <h3>Contatos</h3>
                <div>
                    <p>feiradetecnologia@fmm.org.br</p>
                    <p>+55 92 2129-2999</p>
                    <p>@fmatiasmachline</p>
                </div>
            </div>
        </footer>
    )
}