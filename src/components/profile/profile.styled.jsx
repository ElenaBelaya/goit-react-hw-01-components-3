import styled from '@emotion/styled';

export const Container = styled.div`
display: flex;
padding: 20px 30px;
`

export const ProfileBox = styled.div`
width: calc(50% - 30px);
margin-right: 60px;
text-align: center;

`

export const ProfileDescription = styled.div`
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
` 

export const UserName = styled.p`
font-size: 30px;
font-weight: 700;
margin-bottom: 0px;
`
export const UserTag = styled.p`
color: #9292b9;
margin-bottom: 0px;

`

export const UserLocation = styled.p`
color: #9292b9;
margin-top: 5px;
margin-bottom: 20px;
`

export const Image = styled.img`
width: 250px;
height: 250px;
border-radius: 50%;
border: 1px solid #9595b7;

`
   
export const BoxList = styled.ul`
display: flex;
list-style: none;
align-items: center;
justify-content: center;
margin: 0px;
padding: 0px;



`

export const UserIndex = styled.li`
width: calc(100% / 3);
padding: 16px 0px;
border: 0.3px solid #e0e0eb;


:nth-jf-type(3) {
    margin-right: 0px;

}
`

export const SpanEl = styled.span`
display: block;
color: #9292b9;

`
export const SpanIndex = styled.span`
display: block;
color:  #32324e;
font-weight: 700;
`