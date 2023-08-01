import ColorSector from "./components/color-sector";
import "./styles.css";

function ColorSelector() {
  return (
      <div className="color-selector">
        <div className="out-circle">
          <ColorSector className="out-sector-one" colorHex="#6A459C" />
          <ColorSector className="out-sector-two" colorHex="#A8439A" />
          <ColorSector className="out-sector-three" colorHex="#E63F99" />
          <ColorSector className="out-sector-four" colorHex="#ED1B24" />
          <ColorSector className="out-sector-five" colorHex="#F3701F" isActive />
          <ColorSector className="out-sector-six" colorHex="#F88F21" />
          <ColorSector className="out-sector-seven" colorHex="#FFC20F" />
          <ColorSector className="out-sector-eight" colorHex="#FEF102" />
          <ColorSector className="out-sector-nine" colorHex="#A6EF4B" />
          <ColorSector className="out-sector-ten" colorHex="#03A893" />
          <ColorSector className="out-sector-eleven" colorHex="#0093CE" isActive />
          <ColorSector className="out-sector-twelve" colorHex="#0254A3" />

          <div className="inner-circle">
            <ColorSector className="inner-sector-one" colorHex="#8969AD" />
            <ColorSector className="inner-sector-two" colorHex="#B869AD" />
            <ColorSector className="inner-sector-three" colorHex="#EB65AB" />
            <ColorSector className="inner-sector-four" colorHex="#F0494F" />
            <ColorSector className="inner-sector-five" colorHex="#F68F50" />
            <ColorSector className="inner-sector-six" colorHex="#FCA64D" />
            <ColorSector className="inner-sector-seven" colorHex="#FFD556" />
            <ColorSector className="inner-sector-eight" colorHex="#FFF764" />
            <ColorSector className="inner-sector-nine" colorHex="#C0FF7A" />
            <ColorSector className="inner-sector-ten" colorHex="#54C1B1" />
            <ColorSector className="inner-sector-eleven" colorHex="#4CB8E5" />
            <ColorSector className="inner-sector-twelve" colorHex="#3F85CA" />
          </div>
        </div>
      </div>
  );
}

export default ColorSelector;