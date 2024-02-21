import App from "../app/App.tsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from '../pages/NotFound.tsx'
import About from "../pages/About.tsx";
import Profile from "../pages/Profile.tsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/profile/:profileId",
            element: <Profile />
        },
      ],
    },
  ]);


export const AppRouterProvider = () => <RouterProvider router={router} />


