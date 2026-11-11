import styled from "styled-components"

const ContainerFiltro = styled.div`

display:grid;
grid-template-columns: 1fr 1fr;
gap:15rem;
margin:1.5rem auto 1rem;
width:95%;

  div{
  width:max-content;
 
  }

 

    select{
            background-color:#f5f5f5;
            border: 1px solid #ccc;
            border-radius:5px;
            padding:.3rem;
            font-size:.9rem;

    }

    `

const Btn = styled.button`

background-color:${({ $ativado }) => $ativado ? "green" : "#ccc"};
border: 1px solid #cccccc69;
border-radius: 20px;
padding: .5rem 1rem;
font-size: .9rem;
cursor:pointer;
margin-right:5px;

`
export { ContainerFiltro, Btn }