import axios from "axios";
import {TodoService} from "../services/todo.service.ts";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

export const todoService = new TodoService(apiClient)