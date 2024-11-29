import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./Styles/Themes/Default";
import { GlobalStyle } from "./Styles/Global";
import {BrowserRouter} from 'react-router-dom'
import { Router } from "./Router";
import { AdressContextProvider } from "./Components/Contexts/AdressContext";
import { CartContextProvider} from "./Components/Contexts/CartContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AdressContextProvider>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </AdressContextProvider>
        <GlobalStyle/>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
