import styled from 'styled-components'
import { darkColors, lightColors, primaryColors } from '../styles/theme.jsx'

export const ContainerCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 15px 0 ${primaryColors.blue};

    @media (max-width: 767px) {
        flex-direction: column;
        gap: 20px;
    }
`

export const SectionInfos = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    @media (max-width: 767px) {
        width: 100%;
        justify-content: space-between;
        padding-bottom: 15px;
        border-bottom: 1px solid ${darkColors.primary};
    }

    img {
        @media (max-width: 767px) {
            width: 70px;
        }
    }
`

export const ContentInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: 700;

    .position {
        color: ${primaryColors.black};
        font-size: 18px;
    }

    div {
      font-weight: 500;
      color: ${darkColors.primary}
    }
`

export const SectionLanguages = styled.div`
    display: flex;
    gap: 10px;
    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
  
      button {
        border: none;
        color: ${primaryColors.blue};
        font-size: 16px;
        padding: 10px 7px;
        font-weight: 700;
        border-radius: 5px;
        background-color: ${lightColors.primary};
        
        &:hover {
          background-color: ${primaryColors.blue};
          color: ${primaryColors.white};
          cursor: pointer;
        }
      }
`
