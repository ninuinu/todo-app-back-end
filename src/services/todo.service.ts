import Todo from '../model/schema/todo.schema';
import isEmpty from '../utils/isEmpty';

export class TodoService {

    // get todos in reverse order
    public static async getTodos(){
        return Todo.find().sort({"createdAt": -1});
    }

    public static async deleteTodos(id:any) {
        const todo = await Todo.deleteOne({_id: id})
        console.log("deleted ", todo)
    }

    public static async createTodos(description:any) {
        console.log(description)
        if(isEmpty(description)){
            throw Error("empty string")
        }
        const todo = new Todo({description: description})
        await todo.save()
        console.log("saved", todo)
    }
}