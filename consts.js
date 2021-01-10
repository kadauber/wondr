import * as apokalypsi from "./axiom_info/apokalypsi";
import * as automata from "./axiom_info/automata";
import * as epikrato from "./axiom_info/epikrato";

export const axioms = ["Apokalypsi", "Automata", "Epikrato"];

export const axiomDefs = {
  Apokalypsi: apokalypsi,
  Automata: automata,
  Epikrato: epikrato
};

export const sizeBonuses = {
  0: -2,
  1: -1,
  2: 0,
  4: 1,
  6: 2,
  12: 3,
  30: 4
};
