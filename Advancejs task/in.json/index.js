const json_data = require('./index.json');

// console.log('json_data', json_data)


// 1. state na name par thi city na name
// function getCityByStateName(state) {
//     let filterState = json_data.filter((e) => {
//         return e.state_name === state
//     })
//     let arr1 = []
//     for (i = 0; i < filterState.length; i++) {
//         let element = filterState[i].city;
//         arr1.push(element)
//     }
//     return arr1
// }
// let storeFilterState = getCityByStateName("Gujarāt")
// console.log("🚀 ~ file: index.js:13 ~ storeFilterState:", storeFilterState)

// 2. me apela hoy aa charactor thi vadhare  charactor hoy te city na name

// let cityLength = json_data.filter((e) => {
//     return e.city.length <= 8
// })
// console.log("🚀 ~ file: index.js:17 ~ cityLength ~ cityLength:", cityLength.length)
// let newData = []
// json_data.map((e) => {
//     return e.city.length <= 8 ? newData.push(e.city) : null
// })
// console.log("🚀 ~ file: index.js:19 ~ getCityByStateName ~ newData:", newData)


// 3. city list which has population more then i gave

// let cityPopulation = json_data.filter((e) => {
//     return e.population < 5000
// })
// console.log("🚀 ~ file: index.js:24 ~ cityPopulation ~ cityPopulation:", cityPopulation.length)




// 4. acending decending population wise 
// cityPopulation.sort((a, b) => {
//     return b.population - a.population
// })
// return cityPopulation


// newArr.sort((a, b) => {
//     return a.population - b.population
// })
// return newArr




// 6.population
// function cityPop(population) {
//     let filPop = json_data.filter((e) => {
//         return e.population === population
//     })
//     let cityPopName = filPop.filter((e) => {
//         return e.city
//     })
//     let newArr = []
//     for (i = 0; i < cityPopName.length; i++) {
//         let element = cityPopName[i].city
//         newArr.push(element)
//     }
//     return newArr
// }
// let storePop = cityPop("2496970")
// console.log("🚀 ~ file: index.js:71 ~ storePop:", storePop)




//7. cities sum of particular state

// function sumOfCityPop(state) {
//     let filterState = json_data.filter((e) => {
//         return e.state_name === state
//     })

//     let total = 0;
//     filterState.map((e) => {
//         total = parseInt(e.population) + total
//     })
//     console.log("🚀 ~ file: index.js:84 ~ filterState.map ~ total:", total)

// }
// sumOfCityPop("Gujarāt")

//city wise population show
// function matchCityName(cityName) {
//     let filterCity = json_data.filter((e) => {
//         return e.city === cityName
//     })
//     let population = []
//     for (let i = 0; i < filterCity.length; i++) {
//         const element = filterCity[i].population;
//         population.push(element)
//     }
//     return population
// }
// let match = matchCityName("goa")
// console.log("🚀 ~ file: index.js:105 ~ match:", match)



// city to state 
// function cityOfState(cityName) {
//     let filterCity = json_data.filter((e) => {
//         return e.city === cityName
//     })
//     let filterState = filterCity.filter((e) => {
//         return e.state_name
//     })
//     let arr = []
//     for (let index = 0; index < filterState.length; index++) {
//         const element = filterState[index].state_name;
//         arr.push(element)
//     }
//     return arr
// }
// let cityS = cityOfState("Vishākhapatnam")
// console.log("🚀 ~ file: index.js:125 ~ cityS:", cityS)



// search of city 
function searchCity() {
    let city = json_data.filter((e) => {
        return e.city.toLowerCase().includes("ahm")
    })
    city.sort((a, b) => {
        return a.population - b.population
    })
    console.log("city:", city)
}
searchCity()