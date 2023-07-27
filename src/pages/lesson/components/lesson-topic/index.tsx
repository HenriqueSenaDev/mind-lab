import { useState } from "react";
import { ReactComponent as Arrow } from "../../../../assets/lesson/arrow.svg";
import { ILessonTopic } from "../..";
import "./styles.css";

function LessonTopic({ title, description }: ILessonTopic) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="lesson-topic">
            <div 
                className="topic-header"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={isOpen ? 'opened-topic' : 'topic-title'}>{title}</span>

                <Arrow className={`topic-arrow ${isOpen ? 'revert-topic-arrow' : ''}`}/>
            </div>

            {isOpen && (
                <p className="topic-description">
                    {description}
                </p>
            )}
        </div>
    );
}

export default LessonTopic;
