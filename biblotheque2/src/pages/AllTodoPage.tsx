//import {useEffect} from "react";
import {NavLink} from "react-router-dom";
import { useFetchTodosQuery} from "../features/todo";
//import {useAppDispatch, } from "../store";
import {Todo} from "../models/entities";

export default function AllTodoPage () {
   // const dispatch = useAppDispatch();
    const { data: todos, isLoading, isFetching, isError: hasError, refetch } = useFetchTodosQuery()
/*
    const {todos, pending, hasError} = useAppSelector(state => state.todo)
*/

    /*const [todos, setTodos] = useState<Todo[]>([])

    const loadTodos = async () => {
        const response = await todoService.getTodos()
        setTodos(response)
    }*/

    // useEffect(() => {
    //     dispatch(fetchTodos())
    // }, [])

    return (
        <div className={"p-4"}>
            <h2 className="text-lg font-bold">My Todo List</h2>
            <hr className="my-6"/>
            <div className="flex flex-col gap-4" >
                {
                    hasError ? <ResourceNotFound onReload={refetch}/> : (
                        (isLoading || isFetching) ? <Loader/> : <TodoListViewer todos={todos ?? []}/>
                    )
                }
            </div>
        </div>
    )
}


interface TodoListViewerProps {
    todos: Todo[]
}

const TodoListViewer = ({todos}: TodoListViewerProps) => {
    return (
        todos.map(todo => (
            <div key={todo.id} className="todo flex gap-4 items-center">
                <input checked={todo.completed} type="checkbox" name="" id=""/>
                <p data-testid="first">{todo.title}</p>
                <NavLink to={`/todo/${todo.id}`}>Open</NavLink>
            </div>
        ))
    )
}

interface ResourceNotFoundProps {
    onReload: () => void
}

export const ResourceNotFound = ({onReload}: ResourceNotFoundProps) => {
    return (
        <div className="flex flex-col" >
            <span>Resource not found, please click to reload !</span>
            <button
                onClick={onReload}
                className={'px-4 py-2 rounded-md font-semibold bg-green-950 text-slate-50 hover:bg-green-900 transition-all'}>Reload
            </button>
        </div>
    )
}

export const Loader = () => {
    return (
        <div className="flex items-center justify-center absolute inset-0">
            <span className="circular-loader" data-testid ="Loader"></span>
        </div>
    )
}



