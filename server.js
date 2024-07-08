const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Função para gerar um número aleatório de 8 dígitos
const generateRandomNumber = () => {
  return Math.floor(10000000 + Math.random() * 90000000); // Gera um número entre 10000000 e 99999999
};

// Rota que gera um número aleatório de 8 dígitos
app.get('/random', (req, res) => {
  const randomNumber = generateRandomNumber();
  res.json(randomNumber);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
