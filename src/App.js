import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import Main from "./components/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [{ path: "/", element: <Main /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
