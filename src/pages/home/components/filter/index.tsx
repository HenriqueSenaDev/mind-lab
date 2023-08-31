import { ReactComponent as Wolf } from "../../../../assets/home/wolf.svg";
import "./styles.css";

function Filter() {
    return (
        <div className="filter-component">
            <div className="filter-component-input">
                <input type="text" placeholder="Buscar..." />
            </div>

            <div className="filter-component-categories">
                <span>Categorias</span>
                
                <div className="filter-component-options-container">
                    <div className="filter-component-options-line">
                        <span>Pesquisa Científica</span>

                        <span>Front-End</span>
                    </div>
                    <div className="filter-component-options-line">
                        <span>Design</span>

                        <span>Int. à Programação</span>
                    </div>
                    <div className="filter-component-options-line">
                        <span>Back End</span>

                        <span>Pixel Art</span>
                    </div>
                </div>

                
            </div>

            <Wolf className="filter-component-img-wolf" />
        </div>
    );
}

export default Filter;