import icon01 from "./01.png";
import icon02 from "./02.png";
import icon03 from "./03.png";
import icon04 from "./04.png";
import icon05 from "./05.png";
import icon06 from "./06.png";
import icon07 from "./07.png";
import icon08 from "./08.png";
import icon09 from "./09.png";
// import icon10 from "./icons/10.png";
// import icon11 from "./icons/11.png";
// import icon12 from "./icons/12.png";

const icons1 = [
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

const icons2 = [icon01, icon02, icon03, icon04, icon05, icon06];
const hardIcons = icons1.reduce(function(res, current) {
  return res.concat([current, current]);
}, []);

const easyIcons = icons2.reduce(function(res, current) {
  return res.concat([current, current]);
}, []);

export { hardIcons, easyIcons };
