import { ReactNode, useState } from "react";
import Menu from "../../components/menu";
import userPhoto from "../../assets/common/user-photo.png";
import { ReactComponent as Logo } from "../../assets/common/logo.svg";
import "./styles.css";

function MainLayout({ children }: { children: ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(document.body.clientWidth > 992);

    window.addEventListener('resize', () => {
        if (document.body.clientWidth > 992) setIsMenuOpen(true);
    });

    return (
        <div className="main-layout">
            {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}

            <div 
                className="main-layout-content"
                style={isMenuOpen ? { overflow: "hidden" } : undefined}
            >
                <div
                    className="mobile-header"
                    onClick={() => setIsMenuOpen(true)}
                >
                    <img className="mobile-header-user-photo" src={userPhoto} alt="user photo sample" />

                    <Logo className="mobile-header-logo" />
                </div>

                {children}
            </div>
        </div>
    );
}

export default MainLayout;