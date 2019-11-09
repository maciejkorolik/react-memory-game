import icon01 from "./01.svg";
import icon02 from "./02.svg";
import icon03 from "./03.svg";
import icon04 from "./04.svg";
import icon05 from "./05.svg";
import icon06 from "./06.svg";
import icon07 from "./07.svg";
import icon08 from "./08.svg";
import icon09 from "./09.svg";
// import icon10 from "./icons/10.svg";
// import icon11 from "./icons/11.svg";
// import icon12 from "./icons/12.svg";

import shuffle from "lodash.shuffle";

const icons = [
  icon01,
  icon02,
  icon03,
  icon04,
  icon05,
  icon06,
  icon07,
  icon08,
  icon09
];
const hard = icons.reduce(function(res, current) {
  return res.concat([current, current]);
}, []);

const easy = icons.reduce(function(res, current) {
  return res.concat([current, current]);
}, []);

const easyIcons = shuffle(easy);
const hardIcons = shuffle(hard);

export { hardIcons, easyIcons };
