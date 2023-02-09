let posts = [
    {"Post":"1. Post"},
    {"Post":"2. Post"},
    {"Post":"3. Post"},
    {"Post":"4. Post"}
]

function getList(messsage){
    console.log(messsage)
    posts.map(post=> console.log(post))
}

function addPost(postname){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            try{
                posts.push({"Post":postname});
                resolve("Ekleme başarılı");
            } catch{
                reject("Hata alındı");
            }
        },3000)
    })
}

async function mainFunction(postname){
    getList("Mevcut Postlar")
    await addPost(postname)
    getList("Güncel Postlar")
}

mainFunction("Yenipost")
