import { css } from 'styled-components';

export const mobile = (props)=>{
    return  css`
    @media only screen and (max-width:380px){
    ${props}
    }
    `;
}

export const TabletSmall = (props)=>{
    return  css`
    @media only screen and (max-width:550px){
    ${props}
    }
    `;
}

export const Tablet = (props)=>{
    return  css`
    @media only screen and (max-width:850px){
    ${props}
    }
    `;
}

export const Screen = (props)=>{
    return  css`
    @media only screen and (max-width:1050px){
    ${props}
    }
    `;
}