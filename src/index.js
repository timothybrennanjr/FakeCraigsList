import React from 'react'
import ReactDOM from "react-dom/client"
import {Main} from './components'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
} from "react-router-dom"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Main />}>
            <Route path ="NavBar" element={<NavBar />} />
        </Route>

    )
);

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)



// root.render(<Main />)
root.render(<React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>)