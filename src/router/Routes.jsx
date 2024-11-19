import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import Error from "../pages/Error"
import About from "../pages/About"
import Contact from "../pages/Contact"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
])

export default route
