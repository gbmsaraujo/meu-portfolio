import "./styles.scss";
import html from "./imgs/icons/html.svg";
import css from "./imgs/icons/css.svg";
import jscript from "./imgs/icons/jscript.svg";
import nodejs from "./imgs/icons/node.svg";
import reactjs from "./imgs/icons/React.svg";
import vuejs from "./imgs/icons/vue.svg";
import sequelOrm from "./imgs/icons/Sequelize.svg";
import sqlBd from "./imgs/icons/sql.svg";

const Skills = () => {
	return (
		<section className="ct-skills-dark">
			<h2> Hard Skills </h2>

			<div className="ct-skills__front-end-dark">
				<h3>Front-End</h3>
				<div className="ct-skills__icons-dark">
					<div className="box-html">
						<img src={html} alt="ícone html" />
						<p>Html5</p>
					</div>
					<div className="box-css">
						<img src={css} alt="ícone css" />
						<p>Css3</p>
					</div>
					<div className="box-javascript">
						<img src={jscript} alt="ícone Javascript" />
						<p>JavaScript</p>
					</div>
					<div className="box-react">
						<img src={reactjs} alt="ícone React" />
						<p>React.js</p>
					</div>
					<div className="box-vue">
						<img src={vuejs} alt="ícone Vue.js" />
						<p>Vue.js</p>
					</div>
				</div>
			</div>

			<div className="ct-skills__back-end-dark">
				<h3>Back-End</h3>
				<div className="ct-skills__icons-dark">
					<div className="box-node">
						<img src={nodejs} alt="ícone Node" />
						<p>Node.js</p>
					</div>
					<div className="box-sql">
						<img src={sqlBd} alt="ícone Sql" />
						<p>MySql</p>
					</div>
					<div className="box-sequelize">
						<img src={sequelOrm} alt="ícone Sequelize" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
