import { SonoClient } from "PLACEHOLDER"

const sono = new SonoClient('ws://localhost:8080/ws');
sono.onconnection(()=>{
  sono.message('client connected')
})

sono.on('message', (msg) => {
  const messageBoard = document.getElementById('messageBoard');
  const newMessage = document.createElement('li');
  newMessage.innerHTML = `${payload.message}`;
  messageBoard.appendChild(newMessage);
})

document.getElementById('button').addEventListener('click', () => {
  sono.broadcast(document.getElementById('input').value)
  const messageBoard = document.getElementById('messageBoard');
  const newMessage = document.createElement('li');
  const lineBreak = document.createElement('br');
  newMessage.innerHTML = `${payload.message}`;
  newMessage.setAttribute('float','right')
  newMessage.setAttribute('white-space','wrap');
  messageBoard.appendChild(newMessage);
  messageBoard.appendChild(lineBreak);
});
