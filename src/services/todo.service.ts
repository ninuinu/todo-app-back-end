import Todo from '../model/schema/todo.schema';

export class TodoService {

    static todoRepository = Todo;

    public static async getTodos(){
        return Todo.find();
    }
}