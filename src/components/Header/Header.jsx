import "./styles.scss";
import logo from "./imgs/logo.svg";
/* import blackWhite from './imgs/bw-change.svg' */

const Header = ({
	cliqueSobre,
	cliqueSkills,
	cliqueProjetos,
	cliqueContatos,
	cliqueFormacao
}) => {
	return (
		<header className="ct-header-dark" id="header">
			<div className="ct-header__contents-dark">
				<img src={logo} alt="Logo do Gabriel" />
				<nav>
					<ul>
						<li onClick={cliqueSobre}>
							{" "}
							<a href="#sobre">Sobre</a>{" "}
						</li>
						<li onClick={cliqueSkills}>
							{" "}
							<a href="#hard-skills">Skills</a>{" "}
						</li>
						<li onClick={cliqueProjetos}>
							{" "}
							<a href="#projetos">Projetos</a>{" "}
						</li>
						<li onClick={cliqueContatos}>
							{" "}
							<a href="#contatos">Contatos</a>{" "}
						</li>
						<li onClick={cliqueFormacao}>
							{" "}
							<a href="#formacao">Formação</a>{" "}
						</li>
					</ul>
				</nav>

				{/*    <button className="btn-theme-dark" onClick={eventChange}>
                    <img src={blackWhite} alt="Mudar para o tema do portfólio" />
                </button> */}
			</div>
		</header>
	);
};

export default Header;
