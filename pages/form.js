import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormControls } from '../utils/hooks/useFormControls';
import { textAlign } from '@mui/system';

const inputFieldValues = [
    {
        name: "fullName",
        label: "Full Name",
        id: "my-name"
    },
    {
        name: "email",
        label: "Email",
        id: "my-email"
    },
    {
        name: "message",
        label: "Message",
        id: "my-message",
        multiline: true,
        rows: 10
    }
];

const Form = () => {

    const {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
    } = useFormControls();

    return (
        <Box component="form" noValidate autoComplete="off" sx={{
            display: "flex",
            flexDirection: "column",
        }}>
            <Typography mt={3} variant="h2" component="h2" textAlign="center">
                Register
            </Typography>

            <form style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "20px"
            }}
                onSubmit={handleFormSubmit} >
                {inputFieldValues.map((inputFieldValue, index) => {
                    return (
                        <TextField
                            style={{
                                margin: "10px",
                                width: "80%",
                            }}
                            key={index}
                            onBlur={handleInputValue}
                            onChange={handleInputValue}
                            name={inputFieldValue.name}
                            label={inputFieldValue.label}
                            multiline={inputFieldValue.multiline ?? false}
                            rows={inputFieldValue.rows ?? 1}
                            autoComplete="none"
                            {...(errors[inputFieldValue.name] && { error: true, helperText: errors[inputFieldValue.name] })}

                        />
                    );
                })}
                <Button
                    style={{ margin: "30px" }}
                    type="submit"
                    variant="outlined"
                    disabled={!formIsValid()}
                >
                    Send Message
                </Button>
            </form>
        </Box>

    )
}

export default Form
