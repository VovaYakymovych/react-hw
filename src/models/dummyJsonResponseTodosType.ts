import {dummyJsonResponseType} from "./dummyJsonResponseType.ts";

export type TodosType = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export type dummyJsonResponseTodosType = dummyJsonResponseType & {
  todos: TodosType[];
}