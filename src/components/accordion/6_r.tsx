import cx from "./cx";
import data from "./data";

const AccordionItem = ({
  title,
  description,
  open,
}: {
  title: string;
  description: string;
  open: boolean;
}) => {
  return (
    <details name="test" className={cx("item", "item6")} open={open}>
      <summary>{title}</summary>
      <div className={cx("description")}>{description}</div>
    </details>
  );
};

const Accordion6 = () => {
  return (
    <>
      <h3>
        #6. React<sub>details와 summary 태그 사용</sub>
      </h3>
      <div>
        {data.map((item, index) => (
          <AccordionItem {...item} key={item.id} open={index === 0} />
        ))}
      </div>
    </>
  );
};

export default Accordion6;
