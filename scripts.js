document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nomeCliente = document.getElementById('nomeCliente').value;
    const emailCliente = document.getElementById('emailCliente').value;
    const telefoneCliente = document.getElementById('telefoneCliente').value;
    const nomeProduto = document.getElementById('nomeProduto').value;
    const descricaoProduto = document.getElementById('descricaoProduto').value;
    const precoProduto = document.getElementById('precoProduto').value;
    
    console.log('Cliente:', nomeCliente, emailCliente, telefoneCliente);
    console.log('Produto:', nomeProduto, descricaoProduto, precoProduto);
    
    alert('Registro realizado com sucesso!');
});