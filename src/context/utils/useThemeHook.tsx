import { use } from "react";
import { ThemeContext } from "../ThemeContext";

export const useTheme = () => {
  const context1 = use(ThemeContext);
  if (!context1) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context1;
};