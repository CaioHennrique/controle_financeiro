import styled from "styled-components"
import { Wallet, Moon } from "lucide-react"

const ContainerPai = styled.div`
border-radius: 17px;
background-color:#F4F7FB;
border: 1px solid #cccccc3b;
height:99vh;
width:85vw;
position:relative;

`

const Container = styled.div`
border-radius: 15px 15px 0 0;
background-color:#1F2937;
color:white;
margin: 0 auto;
padding:.5rem;
display:flex;
align-items:center;
justify-content:space-between;

`

const ContainerItens = styled.div`

display:flex;
align-items:center;

`

const IconCarteira = styled(Wallet)`

color:green;
margin-right: .5rem;

`
const IconLua = styled(Moon)`
color:#6B7280;
margin-right:1rem;

   

`



const TrasacaoText = styled.h2`

margin: 0 0 1rem 2.2rem;

`







export {
    Container, IconCarteira, IconLua, ContainerItens,
    ContainerPai, TrasacaoText

}