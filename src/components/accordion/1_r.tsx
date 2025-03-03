import { useState } from "react";
import cx from "./cx";
import data from "./data";

const AccordionItem = ({ title, description, current, toggle }: { title: string; description: string; current: boolean; toggle: () => void }) => {
    return (
        <li className={cx('item', { current })}>
            <div className={cx('tab')} onClick={toggle}>{title}</div> 
            {current ? <div className={cx('description')}>{description}</div> : null}
        </li>
    )
}

const Accordion1 = () => {
    const [currentId, setCurrentId] = useState<string | null>(data[0].id);

    const toggleItem = (id: string) => () => {
        setCurrentId(prev => prev === id ? null : id);
    }
    return (
        <>
            <h3>#1. React</h3>
            <ul className={cx('container')}>
                {data.map(d => (
                    <AccordionItem key={d.id} title={d.title} description={d.description} toggle={toggleItem(d.id)} current={currentId === d.id} />
                ))}
            </ul>
        </>
    )
}

export default Accordion1;