import React, { useState } from "react";
import { Reusable } from "./Reusable";

const App = () => {
  const [isMounted, setIsMounted] = useState(true);
  const mount = () => setIsMounted(true);
  const unmount = () => setIsMounted(false);

  // Здесь делаем маунт/анмаунт компонента, чтобы смотреть,
  // как ведут себя юниты эффектора и их связи (sample'ы, вотчеры и т.д.)
  return (
    <div className="App">
      {isMounted && <button onClick={unmount}>unmount</button>}
      {!isMounted && <button onClick={mount}>mount</button>}
      <br />
      <br />
      {isMounted && <Reusable />}
    </div>
  );
};

export default App;
