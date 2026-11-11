import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {
    Container, IconCarteira, IconLua,
    ContainerItens, ContainerPai,
    TrasacaoText
} from "./styled"
import Cartao from "../components/card/card"
import Formulario from "../components/formulario/formulario"
import Filtro from "../components/filtro/filtro"
import DescricaoFinancia from "../components/descricaoFinancia/descricao"
import Modal from "../components/modal/modal"


function Home() {


    const [descricao, SetDescricao] = useState("")
    const [valor, SetValor] = useState(0)
    const [data, SetData] = useState("")
    const [tipo, SetTipo] = useState("")
    const [categoria, SetCategoria] = useState("")
    const [categoriaFiltrada, SetCategoriaFiltrada] = useState("todas")
    const [financias, setFinancias] = useState([])
    const [financiasfiltrada, setFinanciasFiltradas] = useState("todas");
    const [carregou, setCarregou] = useState(false)
    const [modalOn, setModalOn] = useState(false)
    let financiaFiltrada = financias
    const urlBack = 'http://localhost:3000/transacoes';


    const receita = financias.filter((receita) => receita.tipo === "receita")
        .reduce((total, financia) => total + Number(financia.valor), 0)

    const despesa = financias.filter((financia) => financia.tipo === "despesa")
        .reduce((total, financia) => total + Number(financia.valor), 0)

    const saldo = receita - despesa

    const [id, setId] = useState(null);

    useEffect(() => {


      
        transacoes()


    }, [ ])



    async function transacoes() {
        
        const resposta = await fetch(urlBack);
        const resultado = await resposta.json();

        setFinancias(resultado)


    }


    async function adicionarFinancia() {
         
        if (!descricao.trim()) return

        if (valor === 0 || valor < 0) return

        if (tipo === "") return

        if (categoria === "") return

        if (data === 0) return
   
        
        

         const resposta = await fetch(urlBack,{
            method:"POST",

             headers:{
                "Content-Type":"application/json"
             },
             body: JSON.stringify({
                descricao: descricao, valor: valor, data: data, tipo: tipo, categoria: categoria
             })
         });

       const dados = await resposta.json()

       

         if(resposta.ok){


const novaFinancia = {id: dados.id, descricao: descricao, valor: valor, data: data, tipo: tipo, categoria: categoria }


        SetDescricao("")
        SetValor(Number(0))
        SetData("")
        SetTipo("")
        SetCategoria("")
        setFinancias([...financias, novaFinancia])


         }

    }


    function editarFinancia(financia) {

        setId(financia.id)
        SetDescricao(financia.descricao)
        SetValor(Number(financia.valor))
        SetData(financia.data)
        SetTipo(financia.tipo)
        SetCategoria(financia.categoria)
        setModalOn(true)


    }

    async function salvarEdicao() {


const resposta = await fetch(`${urlBack}/${id}`, {
    method:"PUT",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        descricao: descricao, valor: valor, data: data, tipo: tipo, categoria: categoria 
    })
})

if(resposta.ok){

     const editado = financias.map((financia) => {



            if (financia.id === id) {

                return { ...financia, descricao: descricao, valor: valor, data: data, tipo: tipo, categoria: categoria }
            }
            return financia

        })

        setFinancias(editado)
        SetDescricao("")
        SetValor(Number(0))
        SetData("")
        SetTipo("")
        SetCategoria("")
        setId(null)
        setModalOn(false)

    }

}

       

    function cancelarEdicao() {

        SetDescricao("")
        SetValor(Number(0))
        SetData("")
        SetTipo("")
        SetCategoria("")
        setId(null)
        setModalOn(false)

    }


    async function excluirFinancia(id) {

        const resposta = await fetch(`${urlBack}/${id}`,{
            method:"DELETE",
        })
   

        if(resposta.ok){

const financiaExcluida = financias.filter((financia) => financia.id !== id)

        setFinancias(financiaExcluida)
        }
        

    }




    if (financiasfiltrada !== "todas") {


        financiaFiltrada = financias.filter((financia) => financia.tipo === financiasfiltrada)
    }


    if (categoriaFiltrada !== "todas") {
        financiaFiltrada = financiaFiltrada.filter(
            (financia) => financia.categoria === categoriaFiltrada
        )


    }

    const gruposFinancias = Array.from(
        { length: Math.ceil(financiaFiltrada.length / 4) },
        (_, index) => financiaFiltrada.slice(index * 4, index * 4 + 4)
    );

    return (



        <ContainerPai>

            <Container>

                <ContainerItens>


                    <IconCarteira size={35} />
                    <div>
                        <h1>Controle Financeiro</h1>
                        <p>Organize suas Finanças,realize seus objetivos!</p>
                    </div>
                </ContainerItens>
                <IconLua />

            </Container>

            <Cartao receita={receita}
                despesa={despesa}
                saldo={saldo} />


            {modalOn === true ? <Modal salvarEdicao={salvarEdicao}
                cancelarEdicao={cancelarEdicao}
                onChangeData={(e) => SetData(e.target.value)}
                onChangeCategoria={(e) => SetCategoria(e.target.value)}
                onChangeReceita={(e) => SetTipo(e.target.value)}
                onChangeDespesa={(e) => SetTipo(e.target.value)}
                onChangeValor={(e) => SetValor(Number(e.target.value))}
                onChangeDescricao={(e) => SetDescricao(e.target.value)}
                valueDescricao={descricao}
                valueData={data}
                valueCategoria={categoria}
                valueValor={valor}
                tipo={tipo}
                id={id}
            /> : ""}


            <Formulario salvarEdicao={salvarEdicao}
                adicionarFinancia={adicionarFinancia}
                onChangeData={(e) => SetData(e.target.value)}
                onChangeCategoria={(e) => SetCategoria(e.target.value)}
                onChangeReceita={(e) => SetTipo(e.target.value)}
                onChangeDespesa={(e) => SetTipo(e.target.value)}
                onChangeValor={(e) => SetValor(Number(e.target.value))}
                onChangeDescricao={(e) => SetDescricao(e.target.value)}
                valueDescricao={descricao}
                valueData={data}
                valueCategoria={categoria}
                valueValor={valor}
                tipo={tipo}
                id={id}
            />



            <Filtro
                financiasfiltrada={financiasfiltrada}
                onChangeFiltroTodas={() => setFinanciasFiltradas("todas")}
                onChangeFiltroReceita={() => setFinanciasFiltradas("receita")}
                onChangeFiltroDespesa={() => setFinanciasFiltradas("despesa")}
                valueCategoriaFiltrada={categoriaFiltrada}
                onChangeCategoriafiltrada={(e) => SetCategoriaFiltrada(e.target.value)}

            />

            <TrasacaoText>Transações</TrasacaoText>

            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                slidesPerGroup={1}
                navigation
                spaceBetween={20}
            >
                {gruposFinancias.map((grupo, index) => (
                    <SwiperSlide key={index}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%"
                        }}>
                            {grupo.map((financia) => (
                                <DescricaoFinancia
                                    key={financia.id}
                                    editarFinancia={editarFinancia}
                                    excluirFinancia={excluirFinancia}
                                    financia={financia}
                                />
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </ContainerPai>



    )
}

export default Home