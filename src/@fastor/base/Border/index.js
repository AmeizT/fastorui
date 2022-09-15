import { css } from 'styled-components'

export const Border = css`
    ${(props) => {
        switch(props.bordr){
            case "base":
                return css`
                    border-bottom: var(--b10);
                    @media(prefers-color-scheme: dark){
                        border-bottom: var(--bd10);
                    }
                `

            case "top":
                return css`
                    border-top: var(--b10);
                    @media(prefers-color-scheme: dark){
                        border-top: var(--bd10);
                    }
                `

            case "start":
                return css`
                    border-left: var(--b10);
                    @media(prefers-color-scheme: dark){
                        border-left: var(--bd10);
                    }
                `

            case "end":
                return css`
                    border-right: var(--b10);
                    @media(prefers-color-scheme: dark){
                        border-right: var(--bd10);
                    }
                `

            case "contained":
                return css`
                    border: var(--b20);
                    @media(prefers-color-scheme: dark){
                        border: var(--bd20);
                    }
                `

            default:
                return css`
                  border-bottom: ${(props) => props.bb};
                  border-top: ${(props) => props.bt};
                  border-left: ${(props) => props.bl};
                  border-right: ${(props) => props.br};
                  border: ${(props) => props.bordr};
                  @media (prefers-color-scheme: dark) {
                    border: ${(props) => props.bordr};
                  }
                `;
        }
    }}
`