import cx from "@/components/lineClamp/cx";
import data from "@/components/lineClamp/data";
import { measureLines } from "@/components/lineClamp/utils";
import React, { useEffect, useRef, useState } from "react";

const LineClampedText = ({ text }: { text: string }) => {
  const elemRef = useRef<HTMLDivElement>(null);
  const [isClamped, toggleClamped] = useState(true);

  useEffect(() => {
    if (text && elemRef.current) {
      const measuredLines = measureLines(elemRef.current, text);
      toggleClamped(measuredLines > 3);
    }
  }, [text]);
  return (
    <div className={cx("content", { clamped: isClamped })}>
      <div className={cx("text")} ref={elemRef} style={{ WebkitLineClamp: 3 }}>
        {text}
      </div>
      {isClamped && (
        <button
          className={cx("buttonMore")}
          onClick={() => toggleClamped(false)}
        />
      )}
    </div>
  );
};

const LineClamp1 = () => {
  return (
    <>
      <h3>
        #1<sub>canvas - 3줄말줄임</sub>
      </h3>
      {data.map((data, i) => (
        <LineClampedText text={data} key={i} />
      ))}
    </>
  );
};

export default LineClamp1;
