import styled, { css } from 'styled-components'
import { Base, Border, Radius, Space } from '../../Common'

export const Container = styled.div `
    ${Base}
    ${Space}
    ${Border}
    ${Radius}
    padding: ${(props) => props.space || "0 var(--sz50)"};
    @media only screen and (min-width: 1024px) {
        padding: ${(props) => props.space7x || "0 var(--sz90)"};
    }
`
















