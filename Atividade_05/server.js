const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/calcular', (req, res) => {

  const nota1 = parseFloat(req.body.nota1);
  const nota2 = parseFloat(req.body.nota2);
  const nota3 = parseFloat(req.body.nota3);

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    return res.send('Erro: Todas as notas devem ser números válidos.');
  }

  const media = (nota1 + nota2 + nota3) / 3;

  let status;
  let imagemUrl;
  let corStatus;

  if (media >= 6) {
    status = 'Aprovado';
    corStatus = 'green';

    imagemUrl = 'https://cdn-icons-png.flaticon.com/512/190/190411.png';
  } else {
    status = 'Reprovado';
    corStatus = 'red';

    imagemUrl = 'https://cdn-icons-png.flaticon.com/512/190/190406.png';
  }

  const resultadoHTML = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Resultado da Média</title>
      <style>
        body { font-family: 'Segoe UI', sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f4f4f9; }
        .container { text-align: center; background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        h1 { color: #4a4a4a; }
        .media { font-size: 1.5rem; margin: 1rem 0; }
        .status { font-size: 2rem; font-weight: bold; color: ${corStatus}; }
        img { width: 100px; height: 100px; margin-top: 1rem; }
        a { text-decoration: none; background-color: #007bff; color: white; padding: 0.7rem 1.5rem; border-radius: 4px; margin-top: 2rem; display: inline-block;}
        a:hover { background-color: #0056b3; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Resultado Final</h1>
        <p class="media">A média do aluno é: <strong>${media.toFixed(2)}</strong></p>
        <p class="status">${status}</p>
        <img src="${imagemUrl}" alt="Ícone de ${status}">
        <br>
        <a href="/">Calcular Novamente</a>
      </div>
    </body>
    </html>
  `;

  res.send(resultadoHTML);
});

app.listen(PORT, () => {
  console.log(`Servidor da Atividade_05 rodando em http://localhost:${PORT}`);
});