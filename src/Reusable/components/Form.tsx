import { useStore, useEvent } from "effector-react/ssr";
import { formEvents, formStores } from "../stores/form";

export const Form = () => {
  const inputValue = useStore(formStores.inputValue);
  // самый большой минус - все эффекты и ивенты можно использовать только через хук useEvent
  const handleInputChange = useEvent(formEvents.handleInputChange);
  const handleSubmit = useEvent(formEvents.handleSubmit);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} value={inputValue} />
        <button type="submit">add car</button>
      </form>
    </div>
  );
};
