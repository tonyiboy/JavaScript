// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
// If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
// If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
   let result = []
   let i = 0

    do {
        if (x[i] === "good") result.push(x[i]) 
        i++
    }while (i < x.length)

    return result.length === 0 ? 'Fail!' : result.length <= 2 ? 'Publish!' : 'I smell a series!'

}
