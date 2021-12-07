// import models
import TodoModel from "../models/todoModel.js";

// function get All Products
export const getAll = async (req, res) => {
    try {
        const todos = await TodoModel.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
    
}

// function get single Product
export const getById = async (req, res) => {
    try {
        const todo = await TodoModel.findById(req.params.id);
        res.json(todo);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}

// function Create Product
export const createTodo = async (req, res) => {
    const todo = new TodoModel(req.body);
    try {
        const savedTodo = await todo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// function Update Product
export const updateById = async (req, res) => {
    const cekId = await TodoModel.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updatedTodo = await TodoModel.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// function Delete Product
export const deleteById = async (req, res) => {
    const cekId = await TodoModel.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedTodo = await TodoModel.deleteOne({_id: req.params.id});
        res.status(200).json(deletedTodo);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}