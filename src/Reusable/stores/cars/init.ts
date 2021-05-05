import { sample } from "effector";

import { formEvents, formStores } from "../form";
import { carsEffects, carsEvents } from "./index";

// после анмаунта все связи скоупа включая вотчеры уничтожатся
// ни один алерт не сработает

sample({
  source: carsEffects.fetchCarsFx.doneData,
  fn: (data) => {
    alert("sample");

    return data;
  },
  target: carsEvents.addCars,
});

sample({
  clock: formEvents.handleSubmit,
  source: formStores.inputValue,
  target: carsEvents.addCars,
});

carsEvents.addCars.watch(() => {
  alert("addCars");
});

carsEffects.fetchCarsFx.doneData.watch(() => {
  alert("fetchCarsFx");
});
