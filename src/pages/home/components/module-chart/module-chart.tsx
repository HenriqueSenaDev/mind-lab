import "./styles.css";

function ModuleChart(props: {
    styleBoxBlue: React.CSSProperties;
    text: string;
}) {
    return (
        <div className="module-chart">
            <div className="module-chart-white">
                <div className="module-chart-blue" style={props.styleBoxBlue} />
            </div>
            
            <span>{props.text}</span>
        </div>
        
    );
}

export default ModuleChart;