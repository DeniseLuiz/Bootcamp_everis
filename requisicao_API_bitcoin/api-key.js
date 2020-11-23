
//My api key

var apikey = {
    key: 'e6ee3b71-f14b-4463-848a-2f81f2ff4a06'
}

//GET

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)

    .then((response) => {
        if(!response.ok) throw new Error ('Erro ao executar a requisição, status ' + response.status);
        return response.json();
    }).then((api) => {
        
        var texto = "";

        for (let i = 0; i<10; i++){
            texto = texto + `<div class="media mt-4">
            <img style="margin-top: 17px;" src="coin.jpg" class="alig-self-center mr-3" alt="coin" width="100" height="60">
            <div class="media-body">
                <h5 class="mt-2"> ${api.data[i].name}</h5>
                <p>${api.data[i].symbol}</p>
                <p style="margin-top: -17px;">${api.data[i].first_historical_data}</p>
            </div>
        </div>`

        document.getElementById('coins').innerHTML = texto;
        }
        //console.log(api);
    }).catch((error) => {
        console.error(error.message);
    });