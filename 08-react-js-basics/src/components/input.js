import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { theme } from "./theme";

export const Input = (props) => {
    const { onSubmit } = props;
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value)
    };
    const handleSubmit = (event) => {
        event.preventDefault()

        if (onSubmit) {
            onSubmit(inputValue)
            setInputValue('')
        };
    };
    return (
        <form className='profile__input' onSubmit={handleSubmit}>
            <TextField required autoFocus variant="outlined" label="Имя" placeholder="Введите имя" value={inputValue} onChange={handleChange} />
            <Button type="submit" variant="outlined" style={{ backgroundColor: theme.palette.secondary.main }}>Отправить</Button>
        </form>
    );
};