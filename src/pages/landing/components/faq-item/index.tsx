import "./styles.css";

interface IProps {
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: IProps) {
  return (
    <div className="faq-item-card">
      <div className="faq-item-question">{question}</div>

      <p>{answer}</p>
    </div>
  );
}

export default FaqItem;
