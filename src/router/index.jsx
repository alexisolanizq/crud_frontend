import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/Layout"
import Home from "../components/Home"
import List from "../components/List"
import Person from "../components/Person"


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <List />
            },
            {
                path: '/catalogo/:id',
                element: <Person />
            }
        ]
    }
])

export default router