import { useState } from "react";
import cx from "./cx";
import data from "./data";

const TabItem = ({
  title,
  current,
  description,
  toggle,
}: {
  title: string;
  current: boolean;
  description: string;
  toggle: () => void;
}) => {
  return (
    <li className={cx("item", { current })}>
      <div className={cx("tab")} onClick={toggle}>
        {title}
      </div>
      <div className={cx("description")}>{description}</div>
    </li>
  );
};

const TabMenu3 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toggleItem = (id: string) => () => {
    setCurrentId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <h3>
        #3. React
        <sub>한 li안에 title/desc 모두 있게 처리</sub>
      </h3>
      <ul className={cx("container", "tabMenu3")}>
        {data.map((d) => (
          <TabItem
            key={d.id}
            title={d.title}
            description={d.description}
            toggle={toggleItem(d.id)}
            current={currentId === d.id}
          />
        ))}
      </ul>
    </>
  );
};

export default TabMenu3;
