<?php
$servername = ""; // Ou o endereço do seu servidor de banco de dados
$username = ""; // Seu nome de usuário do banco de dados
$password = ""; // Sua senha do banco de dados
$dbname = ""; // Nome do seu banco de dados

// Criando a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificando a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}
?>
