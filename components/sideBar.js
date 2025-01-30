import React, { useState } from "react";

function Sidebar({ addBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleAdd = () => {
    if (title && author) {
      addBook({ title, author });
      setTitle("");
      setAuthor("");
    }
  };

  return (
    <div style={{ padding: "10px", borderRight: "1px solid gray" }}>
      <h3>Add a Book</h3>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginBottom: "10px", display: "block" }}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{ marginBottom: "10px", display: "block" }}
      />
      <button onClick={handleAdd}>Add Book</button>
    </div>
  );
}

export default Sidebar;