import React, { ChangeEvent, FunctionComponent, useState } from "react";

interface ToDo {
  name: string;
  done: boolean;
}

const Page: FunctionComponent = () => {
  const [toDos, setToDos] = useState<ToDo[]>([
    { name: "Kaffee kochen", done: false },
    { name: "Rechnung schreiben", done: false },
  ]);
  const [todoName, setToDoName] = useState<string>("");

  const handleToDoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setToDoName(value);
  };

  const handleToDoAdd = () => {
    if (todoName.length === 0) return;

    setToDos([
      ...toDos,
      {
        name: todoName,
        done: false,
      },
    ]);
  };

  const handleDone = (toDo: ToDo) => {
    const newTodos = [...toDos];
    const index = toDos.indexOf(toDo);
    newTodos[index].done = !newTodos[index].done;

    setToDos(newTodos);
  };

  return (
    <main>
      <section>
        <input onChange={handleToDoChange} placeholder="ToDo hier eintragen" />
        <button type="button" onClick={handleToDoAdd}>
          Hinzufügen
        </button>
      </section>

      <ul>
        {toDos.map((x, i) => (
          <li key={i}>
            <span
              style={{
                textDecoration: x.done ? "line-through" : "",
              }}
            >
              {x.name}
            </span>{" "}
            <button onClick={() => handleDone(x)}>
              {x.done ? "Nicht erledigt" : "Erledigt"}
            </button>
          </li>
        ))}
      </ul>

      <section>
        Heute stehen {toDos.filter((x) => !x.done).length} ToDos an!
      </section>
    </main>
  );
};

export default Page;
