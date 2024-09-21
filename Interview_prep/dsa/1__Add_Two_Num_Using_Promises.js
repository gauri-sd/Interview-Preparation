

function add(a,b) {

    return new Promise((res, rej) => {
        res(a+b)
    })
}
add(4, 5).then((res) => {
    console.log(res)
})