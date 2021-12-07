// import express
import express from "express";
// import controllers
import { getAll, 
    getById, 
    createTodo, 
    updateById,
    deleteById } from "../controllers/todoController.js";

    // express router
const router = express.Router();

// router.get('/', home);
// Route get All Products
router.get('/', getAll);
// Route get single Product
router.get('/:id', getById);
// Route CREATE Product
router.post('/', createTodo);
// Route UPDATE Product
router.put('/:id', updateById);
// Route DELETE Product
router.delete('/:id', deleteById);

// export router
export default router;

