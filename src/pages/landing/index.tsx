import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/common/logo.svg";
import { ReactComponent as WolfVector } from "../../assets/landing/showcase-wolf.svg";
import { ReactComponent as BlueVector } from "../../assets/landing/showcase-blue.svg";
import { ReactComponent as OrangeVector } from "../../assets/landing/showcase-orange.svg";
import { ReactComponent as WolfCoursesVector } from "../../assets/landing/our-courses.svg";
import { ReactComponent as CoursesLabelVector } from "../../assets/landing/our-courses-label.svg";
import { ReactComponent as CoursesArrow } from "../../assets/landing/courses-arrow.svg";
import { ReactComponent as MultimodalsLabel } from "../../assets/landing/multimodals-label.svg";
import CourseCard from "./components/course-card";
import MultimodalItem from "./components/multimodal-item";
import "./styles.css";

// Our Courses section assets
import multimodalWolfImg from "../../assets/landing/multimodals.png";
import planning from "../../assets/landing/courses/planning.png";
import design from "../../assets/landing/courses/design.png";
import programming from "../../assets/landing/courses/programming.png";
import frontend from "../../assets/landing/courses/frontend.png";
import backend from "../../assets/landing/courses/backend.png";
import pixelArt from "../../assets/landing/courses/pixel-art.png";
import scratch from "../../assets/landing/courses/scratch.png";
import cientificMetodology from "../../assets/landing/courses/cientific-metodology.png";
// Multimodals section assets
import { ReactComponent as VideosLabelVector } from "../../assets/landing/multimodals/videos-label.svg";
import { ReactComponent as VideosIconVector } from "../../assets/landing/multimodals/videos-icon.svg";
import { ReactComponent as ImagensLabelVector } from "../../assets/landing/multimodals/images-label.svg";
import { ReactComponent as ImagensIconVector } from "../../assets/landing/multimodals/images-icon.svg";
import { ReactComponent as TextsLabelVector } from "../../assets/landing/multimodals/texts-label.svg";
import { ReactComponent as TextsIconVector } from "../../assets/landing/multimodals/texts-icon.svg";
import { ReactComponent as AudioLabelVector } from "../../assets/landing/multimodals/audio-label.svg";
import { ReactComponent as AudioIconVector } from "../../assets/landing/multimodals/audio-icon.svg";
import { ReactComponent as ForumsLabelVector } from "../../assets/landing/multimodals/forums-label.svg";
import { ReactComponent as ForumsIconVector } from "../../assets/landing/multimodals/forums-icon.svg";
import { ReactComponent as AvaliationsLabelVector } from "../../assets/landing/multimodals/avaliations-label.svg";
import { ReactComponent as AvaliationsIconVector } from "../../assets/landing/multimodals/avaliations-icon.svg";
// Personalization section assets
import { ReactComponent as PersonalizationLabel } from "../../assets/landing/personalization/personalization-label.svg";
import personalizationFirstPalete from "../../assets/landing/personalization/palete-1.png";
import personalizationSecondPalete from "../../assets/landing/personalization/palete-2.png";
import personalizationThirdPalete from "../../assets/landing/personalization/palete-3.png";

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

  const multimodalItems = [
    <MultimodalItem
      labelVector={<VideosLabelVector className="multimodal-item-label" />}
      iconVector={<VideosIconVector className="multimodal-item-icon" />}
      description="Fornecem uma experiência visualmente estimulante, permitindo a compreensão de conceitos de forma prática e envolvente."
    />,
    <MultimodalItem
      labelVector={<ImagensLabelVector className="multimodal-item-label" />}
      iconVector={<ImagensIconVector className="multimodal-item-icon" />}
      description="Ajudam a visualizar abstrações, tornando os conceitos de programação mais tangíveis e facilitando a conexão entre ideias."
    />,
    <MultimodalItem
      labelVector={<TextsLabelVector className="multimodal-item-label" />}
      iconVector={<TextsIconVector className="multimodal-item-icon" />}
      description="Fornecem uma abordagem mais estruturada e detalhada, permitindo que os alunos revisem e consultem informações importantes."
    />,
    <MultimodalItem
      labelVector={<AudioLabelVector className="multimodal-item-label" />}
      iconVector={<AudioIconVector className="multimodal-item-icon" />}
      description="Possibilitam uma aprendizagem auditiva, permitindo que os adolescentes processem e absorvam informações através do som."
    />,
    <MultimodalItem
      labelVector={<ForumsLabelVector className="multimodal-item-label" />}
      iconVector={<ForumsIconVector className="multimodal-item-icon" />}
      description="Proporcionam um ambiente de interação social, onde os adolescentes podem trocar experiências, fazer perguntas e colaborar com seus colegas."
    />,
    <MultimodalItem
      labelVector={<AvaliationsLabelVector className="multimodal-item-label" />}
      iconVector={<AvaliationsIconVector className="multimodal-item-icon" />}
      description="Incentivam a reflexão e a resolução de problemas, promovendo o pensamento crítico e a aplicação prática dos conhecimentos adquiridos."
    />,
  ];

  window.addEventListener("resize", () =>
    setIsDesktop(document.body.clientWidth > 992)
  );

  return (
    <div className="landing-container">
      {/* Showcase */}
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

      {/* Our Courses */}
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

      {/* Multimodals */}
      <section className="multimodals">
        <img
          className="mm-wolf-img"
          src={multimodalWolfImg}
          alt="multimodals wolf"
        />

        <div className="multimodals-area">
          <MultimodalsLabel className="multimodals-label" />

          <div className="multimodals-description-area">{multimodalItems}</div>
        </div>
      </section>

      {/* Personalization */}
      <section className="personalization">
        <PersonalizationLabel className="personalization-label" />

        <p>
          A <span>MindLab</span> disponibiliza uma excelente capacidade de personalização da
          plataforma, permitindo que os estudantes <span>selecionem qualquer
          tonalidade desejada e alterem integralmente a interface</span> de todo o
          ambiente educacional. Como resultado, isso cria uma experiência
          singular e adaptável, garantindo que cada utilização seja exclusiva e
          personalizada!
        </p>

        <div className="personalization-images">
          <img
            className="personalization-first-palete"
            src={personalizationFirstPalete}
            alt="wolf with color palete"
          />

          <img
            className="personalization-second-palete"
            src={personalizationSecondPalete}
            alt="wolf with color palete"
          />

          <img
            className="personalization-third-palete"
            src={personalizationThirdPalete}
            alt="wolf with color palete"
          />
        </div>
      </section>
    </div>
  );
}

export default Landing;
