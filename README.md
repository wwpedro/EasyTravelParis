# EasyTravelParis
Easy Travel Paris é um produto por um equipe do IFAL-RL que irá potencializar o mercado de turismo. O produto é um aplicativo mobile onde o turista irá desfrutar da cidade de Paripueira em seu smartphone, a aplicação irá conter 2 tecnologias; realidade virtual e realidade aumentada, onde o usuário poderá conhecer as praias, estabelecimentos e todos os pontos turísticos.

material de apio para construção da api: youtube.com/watch?v=xGk_R8Q1epU&list=PL1hl9qLyFtfDXY9NO8F3TnjxezKJ_1HlI

a api controla a tabela praia dentro do banco easy travel com CRUD
em variavis coloque a senha sua senha do usuario root do banco

para rodar a api:
    1-precisa do mysql installado e tabelas criadas
    (
        comando para mysql workbench-

        create database dbapitravel;
        use dbapitravel;
        create table praias(
            id_praia int primary key auto increment,
            nome_praia varcar(30) not null,
            endereco_praia varcar(100) not null
        )
        insert into praias (nome_praia, enderco_praia) values ("praia da aleria", "Av. Alegria 75-139 - Alegria Guaíba - RS 92500-000");
        select * from praias;

    )

    2-rodando api
    (
        comando start : nodemon start,
        vai no site (https://resttesttest.com/) que funciona como um postman
        
        coloca o metodo de cada rota criada que está no arquivo routes.js e testa
        http://localhost:3000/api/praias(ou outras rotas)
    )
