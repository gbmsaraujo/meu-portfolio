import "./styles.scss";
import { FaUniversity } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Formacao = () => {
	return (
		<section className="ct-formacao-dark">
            <h2>Formação</h2>
			<VerticalTimeline>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: "rgb(6, 16, 34)",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  rgb(6, 16, 34)",
					}}
					date="Fev. de 2018 - present"
					iconStyle={{
						background: "rgb(6, 16, 34)",
						color: "#fff",
					}}
					icon={<FaUniversity />}
				>
					<h3 className="vertical-timeline-element-title">
						Instituto Federal Do Rio De Janeiro
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Nilópolis, RJ
					</h4>
					<p className="vertical-timeline-element-p">
						Bacharelado em Química
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: "rgb(6, 16, 34)",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: "7px solid rgb(6, 16, 34)",
					}}
					date="Out. de 2021 - Mai. de 2022"
					iconStyle={{
						background: "rgb(6, 16, 34)",
						color: "#fff",
					}}
					icon={<MdComputer />}
				>
					<h3 className="vertical-timeline-element-title">
						Digital House Brasil
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						São Paulo, SP
					</h4>
					<p className="vertical-timeline-element-p">
						Desenvolvimento Web Full stack Node.js
					</p>
					<p className="vertical-timeline-element-p2">
						{" "}
						Tecnologias: Javascript, Node, Html, Css, MySQL, React,
						Expres e Sequelize.{" "}
					</p>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{
						background: "rgb(6, 16, 34)",
						color: "#fff",
					}}
					contentArrowStyle={{
						borderRight: "7px solid  rgb(6, 16, 34)",
					}}
					date="Out. de 2021 - Mai. de 2022"
					iconStyle={{
						background: "rgb(6, 16, 34)",
						color: "#fff",
					}}
					icon={<MdComputer />}
				>
					<h3 className="vertical-timeline-element-title">
						Instituto de Gestão e Tecnologia da Informação (IGTI)
					</h3>
					<h4 className="vertical-timeline-element-subtitle">
						Brasil
					</h4>
					<p className="vertical-timeline-element-p">
						Bootcamp em Desenvolvimento Front-End
					</p>
					<p className="vertical-timeline-element-p2">
						Tecnologias: Design para Front End, Angular, Vue.js,
						Introdução ao Svelte.js e Introdução aos Micro
						Front-Ends.
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</section>
	);
};

export default Formacao;
