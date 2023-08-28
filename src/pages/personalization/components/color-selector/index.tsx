import { useContext } from "react";
import { ThemeColor } from "../../../../theme/@types";
import { ThemeContext } from "../../../../context/theme-context";
import ColorSector from "./components/color-sector";
import personalizationColors from "../../../../theme/personalization-colors.json";
import "./styles.css";

function ColorSelector() {
  const { currentTheme } = useContext(ThemeContext);

  function getCircleSectors(colors: ThemeColor[], circleType: "out" | "inner") {
    return colors.map((item, index) => (
      <ColorSector 
        key={circleType + index}
        className={`${circleType}-sector-${index + 1}`}
        sectorColor={item}
        status={getSectorStatus(item.hex)}
      />
    ));
  }

  function getSectorStatus(colorHex: string) {
    if (colorHex == currentTheme.primaryColor.hex) return "primary";
    if (colorHex == currentTheme.secondaryColor.hex) return "secondary";
    return "inactive";
  }

  return (
      <div className="color-selector">
        <div className="out-circle">
          { getCircleSectors(personalizationColors.slice(0, 12), "out") }

          <div className="inner-circle">
            { getCircleSectors(personalizationColors.slice(12), "inner") }
          </div>
        </div>
      </div>
  );
}

export default ColorSelector;