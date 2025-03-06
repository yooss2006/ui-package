import cx from "@/components/lineClamp/cx";
import data from "@/components/lineClamp/data";
import React, { useEffect, useRef, useState } from "react";

const LineClampedText = ({ text, lines }: { text: string; lines: number }) => {
  const elemRef = useRef<HTMLDivElement>(null);
  const cloneRef = useRef<HTMLDivElement>(null);
  const [isClamped, toggleClamped] = useState(true);

  useEffect(() => {
    if (text && elemRef.current && cloneRef.current) {
      toggleClamped(
        Math.floor(
          (cloneRef.current.offsetHeight - 20) /
            parseInt(getComputedStyle(elemRef.current).lineHeight)
        ) > (lines || 1)
      );
    }
  }, [lines]);
  return (
    <div className={cx("content", { clamped: isClamped })}>
      <div className={cx("text-clone")} ref={cloneRef}>
        {text}
      </div>
      <div
        className={cx("text")}
        ref={elemRef}
        style={{ WebkitLineClamp: lines }}
      >
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

const LineClamp2 = () => {
  return (
    <>
      <h3>
        #2<sub>clone - 3줄말줄임</sub>
      </h3>
      {data.map((data, i) => (
        <LineClampedText text={data} lines={5 - i} key={i} />
      ))}
    </>
  );
};

export default LineClamp2;
