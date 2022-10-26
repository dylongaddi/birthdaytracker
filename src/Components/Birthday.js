import React from "react";
import styled from 'styled-components'
import { Button } from '@mantine/core';
//component for an invidiual birthday unit to be added to birthday list array

const Div = styled.div`
        border: 2px solid black;
        display: flex;
        justify-content: space-between;
    `;

function Birthday ({ birthday }) {
    

    return (
        <Div>
            <li>{birthday.name}</li>
            <li>{birthday.currentAge}</li>
            <li>{birthday.birthdate}</li>
            <li>{birthday.gift}</li>
            <input type="checkbox"/>
            <Button>X</Button>
        </Div>
        // name: "",
        // currentAge: '',
        // birthdate: '',
        // greeted: false,
        // gift: '',
    );
}

export default Birthday