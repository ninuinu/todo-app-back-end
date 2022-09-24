import Todo from '../model/schema/todo.schema';

export class TodoService {

    static todoRepository = Todo;

    public static async getTodos(){
        return Todo.find();
    }

    public static async deleteTodos(id:any) {
        const todo = await Todo.deleteOne({_id: id})
        console.log("deleted ", todo)
    }
}