import { Error404 } from '../components/Error404'
import { Home } from '../components/Home'
import { ShowHideMessage } from '../components/showHideMessage'
import { ProgressBar } from '../components/ProgressBar'

export const routesPublic =  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ShowHideMessage",
      element: <ShowHideMessage />,
    },
    {
      path: "/progressBar",
      element: <ProgressBar />,
    },
    {
      path: "/*",
      element: <Error404 />,
    }
  ]