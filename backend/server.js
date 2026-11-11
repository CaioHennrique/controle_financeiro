const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const conexao = require("./database");
const categorias = ["alimentacao","trabalho","moradia","transporte", "lazer"]

conexao.connect((erro) => {
  if (erro) {
    console.error("erro ao conectar ao mysql", erro.message);
    return;
  }

  console.log("conectado ao banco de dados");
});

app.get("/", (req, res) => {
  res.send("servidor do controle de financeiro funcionando!");
});


app.post("/transacoes", (req, res) => {
  const { descricao, valor, data, tipo, categoria } = req.body;
  const transacoes = { descricao, valor, data, tipo, categoria };
  

  if(!transacoes.descricao.trim()){
    return res.status(400).json({
      mensagem:'informe uma descrição'
    })
  }

  if(!Number.isFinite(transacoes.valor) || transacoes.valor <= 0 ){
    return res.status(400).json({
      mensagem:'informe um valor valido'
    })
  }

   if(!transacoes.data.trim()){
    return res.status(400).json({
      mensagem:'informe uma data valida'
    })
  }

   if(transacoes.tipo === "" || transacoes.tipo !== "receita" && transacoes.tipo !== "despesa"){
    return res.status(400).json({
      mensagem:'selecione um tipo '
    })
  }

   if(!categorias.includes(transacoes.categoria)){
    return res.status(400).json({
      mensagem:'selecione uma categoria '
    })
  }

  const insert =
    "insert into transacoes (descricao,valor,data,tipo,categoria) values(?,?,?,?,?)";

  conexao.query(
    insert,
    [
      transacoes.descricao,
      transacoes.valor,
      transacoes.data,
      transacoes.tipo,
      transacoes.categoria,
    ],
    (error, resposta) => {
      if (error) {
        return res.status(500).json({
          mensagem: "Erro ao cadastrar transação",
        });
      }

      res.status(201).json({
        mensagem: "Transação cadastrada com sucesso!",
        id: resposta.insertId,
      });
    },
  );
});

app.get("/transacoes", (req, res) => {
  const select = "select * from transacoes";

  conexao.query(select, (e, resp) => {
    if (e) {
      return res.status(500).json({
        mensagem: "erro inesperado na consulta",
      });
    }

    res.status(200).json(resp);
  });
});

app.delete("/transacoes/:id", (req, res) => {
  const id = req.params.id;
  const deleteSql = "delete from transacoes where id = ?";

  conexao.query(deleteSql,[id],(e, resp) => {
    if (e) {
      return res.status(500).json({
        mensagem: "erro no delete",
      });
    }
    
    if(resp.affectedRows){
       return res.status(200).json(resp)
    } else{
        return res.status(404).json({
            mensagem:"transacao nao encontrada"
        })
    }

  });

});

app.put('/transacoes/:id', (req,res) =>{

const idTransacao = req.params.id;
 const { descricao, valor, data, tipo, categoria } = req.body;
const transacoesEdita = {descricao,valor,data,tipo,categoria};
const alteraDados = 'update transacoes set descricao = ? ,valor = ?,data = ?,tipo = ?,categoria = ? where id = ?'

if(transacoesEdita.descricao === undefined || !transacoesEdita.descricao.trim()){
  return res.status(400).json({
    message:'descricao invalida'
  })
}

if(!Number.isFinite(transacoesEdita.valor ) || transacoesEdita.valor <= 0){
  return res.status(400).json({
    message:'valor invalida'
  })
}

if(transacoesEdita.data === undefined || !transacoesEdita.data.trim()){
  return res.status(400).json({
    message:'data invalida'
  })
}


if(transacoesEdita.tipo === "" || transacoesEdita.tipo !== "receita" && transacoesEdita.tipo !== "despesa" ){
  return res.status(400).json({
    message:'selecione um tipo valido'
  })
}

if(!categorias.includes(transacoesEdita.categoria)){
  return res.status(400).json({
    message:'selecione uma categoria valida'
  })
}


conexao.query(alteraDados,[transacoesEdita.descricao,
      transacoesEdita.valor,
      transacoesEdita.data,
      transacoesEdita.tipo,
      transacoesEdita.categoria, idTransacao], (e,resp) => {

  if(e){
    return res.status(500).json({
        message:"algo de errado atualizar a tabela"
    })
  }

 if(resp.affectedRows){
    res.status(200).json(resp)
 } else {
    res.status(404).json({
        message:"nenhum dado atualizado"
    })
 }
})




})


app.listen(port, () => {
  console.log("servidor rodando na porta 3000");
});
