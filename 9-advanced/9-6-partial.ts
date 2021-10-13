{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  function updateTodo(
    todo: Readonly<ToDo>,
    fieldsToUpdate: Partial<ToDo>
  ): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: ToDo = {
    title: "learn TypeScript",
    description: "study hard",
    label: "study",
    priority: "high",
  };

  const updatedTodo = updateTodo(todo, { label: "types", priority: "low" });
  console.log(updatedTodo);
}
