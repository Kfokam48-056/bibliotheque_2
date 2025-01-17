import {AxiosInstance} from "axios";
import {Todo} from "../../models/entities";

export class TodoService{
    protected _client: AxiosInstance

    constructor(client: AxiosInstance) {
        this._client = client
    }

    async getTodos(){
        const response = await this._client
            .get<Todo[]>('/todos')

        return response.data
    }

    async getTodo(todoId: number){
        const response = await this._client
            .get<Todo>(`/todos/${todoId}`)

        return response.data
    }
}
