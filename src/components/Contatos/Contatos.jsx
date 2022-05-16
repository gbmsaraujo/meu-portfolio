import "./styles.scss"
import linkedin from "./icons/linkedin.svg"
import github from "./icons/github.svg"
import whatsapp from "./icons/wpp.svg"
import instagram from "./icons/instagram.svg"
import twitter from "./icons/twitter.svg"

const Contatos = () =>{
    return(
        <section className="ct-contatos-dark" id="contatos">
            <h2>Contatos</h2>
            <p>Você pode me encontrar clicando em uma das redes sociais abaixo:</p>

            <div className="ct-contatos-dark__icons">
                <img src={linkedin} alt="Ícone do Linkedin" />
                <img src={github} alt="Ícone do Github" />
                <img src={whatsapp} alt="Ícone do Whatsapp" />
                <img src={instagram} alt="Ícone do Instagram" />
                <img src={twitter} alt="Ícone do Twitter" />
            </div>
        </section>
    )
}

export default Contatos