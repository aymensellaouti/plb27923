import { Injectable } from "@angular/core";
import { Todo } from "../model/todo";
import { LoggerSevice } from "../../services/logger.service";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  todos: Todo[] = [];
  constructor(private loggerService: LoggerSevice) {}

  getTodos(): Todo[] {
    return this.todos;
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }
  logTodos() {
    this.loggerService.log(this.todos);
  }
  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
