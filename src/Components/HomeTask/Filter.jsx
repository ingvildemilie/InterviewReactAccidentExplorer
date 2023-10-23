import React from "react";

export const Filter = ({setFilter})  => {
    
    return (
        <select 
            onChange={(e) => setFilter(e.target.value)}
            aria-label='Filtrer på fartsgrense'>
            <option value="Alle">Vis alt</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
            <option value="90">90</option>
            <option value="100">100</option>
            <option value="110">110</option>
        </select>
    )
}