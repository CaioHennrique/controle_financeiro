import { ContainerValor, Card, Icon } from "./styled"
import { Wallet,DollarSign, Minus} from "lucide-react"


function Cartao({ receita, despesa, saldo }) {

    return (
        <ContainerValor>
            <Card corfundo="#08803421" cordetalhes="#16A34A">
                <Icon coricon="#16A34A">
                    <DollarSign />
                </Icon>
                <div>
                    <h3>Receitas</h3>
                    <p >{Number(receita).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
})}</p>
                </div>
            </Card>
            <Card corfundo="#ff000021" cordetalhes="#f70505">
                <Icon coricon="#f70505">
                    <Minus />
                </Icon>
                <div>
                    <h3>Despesas</h3>
                    <p >{Number(despesa).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
})}</p>
                </div>

            </Card>
            <Card corfundo="#00aeff40" cordetalhes="#0059ff">
                <Icon coricon="#0059ff">
                    <Wallet />
                </Icon>
                <div>
                    <h3>Saldo</h3>
                    <p >{Number(saldo).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
})}</p>
                </div>
            </Card>
        </ContainerValor>
    )
}

export default Cartao