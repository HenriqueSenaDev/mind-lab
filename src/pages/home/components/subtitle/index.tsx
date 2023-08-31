import "./styles.css";

function Subtitle(props: {
    styleBox: React.CSSProperties;
    styleLine: React.CSSProperties;
    data: string;
}) {
    return (
        <div className="subtitle" style={props.styleLine}>
            <div className="subtitle-box" style={props.styleBox} />
            
            <span>{props.data}</span>
        </div>
    );
}

export default Subtitle;