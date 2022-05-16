import { useState } from "react";
import Contatos from "../../components/Contatos/Contatos";
import Formacao from "../../components/Formacao/Formacao";
import Header from "../../components/Header/Header";
import Projetos from "../../components/Projetos/Projetos";
import Skills from "../../components/Skills/Skills";
import Sobre from "../../components/Sobre/Sobre";
import "./styles.scss";
import { AiOutlineVerticalAlignTop } from "react-icons/ai";

const Home = ({ contentContainer }) => {
	const [clique, setClique] = useState(false);
	const navHeader = () => {
		setClique(false);
	};

	const scrollPage = () => {
		window.scrollY <= 100 ? setClique(false) : setClique(true);
		console.log(window.scrollY);
	};

	return (
		<div className="contents-dark" onWheel={scrollPage}>
			<Header
				cliqueSobre={() => {
					setClique(true);
				}}
				cliqueSkills={() => {
					setClique(true);
				}}
				cliqueContatos={() => {
					setClique(true);
				}}
				cliqueFormacao={() => {
					setClique(true);
				}}
				cliqueProjetos={() => {
					setClique(true);
				}}
			/>
			<main className="ct-main">
				<Sobre ctClasse="ct-sobre-dark" />
				<Skills />
				<Projetos />
				<Contatos />
				<Formacao />
				{clique ? (
					<a href="#header">
						{" "}
						<AiOutlineVerticalAlignTop
							className="top-page"
							onClick={navHeader}
						/>
					</a>
				) : (
					<AiOutlineVerticalAlignTop className="top-page-clicked" />
				)}
			</main>
		</div>
	);
};

export default Home;
