import {IRecipe} from "../../models/IRecipe.ts";
import {FC} from "react";

type RecipesProps = {
    item?: IRecipe
}

const AuthRecipeComponent: FC<RecipesProps> = ({item}) => {
    return (
        <div>
            {item?.id}
        </div>
    );
};

export default AuthRecipeComponent;