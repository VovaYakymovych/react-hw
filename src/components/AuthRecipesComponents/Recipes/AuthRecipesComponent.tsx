import {useEffect, useState} from "react";
import {getAllRecipes, refreshTokens} from "../../../services/api.services.ts";
import {IRecipe} from "../../../models/IRecipe.ts";
import AuthRecipeComponent from "../Recipe/AuthRecipeComponent.tsx";
import PaginationComponent from "../../PaginationComponent/PaginationComponent.tsx";
import {useSearchParams} from "react-router-dom";
import './Recipes.css'

const AuthRecipesComponent = () => {

    const [query]=useSearchParams({page: '1'})
    const [recipes, setRecipes] = useState<IRecipe[]>([]);

    useEffect(() => {
        const currentPage =query.get('page') || '1'

        getAllRecipes(currentPage)
            .then(setRecipes)
            .catch(async (error) => {
                console.error("Initial fetch failed:", error);
                try {
                    await refreshTokens();
                    const refreshedRecipes = await getAllRecipes(currentPage);
                    setRecipes(refreshedRecipes);
                    console.log('Recipes successfully fetched after refreshing tokens');
                } catch (refreshError) {
                    console.error("Failed after refreshing token:", refreshError);
                }
            });
    }, [query]);


    return (
        <>
            <PaginationComponent/>
            <div className={'AllRecipes'}>
                {recipes.map(recipe => <AuthRecipeComponent item={recipe} key={recipe.id}/>)}
            </div>
            <PaginationComponent/>
        </>
    );
};

export default AuthRecipesComponent;