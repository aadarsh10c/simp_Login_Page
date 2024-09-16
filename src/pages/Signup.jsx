import React from 'react';
import { Avatar, Box, Typography, useMediaQuery, Stack } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import styled, { css } from 'styled-components';
import { useTheme } from '@mui/material/styles';

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
    text-align:center;
`;

const StackStyled = styled(Stack)`
      padding: 1.25rem;
`

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
            <Box>
                <Box component="form">
                    <Typography>This the form</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Signup;
