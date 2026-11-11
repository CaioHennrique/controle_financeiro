import styled from "styled-components"


const ContainerTransacao = styled.div`
width:70%;
display:flex;
flex-direction:column;
justify-content:center; 
border-radius:15px;
padding:2rem;
background-color: #f0f0f0;
border: 3px solid #ccccccc9;
position:absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index:999;


    form{
    display:grid;
    grid-template-columns: repeat(2, minmax(0, 1fr)) ;
    gap:15px;
    
       label{
       font-size:1.2rem;
       }

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
        margin-top:.4rem;
        background-color:#f5f5f5;
        border: 1px solid #ccc;
        border-radius:5px;
        padding:.8rem;
        font-size:1.1rem;
        cursor:pointer;
        

        }
        

    }
`


const ContainerBtn = styled.span`

display:flex;
align-items:end;
justify-content:space-around;


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
    width:40%;
    height:50%;
    background-color:${({ cor }) => cor};
    cursor: pointer;
    color:${({ cortext }) => cortext};
    font-weight:bold;
    border:none;
    border-radius:8px;


`
export { ContainerTransacao, Button, ContainerBtn, Radio }