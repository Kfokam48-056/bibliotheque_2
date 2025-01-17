import {useParams} from "react-router-dom";
// import {todoService} from "../apis/config";
// import {useEffect, useState} from "react";
// import {Todo} from "../models/entities";
import { useFetchTodoQuery } from "../features/todo";

export const TodoPage = () => {


    const { id } = useParams()
    const todoId = Number(id)
    const { data: todo} = useFetchTodoQuery(todoId)

    // const [todo, setTodo] = useState<Todo>()
    // const loadTodoById = async (id: number) => {
    //     const response = await todoService.getTodo(id)
    //     setTodo(response)
    // }

    // useEffect(() => {
    //     const todoId = Number(id)
    //     if(!isNaN(todoId))
    //         loadTodoById(todoId)
    //     else alert('Provide a number')
    // }, [])

    return (
        <div>
            { JSON.stringify(todo) }
        </div>
    )
}
