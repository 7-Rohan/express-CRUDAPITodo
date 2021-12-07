// import mongoose 
import mongoose from "mongoose";

// Buat Schema
const TodoModel = mongoose.Schema({
    todo:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    completed:{
        type: Boolean
    },
    createdAt:{
        type: Date
    },
    updatedAt:{
        type: Date
    },
    completedAt:{
        type: Date
    }
});

// export model
export default mongoose.model('todos', TodoModel);