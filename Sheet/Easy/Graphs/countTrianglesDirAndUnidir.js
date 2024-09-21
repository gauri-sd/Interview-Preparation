function countTrianglesUndirected(adj, V) {
    let count = 0;
    for(let i = 0; i < V; i++) {
        for(let j = i+1; j < V; j++) {
            for(let k = j+1; k < V; k++){
                if(adj[i][j] && adj[j][k] && adj[k][i]) {
                    count++;
                }
            }
        }
    }
    return count;
}

let adjUndirected = [
    [0, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
];
console.log(countTrianglesUndirected(adjUndirected, 4));

function countTrianglesDirected(adj, V) {
    let count = 0;
    for(let i = 0; i < V; i++) {
        for(let j = 0; j < V; j++) {
            for(let k = 0; k < V; k++) {
                if(adj[i][j] && adj[j][k] && adj[k][i]) {
                    count++;
                }
            }
        }
    }
    return count / 3;
}

let adjDirected = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [1, 0, 0, 1],
    [0, 0, 0, 0]
];
console.log(countTrianglesDirected(adjDirected, 4));