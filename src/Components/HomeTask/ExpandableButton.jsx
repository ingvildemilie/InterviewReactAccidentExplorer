import React, { useCallback, useState } from "react";

export const ExpandableButton = ({onClick, open}) => {

    return (
        <button onClick={onClick} className="expandable-button">
            <span className="material-symbols-outlined" 
            style= {{
                transform:`rotate(${open ? 0 : 180}deg)`,
                transition: "all 0.25s",
            }}>
                expand_more
            </span>
        </button>
    )
}
