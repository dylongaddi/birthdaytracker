import React from 'react'
import { useState } from 'react';

//form to take user input to put into birthday unit
const BirthdayForm = ({ addBirthday }) => {
    const [birthday, setBirthday] = useState({
        name: "",
        currentAge: '',
        birthdate: '',
        greeted: false,
        gift: '',
    });

    const handleFormChange = (e) => {

        const { name, value } = e.target;

        setBirthday({
            ...birthday,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        if (birthday.name) {
            addBirthday({...birthday, [name]: value});
            //reset task input
            setBirthday({...birthday, [name]: ''});
        }
    }
    


    return (
        <form onSubmit={handleSubmit} className='birthday-form'> 
            <label>
                Name:
                <input 
                    type="text"
                    name="name"
                    value={birthday.name}
                    onChange={handleFormChange}
                />
            </label>
            <label>
                Birthday
                <input 
                    type="date"
                    name="birthdate"
                    value={birthday.birthdate}
                    onChange={handleFormChange}
                />
            </label>
            <label>
                Gift Idea:
                <input 
                    type="text"
                    name="gift"
                    value={birthday.gift}
                    onChange={handleFormChange}
                />
            </label>
            <label>
                Greeted?
                <input 
                    type="checkbox"
                    name="greeted"
                    defaultChecked={false}
                    value={birthday.greeted}
                    onChange={handleFormChange}
                />
            </label>

            <button type='submit'/>
        </form>
    );
}

export default BirthdayForm