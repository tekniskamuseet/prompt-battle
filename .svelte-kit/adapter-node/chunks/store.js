import { w as writable } from "./index.js";
const user = writable("");
const colorizedBackground = writable(false);
const theme = writable("orange");
export {
  colorizedBackground as c,
  theme as t,
  user as u
};
