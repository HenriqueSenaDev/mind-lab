import { useState } from "react";
import { useNavigate } from "react-router-dom";
import userPhoto from "../../assets/common/user-photo.png";
import { ReactComponent as Logo} from "../../assets/common/logo.svg";
import { ReactComponent as HomeIcon } from "../../assets/menu/home.svg";
import { ReactComponent as LessonsIcon } from "../../assets/menu/lessons.svg";
import { ReactComponent as PerformanceIcon } from "../../assets/menu/performance.svg";
import { ReactComponent as MaterialsIcon } from "../../assets/menu/materials.svg";
import { ReactComponent as ForumsIcon } from "../../assets/menu/forums.svg";
import { ReactComponent as AchievementsIcon } from "../../assets/menu/achievements.svg";
import { ReactComponent as PersonalizationIcon } from "../../assets/menu/personalization.svg";
import { ReactComponent as LogOutIcon} from "../../assets/menu/log-out.svg";
import "./styles.css";

interface IProps {
    setIsMenuOpen: (isOpen: boolean) => void
}

interface INavItem {
    label: string;
    icon: JSX.Element;
    path: string;
}

function Menu({ setIsMenuOpen }: IProps) {
    const [activePage, setActivePage] = useState<string>("Home");
    const navigate = useNavigate();

    function checkOutClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (e.target === document.querySelector(".menu-wrapper")) {
            setIsMenuOpen(false);
        }
    }

    function handleItemClick({ label, path }: INavItem) {
        setActivePage(label);
        navigate(path);
    }

    const navItems: INavItem[] = [
        {
            label: "Home",
            icon: <HomeIcon />,
            path: "/home"
        },
        {
            label: "Aulas",
            icon: <LessonsIcon />,
            path: "/lessons"
        },
        {
            label: "Desempenho",
            icon: <PerformanceIcon />,
            path: "/performance"
        },
        {
            label: "Materiais",
            icon: <MaterialsIcon />,
            path: "/materials"
        },
        {
            label: "Fóruns",
            icon: <ForumsIcon />,
            path: "/forums"
        },
        {
            label: "Conquistas",
            icon: <AchievementsIcon />,
            path: "/achievements"
        },
        {
            label: "Personalizar",
            icon: <PersonalizationIcon />,
            path: "/personalization"
        },
    ]

    return (
        <div 
            className="menu-wrapper"
            onClick={checkOutClick}
        >
            <div className="menu">
                <Logo className="menu-logo" />

                <div className="menu-user-info">
                    <img src={userPhoto} alt="user photo sample" />

                    <p><span>Felícia</span> <span>Antunes</span></p>
                </div>

                <nav className="menu-navbar">
                    {navItems.map(navItem => (
                        <div 
                            key={navItem.label}
                            className={`menu-nav-item ${navItem.label === activePage ? 'menu-active' : null}`}
                            onClick={() => handleItemClick(navItem)}
                        >
                            {navItem.icon}

                            <p>{navItem.label}</p>
                        </div>
                    ))}
                </nav>

                <div className="menu-logout">
                    <LogOutIcon />

                    <span>Sair</span>
                </div>
            </div>
        </div>
    );
}

export default Menu;