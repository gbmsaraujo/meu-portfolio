import './styles.scss';
import logo from './imgs/logo.svg'
import blackWhite from './imgs/bw-change.svg'


const Header = () =>{
    return(
        <header className="ct-header">
            <div className='ct-header__contents'>
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

                <img src={blackWhite} alt="" />
            </div>
        </header>
    )
}

export default Header