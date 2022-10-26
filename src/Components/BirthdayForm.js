import React from 'react'
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DatePicker } from '@mantine/dates';
//form to take user input to put into birthday unit

function BirthdayForm( {addBirthday} ) {
  const form = useForm({
    initialValues: {
        name: '',
        birthdate: '',
        greeted: false,
        gift: '',
        currentAge: ''
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

const handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target
        addBirthday({...form, [name]: value});
}

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
            withAsterisk
            label="Name: "
            placeholder="John Smith"
            {...form.getInputProps('name')}
            />

            <DatePicker
            withAsterisk
            label="Birthday: "
            placeholder="Pick date"
            {...form.getInputProps('birthday')}
            />

            <TextInput
            withAsterisk
            label="Gift Idea: "
            placeholder="Pick a gift"
            {...form.getInputProps('gift')}
            />

            <Checkbox
            mt="md"
            label="Greeted?"
            {...form.getInputProps('greeted', { type: 'checkbox' })}
            />

            <Group position="right" mt="md">
                <Button onClick={handleSubmit} type="submit">Submit</Button>
            </Group>
        </form>
    </Box>
  );
}


export default BirthdayForm