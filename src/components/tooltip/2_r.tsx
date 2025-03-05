import React, { SyntheticEvent, useEffect } from "react";
import SingleOpenContextProvider, { useSingleOpen } from "./singleOpenContext";
import cx from "./cx";
import data from "./data";

const Tooltip = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  const [isOpen, toggle] = useSingleOpen(id);
  const handleClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    toggle((p) => (p === id ? null : id));
  };

  useEffect(() => {
    const close = () => toggle(null);
    if (isOpen) {
      window.addEventListener("click", close, { once: true });
    }

    return () => {
      window.removeEventListener("click", close);
    };
  }, [isOpen, toggle]);

  return (
    <div className={cx("container")}>
      <button className={cx("trigger")} onClick={handleClick}>
        {title}
      </button>
      {isOpen && (
        <div className={cx("tooltip")} onClick={(e) => e.stopPropagation()}>
          {description}
        </div>
      )}
    </div>
  );
};

const Tooltip2 = () => {
  return (
    <>
      <h3>
        #2. React<sub>하나만 열리는 tooltip</sub>
      </h3>
      <SingleOpenContextProvider>
        {data.map((d) => (
          <Tooltip {...d} key={d.id} />
        ))}
      </SingleOpenContextProvider>
    </>
  );
};

export default Tooltip2;
