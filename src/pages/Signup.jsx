import React from 'react';
import {
    Avatar,
    Box,
    Typography,
    useMediaQuery,
    Stack,
    FormControl,
    InputLabel,
    OutlinedInput,
    Grid2 as Grid,
    Button,
} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import styled, { css } from 'styled-components';
import { useTheme } from '@mui/material/styles';
// import { Grid2  } from '@mui/material/Grid2';

const AvatarStyled = styled(Avatar)`
    background-color: ${(props) => props.theme.palette.secondary.main};
    margin: 0 auto;
    ${(props) =>
        props.match
            ? css`
                  padding: 14px;
              `
            : ``}
`;

const SubHeading = styled(Typography)`
    color: ${(props) => props.theme.palette.secondary.main};
    text-align: center;
`;

const StackStyled = styled(Stack)`
    padding: 1.25rem;
`;

const FormStyled = styled(Grid)`
    max-width: 400px;
    margin: 0 auto;
    & .Mui-focused.MuiInputBase-formControl {
        border-color: coral;
    }
`;

const ButtonStyled = styled(Button)`
    margin: 0 auto;
`;

function Signup() {
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box>
            <StackStyled component="header">
                <AvatarStyled
                    sx={{ width: match ? 24 : 32, height: match ? 24 : 32 }}
                    theme={theme}
                    match={match}
                >
                    <LockOpenIcon fontSize={match ? 'small' : ''} />
                </AvatarStyled>
                <SubHeading variant={match ? 'h6' : 'h5'}>Sign up !</SubHeading>
            </StackStyled>
            <FormStyled container component="form" spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <FormControl size='small' fullWidth required variant="outlined">
                        <InputLabel htmlFor="firstName-outlined">
                            First Name
                        </InputLabel>
                        <OutlinedInput
                            id="firstName-outlined"
                            label="First Name"
                        />
                    </FormControl>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                    <FormControl size='small' fullWidth required variant="outlined">
                        <InputLabel htmlFor="lastName-outlined">
                            Last Name
                        </InputLabel>
                        <OutlinedInput
                            id="lastName-outlined"
                            label="Last Name"
                        />
                    </FormControl>
                </Grid>
                <Grid size={12}>
                    <FormControl size='small' fullWidth required variant="outlined">
                        <InputLabel htmlFor="email-outlined">Email</InputLabel>
                        <OutlinedInput id="firstName-outlined" label="Email" />
                    </FormControl>
                </Grid>
                <Grid size={12}>
                    <FormControl size='small' fullWidth required variant="outlined">
                        <InputLabel htmlFor="password-outlined">
                            Password
                        </InputLabel>
                        <OutlinedInput
                            type="password"
                            id="password-outlined"
                            label="Password"
                        />
                    </FormControl>
                </Grid>
                <Grid size={12} sx={{ textAlign: 'center' }}>
                    <ButtonStyled
                        variant="contained"
                        endIcon={<BeenhereIcon />}
                    >
                        Sumit
                    </ButtonStyled>
                </Grid>
            </FormStyled>
        </Box>
    );
}

export default Signup;
