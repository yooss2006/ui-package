import TextBox1 from "@/components/textBox/1_r";
import cx from "./cx";
import TextBox2 from "@/components/textBox/2_r";

const TextBoxes = () => {
  return (
    <div className={cx("TextBoxes")}>
      <h2>텍스트박스</h2>
      <TextBox1 />
      <TextBox2 />
    </div>
  );
};

export default TextBoxes;
