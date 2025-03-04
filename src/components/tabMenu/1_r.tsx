import { useState } from "react";
import cx from "./cx";
import data from "./data";

const TabItem = ({
  title,
  current,
  toggle,
}: {
  title: string;
  current: boolean;
  toggle: () => void;
}) => {
  return (
    <li className={cx("tab", { current })} onClick={toggle}>
      {title}
    </li>
  );
};

const TabMenu1 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toggleItem = (id: string) => () => {
    setCurrentId((prev) => (prev === id ? null : id));
  };

  const currentDescription =
    data.find((item) => item.id === currentId)?.description || "";

  return (
    <>
      <h3>#1. React</h3>
      <div className={cx("container")}>
        <ul className={cx("tabList")}>
          {data.map((d) => (
            <TabItem
              key={d.id}
              title={d.title}
              toggle={toggleItem(d.id)}
              current={currentId === d.id}
            />
          ))}
        </ul>
        <div className={cx("description")}>{currentDescription}</div>
      </div>
    </>
  );
};

export default TabMenu1;
