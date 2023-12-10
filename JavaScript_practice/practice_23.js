//Create a stopwatch object that has four properties and three methods

let stopWatch = {}

stopWatch.brand = "Nike"
stopWatch.color = "blue"
stopWatch.shape = "round"
stopWatch.size = "small"

stopWatch.start = function(){
  console.log("Start")
}

stopWatch.stop = function(){
  console.log("Stop")
}

stopWatch.sayBrand = function(){
  console.log(stopWatch.brand)
}