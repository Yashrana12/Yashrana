/*
-> make data storage for your family and vehicle details of each family member
-> all son of your dada
-> all son of father/uncle's (note - me jeni id aapu ana j son na name print thava joiye like uncle nu apu to uncle other wise dada nu apu to dad nu)
-> badha family ni vehicale details like me jeni id apu aa family ni
*/





let famDetils = {
    name: 'Harilal',
    age: 70,
    Dob: '01/01/1953',
    child: [{
        id: 101,
        name: 'Yogeshbhai',
        age: 53,
        Dob: '11/2/1969',
        occupation: 'Jari-works',
        vehical_Details: [{
                Name: 'activa5G',
                number: 'GJ05-sv-5893'
            },
            {
                Name: 'access',
                number: 'GJ05-rn-6168'
            },
            {
                Name: 'activa5G',
                number: 'GJ05-gn-9135'
            },
        ],
        children: [{
                name: 'nikunj',
                age: 31,
                occupation: 'frontend developer'
            },
            {
                name: 'Chaitali',
                age: 28,
            },
            {
                name: 'Yash',
                age: 26,
            },



        ]
    }, {
        id: 102,
        name: 'Bakulbhai',
        age: 49,
        Dob: '1/5/1965',
        occupation: 'Jari-works',
        vehical_Details: [{
                Name: 'honda-shine',
                number: 'GJ05-bs-5841'
            },
            {
                Name: 'Duo',
                number: 'GJ05-jd-4585'
            },
        ],
        children: [{
                name: 'Vandana',
                age: 21,
            },
            {
                name: 'Janish',
                age: 22,
            },
        ]
    }, {
        id: 103,
        name: 'Seemaben',
        age: 50,
        Dob: '13/8/1966',
        occupation: 'housh-wife',
        vehical_Details: [{
                Name: 'activa',
                number: 'GJ05-jf-5541'
            },
            {
                Name: 'access',
                number: 'GJ05-jr-4665'
            },
        ],
        children: [{
                name: 'Roshni',
                age: 25,
            },
            {
                name: 'Aayush',
                age: 17,
            },
        ]
    }]
}
// console.log(famDetils)
//(1) all son of your dada

// let grandPaa = famDetils.child.map((e) => {
//     console.log("All sons of grand paa:", e.name)
// })


//(2) all son of father/uncle's (note - me jeni id aapu ana j son na name print thava joiye like uncle nu apu to uncle other wise dada nu apu to dad nu)

// function printChildById(id) {
//     let match = famDetils.child.find((x) => {
//         return x.id === id
//     })
//     return match
// }

// let data =
//     printChildById(102)

// console.log(data)

//===========================================

function printChildById(id) {
    let data = famDetils.child.find((e) => {
        return e.id === id
    })
    console.log("🚀 ~ file: family_tree.js:128 ~ data ~ data:", data)

    data.children.map((x) => {
        console.log(x.count)
    })
}
printChildById(103)
//(3) badha family ni vehicale details like me jeni id apu aa family ni

// function vehicalInfo(id) {
//     let set = famDetils.child.find((x) => {
//         return x.id === id
//     })
//     let vehical = set.vehical_Details.map((e) => {
//         return e
//     })
//     return vehical
// }

// let vehicalData = vehicalInfo(101)
// console.log("vehical", vehicalData)

// function printVehicalById(id) {
//     let data = famDetils.child.find((e) => {
//         return e.id === id
//     })
//     return data.vehical
// }

// let set = printVehicalById(102)
// console.log("🚀 ~ file: family_tree.js:149 ~ set:", set)