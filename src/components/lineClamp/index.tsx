import LineClamp1 from "@/components/lineClamp/1_r";
import cx from "./cx";
import LineClamp2 from "@/components/lineClamp/2_r";

const LineClamps = () => {
  return (
    <div className={cx("LineClamps")}>
      <h2>라인클램프</h2>
      <LineClamp1 />
      <LineClamp2 />
    </div>
  );
};

export default LineClamps;
