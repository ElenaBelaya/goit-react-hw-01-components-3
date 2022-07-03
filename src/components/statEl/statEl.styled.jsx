import styled from '@emotion/styled';


export const StatItem = styled.li`
list-style: none;
display: inline-flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 15px 0px;
width: 25%;
color: #ffffff;
font-size: 16px;
background-color: ${props => `${props.color}`};
`

export const StatUnit = styled.span`
display: flex;

`