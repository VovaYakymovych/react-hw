import {useEffect, useState} from "react";
import {getAllRecipes, refreshTokens} from "../../services/api.services.ts";
import {IRecipe} from "../../models/IRecipe.ts";
import AuthRecipeComponent from "../AuthRecipeComponent/AuthRecipeComponent.tsx";
import PaginationComponent from "../PaginationComponent/PaginationComponent.tsx";

const AuthRecipesComponent = () => {

    const [recipes, setRecipes] = useState<IRecipe[]>([]);

    useEffect(() => {
        getAllRecipes()
            .then(setRecipes)
            .catch(async (error) => {
                console.error("Initial fetch failed:", error);
                try {
                    await refreshTokens();
                    const refreshedRecipes = await getAllRecipes();
                    setRecipes(refreshedRecipes);
                } catch (refreshError) {
                    console.error("Failed after refreshing token:", refreshError);
                }
            });
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