import React from 'react';

function RecipeSteps(props) {
    const RecipeStepsItems = props.steps.map((step, index) => {
        return(
            <li key={index}>
                {step.text}
            </li>
        );
    });
    return (
        <ol>
            {RecipeStepsItems}
        </ol>
    );
}

export default RecipeSteps;