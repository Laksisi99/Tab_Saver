let mySaves = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {

    mySaves.push(inputEl.value)
    inputEl.value = ""
    renderSaves()

})

function renderSaves(){

    let listItems = ""
    for(let i = 0; i < mySaves.length; i++)
    {
        listItems += `
            <li>
                <a target = '_blank' href='${mySaves[i]}'>
                    ${mySaves[i]}
                </a>
            </li>
        `
    }

    ulEl.innerHTML = listItems

}

