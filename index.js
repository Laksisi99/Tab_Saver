let mySaves = []
let oldSaves = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const savesFromLocalStorage = JSON.parse(localStorage.getItem("mySaves"))

if(savesFromLocalStorage){
    mySaves = savesFromLocalStorage
    render(mySaves)
}

tabBtn.addEventListener("click", function(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){

        mySaves.push(tabs[0].url)
        localStorage.setItem("mySaves", JSON.stringify(mySaves))
        render(mySaves)
    

    })

    
})

function render(saves){

    let listItems = ""
    for(let i = 0; i < saves.length; i++)
    {
        listItems += `
            <li>
                <a target = '_blank' href='${saves[i]}'>
                    ${saves[i]}
                </a>
            </li>
        `
    }

    ulEl.innerHTML = listItems

}

deleteBtn.addEventListener("dblclick", function(){

    localStorage.clear()
    mySaves = []
    render(mySaves)

})

inputBtn.addEventListener("click", function() {

    mySaves.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("mySaves", JSON.stringify(mySaves))
    render(mySaves)

})

