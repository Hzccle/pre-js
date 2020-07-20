function asyncLoadImg(url) {
    return new Promise((resolve,reject)=>{
        let img = new imgage()
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject(new Error("could not load image at"+url))
        }
        img.src = url
    })
}