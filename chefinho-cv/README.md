# 📄 Enunciado da Atividade

Criar um **Currículo Vitae (CV)** completo e original para um personagem de ficção de sua escolha. Use sua criatividade para dar vida ao personagem, detalhando sua trajetória profissional, habilidades e interesses, utilizando apenas a estrutura básica de uma página HTML.

**Escolha do Personagem:** Selecione um personagem de um livro, filme, série de TV, desenho animado ou videogame. Pense em alguém cuja história permita a criação de um CV rico em detalhes.

**Estrutura da Página HTML:**  
O currículo deve ser criado em uma única página HTML, sem o uso de CSS para estilização. Você pode utilizar as seguintes tags para organizar o conteúdo como sugestão:

- `<h1>`: Para o nome do personagem.  
- `<h2>`: Para os títulos de cada seção (ex: "Experiência Profissional", "Habilidades").  
- `<img>`: Para incluir a foto do personagem.  
- `<p>`: Para parágrafos de texto.  
- `<ul>` e `<li>`: Para listas de itens.  
- `<b>` ou `<strong>`: Para destacar palavras-chave.  
- `<br>`: Para quebra de linha.  

**Conteúdo do CV:**  
O currículo deve conter as seguintes seções:  

- Informações de Contato  
- Foto  
- Resumo ou Objetivo Profissional  
- Experiência Profissional  
- Educação  
- Habilidades  
- Atividades de Lazer e Hobbies  
- Referências  

---

# 📄 Código em HTML

# 🖼️ Imagem do Personagem

![Pequeno Chefinho](bossbaby.jpg)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Currículo Vitae - Pequeno Chefinho</title>
</head>
<body>

    <h1>Pequeno Chefinho</h1>

    <h2>Informações de Contato</h2>
    <p>
        <strong>Endereço:</strong> Rua das Mamadeiras, nº 101 - Cidade dos Bebês<br>
        <strong>E-mail:</strong> bossbaby@babycorp.com<br>
        <strong>Telefone:</strong> (00) 12345-6789
    </p>

    <h2>Foto</h2>
    <img src="bossbaby.jpg" alt="Pequeno Chefinho" width="200">

    <h2>Resumo Profissional</h2>
    <p>
        Líder nato, especializado em <b>estratégias corporativas</b>, 
        <b>gestão de equipes</b> e <b>soluções inovadoras</b> para o 
        setor infantil. Busca expandir os negócios da <strong>Baby Corp</strong> 
        e garantir o equilíbrio entre <i>amor dos pais</i> e <i>eficiência empresarial</i>.
    </p>

    <h2>Experiência Profissional</h2>
    <ul>
        <li><strong>CEO – Baby Corp</strong> (2017 - atual) <br>
            Responsável pela estratégia global de mercado infantil e manutenção da supremacia dos bebês no setor de fofura.
        </li>
        <li><strong>Consultor Estratégico – Missão Família Templeton</strong> (2017) <br>
            Atuação em operações secretas para impedir a ascensão dos filhotes de cachorro como rivais de atenção dos pais.
        </li>
        <li><strong>Gerente de Operações – Setor de Chupetas</strong> (2016) <br>
            Otimização da produção e logística de suprimentos essenciais para bebês.
        </li>
    </ul>

    <h2>Educação</h2>
    <ul>
        <li><strong>Baby Business School</strong> – MBA em Gestão de Fofura e Liderança</li>
        <li><strong>Escola de Estratégias Infantis</strong> – Bacharelado em Administração de Negócios para Bebês</li>
    </ul>

    <h2>Habilidades</h2>
    <ul>
        <li>Liderança e negociação</li>
        <li>Planejamento estratégico</li>
        <li>Gestão de crises familiares</li>
        <li>Domínio avançado em comunicação não verbal (choros e caretas)</li>
        <li>Capacidade de persuasão acima da média</li>
    </ul>

    <h2>Atividades de Lazer e Hobbies</h2>
    <ul>
        <li>Tomar mamadeira gourmet</li>
        <li>Jogar golfe de miniatura com outros bebês executivos</li>
        <li>Reuniões secretas em berçários</li>
        <li>Cochilos estratégicos</li>
    </ul>

    <h2>Referências</h2>
    <ul>
        <li><strong>Tim Templeton</strong> – Irmão e parceiro de missões: timmy@family.com</li>
        <li><strong>Sra. Fraldinha</strong> – Diretora de Recursos Humanos Baby Corp: fraldinha@babycorp.com</li>
    </ul>

</body>
</html>
