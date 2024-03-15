// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
    background-color: #d7dfe9;
    padding: 20px;
    height: 100vh;
    display:flex;
    align-items:center;
`
export const InputContainer = styled(MainContainer)`
    
    
    
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: flex-start;
    
    
`
export const Heading = styled.h1`
    font-family:"Roboto";
    color:#35469c;
    font-weight: 800;
    font-size:42px;
`
export const InputElement = styled.input`
    height:30px;
    width: 250px;
    padding: 10px;
`
export const SelectElement = styled.select`
    height: 30px;
    width:250px;
`
export const ImageContainer = styled.div`
    background-image: url(${props => props.url});
    height: 300px;
    width: 500px;
    padding:10px;
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    
`
export const CustomButton = styled.button`
    background-color:#0b69ff;
    color: #ffffff;
    padding:8px;
    font-family:"Roboto";
    font-size:18px;
    border:none;
    border-radius: 12px;
    margin-top:10px;
`
export const ParaGraphTextOnImage = styled.p`
    font-family:"Roboto";
    color: #ffffff;
    font-size: ${props => props.fontSize + 'px'};
    text-align: center;


`
