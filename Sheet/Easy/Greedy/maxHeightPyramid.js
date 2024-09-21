function maxHeightPyramid(weights) {
    weights.sort(function (a, b) { return a - b });
    
    let currentLevel = 1;
    let currentWeight = weights[0];
    let height = 1;
    
    let nextLevel = 0;
    let nextWeight = 0;
    
    for(let i = 1; i < weights.length; i++) {
        nextLevel++;
        nextWeight = weights[i];
        
        if(nextLevel > currentLevel && nextWeight > currentWeight) {
            height++;
            currentLevel = nextLevel;
            currentWeight = nextWeight;
            nextLevel = 0;
            nextWeight = 0;
        }
    }
    return height;
}
console.log(maxHeightPyramid([10, 20, 30, 50, 60, 70]));