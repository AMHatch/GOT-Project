// $(() => {
//     let fullCharList = [];
//     let flag = false
// for(let index = 1; index <=50;index++){
//     $.get(`https://www.anapioficeandfire.com/api/characters?page=${index}&pageSize=50`)
//     .done((charList) => {
//     fullCharList.push(charList)
//     })
//     .done(() => {
        
//         if(fullCharList.length >= 2130 && flag == false){
//         flag = true
//         console.log(fullCharList);

//         }
//     })
//     })



$(() => {
    let fetchArr =[]
    let url = ''
for(let page = 1;page<45;page++){
    url= fetch(`https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=50`)
    fetchArr.push(url)
    }
    let promise = Promise.all(fetchArr)
    promise.then((resultsArr) => {
        return Promise.all(resultsArr.map(char => {
            return char.json()
        }))
    })
    .then((dataArr) => {

        let charArr = []
            dataArr.forEach((char) => {
                charArr = [...charArr,...char]
            })
            console.log(charArr);
        //manipulate DOM

    })
})




let fetchHouseArr =[]
let HouseUrl = ''
for(let page = 1;page<45;page++){
url= fetch(`https://www.anapioficeandfire.com/api/houses?page=${page}&pageSize=50`)
fetchArr.push(url)
}
let promise = Promise.all(fetchHouseArr)
promise.then((resultsHouseArr) => {
    return Promise.all(resultsHouseArr.map(house => {
        return house.json()
    }))
})

.then((dataArr) => {

    let houseArr = []
        dataArr.forEach((house) => {
            houseArr = [...houseArr,...house]
        })
        console.log(houseArr);
    //manipulate DOM



    })



test={
    name:dasd,
    age:adsad,
    

}
     test['house'] && test.house.legnth       

    