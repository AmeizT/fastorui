import styled, { css } from 'styled-components'

export const Space = css`
    ${(props) => {
        switch(props.space){
            case 10:
                return css`
                    padding: var(--sz10);
                `;
                
            case 20:
                return css`
                    padding: var(--sz20);
                `;

            case 30:
                return css`
                    padding: var(--sz30);
                `;

            case 40:
                return css`
                    padding: var(--sz40);
                `;

            case 50:
                return css`
                    padding: var(--sz50);
                `;

            case 60:
                return css`
                    padding: var(--sz60);
                `;

            case 70:
                return css`
                    padding: var(--sz70);
                `;

            case 80:
                return css`
                    padding: var(--sz80);
                `

            case 90:
                return css`
                    padding: var(--sz90);
                `

            default: 
                return css`
                    padding: ${props => props.space};
                    @media only screen and (min-width: 320px and max-width: 767px){
                        padding: ${props => props.space3x};
                    }

                    @media only screen and (min-width: 768px and max-width: 1023px){
                        padding: ${props => props.space5x};
                    }

                    @media only screen and (min-width: 1024px){
                        padding: ${props => props.space7x};
                    }
                `
        };
    }}

    ${(props) => {
        switch(props.pt){
            case 10:
                return css`
                    padding-top: var(--sz10);
                `

            case 20:
                return css`
                    padding-top: var(--sz20);
                `

            case 30:
                return css`
                    padding-top: var(--sz30);
                `

            case 40:
                return css`
                    padding-top: var(--sz40);
                `

            case 50:
                return css`
                    padding-top: var(--sz50);
                `

            case 80:
                return css`
                    padding-top: var(--sz80);
                `

            case 90:
                return css`
                    padding-top: var(--sz90);
                `

            default:
                return css`
                    padding-top: ${props => props.pt};
                `
        }
    }}

    ${(props) => {
        switch(props.ps){
            case 10:
                return css`
                    padding-left: var(--sz10);
                `

            case 20:
                return css`
                    padding-left: var(--sz20);
                `

            case 30:
                return css`
                    padding-left: var(--sz30);
                `

            case 40:
                return css`
                    padding-left: var(--sz40);
                `
            
            case 50:
                return css`
                    padding-left: var(--sz50);
                `

            case 80:
                return css`
                    padding-left: var(--sz80);
                `

            case 90:
                return css`
                    padding-left: var(--sz90);
                `

            default:
                return css`
                    padding-left: ${props => props.ps};
                `
        }
    }}

    ${(props) => {
        switch(props.pr){
            case 10:
                return css`
                    padding-right: var(--sz10);
                `

            case 20:
                return css`
                    padding-right: var(--sz20);
                `

            case 30:
                return css`
                    padding-right: var(--sz30);
                `

            case 40:
                return css`
                    padding-right: var(--sz40);
                `
            
            case 50:
                return css`
                    padding-right: var(--sz50);
                `

            case 80:
                return css`
                    padding-right: var(--sz80);
                `

            case 90:
                return css`
                    padding-right: var(--sz90);
                `

            default:
                return css`
                    padding-right: ${props => props.pr};
                `
        }
    }}

    ${(props) => {
        switch(props.pb){
            case 10:
                return css`
                    padding-bottom: var(--sz10);
                `

            case 20:
                return css`
                    padding-bottom: var(--sz20);
                `

            case 30:
                return css`
                    padding-bottom: var(--sz30);
                `

            case 40:
                return css`
                    padding-bottom: var(--sz40);
                `
            
            case 50:
                return css`
                    padding-bottom: var(--sz50);
                `

            case 80:
                return css`
                    padding-bottom: var(--sz80);
                `

            case 90:
                return css`
                    padding-bottom: var(--sz90);
                `

            default:
                return css`
                    padding-bottom: ${props => props.pb};
                `
        }
    }}

    margin: ${props => props.gutter};

    ${(props) => {
        switch(props.mt){
            case 10:
                return css`
                    margin-top: var(--sz10);
                `

            case 20:
                return css`
                    margin-top: var(--sz20);
                `

            case 30:
                return css`
                    margin-top: var(--sz50);
                `

            case 80:
                return css`
                    margin-top: var(--sz80);
                `

            case 90:
                return css`
                    margin-top: var(--sz90);
                `

            default:
                return css`
                    margin-top: ${props => props.mt};
                `
        }
    }}

    ${(props) => {
        switch(props.ms){
            case 10:
                return css`
                    margin-left: var(--sz10);
                `

            case 20:
                return css`
                    margin-left: var(--sz20);
                `

            case 30:
                return css`
                    margin-left: var(--sz50);
                `

            case 80:
                return css`
                    margin-left: var(--sz80);
                `

            case 90:
                return css`
                    margin-left: var(--sz90);
                `

            default:
                return css`
                    margin-left: ${props => props.ms};
                `
        }
    }}

    ${(props) => {
        switch(props.mr){
            case 10:
                return css`
                    margin-right: var(--sz10);
                `

            case 20:
                return css`
                    margin-right: var(--sz20);
                `

            case 30:
                return css`
                    margin-right: var(--sz50);
                `

            case 80:
                return css`
                    margin-right: var(--sz80);
                `

            case 90:
                return css`
                    margin-right: var(--sz90);
                `

            default:
                return css`
                    margin-right: ${props => props.mr};
                `
        }
    }}

    ${(props) => {
        switch(props.mb){
            case 10:
                return css`
                    margin-bottom: var(--sz10);
                `

            case 20:
                return css`
                    margin-bottom: var(--sz20);
                `

            case 30:
                return css`
                    margin-bottom: var(--sz50);
                `

            case 80:
                return css`
                    margin-bottom: var(--sz80);
                `

            case 90:
                return css`
                    margin-bottom: var(--sz90);
                `

            default:
                return css`
                    margin-bottom: ${props => props.mb};
                `
        }
    }}
`

