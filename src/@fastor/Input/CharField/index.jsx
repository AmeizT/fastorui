import styled from 'styled-components'
import { Radius, Space, Typography } from '../../Common'

export const CharField = styled.input.attrs(props => ({
    type: props.type,
    placeholder: props.faker,
}))`
    ${Radius}
    ${Space}
    ${Typography}    
`