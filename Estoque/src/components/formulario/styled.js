import styled from "styled-components"

const ContainerTransacao = styled.div`

margin: 0 auto;
border-radius:15px;
padding:1rem;
background-color: #cccccc69;
width:95%;

    h2{
    margin-bottom:1rem;

    }


    form{

    display:grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    align-items:center;
    justify-content:start;
    
   
    gap:15px;

        div{

        display:flex;
        flex-direction:column;
           
            span {
                display: flex;
                align-items: end;
                gap: 4px;
            }
            
        }

        input,select{
        margin-top:.6rem;
        background-color:#f5f5f5;
        border: 1px solid #ccc;
        border-radius:5px;
        padding:.5rem;
        font-size:1rem;
        cursor:pointer;
        
        }
        

    }
`

const Radio = styled.input`

&[type="radio"]{

 accent-color:${({ corradio }) => corradio};
 width: 18px;
 height: 18px;
 cursor:pointer;

}

`


const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    background-color:#0b8d3bc2;
    cursor: pointer;
    color:white;
    padding:.5rem;
    width:60%;
    height:80%;
    font-weight:bold;
    border:none;
    border-radius:8px;
    grid-column: 3;
    justify-self: start;
    align-self: end;

`
export { ContainerTransacao, Button, Radio }