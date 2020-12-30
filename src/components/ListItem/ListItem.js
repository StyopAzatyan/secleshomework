import { React } from "react";
import "./ListItem.css";
import picture from "../../assets/1_LjR0UrFB2a__5h1DWqzstA.png";

let ListItem=() => {
    return (
        <li>
            <img src={picture} alt="JSpicture" className="ListItemPicture"/>
            <div className="ListItemDiv">
                <p className="firstOfP">Title</p>
                <p className="secondOfP">Description</p>
            </div>
            <button className="button">Buy</button>
        </li>
    );

}
export default ListItem;