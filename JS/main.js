var promise = new Promise(
    // Executor
    function(resolve, reject) {
        //resolve: thanh cong
        //reject: that bai
        reject()
    })



promise
    .then(function() {
        console.log(1)
    })
    .catch(function() {
        console.log(2)
    })
    .finally(function() {
        console.log(3)
    })