const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 5000;

app.use(cors());
app.use(express.json());

let recipes = [
  {
    id: 1,
    name: 'Pasta Carbonara',
    ingredients: ['Spaghetti', 'Eggs', 'Bacon', 'Parmesan Cheese'],
    instructions: 'Cook spaghetti. Mix eggs, bacon, and cheese. Combine and serve.'
  },
  {
    id: 2,
    name: 'Chicken Tikka Masala',
    ingredients: ['Chicken', 'Tomato Sauce', 'Yogurt', 'Spices'],
    instructions: 'Marinate chicken. Cook with tomato sauce and spices. Add yogurt. Serve hot.'
  },
  {
    id: 3,
    name: 'Maggi',
    ingredients: ['Noodles', 'Water', 'Maggi Masala', 'Veggies'],
    instructions: 'Boil water around 5mins add Noodles and Maggi Masala and let it boil for 5mins. Serve it.'
  },
  {
    id: 4,
    name: 'Tea',
    ingredients: ['Milk', 'Water', 'Tea powder', 'Sugar'],
    instructions: 'Add water, tea powder, milk, sugar as needed and let it boil for 5mins. Serve it.'
  },
  {
    id: 5,
    name: 'Coffee',
    ingredients: ['Milk', 'Water', 'Coffee powder', 'Sugar'],
    instructions: 'Add water, coffee powder, milk, sugar as needed and let it boil for 5mins. Serve it.'
  },
  {
    id: 6,
    name: 'Egg Omelette',
    ingredients: ['Egg', 'Chilli Powder', 'Oil', 'Veggies', 'Salt'],
    instructions: 'Heat the pan, mix the ingredients in a bowl and add to pan, heat it until it turns golden brown. Serve it.'
  }
];

app.get('/', (req, res) => {
  res.json({ recipes });
});

app.post('/', (req, res) => {
  const { id, name, ingredients, instructions } = req.body;
  try {
    const newRecipe = { id, name, ingredients, instructions };
    recipes.push(newRecipe);
    res.json({ recipes });
  } catch (error) {
    res.json({ error: error.message });
  }
});

app.delete('/:id', (req, res) => {
  const recipeIndex = recipes.findIndex(r => r.id === parseInt(req.params.id));
  if (recipeIndex === -1) return res.status(404).send('Recipe not found');

  recipes.splice(recipeIndex, 1);
  res.status(204).send();
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
