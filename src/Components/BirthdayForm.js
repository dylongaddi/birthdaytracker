import React from 'react'
import { useState } from 'react';

const BirthdayForm = ({ addBirthday }) => {
    const [birthdays, setBirthday] = useState({
        name: "",
        currentAge: '',
        birthdate: '',
        greeted: false,
        gift: ''
    });

    const handleFormChange = (e) => {

        const { name, value } = e.target;

        setBirthday({
            ...birthdays,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addBirthday({...birthdays});
    }
    


    return (
        <form className='birthday-form'> 
            <label>
                <input 
                    type="text"
                    name="name"
                    value={birthdays.name}
                    onChange={handleFormChange}
                />
            </label>
            <label>
                <input 
                    type="date"
                    name="birthdate"
                    value={birthdays.birthdate}
                    onChange={handleFormChange}
                />
            </label>
            <label>
                <input 
                    type="text"
                    name="name"
                    value={birthdays.gift}
                    onChange={handleFormChange}
                />
            </label>


            <button type='submit'/>
        </form>
    );
}

export default BirthdayForm