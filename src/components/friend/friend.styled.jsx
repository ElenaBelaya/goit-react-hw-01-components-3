import styled from '@emotion/styled';

export const FriendItem = styled.li`
display: flex;
height: calc((100% - 100px) / 5);
margin-top: 20px;
align-items: center;

box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

:nth-of-type(1) {
    margin-bottom: 0px;
}
`
export const FriendName = styled.p`
display: flex;
justify-content: center;
align-items: center;
margin-left: 10px;
font-size: 24px;

`

export const FriendStatus = styled.span`
margin: 0px 10px;
font-weight: bold;
font-size: 64px;

color: ${props => {
  switch (`${props.status}`) {
    case "true":
    return "green";

    case "false":
    return "red";
    
    default:
    return "#000";   
    }} 
}   

`

