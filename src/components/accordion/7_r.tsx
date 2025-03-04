import { useEffect, useRef, useState } from "react";
import cx from "./cx";
import data from "./data";

const AccordionItem = ({
  id,
  title,
  description,
  current,
  toggle,
}: {
  id: string;
  title: string;
  description: string;
  current: boolean;
  toggle: () => void;
}) => {
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descRef.current) {
      descRef.current.addEventListener("beforematch", toggle);
    }
    return () => {
      if (descRef.current) {
        descRef.current.removeEventListener("beforematch", toggle);
      }
    };
  });

  return (
    <li className={cx("item", "item3", { current })} key={id}>
      <div className={cx("tab")} onClick={toggle}>
        {title}
      </div>
      <div
        className={cx("description")}
        ref={descRef}
        HIDDEN={current ? undefined : "until-found"}
      >
        {description}
      </div>
    </li>
  );
};

const Accordion7 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id);

  const toggleItem = (id: string) => () => {
    setCurrentId((prev) => (prev === id ? null : id));
  };
  return (
    <>
      <h3>
        #7. React<sub>ctrl + f로 검색했을 떄 아코디언 확장</sub>
      </h3>
      <ul className={cx("container")}>
        {data.map((d) => (
          <AccordionItem
            {...d}
            key={d.id}
            toggle={toggleItem(d.id)}
            current={currentId === d.id}
          />
        ))}
      </ul>
    </>
  );
};

export default Accordion7;
