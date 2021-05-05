import { app } from "../app";

const fetchCarsFx = app.createEffect(
  (_: any): Promise<string[]> =>
    new Promise((rs) => setTimeout(rs, 2000, ["fetched bmw"]))
);
const addCars = app.createEvent<string[] | string>();
const cars = app
  .createStore<string[]>([])
  .on(addCars, (currentCars, newCars) => currentCars.concat(newCars));

export const carsEvents = {
  addCars,
};
export const carsEffects = {
  fetchCarsFx,
};
export const carsStores = {
  cars,
};
