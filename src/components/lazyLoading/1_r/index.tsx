import React, { useEffect, useRef, useState } from "react";
import data from "../data";
import cx from "../cx";
import useIntersctionObserver from "../useIntersectionObserver";

const ioOptions: IntersectionObserverInit = {
  threshold: 0,
};

const LazyImage = ({
  src,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setloaded] = useState(false);
  const { entries, observerRef } = useIntersctionObserver(imgRef, ioOptions);

  useEffect(() => {
    if ("loading" in HTMLImageElement.prototype) {
      imgRef.current!.setAttribute("src", src);
      imgRef.current!.setAttribute("loading", "lazy");
      observerRef.current?.disconnect();
      return;
    }

    const isVisible = entries[0]?.isIntersecting;
    if (isVisible) {
      const onLoad = () => {
        setloaded(true);
      };
      imgRef.current!.addEventListener("load", onLoad, { once: true });
      imgRef.current!.setAttribute("src", src);
      observerRef.current?.disconnect();
    }
  }, [src, entries]);

  return (
    <div>
      <img
        ref={imgRef}
        className={cx({ lazy: !loaded })}
        width={width}
        height={height}
        alt=""
      />
    </div>
  );
};

const LazyLoad1 = () => {
  return (
    <>
      <h2>
        지연로딩<sub>#1</sub>
      </h2>
      {data.map((url, index) => (
        <LazyImage src={url} key={index} width={600} height={300} />
      ))}
    </>
  );
};

export default LazyLoad1;
