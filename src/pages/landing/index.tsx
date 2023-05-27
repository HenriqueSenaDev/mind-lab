import { ReactComponent as Logo } from "../../assets/common/logo.svg";
import { ReactComponent as WolfVector } from "../../assets/landing/showcase-wolf.svg";
import { ReactComponent as BlueVector } from "../../assets/landing/showcase-blue.svg";
import { ReactComponent as OrangeVector } from "../../assets/landing/showcase-orange.svg";
import "./styles.css";

function Landing() {
  return (
    <div className="landing-container">
      <section className="showcase">
        <button className="login-button">Login</button>

        <div className="showcase-description">
          <Logo className="showcase-logo" />

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
          <WolfVector className="sc-wolf-img" />

          <BlueVector className="sc-blue-img" />

          <OrangeVector className="sc-orange-img" />
        </div>

        <div className="sign-up-wrapper">
          <button className="sign-up-button">INSCREVA-SE AGORA!</button>
        </div>
      </section>
    </div>
  );
}

export default Landing;
