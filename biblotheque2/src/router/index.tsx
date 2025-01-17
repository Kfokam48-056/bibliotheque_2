import {createBrowserRouter, redirect, RouteObject} from "react-router-dom";
import AllTodoPage from "../pages/AllTodoPage.tsx";
import {TodoPage} from "../pages/TodoPage.tsx";

const routes: RouteObject[] = [
    {
        path: '',
        loader: () => redirect('/all-todo')
    },
    {
        path: 'all-todo',
        element: <AllTodoPage/>
    },
    {
        path: 'todo/:id',
        //loader: ({}) => {},
        element: <TodoPage/>
    }
]

export const router = createBrowserRouter(routes)