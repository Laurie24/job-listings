import styled from 'styled-components'
import { lightColors, primaryColors } from '../styles/theme.jsx'

export const BarFiltersWrapper = styled.div`
    background-color: ${primaryColors.white};
    border-radius: 5px;
    padding: 20px 30px;
    transform: translateY(-50%);
    box-shadow: 0 0 15px 0 ${primaryColors.blue};
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }
`

export const ButtonClear = styled.button`
    background-color: transparent;
    border: none;
    color: ${primaryColors.blue};
    font-size: 16px;
    font-weight: 700;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

export const Tag = styled.div`
    display: flex;
    align-items: center;
    background-color: ${lightColors.primary};
    border-radius: 5px;
    font-size: 16px;
    font-weight: 700;
    height: 36px;

    span {
        font-size: 16px;
        padding: 10px 7px;
        font-weight: 700;
    }

    button {
        border: none;
        background-color: ${primaryColors.blue};
        color: ${primaryColors.white};
        height: 100%;
        border-radius: 0 5px 5px 0;
        padding: 0 8px;

        &:hover {
            background-color: ${primaryColors.black};
        }
    }
`