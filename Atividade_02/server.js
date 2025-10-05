const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/calcular', (req, res) => {
  const precoUnitario = parseFloat(req.body.preco);
  const quantidade = parseFloat(req.body.quantidade);
  const desconto = parseFloat(req.body.desconto);

  if (isNaN(precoUnitario) || isNaN(quantidade) || isNaN(desconto)) {
    return res.send('Por favor, insira valores numéricos válidos.');
  }

  const precoTotalBruto = precoUnitario * quantidade;
  const precoFinal = precoTotalBruto - desconto;

  const resultadoHTML = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Resultado do Cálculo</title>
      <style>
        body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f0f2f5; }
        .container { text-align: center; background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
        h1 { color: #333; }
        .resultado { font-size: 1.8rem; color: #28a745; margin: 1rem 0; }
        .detalhes { text-align: left; display: inline-block; margin-top: 1rem; }
        a { text-decoration: none; background-color: #007bff; color: white; padding: 0.7rem 1.5rem; border-radius: 4px; margin-top: 2rem; display: inline-block;}
        a:hover { background-color: #0056b3; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Cálculo de Venda</h1>
        <div class="detalhes">
            <p>Preço Unitário: <strong>R$ ${precoUnitario.toFixed(2)}</strong></p>
            <p>Quantidade: <strong>${quantidade}</strong></p>
            <p>Desconto: <strong>R$ ${desconto.toFixed(2)}</strong></p>
        </div>
        <p class="resultado">Preço Final: <strong>R$ ${precoFinal.toFixed(2)}</strong></p>
        <a href="/">Calcular Novamente</a>
      </div>
    </body>
    </html>
  `;

  res.send(resultadoHTML);
});

app.listen(PORT, () => {
  console.log(`Servidor da Atividade_02 rodando em http://localhost:${PORT}`);
});