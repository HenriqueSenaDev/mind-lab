import { ReactComponent as GlassVector } from "../../assets/home/arrow.svg";
import { ReactComponent as ArrowVector } from "../../assets/home/arrow.svg";
import { ReactComponent as LessonsArrow } from "../../assets/home/lessons-arrow.svg";
import { ReactComponent as Graphic } from "../../assets/home/graphic.svg";
import planningImgCard from "../../assets/home/lesson-cards/planning.png";
import audioImgCard from "../../assets/home/lesson-cards/audio.png";
import videoImgCard from "../../assets/home/lesson-cards/video.png";
import ideaImgCard from "../../assets/home/lesson-cards/idea.png";
import codeImgCard from "../../assets/home/lesson-cards/code.png";
import ClassesBox from "./components/classes-box";
import Subtitle from "./components/subtitle";
import ModuleChart from "./components/module-chart/module-chart";
import Filter from "./components/filter";
import "./styles.css";

function Home() {
    return (
        <div className="home-page">
            <div className="home-body">
                <div className="home-input-container">
                    <input type="text" placeholder="Buscar..." />

                    <GlassVector />
                </div>

                <div className="home-watch-container">
                    <div className="home-watch-box">
                        <ArrowVector className="home-video-arrow" />

                        <span>ASSISTIR</span>
                    </div>
                </div>

                <div className="home-classes-container">
                    <span>Outras aulas</span>

                    <div className="home-classes-box-container-mobile">
                        <ClassesBox imgSrc={planningImgCard} />
                        <ClassesBox imgSrc={audioImgCard} />
                        <ClassesBox imgSrc={videoImgCard} />

                        <LessonsArrow />
                    </div>

                    <div className="home-classes-box-container-desktop">
                        <ClassesBox imgSrc={planningImgCard} />
                        <ClassesBox imgSrc={audioImgCard} />
                        <ClassesBox imgSrc={videoImgCard} />
                        <ClassesBox imgSrc={ideaImgCard} />
                        <ClassesBox imgSrc={codeImgCard} />

                        <LessonsArrow />
                    </div>
                </div>

                <div className="home-performance-section">
                    <div className="home-performance-container">
                        <span className="home-performance-title">Desempenho</span>

                        <div className="home-performance-data">
                            <div className="home-graphic">
                                <Graphic />
                            </div>

                            <div className="home-data-box">
                                <Subtitle
                                    styleBox={{ backgroundColor: "var(--primary-color)" }}
                                    styleLine={{ color: "var(--primary-color)" }}
                                    data="64 Acertos"
                                />
                                <Subtitle
                                    styleBox={{ backgroundColor: "var(--secondary-color)" }}
                                    styleLine={{ color: "var(--secondary-color)" }}
                                    data="31 Erros"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="home-modules-container">
                        <span className="home-modules-title">Módulos</span>

                        <div className="home-modules">
                            <ModuleChart
                                text="Design"
                                styleBoxBlue={{ height: "65px" }}
                            />
                            <ModuleChart
                                text="Int. Prog"
                                styleBoxBlue={{ height: "113px" }}
                            />
                            <ModuleChart
                                text="Front"
                                styleBoxBlue={{ height: "17px" }}
                            />
                            <ModuleChart
                                text="Back"
                                styleBoxBlue={{ height: "31px" }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="filter-container">
                <Filter />
            </div>
        </div>
    );
}

export default Home;