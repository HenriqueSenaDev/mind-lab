import { useNavigate } from "react-router-dom";
import { ReactComponent as BackgroundShapes } from "../../assets/courses/background.svg";
import planning from "../../assets/common/course-cards/planning.png";
import design from "../../assets/common/course-cards/design.png";
import programming from "../../assets/common/course-cards/programming.png";
import frontend from "../../assets/common/course-cards/frontend.png";
import backend from "../../assets/common/course-cards/backend.png";
import pixelArt from "../../assets/common/course-cards/pixel-art.png";
import scratch from "../../assets/common/course-cards/scratch.png";
import cientificMetodology from "../../assets/common/course-cards/cientific-metodology.png";
import "./styles.css";

interface ICourseItem {
    imgSrc: string;
    path: string;
}

function Courses() {
    const navigate = useNavigate();

    const courseItems: ICourseItem[] = [
        {   
            imgSrc: planning,
            path: "/planning"
        },
        {   
            imgSrc: design,
            path: "/design"
        },
        {   
            imgSrc: programming,
            path: "/programming"
        },
        {   
            imgSrc: frontend,
            path: "/frontend"
        },
        {   
            imgSrc: backend,
            path: "/backend"
        },
        {   
            imgSrc: pixelArt,
            path: "/pixel-art"
        },
        {   
            imgSrc: scratch,
            path: "/scratch"
        },
        {   
            imgSrc: cientificMetodology,
            path: "/cientific-metodology"
        },
    ]

    return (
        <div className="courses">
            <BackgroundShapes className="courses-background" />

            <div className="courses-blur">
                <div className="courses-wrapper">
                    {courseItems.map(({ imgSrc, path }) => (
                        <div 
                            className="course-item"
                            onClick={() => navigate(`/courses${path}`)}
                        >
                            <div className="course-item-blur" />

                            <img src={imgSrc} alt={path} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Courses;