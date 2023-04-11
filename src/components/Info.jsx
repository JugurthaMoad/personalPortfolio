import { useState } from "react";

import Projects from "./Projects";
import Presentation from "./Presentation";
import Item1 from "./Item1";
import Item4 from "./Item4";
import Item3 from "./Item3";
import Item2 from "./Item2";
import Item5 from "./Item5";

const items = [
  {
    title: "Copy of pomofocus.io",
    item: () => <Item1 />,
  },
  {
    title: "Barber shop",
    item: () => <Item2 />,
  },
  {
    title: "E-Store",
    item: () => <Item3 />,
  },
  {
    title: "AouriMed",
    item: () => <Item4 />,
  },
  {
    title: "Zerda game",
    item: () => <Item5 />,
  },
];
console.log('items = ', items)
const Info = () => {
  // by default display the biblio otherwise elmt passed in props
  const [change, setChange] = useState(false);
  const [clicker, setClicker] = useState(-1);
  const [choice, setChoice] = useState(false);
  const [element, setElement] = useState({});
  const handleChange = (id) => {
    if (id === clicker) {
      setChange(false);
      setChoice(!choice);
    } else {
      setChange(!change);
      setChoice(true);
    }
    setElement(items[id]);
    setClicker(id);
  };
  return (
    <div className="sub_content">
      <div className="content">
        <Presentation change={change} choice={choice} element={element} />
        <Projects handleChange={handleChange} />
      </div>
    </div>
  );
};

export default Info;
