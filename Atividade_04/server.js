const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {

  const agora = new Date();

  const options = {
    timeZone: 'America/Cuiaba',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  const dataHoraFormatada = agora.toLocaleString('pt-BR', options);

  const htmlResposta = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <title>Data e Hora Atuais</title>
      <style>
        body { 
          font-family: Arial, sans-serif; 
          display: flex; 
          justify-content: center; 
          align-items: center; 
          height: 100vh; 
          background: linear-gradient(to right, #6a11cb, #2575fc);
          color: white;
          margin: 0;
        }
        .container { 
          text-align: center; 
          background: rgba(0, 0, 0, 0.2);
          padding: 40px; 
          border-radius: 15px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.3);
        }
        h1 { 
          margin-top: 0;
          font-size: 2.5em;
        }
        p { 
          font-size: 1.8em;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Data e Hora Atuais</h1>
        <p>${dataHoraFormatada}</p>
      </div>
    </body>
    </html>
  `;

  res.send(htmlResposta);
});

app.listen(PORT, () => {
  console.log(`Servidor da Atividade_04 rodando em http://localhost:${PORT}`);
  console.log('Acesse a URL no seu navegador para ver a data e hora.');
});