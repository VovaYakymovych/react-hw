import {IRecipe} from "../../../models/IRecipe.ts";
import {FC} from "react";
import './Recipe.css'

type RecipesProps = {
    item?: IRecipe
}

const AuthRecipeComponent: FC<RecipesProps> = ({item}) => {
    return (
        <div className={'RecipeWrapper'}>

            <div className={'recipeNameImgDiv'}>
                <h2>{item?.name}</h2>
                <img src={item?.image} alt={item?.name}/>
            </div>

            <div className={'recipeInfoDiv'}>
                <p><strong>ID:</strong> {item?.id}</p>
                <p><strong>Prep Time:</strong> {item?.prepTimeMinutes} min</p>
                <p><strong>Cook Time:</strong> {item?.cookTimeMinutes} min</p>
                <p><strong>Servings:</strong> {item?.servings}</p>
                <p><strong>Difficulty:</strong> {item?.difficulty}</p>
                <p><strong>Cuisine:</strong> {item?.cuisine}</p>
                <p><strong>Calories / Serving:</strong> {item?.caloriesPerServing}</p>
                <p><strong>User ID:</strong> {item?.userId}</p>
                <p><strong>Rating:</strong> {item?.rating} ⭐ ({item?.reviewCount} reviews)</p>
                <p><strong>Meal Type:</strong> {item?.mealType.join(', ')}</p>
                <p><strong>Tags:</strong> {item?.tags.join(', ')}</p>
            </div>

            <div className={'recipeListDiv'}>
                <h4>Ingredients:</h4>
                <ul>
                    {item?.ingredients.map((ingredient, index) => (
                        <li key={index}>- {ingredient}</li>
                    ))}
                </ul>
            </div>

            <div className={'recipeListDiv'}>
                <h4>Instructions:</h4>
                <ul>
                    {item?.instructions.map((step, index) => (
                        <li key={index}>{index + 1}. {step}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AuthRecipeComponent;