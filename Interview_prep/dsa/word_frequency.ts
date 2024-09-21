
function chkWordFreq(str){
    let strArr = str.split(' ')
    let map = new Map();
    for(let i= 0;i<strArr.length;i++){
        strArr[i] = strArr[i].toLowerCase()
        if(map.has(strArr[i])){
            map.set(strArr[i], (map.get(strArr[i])) + 1)
        }else{
        map.set(strArr[i], 1);
        }
    }
    console.log(map)

}



chkWordFreq("Gauri is a good developer, gauri is having 2 years experience");