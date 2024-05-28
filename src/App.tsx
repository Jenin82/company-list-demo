import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/notFound";
import Layout from "./component/layout";
import Home from "./pages/home";
import { ThemeProvider } from "@emotion/react";
import { darkTheme, lightTheme } from "./theme";
import { CssBaseline } from "@mui/material";
import { useStore } from "./services/store";

function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/404",
      element: <NotFound />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  const {isDark} = useStore()

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
