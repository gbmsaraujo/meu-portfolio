import { useState } from 'react'
import Formacao from '../../components/Formacao/Formacao'
import Header from '../../components/Header/Header'
import Projetos from '../../components/Projetos/Projetos'
import Skills from '../../components/Skills/Skills'
import Sobre from '../../components/Sobre/Sobre'
import './styles.scss'

const Home = ( { contentContainer } ) =>{
    const [ changeTheme, setChangeTheme ] = useState (false)

    if (!changeTheme){
        contentContainer = 'contents-dark'
    } else {
        contentContainer = 'contents-light'
    }

    const handleTheme = () =>{
        if(!changeTheme){
            setChangeTheme(true)
        } else {
            setChangeTheme(false)
        }
    }      

    return (
        <div className= {contentContainer}>
           { changeTheme? <Header 
           headerContainer='ct-header-light'
           headerContents='ct-header__contents-light'
           btnTheme='btn-theme-light'
           eventChange={handleTheme} /> : 
           
           <Header 
           headerContainer='ct-header-dark'  
           headerContents='ct-header__contents-dark'
           btnTheme='btn-theme-dark'
           eventChange={handleTheme}/>}

           <main className='ct-main'> 
               <Sobre /> 
               <Skills />
               <Projetos />
               <Formacao />
           
           
           
           </main>
        </div>
    )
}

export default Home