const express = require('express');
const app = express();
const cors = require('cors');
const mongoose=require('mongoose')

const PORT = 5000;

mongoose.connect("mongodb://localhost:27017/recipeFinder")
.then(()=>{console.log("Connected to MongoDB")})
.catch((err)=>console.log("Mongo Err",err))

app.use(cors());
app.use(express.json());

const recipeSchema=new mongoose.Schema({
  Recipe_name:{
    type: String,
    required:true,
  },
  ingredients:{
    type: String,
    required:true,
  },
  instructions:{
    type: String,
    required:true,
  }
})

const Recipe=mongoose.model('recipe',recipeSchema)

let recipes = [
  {
    id: 1,
    Recipe_name: 'Pasta Carbonara',
    ingredients: ['Spaghetti', 'Eggs', 'Bacon', 'Parmesan Cheese'],
    instructions: 'Cook spaghetti. Mix eggs, bacon, and cheese. Combine and serve.'
  },
  {
    id: 2,
    Recipe_name: 'Chicken Tikka Masala',
    ingredients: ['Chicken', 'Tomato Sauce', 'Yogurt', 'Spices'],
    instructions: 'Marinate chicken. Cook with tomato sauce and spices. Add yogurt. Serve hot.'
  },
  {
    id: 3,
    Recipe_name: 'Maggi',
    ingredients: ['Noodles', 'Water', 'Maggi Masala', 'Veggies'],
    instructions: 'Boil water around 5mins add Noodles and Maggi Masala and let it boil for 5mins. Serve it.'
  },
  {
    id: 4,
    Recipe_name: 'Tea',
    ingredients: ['Milk', 'Water', 'Tea powder', 'Sugar'],
    instructions: 'Add water, tea powder, milk, sugar as needed and let it boil for 5mins. Serve it.'
  },
  {
    id: 5,
    Recipe_name: 'Coffee',
    ingredients: ['Milk', 'Water', 'Coffee powder', 'Sugar'],
    instructions: 'Add water, coffee powder, milk, sugar as needed and let it boil for 5mins. Serve it.'
  },
  {
    Recipe_name: 6,
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
    console.log(recipes)
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
