const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/calcular', (req, res) => {

  const num1 = parseFloat(req.body.num1);
  const num2 = parseFloat(req.body.num2);
  const num3 = parseFloat(req.body.num3);
  const num4 = parseFloat(req.body.num4);

  if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
    return res.send('Por favor, insira apenas números válidos.');
  }

  const media = (num1 + num2 + num3 + num4) / 4;

  const resultadoHTML = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Resultado da Média</title>
      <style>
        body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #e8f5e9; }
        .container { text-align: center; background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
        h1 { color: #2e7d32; }
        p { font-size: 1.5rem; }
        a { text-decoration: none; background-color: #007bff; color: white; padding: 0.7rem 1.5rem; border-radius: 4px; margin-top: 1rem; display: inline-block;}
        a:hover { background-color: #0056b3; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Resultado do Cálculo</h1>
        <p>A média dos números é: <strong>${media.toFixed(2)}</strong></p>
        <a href="/">Calcular Novamente</a>
      </div>
    </body>
    </html>
  `;

  res.send(resultadoHTML);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});