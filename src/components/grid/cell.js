import React from 'react'
import styled from '@emotion/styled'
const CellImg = styled.a`
    cursor:alias;
`
export default ({bg}) => <CellImg href="#" target="_blank" className="cell grid__item" style={{backgroundImage: `url(${bg})`}}></CellImg>
