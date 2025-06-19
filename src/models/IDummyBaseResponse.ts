import {IRecipe} from "./IRecipe.ts";

export interface IDummyBaseResponse {
  recipes: IRecipe[];
  total: number;
  skip: number;
  limit: number;
}