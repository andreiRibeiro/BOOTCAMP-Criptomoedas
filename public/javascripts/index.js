const table = document.getElementById('tbody');

window.onload = this.loadApi();

function loadApi(){
    fetch('http://localhost:3000/api')
        .then((response) => {
            if (response.status != 200){
                throw new Error(`Erro ao solicitar recurso interno ${response.statusText}`);
            }
            return response.json();
        })
        .then((responseBody) => {                          
            let arr = responseBody.data;
            let cont = 1;

            for (let value of arr){
                //console.log(value.name);
                if (cont <= 10){
                    let tr = document.createElement('tr');
                    tr.innerHTML = this.createTd(value);            
                    table.appendChild(tr);
                    cont++;
                } else {
                    break;
                }
            }
        })
        .catch((error) => {
            console.error('Opsss: ' + error.message);
        });
}

function createTd(value){
    dateFormated = new Date(value.first_historical_data);
    
    return `    
    <td>${value.name}</td>
    <td>${value.symbol}</td>
    <td>${dateFormated.getDate()}/${dateFormated.getMonth()+1}/${dateFormated.getFullYear()}</td> 
    `
}