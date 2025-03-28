import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.js";
import GlobalStyles from "./styles/globalStyle.js";
import { Routes } from "./routes/index.jsx";
import { AuthProvider } from "./hooks/auth.jsx";
import { SearchProvider } from "./hooks/searchContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <SearchProvider>
                <AuthProvider>
                    <Routes />
                </AuthProvider>
            </SearchProvider>
        </ThemeProvider>
    </StrictMode>
);
