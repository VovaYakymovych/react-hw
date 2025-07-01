import {IRecipe} from "../../models/IRecipe.ts";
import {FC} from "react";

type RecipesProps = {
    item?: IRecipe
}

const AuthRecipeComponent: FC<RecipesProps> = ({item}) => {
    return (
        <div>
            {item?.id} - {item?.name}
        </div>
    );
};

export default AuthRecipeComponent;