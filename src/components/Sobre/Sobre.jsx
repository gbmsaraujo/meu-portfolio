import './styles.scss'
import fotoProfissional from './imgs/foto-profissional.svg'

const Sobre = () => {
    return(

            <section className="ct-sobre-dark">

                <div className='ct-sobre__description-dark'>
                    <h1>Oi, Sou Gabriel Araujo</h1>
                    <p>Estudando Desenvolvimento Web Full stack pela Digital House, 
                        além de Bootcamps pelo IGTI e cursos complementares na Udemy. 
                        Em processo de migração de carreira e buscando oportunidades de trabalho como Front-End React ou Back-End Node.js Junior. 
                        Aberto a colaborações em projetos e realizo freelancers. 
                        Para fazer um orçamento ou conversar sobre projetos, só entrar em contato.</p>
                </div>

                <div className='ct-sobre__picture-dark'>
                    <img src={fotoProfissional} alt="Foto Profissional Gabriel" />
                    <p>Deselvolvedor Web Full stack Junior</p>
                </div>

            </section>

    )

}

export default Sobre