import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addtable from './features/Addtable.jsx'
import Table from './features/Table.jsx'
import Tabledetails from './features/tabledetails.jsx'
import Additems from './features/additems.jsx'
// import "/node_modules/bootstrap/scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/Addtable",
        element:<Addtable></Addtable>
      },
      {
        path:"/Tables",
        element:<Table></Table>,
        children:[
          {
            path:"Table/:Tableid",
            element:<Tabledetails></Tabledetails>
          }
        ]
      },
      {
        path:"/Additem",
        element:<Additems></Additems>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
