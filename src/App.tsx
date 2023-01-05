import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />

      <GlobalStyles />
    </ThemeProvider>
  );
}
