function floodFill(image, sr, sc, newColor) {
    let currentColor = image[sr][sc];
    if(currentColor === newColor) {
        return image;
    }
    
    function dfs(r, c) {
        if(r < 0 || r >= image.length || c < 0 || c >= image[0].length || image[r][c] !== currentColor) {
          return;
        } 
       
       image[r][c] = newColor;
       
       dfs(r-1, c);
       dfs(r+1, c);
       dfs(r, c-1);
       dfs(r, c+1);
    }
    
    dfs(sr, sc);
    return image;
}

let image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
];
let sr = 1, sc = 1, newColor = 2;
let result = floodFill(image, sr, sc, newColor);
console.log(result);