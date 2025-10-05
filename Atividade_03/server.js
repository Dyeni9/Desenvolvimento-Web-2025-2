const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/calcular', (req, res) => {
  const tensao = parseFloat(req.body.tensao);
  const corrente = parseFloat(req.body.corrente);

  if (isNaN(tensao) || isNaN(corrente)) {
    return res.send('Erro: Por favor, insira apenas valores numéricos válidos.');
  }
  if (corrente === 0) {
    return res.send('Erro: A corrente não pode ser zero para este cálculo, pois a resistência seria infinita.');
  }

  const resistencia = tensao / corrente;

  const resultadoHTML = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Resultado - Lei de Ohm</title>
      <style>
        body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #e3f2fd; }
        .container { text-align: center; background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
        h1 { color: #1565c0; }
        .resultado { font-size: 1.8rem; color: #ff9800; margin: 1rem 0; }
        a { text-decoration: none; background-color: #007bff; color: white; padding: 0.7rem 1.5rem; border-radius: 4px; margin-top: 2rem; display: inline-block;}
        a:hover { background-color: #0056b3; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Resultado do Cálculo</h1>
        <p>Tensão informada: <strong>${tensao} V</strong></p>
        <p>Corrente informada: <strong>${corrente} A</strong></p>
        <p class="resultado">Resistência (R) = <strong>${resistencia.toFixed(2)} &Omega;</strong></p>
        <a href="/">Calcular Novamente</a>
      </div>
    </body>
    </html>
  `;

  res.send(resultadoHTML);
});

app.listen(PORT, () => {
  console.log(`Servidor da Atividade_03 rodando em http://localhost:${PORT}`);
});