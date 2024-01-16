//example of tcp 
import net from 'net';

const server = net.createServer((socket) => {
  socket.write("Hello World");
  socket.on('data', (data) => {
    console.log(data.toString());
  })
})

server.listen(8080, ()=>{
  console.log('server is listening on 8080')
});

function child1 (child1Args){
  return child1Args *2;
}

function parent(children1){
  let parentVar = 12;
  children1(parentVar)

}

const result = parent(child1)
console.log(result)