const express = require('express');
const mongoose = require('mongoose');
const Todo = require('../models/TodoSchema');
const route = express.Router();


route.get('/', async (req, res) => {
	try {
		let result = await Todo.find({});
		if(result) {
			res.json(result);
		}
		else {
			console.log('No Result');
		}
	} catch (error) {
		console.log(error);
	}
})

route.post('/add', async (req, res) => {
	let title = req.body.title;
	let description = req.body.description;
	const newTodo = new Todo({
		title:title,
		description:description
	})
	try {
		const result = await newTodo.save();
		if(result) {
			res.json(result);
		}
		else {
			console.log('Somethings Went Wrong');
		}
	} catch (error) {
		console.log(error)
	}
})
route.post('/edit/:id', async (req, res) => {
	let title = req.body.title;
	description = req.body.description;
	try {
		const result = await Todo.findByIdAndUpdate(
			{ _id : req.params.id},
			{
				$set:{
					title:title,
					description:description
				}
			}
		)
		if(result) {
			res.json(result)
		}
		else{
			console.log('No Result Found');
		}
	} catch (error) {
		console.log(error);
	}
})

route.post('/delete/:id', async (req, res) => {
	try {
		let result = await Todo.findByIdAndDelete({_id : req.params.id});
		if(result) {
			res.json(result);
		}
		else{
			console.log(result);
		}
	} catch (error) {
		console.log(error)
	}

})
module.exports = route;


