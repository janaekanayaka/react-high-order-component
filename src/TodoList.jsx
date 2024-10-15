import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetcTodos = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        setTodos(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetcTodos();
  }, []);

  const filteredData = todos.slice(0,10).filter((el) => {
    return el.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });

  return (
    <div>
    <p>You search for: {query}</p>
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    {filteredData.length === 0 ? (
      <h1>Data not found</h1>
    ) : (
      filteredData.map((value) => {
        return <p key={value.id}>{value.title}</p>;
      })
    )}
  </div>
  )
}

export default TodoList