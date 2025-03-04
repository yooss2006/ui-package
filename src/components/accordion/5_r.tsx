import cx from "./cx";
import data from "./data";

const AccordionItem = ({
  id,
  title,
  description,
  initialChecked,
}: {
  id: string;
  title: string;
  description: string;
  initialChecked: boolean;
}) => {
  return (
    <li className={cx("item", "item5")}>
      <input
        type="radio"
        name="accordion"
        id={id}
        className={cx("input")}
        defaultChecked={initialChecked}
      />
      <label htmlFor={id} className={cx("tab")}>
        {title}
      </label>
      <div className={cx("description")}>{description}</div>
    </li>
  );
};

const Accordion5 = () => {
  return (
    <>
      <h3>
        #5. React<sub>HTML로 아코디언 UI 구현하기</sub>
      </h3>
      <ul className={cx("container")}>
        {data.map((d, i) => (
          <AccordionItem key={d.id} {...d} initialChecked={i === 0} />
        ))}
      </ul>
    </>
  );
};

export default Accordion5;
