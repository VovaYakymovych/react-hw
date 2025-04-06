export type TodosType = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export type dummyJsonResponseTodosType = {
  todos: TodosType[];
  total: number;
  skip: number;
  limit: number;
}