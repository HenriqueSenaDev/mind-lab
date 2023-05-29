import "./styles.css";

interface IProps {
  imgSrc: string;
  moduleTitle: string;
}

function CourseCard({ imgSrc, moduleTitle }: IProps) {
  return (
    <div className="course-card">
      <div className="course-card-blur" />

      <img
        className="course-card-img"
        src={imgSrc}
        alt={`${moduleTitle} image`}
      />

      <div className="course-card-label">
        <span>MÓDULO DE</span>

        <h1>{moduleTitle}</h1>
      </div>
    </div>
  );
}

export default CourseCard;
