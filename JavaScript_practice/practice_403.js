// Description:
// Remove all exclamation marks from the end of sentence.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

function remove(string) {  

    let count = 0

    for (let i = string.length - 1; i > 0; i--) {
      if (string[i] === "!") {
        continue
      } else {
        count = i
        break
      }
    }

    return string.slice(0,count + 1)

}

console.log(remove("Hi!!!"))
