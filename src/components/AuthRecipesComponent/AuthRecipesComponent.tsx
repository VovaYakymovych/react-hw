import {useEffect, useState} from "react";
import {getAllRecipes} from "../../services/api.services.ts";
import {IRecipe} from "../../models/IRecipe.ts";
import AuthRecipeComponent from "../AuthRecipeComponent/AuthRecipeComponent.tsx";
import PaginationComponent from "../PaginationComponent/PaginationComponent.tsx";

const AuthRecipesComponent = () => {

    const [recipes, setRecipes] = useState<IRecipe[]>([]);

    useEffect(()=> {
        getAllRecipes().then(response => setRecipes(response))
    }, []);

    return (
        <>
            <div>
                {recipes.map(recipe => <AuthRecipeComponent item={recipe} key={recipe.id}/>)}
            </div>
            <PaginationComponent/>
        </>
    );
};

export default AuthRecipesComponent;