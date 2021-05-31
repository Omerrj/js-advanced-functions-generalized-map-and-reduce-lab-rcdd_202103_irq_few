// Add your functions here


const map=(src, callback) =>{
  let r = []
for (let i = 0; i < src.length; i++) {
    let theElement = src[i]
    r.push(cb(theElement))
  }

  return r;
}

const reduce=(src, callback, starting)=>{
  let r = (starting) ? starting : src[0]
  let i = (starting) ? 0 : 1

  for (; i < src.length; i++) {
    r = cb(src[i], r)
  }

  return r;
}