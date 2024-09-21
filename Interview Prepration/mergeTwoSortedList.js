function mergeTwoLists(list1, list2) {
    let sortedArr = [];
    let i = 0;
    let j = 0;

    while(i < list1.length && j < list2.length) {
        if(list1[i] <= list2[j]) {
            sortedArr.push(list1[i]);
            i++;
        } else {
            sortedArr.push(list2[j]);
            j++;
        }
    }

    while(i < list1.length) {
        sortedArr.push(list1[i]);
        i++;
    }

    while(j < list2.length) {
        sortedArr.push(list2[j]);
        j++;
    }

    return sortedArr;
};

console.log(mergeTwoLists([1,2,4], [1,3,4]));