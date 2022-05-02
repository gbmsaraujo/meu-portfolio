import './styles.scss';
import logo from './imgs/logo.svg'
import blackWhite from './imgs/bw-change.svg'


const Header = ({ headerContainer, headerContents, btnTheme, eventChange }) =>{


    return(
        <header className={headerContainer}>
            <div className={headerContents}>
                <img src={logo} alt="Logo do Gabriel" />
                <nav>
                    <ul>
                        <li> Sobre </li>
                        <li> Skills </li>
                        <li> Projetos </li>
                        <li> Contatos </li>
                        <li> Formação </li>
                        
                    </ul>
                </nav>
                <button className={btnTheme} onClick={eventChange}>
                    <img src={blackWhite} alt="Mudar para o tema do portfólio" />
                </button>
            
            </div>
        </header>
    )
}

export default Header