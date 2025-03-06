import React, { ChangeEvent, useState } from "react";
import cx from "./cx";

const measureLines = (elem: HTMLTextAreaElement, val: string) => {
  if (!elem || !val) return 0;

  const canvas = document.createElement("canvas");
  const canvasContext: CanvasRenderingContext2D = canvas.getContext("2d")!;
  const style = window.getComputedStyle(elem);
  canvasContext.font = `${style.getPropertyValue(
    "font-size"
  )} ${style.getPropertyValue("font-family")}`;
  const measuredLines = val.split("\n").reduce((r, c) => {
    return (
      r +
      Math.max(
        Math.ceil(canvasContext.measureText(c).width / elem!.offsetWidth),
        1
      )
    );
  }, 0);
  return measuredLines;
};

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
