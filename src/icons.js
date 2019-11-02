import icon01 from "./icons/01.svg";
import icon02 from "./icons/02.svg";
import icon03 from "./icons/03.svg";
import icon04 from "./icons/04.svg";
import icon05 from "./icons/05.svg";
import icon06 from "./icons/06.svg";
import icon07 from "./icons/07.svg";
import icon08 from "./icons/08.svg";
import icon09 from "./icons/09.svg";
// import icon10 from "./icons/10.svg";
// import icon11 from "./icons/11.svg";
// import icon12 from "./icons/12.svg";

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
const allIcons = icons.reduce(function(res, current) {
  return res.concat([current, current]);
}, []);

export default allIcons;
