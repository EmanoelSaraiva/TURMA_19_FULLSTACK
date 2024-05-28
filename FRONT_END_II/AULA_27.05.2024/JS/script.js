window.onload = () => {listUser()}

const userNames = document.getElementById('name')
const userLastNames = document.getElementById('sobrenome')
const tableId = document.getElementById('tables')

const getUsers = () => {
    api.get('/users').then((response) => {
        console.log(response)
    }).catch((error) => {
        console.error(error.message)
    })
}

const listUser = async () => {
    try{
        const response = await api.get('/users')
        const users = response.data.data

        users.forEach(user => {
            const tableRow = document.createElement('tr')

            const firstName = document.createElement('td')
            firstName.textContent = user.first_name

            const lastName = document.createElement('tr')
            lastName.textContent = user.last_name

            tableRow.appendChild(firstName)
            tableRow.appendChild(lastName)

            tableId.tBodies[0].appendChild(tableRow)
        });
    } catch (erro){
        console.error(erro.message)
    }
}

