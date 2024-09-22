import React from 'react';
import {
    Box,
    useMediaQuery,
    FormControl,
    InputLabel,
    OutlinedInput,
    Grid2 as Grid,
} from '@mui/material';
import { useTheme } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import BeenhereIcon from '@mui/icons-material/Beenhere';

import { Link } from 'react-router-dom';

import {
    AvatarStyled,
    SubHeading,
    StackStyled,
    FormStyled,
    ButtonStyled,
} from './common.jsx';

function Signin() {
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
                <SubHeading theme={theme} variant={match ? 'h6' : 'h5'}>
                    Sign In !
                </SubHeading>
            </StackStyled>
            <FormStyled container component="form" spacing={2}>
                <Grid size={12}>
                    <FormControl
                        size="small"
                        fullWidth
                        required
                        variant="outlined"
                    >
                        <InputLabel htmlFor="email-outlined">Email</InputLabel>
                        <OutlinedInput
                            id="firstName-outlined"
                            label="Email"
                            autoComplete="username"
                        />
                    </FormControl>
                </Grid>
                <Grid size={12}>
                    <FormControl
                        size="small"
                        fullWidth
                        required
                        variant="outlined"
                    >
                        <InputLabel htmlFor="password-outlined">
                            Password
                        </InputLabel>
                        <OutlinedInput
                            type="password"
                            id="password-outlined"
                            label="Password"
                            autoComplete="current-password"
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
                <Grid size={12}>
                    <Link to={`/signup`}>Register Here</Link>
                </Grid>
            </FormStyled>
        </Box>
    );
}

export default Signin;
