function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);  // O(1)

    var middleIndex = Math.floor(items.length / 2);     // O(n/2)
    var index = 0;  // O(1)

    while (index < middleIndex) {   // O(n/2)
        console.log(items[index]);  
        index++;                    
    }

    for (var i = 0; i < 100; i++) { // O(n)
        console.log('hi');          // O(n)
    }
}

// O(1 + n/2 + 100) => O(n)