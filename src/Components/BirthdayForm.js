import React from 'react'
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DatePicker } from '@mantine/dates';
//form to take user input to put into birthday unit

function BirthdayForm( {addBirthday} ) {
  const birthday = useForm({
    initialValues: {
        name: '',
        birthdate: '',
        greeted: false,
        gift: '',
        currentAge: ''
    },
  });

const handleSubmit = (e) => {
    console.log(e)
    addBirthday({...birthday, ...e});
}

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
        <form onSubmit={birthday.onSubmit(handleSubmit)}>
            <TextInput
            withAsterisk
            label="Name: "
            placeholder="John Smith"
            {...birthday.getInputProps('name')}
            />

            <DatePicker
            withAsterisk
            label="Birthday: "
            placeholder="Pick date"
            {...birthday.getInputProps('birthdate')}
            />

            <TextInput
            withAsterisk
            label="Gift Idea: "
            placeholder="Pick a gift"
            {...birthday.getInputProps('gift')}
            />

            <Checkbox
            mt="md"
            label="Greeted?"
            {...birthday.getInputProps('greeted', { type: 'checkbox' })}
            />

            <Group position="right" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </form>
    </Box>
  );
}


export default BirthdayForm