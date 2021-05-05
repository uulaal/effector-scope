import { useEffect, useMemo } from "react";
import { clearNode, fork } from "effector";
import { Provider } from "effector-react/ssr";
import { app } from "./stores/app";
import { Cars } from "./components/Cars";
import { Form } from "./components/Form";

import "./stores/init";

// Это главный компонент, который при маунте создает скоуп стейта с начальным состоянием
export const Reusable = () => {
  // при маунте создаем инстанс стейта (скоуп) с начальным состоянием
  const scope = useMemo(() => fork(app), []);

  useEffect(() => {
    // при анмаунте затираем скоуп. Затираются все юниты и их связи внутри этого скоупа
    return () => clearNode(scope, { deep: true });
  }, [scope]);

  return (
    // Через провайдер прокидываем текущий скоуп в дочерние компоненты
    <Provider value={scope}>
      <Form />
      <br />
      <Cars />
    </Provider>
  );
};
