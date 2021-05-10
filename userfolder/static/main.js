import { SonoClient } from "PLACEHOLDER"

const sono = new SonoClient('ws://localhost:8080/ws');
sono.onconnection(()=>{
  sono.message('client connected')
})

sono.on('message', (msg) => {
  console.log('message received:', msg)
})

// sono.on('bye', (msg) => {
//   console.log(msg, 'BYE EVENT')
// })
