import { useStore, useEvent } from "effector-react/ssr";
import { carsEffects, carsStores } from "../stores/cars";

export const Cars = () => {
  const cars = useStore(carsStores.cars);
  // самый большой минус - все эффекты и ивенты можно использовать только через хук useEvent
  const fetchCarsFx = useEvent(carsEffects.fetchCarsFx);
  const isLoading = useStore(carsEffects.fetchCarsFx.pending);

  return (
    <div>
      <button onClick={fetchCarsFx}>fetch cars</button>
      {isLoading && " loading..."}
      <h1>Cars</h1>
      {cars.map((car, i) => (
        <h3 key={i}>{car}</h3>
      ))}
    </div>
  );
};
