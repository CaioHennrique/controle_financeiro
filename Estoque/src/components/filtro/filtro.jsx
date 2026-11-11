import { Btn, ContainerFiltro } from "./styled"


function Filtro({ onChangeFiltroTodas, onChangeFiltroReceita, onChangeFiltroDespesa,
    onChangeCategoriafiltrada, valueCategoriaFiltrada,financiasfiltrada }) {

    return (

        <ContainerFiltro>

            <div>
                <Btn $ativado={financiasfiltrada === "todas"} onClick={onChangeFiltroTodas}>Todas</Btn>
                <Btn $ativado={financiasfiltrada === "receita"} onClick={onChangeFiltroReceita}>Receitas</Btn>
                <Btn $ativado={financiasfiltrada === "despesa"} onClick={onChangeFiltroDespesa}>Despesas</Btn>
            </div>



            <select name="categoriaFiltrada"
                value={valueCategoriaFiltrada}
                onChange={onChangeCategoriafiltrada}>
                <option value="todas">Todas as Categorias</option>
                <option value="alimentacao">Alimentação</option>
                <option value="trabalho">Trabalho</option>
                <option value="moradia">Moradia</option>
                <option value="transporte">Transporte</option>
                <option value="lazer">Lazer</option>
            </select>

        </ContainerFiltro>

    )




}

export default Filtro