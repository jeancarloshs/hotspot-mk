<?php
// Importando a conexão com o banco de dados
require_once 'db_connection.php'; // Ajuste com o caminho correto para a sua conexão com o banco de dados

// Verificando se o formulário foi submetido
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Coletando os dados do formulário
    $nome_completo = $_POST['nome_completo'];
    $cpf = $_POST['cpf'];
    $telefone = $_POST['telefone'];
    $data_nascimento = $_POST['data_nascimento'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);  // Criptografando a senha
    $endereco = $_POST['endereco_completo'];
    $numero = $_POST['numero_casa'];
    $cep = $_POST['cep'];
    $complemento = $_POST['complemento'];
    $tipo_usuario = 'visitante';
    $hsID = 1;

    // Validando os dados (exemplo de validação simples)
    if (empty($nome_completo) || empty($cpf) || empty($data_nascimento) || empty($telefone) || empty($cep) || empty($password)) {
        echo "Por favor, preencha todos os campos.";
    } else {
        // Salvando os dados no banco de dados
        $sql = "INSERT INTO tbCadastrosUsuarios (nome_completo, cpf, telefone, data_nascimento, email, password, endereco, numero, cep, complemento, tipo_usuario, hsID) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('ssssssss', $nome_completo, $cpf, $telefone, $data_nascimento, $email, $password, $endereco, $numero, $cep, $complemento, $tipo_usuario, $hsID);

        if ($stmt->execute()) {
            echo "Cadastro realizado com sucesso!";
        } else {
            echo "Erro ao realizar o cadastro: " . $stmt->error;
        }

        // Fechar a conexão
        $stmt->close();
        $conn->close();
    }
}
?>
