import styled, { css } from 'styled-components';
import {
    Avatar,
    Typography,
    Stack,
    Button,
    Grid2 as Grid,
} from '@mui/material';

export const AvatarStyled = styled(Avatar)`
    background-color: ${(props) => props.theme.palette.secondary.main};
    margin: 0 auto;
    ${(props) =>
        props.match
            ? css`
                  padding: 14px;
              `
            : ``}
`;

export const SubHeading = styled(Typography)`
    color: ${(props) => props.theme.palette.secondary.main};
    text-align: center;
`;

export const StackStyled = styled(Stack)`
    padding: 1.25rem;
`;

export const FormStyled = styled(Grid)`
    max-width: 400px;
    margin: 0 auto;
    & .Mui-focused.MuiInputBase-formControl {
        border-color: coral;
    }
`;

export const ButtonStyled = styled(Button)`
    margin: 0 auto;
`;
