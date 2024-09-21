function dfsRecursive(node, adj, visited, dfsOrder) {
    visited[node] = true;

    dfsOrder.push(node);

    for (let i = 0; i < adj[node].length; i++) {
        let neighbor = adj[node][i];
        if (!visited[neighbor]) {
            dfsRecursive(neighbor, adj, visited, dfsOrder);
        }
    }
}

function dfsOfGraph(V, edges, source) {
    let adj = Array.from({length: V}, () => []);
    
    for (let [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);  
    }

    for (let i = 0; i < V; i++) {
        adj[i].sort();
    }

    let visited = new Array(V).fill(false); 
    let dfsOrder = []; 

    dfsRecursive(source, adj, visited, dfsOrder);

    return dfsOrder;
}

let V = 5;
let edges = [
    [1, 2],
    [1, 0],
    [0, 2],
    [2, 3],
    [2, 4]
];
let source = 1;

let result = dfsOfGraph(V, edges, source);
console.log(result.join(" ")); 