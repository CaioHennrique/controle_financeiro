import { Plus } from "lucide-react"
import { ContainerTransacao, Button, Radio} from "./styled"

function Formulario({ adicionarFinancia, salvarEdicao,
    onChangeData, onChangeValor, onChangeDescricao, onChangeCategoria, onChangeReceita,
    onChangeDespesa, valueDescricao, valueValor, valueCategoria, valueData, tipo, id }) {

    return (

        <ContainerTransacao>
            <h2>Adicionar nova Transação</h2>

            <form onSubmit={(e) => {
                e.preventDefault()
                { adicionarFinancia() }
            }

            }>
                <div>
                    <label>Descrição</label>
                    <input placeholder="Ex: Mercado,Trabalho,etc...." type="text" value={valueDescricao} onChange={onChangeDescricao} />
                </div>
                <div>
                    <label> Valor</label>
                    <input placeholder="Digite um Valor" value={valueValor} onChange={onChangeValor} type="number" />
                </div>

                <div>
                    <label >Tipo</label>
                  
                    <span>
                        <Radio corradio={"green"} type="radio" name="tipo" value={"receita"}
                            checked={tipo === "receita"} onChange={onChangeReceita} /> Receita
                        <Radio corradio={"red"} type="radio" name="tipo" value={"despesa"}
                            checked={tipo === "despesa"} onChange={onChangeDespesa} /> Despesas
                    </span>

                </div>

                <div>
                    <label>Categoria</label>
                    <select name="categoria"
                        value={valueCategoria}
                        onChange={onChangeCategoria}>

                        <option value="">Selecione uma categoria</option>
                        <option value="alimentacao">Alimentação</option>
                        <option value="trabalho">Trabalho</option>
                        <option value="moradia">Moradia</option>
                        <option value="transporte">Transporte</option>
                        <option value="lazer">Lazer</option>

                    </select>
                </div>

                <div>
                    <label> Data</label>
                    <input type="date" value={valueData} onChange={onChangeData} />
                </div>

                <Button type="submit" >
                    <Plus size={19} />
                    Adicionar
                </Button>

            </form>

        </ContainerTransacao>

    )


}

export default Formulario 