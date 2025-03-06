import LineClamp1 from "@/components/lineClamp/1_r";
import cx from "./cx";
import LineClamp2 from "@/components/lineClamp/2_r";
import LineClamp3_V from "@/components/lineClamp/3_v";

const LineClamps = () => {
  return (
    <div className={cx("LineClamps")}>
      <h2>라인클램프</h2>
      <LineClamp1 />
      <LineClamp2 />
      <LineClamp3_V />
    </div>
  );
};

export default LineClamps;
