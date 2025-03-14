import { home } from "./home";
import "./style.css";
import { createItem, itemActions } from "./item";
import { createDomElement } from "./displayItem";

let clean = createItem(
  "clean kitchen",
  "clean dishes, clean surfaces, clean floors",
  "high",
  "it will help make tomorrow easier",
  ["dishes", "floors", "counters", "trash"]
);

// console.log({
//   name: clean.name,
//   description: clean.description,
// });
home;
