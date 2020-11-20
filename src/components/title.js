import React from 'react';
import { StyledTitle, TitleText, Line } from './title.style'

const Title = ({titleName, ColorLine, ColorTitle}) => {
    return (
        <StyledTitle>
            <TitleText style={{color: ColorTitle}}>{`✨ ${titleName} ✨ `}</TitleText>
            <Line style={{color: ColorLine}}>.............</Line>
        </StyledTitle>
    )
}

export default Title