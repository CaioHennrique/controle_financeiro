import styled from "styled-components"

const ContainerValor = styled.div`

display:grid;
grid-template-columns: 1fr 1fr 1fr ;
grid-gap: 3rem;
margin: 1.5rem auto;
width:95%;

`
const Icon = styled.div`

display:flex;
align-items:center;
justify-content:center;
background-color:${({coricon}) => coricon};
color:#e2e0e0;
padding:.5rem;
margin-right:.5rem;
border-radius:100%;


`
const Card = styled.div`

display:flex;
background-color:${({corfundo}) => corfundo};
padding:1.5rem ;
border-radius:12px;
border-left: 18px solid ${({cordetalhes}) => cordetalhes};

h3{
font-weight: 400;
margin-bottom:.2rem;
font-size:.9rem;

}

p{
color:${({cordetalhes}) => cordetalhes};
font-weight: 600;
margin-left:.2rem;
font-size:1.3rem;
}


`

export { ContainerValor, Card, Icon }