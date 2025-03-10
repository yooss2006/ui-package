import Tooltip4 from "@/components/tooltip/4_r";
import Tooltip1 from "./1_r";
import Tooltip2 from "./2_r";
import Tooltip3 from "./3_r";
import cx from "./cx";
import Tooltip5V from "@/components/tooltip/5_v";

const ToolTips = () => {
  return (
    <div className={cx("Tooltips")}>
      <h2>툴팁</h2>
      <Tooltip1 />
      <Tooltip2 />
      <Tooltip3 />
      <Tooltip4 />
      <Tooltip5V />
    </div>
  );
};

export default ToolTips;
