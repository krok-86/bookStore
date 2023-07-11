import { sort } from "../../../../constants";
import SortBlockStyled from "./SortBlockStyled";


const SortBlock = () => {
    return (
        <SortBlockStyled>
            <div className="Sort">
                {sort.map((item,index) => (
                    <div className={item.class} key={index}>{item.title}</div>
                ))}                
            </div>
        </SortBlockStyled>
    )
}

export default SortBlock;