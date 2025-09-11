const fn = (arr1, arr2) => {
  const copy = arr1
  let currentLen = copy
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] < arr1[j]) {
        console.log("first")
        copy.splice(j, 0, arr2[i])
      }
    }
    if(currentLen)
  }
  console.log("first", copy)
}

const arr1 = [1, 2]
const arr2 = [3]
fn(arr1, arr2)
