import { sort } from "../../../../constants";
import SortBlockStyled from "./SortBlockStyled";


const SortBlock = () => {
    return (
        <SortBlockStyled>
            <div className="Sort">
                {sort.map((item) => (
                    <div className={item.class}>{item.title}</div>
                ))}                
            </div>
        </SortBlockStyled>
    )
}

export default SortBlock;