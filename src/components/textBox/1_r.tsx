import React, { ChangeEvent, useState } from "react";
import cx from "./cx";
import { measureLines } from "@/components/textBox/utils";

const TextBox1 = () => {
  const [text, setText] = useState("");
  const [lines, setLines] = useState(3);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const elem = e.target;
    const val = elem.value;
    const lines = Math.min(Math.max(measureLines(elem, val), 3), 15);
    setText(val);
    setLines(lines);
  };
  return (
    <>
      <h3>
        #1 텍스트 박스<sub>controlled</sub>
        <div className={cx("container")}>
          <textarea
            className={cx("textarea")}
            onChange={handleChange}
            rows={lines}
            value={text}
          />
        </div>
      </h3>
    </>
  );
};

export default TextBox1;
