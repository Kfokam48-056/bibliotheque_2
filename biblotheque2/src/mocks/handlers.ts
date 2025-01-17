import {http, HttpResponse, PathParams} from 'msw'
import { Todo } from '../models/entities'

 

export const api  = import.meta.env.VITE_API_URL

export const handlers = [
    http.get<object, object, Todo[]>(`${api}/todos`, () => {
        return HttpResponse.json<Todo[]>([
            {
                userId : 1,
                id : 1,
                title : 'first mock',
                completed : true
            },
            {
                userId : 2,
                id : 2,
                title : 'firstttttttt mock',
                completed : false
            }
        ])
    }),         
    http.get<PathParams>(`${api}/todos/:id`, ({ params }) => {
        const { id } = params
        return HttpResponse.json(
            {
                userId : 2,
                id,
                title : 'firstttttttt mock',
                completed : false
            }
        )
    })
]

