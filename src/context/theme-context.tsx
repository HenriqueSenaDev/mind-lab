import { ReactNode, createContext, useState, useEffect } from "react";
import { ThemeColor } from "../theme/@types";

export interface ITheme {
  primaryColor: ThemeColor;
  secondaryColor: ThemeColor;
}

interface IThemeContext {
  currentTheme: ITheme;
  setCurrentTheme: Function;
  testTheme: ITheme;
  setTestTheme: Function;
  colorToChange: "primary" | "secondary";
  setColorToChange: Function;
}

const ThemeContext = createContext({} as IThemeContext);
const root = document.documentElement;

function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ITheme>(getDefaultTheme());
  const [testTheme, setTestTheme] = useState<ITheme>(getDefaultTheme());
  const [colorToChange, setColorToChange] = useState<"primary" | "secondary">("primary");

  function getDefaultTheme(): ITheme {
    const defaultTheme = localStorage.getItem("defaultTheme");

    if (defaultTheme) return JSON.parse(defaultTheme) as ITheme;
    else {
      const newDefaultTheme = {
        primaryColor: { hex: "#0093CE", rgb: "0, 147, 206" },
        secondaryColor: { hex: "#F3701F", rgb: "243, 112, 31" }
      }

      localStorage.setItem("defaultTheme", JSON.stringify(newDefaultTheme));
      return newDefaultTheme;
    }
  }

  function updateTheme(type: "current" | "test") {
    let theme: ITheme = (type == "current") ? currentTheme : testTheme;

    const checkThemePrefix: string = (type != "current") ? "test-" : "";
    const primaryRgbValues: string[] = theme.primaryColor.rgb.split(",");
    const secondaryRgbValues: string[] = theme.secondaryColor.rgb.split(",");

    root.style.setProperty(`--${checkThemePrefix}primary-color`, theme.primaryColor.hex);
    root.style.setProperty(`--${checkThemePrefix}pred`, primaryRgbValues.at(0) as string);
    root.style.setProperty(`--${checkThemePrefix}pgreen`, primaryRgbValues.at(1) as string);
    root.style.setProperty(`--${checkThemePrefix}pblue`, primaryRgbValues.at(2) as string);

    root.style.setProperty(`--${checkThemePrefix}secondary-color`, theme.secondaryColor.hex);
    root.style.setProperty(`--${checkThemePrefix}sred`, secondaryRgbValues.at(0) as string);
    root.style.setProperty(`--${checkThemePrefix}sgreen`, secondaryRgbValues.at(1) as string);
    root.style.setProperty(`--${checkThemePrefix}sblue`, secondaryRgbValues.at(2) as string);
  }

  useEffect(() => updateTheme("test"), [testTheme]);
  useEffect(() => updateTheme("current"), [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme, setCurrentTheme,
        testTheme, setTestTheme,
        colorToChange, setColorToChange,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext }