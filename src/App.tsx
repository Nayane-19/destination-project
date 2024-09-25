import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./global-styles.css";
import { Home } from "./pages/home";
import { ThemeProvider } from "./contexts/theme/theme-provider";
import { BaseLayout } from "./components/base-layout/base-layout";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <BaseLayout>
          <RouterProvider router={router} />
        </BaseLayout>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
