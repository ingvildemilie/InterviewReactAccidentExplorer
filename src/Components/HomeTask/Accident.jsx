import React from "react";
import { ExpandableButton } from "./ExpandableButton";
import { ExpandAccident } from "./ExpandAccident";
import { useState } from "react";

export const Accident = ({accident, openAccident, setOpenAccident, setLocation}) => {
    
    const [open, setOpen] = useState(false)

    function handleToggle() {
        setOpen(!open)
        setOpenAccident(accident.OBJECTID)
    }

    const dateString = (date) => {
        let newDate = new Date(date)
        let datetime = newDate.toLocaleDateString() + ", " + newDate.toLocaleTimeString()
        return datetime
    }

    return (
        <div key={accident.OBJECTID} className="list-box">
            <div className="list-box-parent">
            <ExpandableButton 
                onClick={handleToggle} 
                openAccident={openAccident}
                open={open}
                />
            <h3> {accident.Kommunenavn + " " + dateString(accident.Ulykkesdato)} </h3>
          </div>
          <div className="list-box-child">
          {openAccident === accident.OBJECTID && open ? <ExpandAccident accident={accident} setLocation={setLocation}/> : null}
          </div>
        </div>
    );
      
    
    
}