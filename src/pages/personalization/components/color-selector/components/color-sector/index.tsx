interface IColorSectorProps {
  className: string;
  colorHex: string;
  isActive?: boolean;
}

function ColorSector({ className, colorHex, isActive }: IColorSectorProps) {
  const activeSectorSvgProps = isActive ? {
    "stroke": "white",
    "stroke-width": "3",
    "stroke-linejoin": "round"
  } : null;

  return (
    <svg 
      className={`${className} ${isActive ? 'active-sector' : ''}`}
      width="53" 
      height="44" 
      viewBox="0 0 53 44" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >

      <path 
        d="M49.5626 1.50334C50.391 1.51003 51.0571 2.18699 51.0504 3.01538L50.8151 32.1951C50.8119 32.5929 50.6508 32.9731 50.3672 33.2522C50.0836 33.5312 49.7008 33.6862 49.303 33.6829C38.4688 33.5955 27.8022 36.3603 18.3746 41.6996C17.6538 42.1079 16.7385 41.8545 16.3302 41.1337L1.94942 15.7425C1.75337 15.3963 1.70286 14.9864 1.809 14.603C1.91514 14.2196 2.16925 13.8941 2.51541 13.698C16.8563 5.57597 33.0819 1.37027 49.5626 1.50334Z"
        fill={colorHex}
        {...activeSectorSvgProps}
      />
    </svg>
  );
}

export default ColorSector;