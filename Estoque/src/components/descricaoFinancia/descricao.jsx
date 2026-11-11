import {
    ContainerDescricoes, ContainerSeta, Categoria, ContainerDescricao,
    DataDescricao, ValorDescricao, BtnEditar, BtnExcluir
} from "./styled"

import { Trash, Pencil, ArrowUp, Plus, ArrowDown, Minus } from "lucide-react"

function DescricaoFinancia({ financia, editarFinancia, excluirFinancia }) {

    return (

        <>
                    <ContainerDescricoes tipo={financia.tipo} >

                        <ContainerDescricao>

                            <ContainerSeta tipo={financia.tipo}>
                                {financia.tipo === "receita" ? <ArrowUp size={19} /> : <ArrowDown size={19} />}
                            </ContainerSeta>

                            <div>
                                <p>{financia.descricao} <span>{financia.tipo}</span></p>
                                <Categoria>{financia.categoria}</Categoria>
                            </div>

                        </ContainerDescricao>

                        <DataDescricao>
                            {financia.data.split("-").reverse().join("/")}
                        </DataDescricao>
                        <ValorDescricao tipo={financia.tipo}>
                            {financia.tipo === "receita" ? <> <Plus size={13} /> {Number(financia.valor).toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            })}</> :
                                <> <Minus size={13} /> {Number(financia.valor).toLocaleString("pt-BR", {
                                    style: "currency",
                                    currency: "BRL"
                                })}</>
                            }
                        </ValorDescricao>
                        <div>
                            <BtnEditar onClick={() => editarFinancia(financia)}>
                                <Pencil size={15} />
                                editar
                            </BtnEditar>
                            <BtnExcluir onClick={() => excluirFinancia(financia.id)}>
                                <Trash size={15} />
                                excluir
                            </BtnExcluir>
                        </div>
                    </ContainerDescricoes>




        </>



    )



}

export default DescricaoFinancia