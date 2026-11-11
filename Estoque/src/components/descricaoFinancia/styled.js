import styled from "styled-components"

const ContainerDescricoes = styled.div`

width:95%;
margin: 0 auto;
background-color: #cccccc69;
display:grid;
grid-template-columns: 1fr 1fr 1fr auto;
align-items:center;
border: 1px solid #cccccc98;
padding:.9rem;

    div{

    font-weight:bold;
    margin-right: .8rem;

        span {
        
        background-color:${({ tipo }) => tipo === "receita" ? "#08803438" : "#dc26263f"};
        color: ${({ tipo }) => tipo === "receita" ? "#149e46" : "#DC2626"};
        padding: .1rem 1rem;
        font-size:.8rem;
        border-radius:10px;
        

        }
    
    }



`
const Categoria = styled.p`

color: #808080;
margin:.6rem 0 ;
font-weight:400;

`

const BtnExcluir = styled.button`
border:none;
padding:.6rem;
color:#DC2626;
background-color:#dc26263f;
border-radius:6px;
display:inline-flex;
cursor:pointer;
gap:2px;
`


const BtnEditar = styled.button`

border:none;
padding:.6rem;
color:#2563EB;
background-color:#2564eb42;
border-radius:6px;
display:inline-flex;
margin-right:.5rem;
cursor:pointer;
gap:2px;
`

const ValorDescricao = styled.p`

color:${({ tipo }) => tipo === "receita" ? "#149e46" : "#DC2626"};
`

const DataDescricao = styled.p`

color:#808080;


`


const ContainerDescricao = styled.div`

display:flex;


`

const ContainerSeta = styled.div`

background-color:${({ tipo }) => tipo === "receita" ? "#149e46" : "#DC2626"};
display:flex;
color:white;
align-items:center;
padding:0 1rem;
border-radius:100%;
`

export {
    ContainerDescricoes, Categoria, BtnExcluir, ContainerDescricao,
    BtnEditar,  ValorDescricao, DataDescricao,ContainerSeta
}