import React from "react";

const Settings = ({handleHeartChange}) => {
    return(
        <div className="setting">
            Hearts:
        <form onChange={handleHeartChange}>
            <input type="radio" name="heart" value={1}/>
            1
            <input type="radio" name="heart" value={3}/>
            3
            <input type="radio" name="heart" value={5}/>
            5
        </form>
        </div>
    )
}

export default Settings;