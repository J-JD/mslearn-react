import './index.css'
import React from 'react';
// TODO: Import RecipeTitle
import RecipeTitle from './RecipeTitle';
// TODO: Import IngredientList
import IngredientList from './IngredientList';
// TODO: Import RecipeSteps
import RecipeSteps from './RecipeSteps';

function App() {
    // TODO: Add recipe object
    const recipe = {
        title: "Mashed potatoes",
        feedback: {
            rating: 4.8,
            reviews: 20,
        },
        ingredients: [
            { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
            { name: '4 Tbsp butter', prepared: false },
            { name: '1/8 cup heavy cream', prepared: false },
            { name: 'Salt', prepared: true },
            { name: 'Pepper', prepared: true },
        ],
        steps: [
            { step: 1, text:'Add cut potatoes to a pot of heavily salted water.'},
            { step: 2, text:'Bring pot to a boil.'},
            { step: 3, text:'Boil the potatoes until fork tender, about 15-20 minutes.'},
            { step: 4, text:'Strain the potatoes.'},
            { step: 5, text:'Return potatoes to pot.'},
            { step: 6, text:'Add butter, cream, salt, and pepper to taste.'},
            { step: 7, text:'Mash potatoes.'},
            { step: 8, text:'Reseason and add butter and cream as desired.'},
        ],
    };

    return (
        <article>
            <h1>Recipe Manager</h1>
            {/* TODO: Add RecipeTitle component */}
            <RecipeTitle title={recipe.title} feedback={recipe.feedback} />
            {/* TODO: Add IngredientList component */}
            <IngredientList ingredients={recipe.ingredients} />
            {/* TODO: Add RecipeSteps component */}
            <RecipeSteps steps={recipe.steps}/>
        </article>
    )
}

export default App;
