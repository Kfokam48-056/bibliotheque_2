import { render, screen, waitFor } from "@testing-library/react"
//import { worker } from "../mocks/browser"
import { store } from "../store"
import { Provider } from "react-redux"
import AllTodoPage from "../pages/AllTodoPage"
//import { TodoPage } from "../pages/TodoPage"
import { server } from "../mocks/server"
import { createMemoryRouter, RouteObject, RouterProvider } from "react-router-dom"
//import userEvent from '@testing-library/user-event';


describe('test de rendu de composant avec msw', ()=>{

    const routes: RouteObject[] = [
        {
            path: '',
            element :<AllTodoPage/>
        },
        {
            path: '*',
            element: <div>Page not found</div>
        },
       
    ]
    const router = createMemoryRouter(routes)


    beforeEach(() =>{
        render(
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        )
    })
    beforeAll(() =>{
        server.listen()
    })
    afterEach(() =>{
        server.resetHandlers()
    })
    afterAll(() =>{
        server.close()
    })
    

    it('Affiche le composant AllTodoPages', ()=>{
        expect(screen.getByText('My Todo List')).toBeInTheDocument()
    })
    it('Affiche le loader', ()=>{
        expect(screen.getByTestId('Loader')).toBeInTheDocument()
    })

    it('charge les taches avec succes' , async ()=>{
       const firstMock = await screen.findByText('first mock')
       screen.debug()
    })
})

