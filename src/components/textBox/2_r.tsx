import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import cx from "./cx";
import { measureLines } from "@/components/textBox/utils";

const TextBox2 = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const elem = textareaRef.current;
    const handleInput = () => {
      if (!elem) return;
      const val = elem.value;
      const lines = Math.min(Math.max(measureLines(elem, val), 3), 15);
      elem.rows = lines;
    };

    if (elem) elem.addEventListener("input", handleInput);

    return () => {
      if (elem) elem.removeEventListener("input", handleInput);
    };
  }, []);

  return (
    <>
      <h3>
        #2 텍스트 박스<sub>uncontrolled</sub>
        <div className={cx("container")}>
          <textarea ref={textareaRef} className={cx("textarea")} rows={3} />
        </div>
      </h3>
    </>
  );
};

export default TextBox2;
