const { Router } = require('express');
const express = require('express');

const route = express.Router();

const Todo = require('../models/TodoSchema');

route.get('/', async (req, res) => {
	try {
		const result = await Todo.find({});
		if (result) {
			console.log(result);
		} else {
			console.log('no result');
		}
	} catch (err) {
		console.log(err);
	}
});

route.post('/add', async (req, res) => {
	try {
		// accessing data from headers using req.body
		let title = req.body.title;
		let description = req.body.description;

		//creating instance of todo mongo model
		const newTodo = new Todo({
			title: title,
			description: description,
		});

		//saving data using save function of mongo model instance
		const result = await newTodo.save();
		if (result) {
			console.log(result);
		} else {
			console.log('something went wrong');
		}
	} catch (err) {
		console.log(err);
	}
});

route.post('/edit/:id', async (req, res) => {
	try {
		let title = req.body.title;
		let description = req.body.description;

		const result = await Todo.findByIdAndUpdate(
			{ _id: req.params.id },
			{
				$set: {
					title: title,
					description: description,
				},
			}
		);
		if (result) {
			console.log(result);
		} else {
			console.log('no todo found');
		}
	} catch (err) {
		console.log(err);
	}
});

route.post('/delete/:id', async (req, res) => {
	try {
		const result = await Todo.findByIdAndDelete({ _id: req.params.id });

		if (result) {
			console.log(result);
		} else {
			console.log(result);
		}
	} catch (err) {
		console.log(err);
	}
});

module.exports = route;