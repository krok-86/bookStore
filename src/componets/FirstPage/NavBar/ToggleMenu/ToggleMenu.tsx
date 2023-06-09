import ToggleMenuStyled from "./ToggleMenuStyled";


const ToggleMenu = ({header: string, items: string}) => {
return (
    <ToggleMenuStyled>
<div className="Menu">
    <div className="Blur"/>
    <div className="MenuContent">
        <div className="MenuHeader">{header}</div>
        <ul>{items.map(item => 
            <li>
                <a href={item.href}>{item.value}</a>
                {/* <span className="">{item.icon}</span> */}
            </li>
            )}
            <li></li>
        </ul>
    </div>
</div>
    </ToggleMenuStyled>
)
}
export default ToggleMenu;