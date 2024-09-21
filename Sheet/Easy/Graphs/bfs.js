function bfsOfGraph(V, adj) {
    let queue = [];
    let bfs = [];
    let visited = new Array(V).fill(false);
    
    queue.push(0);
    visited[0] = true;
    
    while(queue.length > 0) {
        let node = queue.shift();
        bfs.push(node);
        
        for(let i = 0; i < adj[node].length; i++) {
            let neighbour = adj[node][i];
            if(!visited[neighbour]) {
                visited[neighbour] = true;
                queue.push(neighbour);
            }
        }
    }
    return bfs;
}
 
 let V = 5;
 let adj = [
     [1, 2, 3],
     [],        
     [4],      
     [],      
     []        
 ];
 
 console.log(bfsOfGraph(V, adj));