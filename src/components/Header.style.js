import styled from 'styled-components'
import { primaryColors } from '../styles/theme.jsx'
import BgDesktop from '../assets/bg-header-desktop.svg'

export const HeaderStyled = styled.div`
    height: 156px;
    width: 100%;
    background-color: ${primaryColors.blue};
    background-image: url('${BgDesktop}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
