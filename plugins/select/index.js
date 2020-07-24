import { Select } from "./select/select";
import "./select/styles.scss";

const select = new Select("#select", {
  placeholder: "Выберите элемент",
  data: [
    {
      id: "1",
      value: "HTML5",
    },
    {
      id: "2",
      value: "CSS3",
    },
    {
      id: "3",
      value: "JavaScript",
    },
    {
      id: "4",
      value: "React",
    },
    {
      id: "5",
      value: "Redux",
    },
    {
      id: "6",
      value: "Git",
    },
  ],
  onSelect(item) {
    console.log(" Selected Item :>> ", item);
  },
});

window.s = select;
