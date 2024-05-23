import "./bean-separator.scss";
import bean_black from "../../resources/icons/beans-solid-black.svg";
import bean_white from "../../resources/icons/beans-solid-white.svg";


export default function BeanSepator({theme}) {
  return (
    <div className={"bean-separator bean-separator_" + theme}>
      <img src={theme === "black" ? bean_black : bean_white} alt="bean sepator" />
    </div>
  );
}