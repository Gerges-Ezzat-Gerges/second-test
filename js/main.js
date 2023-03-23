// localStorage.setItem('product','wegkljwklegj')
var bookNameInput = document.getElementById('bookName')
var urlInput = document.getElementById('url')

var dataContainer = []
if (localStorage.getItem('data')!=null){
    dataContainer = JSON.parse(localStorage.getItem('data'))
    displayData()
} 
// else if(localStorage.getItem('data')=null){
//     dataContainer = JSON.parse(localStorage.getItem('data'))
//     // deleteAllData()
//     // displayData()
// }

function addData(){
    var dataObj = {
        name: bookNameInput.value,
        url: urlInput.value
    }
    if (dataObj.url.includes('http://') != true &&dataObj.url.includes('https://') != true) {
        'http://'+dataObj.url
    }
    dataContainer.push(dataObj)
    displayData()
    localStorage.setItem('data',JSON.stringify(dataContainer))
    console.log(dataContainer);
    clearInputs()

}

function displayData(){
    var info=``
    for (var i = 0 ; i < dataContainer.length ; i++){
        info+=`
        <tr>
        <td class="fw-bold fs-3">${dataContainer[i].name}</td>
        <td><a href="${dataContainer[i].url}" target="_blank"><button class="btn btn-outline-info">Visit</button></a></td>
        <td><button onclick="deleteData(${i})" class="btn btn-outline-danger">Delete</button></td>
        </tr>
        `
    }
    document.getElementById('tbody').innerHTML = info

}

function clearInputs(){
    bookNameInput.value="",
    urlInput.value=""
}

function deleteData(index){
    dataContainer.splice(index , 1)
    localStorage.setItem('data',JSON.stringify(dataContainer))
    displayData()
}

function deleteAllData(){
    dataContainer=[]
    localStorage.clear()
    displayData()
}
