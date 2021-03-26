const express = require('express');
const Fruits = require('./fruits-model');

const router = express.Router();

router.get('/', (req, res) => {
	Fruits.get()
		.then((fruits) => {
			res.json(fruits);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to retrieve fruits' });
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;

	Fruits.getById(id)
		.then((fruit) => {
			res.json(fruit);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to retrieve fruit' });
		});
});

router.post('/', (req, res) => {
	const fruitData = req.body;
	Fruits.create(fruitData)
		.then((newFruit) => {
			res.status(201).json(newFruit);
		})
		.catch((err) => {
			console.log('POST error', err);
			res.status(500).json({ message: 'Failed to store data' });
		});
});

module.exports = router;
