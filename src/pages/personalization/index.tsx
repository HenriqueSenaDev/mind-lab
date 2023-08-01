import { ReactComponent as PrimaryTopShape } from "../../assets/personalization/primary-top-shape.svg";
import { ReactComponent as SecondaryTopShape } from "../../assets/personalization/secondary-top-shape.svg";
import { ReactComponent as PrimaryBottomShape } from "../../assets/personalization/primary-bottom-shape.svg";
import { ReactComponent as SecondaryBottomShape } from "../../assets/personalization/secondary-bottom-shape.svg";
import { ReactComponent as CheckIcon } from "../../assets/personalization/check.svg";
import "./styles.css";
import ColorSelector from "./components/color-selector";

function Personalization() {
  return (
    <div className="personalization">
      <PrimaryTopShape className="primary-top-shape" />
      <SecondaryTopShape className="secondary-top-shape" />

      <PrimaryBottomShape className="primary-bottom-shape" />
      <SecondaryBottomShape className="secondary-bottom-shape" />

      <div className="personalization-area">
        <div className="colors-selection-card">
          <ColorSelector />
        </div>

        <div className="colors-descriptor-container">
          <div className="color-descriptor">
            <h1 className="color-title">Cor Principal</h1>

            <div className="color-definition primary-definition">
              <div className="color-sample"/>

              <div className="color-hex">
                <span>Hexadecimal</span>

                <h1>#0093CE</h1>
              </div>
            </div>
          </div>

          <div className="color-descriptor">
            <h1 className="color-title">Cor Secundária</h1>

            <div className="color-definition secondary-definition">
                <div className="color-sample"/>

                <div className="color-hex">
                  <span>Hexadecimal</span>

                  <h1>#F3701F</h1>
                </div>
            </div>
          </div>
        </div>

        <div className="palete-explanation">
          <span>Descubra uma paleta de cores única: <strong>escolha a cor principal</strong> que define a essência da plataforma, e <strong>a cor secundária será a sua contrapartida complementar</strong>. Transforme sua experiência em algo verdadeiramente excepcional!</span>
        </div>

        <div className="colors-descriptor-container">
          <div className="color-descriptor">
            <h1 className="color-title">
              Light Mode
            </h1>

            <div className="color-definition light-definition">
              <div className="color-sample"/>

              <div className="color-hex">
                <span>Hexadecimal</span>

                <h1>#0093CE</h1>
              </div>
            </div>
          </div>

          <div className="color-descriptor">
            <h1 className="color-title">
              Dark Mode
            </h1>

            <div className="color-definition dark-definition">
                <div className="color-sample"/>

                <div className="color-hex">
                  <span>Hexadecimal</span>

                  <h1>#F3701F</h1>
                </div>
            </div>
          </div>
        </div>

        <button className="theme-visualizer">
          VISUALIZAR ESCOLHA
        </button>

        <button className="apply-theme">
          <CheckIcon className="check-icon" />

          APLICAR
        </button>
      </div>
    </div>
  );
}

export default Personalization;