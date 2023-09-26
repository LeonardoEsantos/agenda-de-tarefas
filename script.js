document.addEventListener("DOMContentLoaded", function() {

    function handleFormSubmit(event) {
      event.preventDefault();
  
      const tarefa = document.getElementById('tarefa').value;
      const data = document.getElementById('data').value;
      const descricao = document.getElementById('descricao').value;
  
      // Validação de entrada
      if (!tarefa || !data || !descricao) {
        alert('Por favor, preencha todos os campos');
        return;
      }
  
      // Verifique se já existe alguma entrada no localStorage
      let dadosTarefaJSON = localStorage.getItem('dadosTarefa');
      let dadosTarefa = [];
  
      if (dadosTarefaJSON) {
        dadosTarefa = JSON.parse(dadosTarefaJSON);
      }
  
      // Adicione a nova entrada ao array
      const novaEntrada = {
        tarefa: tarefa,
        data: data,
        descricao: descricao
      };
  
      dadosTarefa.push(novaEntrada);
  
      // Salve o array atualizado no localStorage
      localStorage.setItem('dadosTarefa', JSON.stringify(dadosTarefa));
  
      document.getElementById('tarefa').value = '';
      document.getElementById('data').value = '';
      document.getElementById('descricao').value = '';
  
      alert('Dados do formulário foram salvos');
    }
  
    const formulario = document.getElementById('tarefas_form');
  
    if (formulario) {
      formulario.addEventListener('submit', handleFormSubmit);
    }
  
    function exibirDados() {
      // Recupere os dados do localStorage
      const dadosTarefaJSON = localStorage.getItem('dadosTarefa');
      const dadosTarefa = JSON.parse(dadosTarefaJSON);
  
      // Obtenha o elemento da tabela onde você deseja exibir os dados
      const tabela = document.getElementById('dadosTabela');
  
      if (tabela) {
        // Preencha a tabela com os dados
        if (dadosTarefa && dadosTarefa.length > 0) {
          dadosTarefa.forEach(function(dado) {
            const row = tabela.insertRow();
            const tarefaCell = row.insertCell(0);
            const dataCell = row.insertCell(1);
            const descricaoCell = row.insertCell(2);
  
            tarefaCell.textContent = dado.tarefa;
            dataCell.textContent = dado.data;
            descricaoCell.textContent = dado.descricao;
          });
        }
      }
    }
  
    exibirDados();
  });
  