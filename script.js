const card = document.querySelector(".block")
const api = "https://dev-cabinet.seenday.com/e.scripts?page=pages:unload&event=get"

const endpoints = {
date: 'api',
status: 'api',
id: 'api'
}
function dateCard(api){
return
   <div class="block">
        <p>Задача выполнена: <span class="text-bold"> ${card.date}</span></p>
        <p>Статус задачи: <span class="text-bold"> ${card.status}</span></p>
        <p>ID выгрузки: <span class="text-bold">${card.id}</span> </p>
    </div>
}

fetch(api + endpoints.date)
.then(res => res.json())
.then(date => {
    date.forEch(date => {
    card.innerHTML += dateCard(date)
    })

})