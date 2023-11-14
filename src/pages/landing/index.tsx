import { useState } from "react";
import { ReactComponent as Arrow } from "../../assets/common/arrow.svg";
import CourseCard from "./components/course-card";
import MultimodalItem from "./components/multimodal-item";
import FaqItem from "./components/faq-item";
import "./styles.css";

// Showcase section assets
import showcaseLogo from "../../assets/landing/showcase/showcase-logo.png";
import showcaseWolfImg from "../../assets/landing/showcase/showcase-wolf.png";
import blueShape from "../../assets/landing/showcase/blue-shape.png";
import orangeShape from "../../assets/landing/showcase/orange-shape.png";
import "./section-styles/showcase.css";
// Our Courses section assets
import { ReactComponent as CoursesLabelVector } from "../../assets/landing/our-courses/our-courses-label.svg";
import ourCoursesWolfImg from "../../assets/landing/our-courses/our-courses-wolf.png";
import planning from "../../assets/common/course-cards/planning.png";
import design from "../../assets/common/course-cards/design.png";
import programming from "../../assets/common/course-cards/programming.png";
import frontend from "../../assets/common/course-cards/frontend.png";
import backend from "../../assets/common/course-cards/backend.png";
import pixelArt from "../../assets/common/course-cards/pixel-art.png";
import scratch from "../../assets/common/course-cards/scratch.png";
import cientificMetodology from "../../assets/common/course-cards/cientific-metodology.png";
import "./section-styles/our-courses.css";
// Multimodals section assets
import { ReactComponent as MultimodalsLabel } from "../../assets/landing/multimodals/multimodals-label.svg";
import multimodalWolfImg from "../../assets/landing/multimodals/multimodals-wolf.png";
import { ReactComponent as VideosLabelVector } from "../../assets/landing/multimodals/multimodals-items/videos-label.svg";
import { ReactComponent as VideosIconVector } from "../../assets/landing/multimodals/multimodals-items/videos-icon.svg";
import { ReactComponent as ImagensLabelVector } from "../../assets/landing/multimodals/multimodals-items/images-label.svg";
import { ReactComponent as ImagensIconVector } from "../../assets/landing/multimodals/multimodals-items/images-icon.svg";
import { ReactComponent as TextsLabelVector } from "../../assets/landing/multimodals/multimodals-items/texts-label.svg";
import { ReactComponent as TextsIconVector } from "../../assets/landing/multimodals/multimodals-items/texts-icon.svg";
import { ReactComponent as AudioLabelVector } from "../../assets/landing/multimodals/multimodals-items/audio-label.svg";
import { ReactComponent as AudioIconVector } from "../../assets/landing/multimodals/multimodals-items/audio-icon.svg";
import { ReactComponent as ForumsLabelVector } from "../../assets/landing/multimodals/multimodals-items/forums-label.svg";
import { ReactComponent as ForumsIconVector } from "../../assets/landing/multimodals/multimodals-items/forums-icon.svg";
import { ReactComponent as AvaliationsLabelVector } from "../../assets/landing/multimodals/multimodals-items/avaliations-label.svg";
import { ReactComponent as AvaliationsIconVector } from "../../assets/landing/multimodals/multimodals-items/avaliations-icon.svg";
import "./section-styles/multimodals.css";
// Personalization section assets
import { ReactComponent as PersonalizationLabelVector } from "../../assets/landing/personalization/personalization-label.svg";
import personalizationFirstPalete from "../../assets/landing/personalization/palete-1.png";
import personalizationSecondPalete from "../../assets/landing/personalization/palete-2.png";
import personalizationThirdPalete from "../../assets/landing/personalization/palete-3.png";
import "./section-styles/personalization.css";
// Discussion Forums section assets
import { ReactComponent as DiscussionForumsLabelVector } from "../../assets/landing/forums/forums-label.svg";
import { ReactComponent as HeartMessageIcon } from "../../assets/landing/forums/heart-message.svg";
import discussionForumsWolfImg from "../../assets/landing/forums/forums-wolf.png";
import mobileForumSample from "../../assets/landing/forums/mobile-forum.png";
import desktopForumSample from "../../assets/landing/forums/desktop-forum.png";
import "./section-styles/forums.css";
// Progress Tracking section assets
import { ReactComponent as ProgressTrackingLabelVector } from "../../assets/landing/progress-tracking/progress-tracking-label.svg";
import { ReactComponent as BarGraphIcon } from "../../assets/landing/progress-tracking/bar-graph.svg";
import progressTrackingWolfImg from "../../assets/landing/progress-tracking/progress-tracking-wolf.png";
import porgressGraph from "../../assets/landing/progress-tracking/progress-graph.png";
import "./section-styles/progress-tracking.css";
// FAQ session assets 
import { ReactComponent as FaqLabelVector } from "../../assets/landing/faq/faq-label.svg";
import { ReactComponent as ExclamativeMessageIcon } from "../../assets/landing/faq/exclamative-message.svg";
import { ReactComponent as InterrogativeMessageIcon } from "../../assets/landing/faq/interrogative-message.svg";
import faqWolfImg from "../../assets/landing/faq/faq-wolf.png";
import "./section-styles/faq.css";
// Teacher Training section assets
import { ReactComponent as TeacherIcon } from "../../assets/landing/teacher-training/teacher.svg";
import { ReactComponent as PaintingIcon } from "../../assets/landing/teacher-training/painting.svg";
import teaInClass from "../../assets/landing/teacher-training/tea-in-class.png";
import teacherTrainingWolfImg from "../../assets/landing/teacher-training/teacher-training-wolf.png";
import "./section-styles/teacher-training.css";
// Contact section assets
import { ReactComponent as ContactLabelVector } from "../../assets/landing/contact/contact-label.svg";
import { ReactComponent as EmailIcon } from "../../assets/landing/contact/email.svg";
import { ReactComponent as InstagramIcon } from "../../assets/landing/contact/instagram.svg";
import { ReactComponent as PhoneIcon } from "../../assets/landing/contact/phone.svg";
import contactWolfImg from "../../assets/landing/contact/contact-wolf.png";
import bluredHearts from "../../assets/landing/contact/blured-hearts.png";
import contactHearts from "../../assets/landing/contact/contact-hearts.png";
import "./section-styles/contact.css";
import { useNavigate } from "react-router";

function Landing() {
  const [isDesktop, setIsDesktop] = useState<boolean>(
    document.body.clientWidth > 992
  );
  const [courseCardIndex, setCourseCardIndex] = useState<number>(0);
  const [faqItemIndex, setFaqItemIndex] = useState<number>(0);

  const navigate = useNavigate();

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

  const faqItems = [
    <FaqItem
      question="Posso pausar e retomar depois os cursos?"
      answer="Sim, você pode pausar o seu progresso nos cursos a qualquer momento e retomá-lo quando quiser. Nossa plataforma salva automaticamente o seu progresso, permitindo que você continue exatamente de onde parou. Dessa forma, você pode estudar no seu próprio ritmo, de acordo com sua disponibilidade e conveniência."
    />,
    <FaqItem
      question="Como posso me inscrever na plataforma?"
      answer="Para se cadastrar na plataforma, basta acessar a página de registro clicando em “Inscreva-se agora!” e preencher suas informações básicas, como nome, e-mail e criar uma senha. Depois de fornecer esses detalhes, você estará pronto para explorar os cursos e recursos disponíveis!"
    />,
    <FaqItem
      question="Posso fazer perguntas aos professores?"
      answer="Claro! Na plataforma, você terá a oportunidade de interagir com os professores e fazer perguntas relacionadas aos cursos. No fórum de discussão integrado, você pode postar suas dúvidas e receber respostas dos professores e também de outros alunos. É um espaço colaborativo onde todos podem compartilhar conhecimentos."
    />,
  ];

  window.addEventListener("resize", () =>
    setIsDesktop(document.body.clientWidth > 992)
  );

  return (
    <div className="landing-container">
      {/* Showcase */}
      <section className="showcase">
        <button
          className="showcase-login-button"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <div className="showcase-description">
          <img className="showcase-logo" src={showcaseLogo} alt="mindlab logo" />

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
          <img className="sc-wolf-img" src={showcaseWolfImg} alt="showcase wolf" />

          <img className="sc-blue-img" src={blueShape} alt="blue shape" />

          <img className="sc-orange-img" src={orangeShape} alt="orange shape" />
        </div>

        <div className="sign-up-wrapper">
          <button
            className="sign-up-button"
            onClick={() => navigate("/login")}
          >
            INSCREVA-SE AGORA!
          </button>
        </div>
      </section>

      {/* Our Courses */}
      <section className="our-courses">
        <img className="courses-wolf-img" src={ourCoursesWolfImg} alt="our courses wolf" />

        <div className="courses-area">
          <CoursesLabelVector className="courses-label-img" />

          <div className="courses-cards">
            {!isDesktop ? coursesCards[courseCardIndex] : coursesCards}

            {!isDesktop && courseCardIndex < coursesCards.length - 1 && (
              <Arrow
                className="courses-right-arrow"
                onClick={() => setCourseCardIndex(courseCardIndex + 1)}
              />
            )}

            {!isDesktop && courseCardIndex > 0 && (
              <Arrow
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
      <section className="personalization-section">
        <PersonalizationLabelVector className="personalization-label" />

        <p>
          A <span>MindLab</span> disponibiliza uma excelente capacidade de
          personalização da plataforma, permitindo que os estudantes{" "}
          <span>
            selecionem qualquer tonalidade desejada e alterem integralmente a
            interface
          </span>{" "}
          de todo o ambiente educacional. Como resultado, isso cria uma
          experiência singular e adaptável, garantindo que cada utilização seja
          exclusiva e personalizada!
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

      {/* Discussion Forums */}
      <section className="discussion-forums">
        <DiscussionForumsLabelVector className="discussion-forums-label" />

        <img
          className="df-wolf"
          src={discussionForumsWolfImg}
          alt="wolf with megaphone"
        />

        <div className="discussion-forums-sample">
          <img
            className="mobile-forum-sample"
            src={mobileForumSample}
            alt="mobile forum sample"
          />

          <img
            className="desktop-forum-sample"
            src={desktopForumSample}
            alt="desktop forum sample"
          />

          <ForumsIconVector className="df-icon" />

          <HeartMessageIcon className="df-icon" />
        </div>
      </section>

      {/* Progress Tracking */}
      <section className="progress-tracking">
        <img
          className="progress-graph-image"
          src={porgressGraph}
          alt="progress graph"
        />

        <div className="progress-container">
          <div className="progress-tracking-label-container">
            <ProgressTrackingLabelVector className="progress-tracking-label" />

            <BarGraphIcon className="bar-graph-icon" />
          </div>

          <p>
            Mantenha-se no controle do seu aprendizado! Com a funcionalidade de
            Acompanhamento de Progresso, você poderá monitorar seu
            desenvolvimento de forma fácil e intuitiva.{" "}
            <span>
              Acompanhe suas aulas concluídas, confira suas respostas corretas e
              erradas em questões e avalie seu desempenho ao longo do tempo.
            </span>{" "}
            Com essa ferramenta, você terá uma visão clara do seu progresso,
            permitindo que você se motive e alcance seu potencial máximo!
          </p>
        </div>

        <img
          className="pt-wolf"
          src={progressTrackingWolfImg}
          alt="progress tracking wolf"
        />
      </section>

      {/* FAQ */}
      <section className="faq">
        <img className="faq-wolf" src={faqWolfImg} alt="faq wolf" />

        <div className="faq-container">
          <FaqLabelVector className="faq-label" />

          <InterrogativeMessageIcon className="interrogative-msg-icon" />

          <ExclamativeMessageIcon className="exclamative-msg-icon" />

          <div className="faq-items-container">
            {!isDesktop ? faqItems[faqItemIndex] : faqItems}

            {!isDesktop && faqItemIndex < faqItems.length - 1 && (
              <Arrow
                className="faq-right-arrow"
                onClick={() => setFaqItemIndex(faqItemIndex + 1)}
              />
            )}

            {!isDesktop && faqItemIndex > 0 && (
              <Arrow
                className="faq-left-arrow"
                onClick={() => setFaqItemIndex(faqItemIndex - 1)}
              />
            )}
          </div>
        </div>
      </section>

      {/* Teacher Training */}
      <section className="teacher-training">
        <div className="teacher-training-header">
          <h1>
            ATENÇÃO <span>PROFESSORES!</span>
          </h1>

          <TeacherIcon className="teacher-icon" />
        </div>

        <div className="teacher-training-container">
          <div className="teacher-training-content">
            <img
              className="tea-in-class-img"
              src={teaInClass}
              alt="tea em sala de aula"
            />

            <p>
              Prepare-se para criar um ambiente de aprendizagem verdadeiramente
              inclusivo com nossa <span>Capacitação: TEA em sala de aula.</span>{" "}
              Este programa exclusivo oferece aos professores as{" "}
              <span>ferramentas e estratégias</span> necessárias para apoiar
              efetivamente os alunos autistas em sala de aula. Nossa capacitação
              abrange temas essenciais, desde{" "}
              <span>
                compreender as necessidades individuais dos alunos até
                implementar práticas inclusivas
              </span>{" "}
              que promovam a participação ativa e o desenvolvimento de
              habilidades. Aprenda a{" "}
              <span>
                adaptar seu ensino, promover interações positivas e cultivar um
                ambiente acolhedor
              </span>{" "}
              para todos os estudantes
            </p>
          </div>

          <img
            className="tt-wolf"
            src={teacherTrainingWolfImg}
            alt="wolf with hand up"
          />

          <div className="join-us">
            <button className="join-us-button">BAIXAR PDF</button>

            <PaintingIcon className="painting-icon" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact">
        <img
          className="bluered-hearts"
          src={bluredHearts}
          alt="blured blue hearts"
        />

        <div className="contact-content">
          <div className="questions-area">
            <img className="contact-hearts" src={contactHearts} alt="blue hearts randomly" />

            <div className="questions-area-header">
              <ContactLabelVector className="contact-label" />

              <h1>Entre em Contato!</h1>
            </div>

            <div className="contact-vias">
              <div className="contact-via">
                <InstagramIcon className="instagram-icon" />

                <span>@mindlab</span>
              </div>

              <div className="contact-via">
                <PhoneIcon className="phone-icon" />

                <span>(88)9970041316</span>
              </div>

              <div className="contact-via">
                <EmailIcon className="email-icon" />

                <span>mindlab@gmail.com</span>
              </div>
            </div>
          </div>

          <img
            className="contact-wolf"
            src={contactWolfImg}
            alt="wolf lying down"
          />
        </div>
      </section>
    </div>
  );
}

export default Landing;
