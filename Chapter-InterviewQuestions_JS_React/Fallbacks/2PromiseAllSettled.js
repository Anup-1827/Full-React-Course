Promise.allSettledPolyFiill = function (promiseArr){

    const settledPromises = promiseArr.map((prom)=>{
        return (
            prom
            .then(res=>{
                return(
                    {
                        status: "fulfilled",
                        value: res
                    }
                )
            })
            .catch(err=>{
                return(
                    {
                        status: "rejected",
                        value: err
                    }
                )
            })
        )
    })

    return Promise.all(settledPromises)
}

const myPromise1 = new Promise((resolve, reject)=>{
    resolve(1)
})


const myPromise2 = new Promise((resolve, reject)=>{
    reject(1)
})

Promise.allSettledPolyFiill([myPromise1, myPromise2])
.then(res=>{
    console.log(res) // Array of All Settled Promise
})
