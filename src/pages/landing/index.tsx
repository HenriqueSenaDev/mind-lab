import logo from "../../assets/common/logo.svg";
import showcaseWolf from "../../assets/landing/showcase-wolf.svg";
import showcaseBlueVector from "../../assets/landing/showcase-blue.svg";
import showcaseOrangeVector from "../../assets/landing/showcase-orange.svg";
import "./styles.css";

function Landing() {
  return (
    <div className="landing-container">
      <section className="showcase">
        <button className="login-button">Login</button>

        <div className="showcase-description">
          <img className="showcase-logo" src={logo} alt="logo" />

          <div className="showcase-description-text">
            <div className="showcase-blue-bar" />

            <p>
              A MindLab é pioneira na aplicação dos conceitos da neurociência,
              que oferece <span>programação e metodologia científica</span>{" "}
              especialmente desenvolvidas para adolescentes autistas. Além
              disso, <span>capacitamos professores</span> para promover a
              inclusão escolar de forma efetiva. Seja parte dessa experiência
              única e revolucionária!
            </p>
          </div>
        </div>

        <div className="showcase-images">
          <img
            className="sc-wolf-img"
            src={showcaseWolf}
            alt="wolf character"
          />

          <img
            className="sc-blue-img"
            src={showcaseBlueVector}
            alt="blue vector"
          />

          <img
            className="sc-orange-img"
            src={showcaseOrangeVector}
            alt="orange vector"
          />
        </div>

        <div className="sign-up-wrapper">
          <button className="sign-up-button">INSCREVA-SE AGORA!</button>
        </div>
      </section>
    </div>
  );
}

export default Landing;
