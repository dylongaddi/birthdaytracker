import React from "react";
import Birthday from "./Birthday"
//list of bdays to be sent to be rendered

function BirthdayList ({ birthdays }) {
    return (
        <ul>
            {birthdays.map(birthday => (
                <Birthday key={birthdays.indexOf(birthday)} birthday={birthday} />
            ))}
        </ul>
    );
}


export default BirthdayList
