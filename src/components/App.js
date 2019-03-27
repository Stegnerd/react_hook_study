import React, { useState } from "react";

import ResourceList from "./ResourceList";

const App = () => {
  // gives us state context in a hook
  // [ current value, how to set current value]
  const [resource, setResource] = useState("posts");

  return (
    <div>
      <div>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
