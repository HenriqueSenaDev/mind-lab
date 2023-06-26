import ImageMobile from "../../assets/login/login-image-mobile.png";
import ImageDesktop from "../../assets/login/login-image-desktop.png";
import ImageWolf from "../../assets/login/wolf-image.png"
import Spot01 from "../../assets/login/orange01.png";
import Spot02 from "../../assets/login/blue02.png";
import Spot03 from "../../assets/login/orange03.png";
import Spot04 from "../../assets/login/orange04.png";
import Spot05 from "../../assets/login/blue05.png";
import "./styles.css";

function Login() {
    return (
        <div className="login-page">

            <img src={ImageWolf} alt="" className="login-image-wolf"/>

            <div className="login-box">
                <img src={ImageMobile} alt="" className="login-image-mobile" />
                <img src={ImageDesktop} alt="" className="login-image-desktop"/>
                
                <form action="">
                    <div className="login-form-usuario">
                        <label htmlFor="" className="login-label">Usuário</label> <br />
                        <input type="text" className="login-input-text" /> <br />
                    </div>
                    <div className="login-form-senha">
                        <label htmlFor="" className="login-label">Senha</label> <br />
                        <input type="text" className="login-input-text" /> <br />
                        <span className="login-esqueceu-senha">Equeceu sua senha?</span>
                    </div>
                    <div className="login-form-button">
                        <input type="button" value="ENTRAR" className="login-button" />
                        <span className="login-cadastro">Não possui cadastro? Faça agora!</span>
                    </div>
                    
                </form>
            </div>

            <div className="login-spot-mobile">
                <img src={Spot01} alt="" className="login-spot-1" />
                <img src={Spot02} alt="" className="login-spot-2" />
                <img src={Spot03} alt="" className="login-spot-3" />
                <img src={Spot04} alt="" className="login-spot-4" />
                <img src={Spot05} alt="" className="login-spot-5" />
            </div>

        </div>
    );
}

export default Login;