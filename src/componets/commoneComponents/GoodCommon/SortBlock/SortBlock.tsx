import { sort } from "../../../../constants";
import { useState } from "react";
import SortBlockStyled from "./SortBlockStyled";


const SortBlock = () => {
    const [sortButton, setSortButton] = useState(1);
    const changeSortButton = (index) => {
        if (index !== 0) {
            setSortButton(index)
        }
    }
    return (
        <SortBlockStyled>
            <div className="Sort">
                {sort.map((item, index) => (
                    <div
                        className={sortButton === index ? "Show" : ""}
                        onClick={() => changeSortButton(index)}
                        key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </SortBlockStyled>
    )
}

export default SortBlock;