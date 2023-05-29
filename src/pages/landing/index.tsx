import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/common/logo.svg";
import { ReactComponent as WolfVector } from "../../assets/landing/showcase-wolf.svg";
import { ReactComponent as BlueVector } from "../../assets/landing/showcase-blue.svg";
import { ReactComponent as OrangeVector } from "../../assets/landing/showcase-orange.svg";
import { ReactComponent as WolfCoursesVector } from "../../assets/landing/our-courses.svg";
import { ReactComponent as CoursesLabelVector } from "../../assets/landing/our-courses-label.svg";
import { ReactComponent as CoursesArrow } from "../../assets/landing/courses-arrow.svg";
import planning from "../../assets/landing/courses/planning.png";
import design from "../../assets/landing/courses/design.png";
import programming from "../../assets/landing/courses/programming.png";
import frontend from "../../assets/landing/courses/frontend.png";
import backend from "../../assets/landing/courses/backend.png";
import pixelArt from "../../assets/landing/courses/pixel-art.png";
import scratch from "../../assets/landing/courses/scratch.png";
import cientificMetodology from "../../assets/landing/courses/cientific-metodology.png";
import CourseCard from "./components/course-card";
import "./styles.css";

function Landing() {
  const [isDesktop, setIsDesktop] = useState<boolean>(
    document.body.clientWidth > 992
  );
  const [courseCardIndex, setCourseCardIndex] = useState<number>(0);

  const coursesCards = [
    <CourseCard imgSrc={planning} moduleTitle="Planejamento" />,
    <CourseCard imgSrc={design} moduleTitle="Design" />,
    <CourseCard imgSrc={programming} moduleTitle="Int. à Programação" />,
    <CourseCard imgSrc={frontend} moduleTitle="Front-End" />,
    <CourseCard imgSrc={backend} moduleTitle="Back-End" />,
    <CourseCard imgSrc={pixelArt} moduleTitle="Pixel Art" />,
    <CourseCard imgSrc={scratch} moduleTitle="Scratch" />,
    <CourseCard
      imgSrc={cientificMetodology}
      moduleTitle="Metodologia Científica"
    />,
  ];

  window.addEventListener("resize", () =>
    setIsDesktop(document.body.clientWidth > 992)
  );

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

      <section className="our-courses">
        <WolfCoursesVector className="courses-wolf-img" />

        <div className="courses-area">
          <CoursesLabelVector className="courses-label-img" />

          <div className="courses-cards">
            {!isDesktop ? coursesCards[courseCardIndex] : coursesCards}

            {!isDesktop && courseCardIndex < coursesCards.length - 1 && (
              <CoursesArrow
                className="courses-right-arrow"
                onClick={() => setCourseCardIndex(courseCardIndex + 1)}
              />
            )}

            {!isDesktop && courseCardIndex > 0 && (
              <CoursesArrow
                className="courses-left-arrow"
                onClick={() => setCourseCardIndex(courseCardIndex - 1)}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
