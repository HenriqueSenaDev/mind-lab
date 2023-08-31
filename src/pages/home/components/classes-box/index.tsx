import "./styles.css";

interface IProps {
    imgSrc: string;
}

function ClassesBox({ imgSrc }: IProps) {
    return (
        <div className="classes-box-component">
            <img src={imgSrc} alt="" />
        </div>
    );
}

export default ClassesBox;