import React, {useState} from "react";

interface Props {
    items: string[];
    heading: String;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {

    let [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No items to display</p>}
            <ul className="list-group">
                {items.map((item, index) =>
                    <li className={selectedIndex == index ? "list-group-item active" : "list-group-item"} key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item)
                        }}>{item}</li>)}
            </ul>
        </>
    )
}

export default ListGroup;