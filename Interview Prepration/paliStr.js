
function chkPaliStr(str) {
    let start = 0;
    let end = str.length - 1;

    while(start < end) {
        if(str[start] !== str[end]){
            break;
        }
        start++;
        end--; 
    }

    if(str[start] !== str[end]) {
        return false;
    } else {
        return true;
    }
}

let str = chkPaliStr('abbba');
if(str) {
    console.log(true);
} else {
    console.log(false);
}