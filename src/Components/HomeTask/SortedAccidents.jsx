import React from "react";
import { Accident } from "./Accident";

export const SortedAccidents = ({accidents, openAccident, setOpenAccident, setLocation}) => {
    
    const sortedAccidents = accidents.sort((a, b) => {
        return a.Ulykkesdato > b.Ulykkesdato ? -1 : 1
    })
    
    const accidentList = sortedAccidents.map(accident =>
        <Accident 
          key = {accident.OBJECTID}
          accident={accident} 
          openAccident={openAccident}
          setOpenAccident={setOpenAccident}
          setLocation={setLocation}
        />
    );
      
    return accidentList
    
}