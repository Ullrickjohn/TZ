const cardsWrapper = document.querySelector(".card-block")
const api = "https://dev-cabinet.seenday.com/e.scripts?page=pages:unload&event=get&unload_id=2175"

const endpoints = {
date: 'api',
status: 'api',
id: 'api'
}
function inchData(api){
return `
   
<div class="block">
<div>Задача выполнена: <span class="text-bold"> ${api.date}</span></div>
<div>Статус задачи: <span class="text-bold"> ${api.status}</span></div>
<div>ID выгрузки: <span class="text-bold">${api.id}</span> </div>
</div> 
    `
}
fetch(api + endpoints.data)
.then(res => res.json())
.then(data => {
data.response.data.forEach(inch =>{
cardsWrapper.innerHTML += inchData(inch)

})
})