import { createBrowserRouter } from "react-router";

import App from './containers/App'
import Home from './containers/Home'
import FilmsList from './containers/FilmsList'
import Film from './containers/Film'
import SearchFilms from './containers/SearchFilms'

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "films",
        Component: FilmsList,
      },
      {
        path: "search",
        Component: SearchFilms,
      },
      {
        path: "film/:id",
        Component: Film,
      },
    ],
  },
])
