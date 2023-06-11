import { ReactNode } from "react";
import "./styles.css";

interface IProps {
    iconVector: ReactNode;
    labelVector: ReactNode;
    description: string;
}

function MultimodalItem({ iconVector: IconVector, labelVector: LabelVector, description }: IProps) {
    return (
        <div className="multimodal-item-container">
            {IconVector}

            {LabelVector}

            <p>{description}</p>
        </div>
    );
}

export default MultimodalItem;