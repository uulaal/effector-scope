import React from "react";
import { restore } from "effector";

import { app } from "../app";

const handleSubmit = app.createEvent<React.FormEvent>();
const resetForm = app.createEvent();

const handleInputChange = app.createEvent<
  React.ChangeEvent<HTMLInputElement>
>();
const setInputValue = handleInputChange.map((e) => e.target.value);
const inputValue = restore(setInputValue, "").reset(resetForm);

handleSubmit.watch((e) => {
  e.preventDefault();
  resetForm();
});

export const formEvents = {
  handleSubmit,
  resetForm,
  handleInputChange,
};
export const formStores = {
  inputValue,
};
