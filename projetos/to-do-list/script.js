document.querySelector('#barra').style.maxWidth = '0.0001%'
function completa(evento) {
  const li = evento.target;
  if (li.className !== 'completed') {
    li.className = 'completed';
    li.style.textDecoration = 'line-through';
    barraStatus()
  } else {
    li.className = '';
    li.style.textDecoration = 'none';
    barraStatus()
  }
}
function mudaCor(evento) {
  const select = document.querySelector('#selecionado');
  if (select) {
    const antigo = select;
    antigo.id = '';
    antigo.style.backgroundColor = '';
  }
  const item = evento.target;
  item.id = 'selecionado';
  item.style.backgroundColor = 'rgb(128,128,128)';
}
function adicionaItem() {
  const item = document.querySelector('#texto-tarefa').value;
  const ol = document.querySelector('#lista-tarefas');
  const li = document.createElement('li');
  li.innerText = item;
  li.addEventListener('click', mudaCor);
  li.addEventListener('dblclick', completa);
  ol.appendChild(li);
  document.querySelector('#texto-tarefa').value = '';
  barraStatus()
}
const adiciona = document.querySelector('#criar-tarefa');
adiciona.addEventListener('click', adicionaItem);
function apagaTudo() {
  const ol = document.querySelector('#lista-tarefas');
  const filhos = ol.children;
  const tamanho = filhos.length - 1;
  document.querySelector('#barra').style.maxWidth = '0.0001%'
  document.querySelector('#perce').innerText = '0% concluidos'
  for (let index = tamanho; index > -1; index -= 1) {
    filhos[index].remove();
  }
  
}
document.querySelector('#apaga-tudo').addEventListener('click', apagaTudo);
function removeFinalizados() {
  const finalizados = document.getElementsByClassName('completed');
  const finalizadosTamanho = finalizados.length - 1;
  document.querySelector('#barra').style.maxWidth = '0.0001%'
  for (let index = finalizadosTamanho; index > -1; index -= 1) {
    finalizados[index].remove();
  }
  barraStatus()
  let porce = document.querySelector('#perce')
  porce.innerText = '0%' + ' concluidos'
}
document.querySelector('#remover-finalizados').addEventListener('click', removeFinalizados);
function removeSelecionado() {
  const selecionado = document.querySelector('#selecionado');
  selecionado.remove();
  barraStatus()
}
document.querySelector('#remover-selecionado').addEventListener('click', removeSelecionado);
function moverCima() {
  const selecionado = document.querySelector('#selecionado');
  if (selecionado) {
    const lista = document.getElementsByTagName('ol')[0];
    const itens = document.getElementsByTagName('li');
    const vetor = Array.from(itens);
    const index = vetor.indexOf(selecionado);
    if (index === 0) {
      return;
    }
    lista.insertBefore(selecionado, itens[index - 1]);
  }
}
document.querySelector('#mover-cima').addEventListener('click', moverCima);
function moverBaixo() {
  const selecionado = document.querySelector('#selecionado');
  if (selecionado) {
    const lista = document.getElementsByTagName('ol')[0];
    const itens = document.getElementsByTagName('li');
    const vetor = Array.from(itens);
    const index = vetor.indexOf(selecionado);
    if (index === vetor.length - 1) {
      return;
    }
    lista.insertBefore(selecionado, itens[index + 2]);
  }
}
document.querySelector('#mover-baixo').addEventListener('click', moverBaixo);
function salvar() {
  const ol = document.querySelectorAll('#lista-tarefas');
  let save = []
  for (let index = 0; index < ol.length; index += 1) {
    let aaa = ol[index].innerText
    save.push(aaa)
  }
  localStorage.setItem('linhas', save.toString())
}
document.getElementById('salvar-tarefas').addEventListener('click', salvar);
function barraStatus() {
  const barra = document.querySelector('#barra');
  const total = document.getElementsByTagName('li').length;
  const complete = document.getElementsByClassName('completed').length;
  let div = document.querySelector('#statuscontainer')
  let razao = complete/total *100 + '%'
  barra.style.maxWidth = razao
  let porce = document.querySelector('#perce')
  porce.innerText = razao + ' concluidos'
  if (razao === '100%') {
    let acabou = document.createElement('h1')
    acabou.id = 'acabou'
    acabou.style.fontSize = '1.4em'
    acabou.innerText = 'Parabens! você acabou suas tarefas'
    document.body.appendChild(acabou)
  } else if (razao !== 100) {
      let acabou = document.querySelector('#acabou')
      acabou.innerText = ''
  }
}