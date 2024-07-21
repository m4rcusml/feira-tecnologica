import PresentationCapa from '../../assets/presentation.png';
import LogoFeira from '../../assets/logo_feira.png';
import './styles.css';

export function LandingPage() {
    return (
        <main>
            <section className='section gradient' id='presentation'>
                <div>
                    <h1>
                        Inovação, Tecnologia <br />
                        e Empreendedorismo <span className='highlight'>em um só lugar!</span>
                    </h1>
                    <p>
                        Conheça os projetos inovadores voltados a soluções em fontes renováveis,
                        cidades inteligentes, sistemas voltados à agricultura sustentável,
                        saúde, educação e gamificação.
                    </p>
                </div>
                <div>
                    <img src={PresentationCapa} alt='' />
                </div>
            </section>

            <section className='section' id='sobre'>
                <h1 style={{ textAlign: 'center' }}>
                    Um evento <span className='highlight'>para toda a comunidade</span>
                </h1>
                <div>
                    <div>
                        <img src={LogoFeira} alt='' />
                    </div>
                    <div>
                        <p>
                            A Feira de Tecnologia e Inovação da Fundação Matias Machline é um evento aberto, sem fins lucrativos,
                            onde alunos Formandos dos cursos de Nível Médio em Técnico em Mecatrônica, Eletrônica e Informática,
                            apresentam o que há de mais inovador nas suas respectivas áreas, trazendo projetos revolucionários
                            e ideias incríveis.
                            Seja você um investidor, empreendedor ou simplesmente apaixonado por tecnologia, essa feira é imperdível.
                        </p>
                        <h3><i>O Futuro é AGORA</i></h3>
                    </div>
                </div>
            </section>

            <section className='section gradient' id='trilhas'>

            </section>
        </main>
    )
}