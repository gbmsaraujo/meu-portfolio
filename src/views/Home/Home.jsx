import { useState } from 'react'
import Header from '../../components/Header/Header'
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
        </div>
    )
}

export default Home