const nav = document.querySelector('.nav')
const loading = document.querySelector('.loading')
const homepage = document.querySelector('.homepage')
const country = document.querySelector('.country')
const containerCards = document.querySelector('.container-cards')
const input = document.querySelector('input')
const form = document.querySelector('form')


fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(resJson => {
        console.log(resJson)
        console.log(resJson[0].flag)


        for (var i = 0; i < resJson.length; i++) {
            const card = document.createElement('div')
            card.innerHTML = `<div class="flag"><img src="${resJson[i].flag}" style="width:250px; height:150px;"></div>
                                <div class = "content" style="margin-top:10px;margin-left:10px;width:230px; height:180px; word-wrap:break-word">
                                    <p style="font-size:19px; font-weight:700;">${resJson[i].name}</p>
                                    <p style="font-size:17px; font-weight:500;">Population : ${resJson[i].population}</p>
                                    <p style="font-size:17px; font-weight:500;">Region     : ${resJson[i].region}</p>
                                    <p style="font-size:17px; font-weight:500;">Capital    : ${resJson[i].capital}</p>
                        </div>`
            card.className = "card"
            containerCards.insertAdjacentElement("beforeend", card)
        }
    })

form.addEventListener('submit', function (event) {
    event.preventDefault();
    homepage.innerHTML = ''
    fetch(`https://restcountries.eu/rest/v2/name/${input.value}`)
        .then((res) =>{
            if(res.status===404){
                homepage.innerHTML=`<div style="font-size:30px; font-weight:600px; text-align:center;">No results found</div>`
               return res.status
            }
           return res.json()
        
        })
        .then((resJson) => {

            for(var i = 0; i<resJson.length;i++){
                if(resJson[i].name.toLowerCase()===input.value.toLowerCase()){
                    var index = i;
                }
            }
            
            var languagesArray = []
            for (var i = 0; i < resJson[index].languages.length; i++) {
                languagesArray.push(resJson[index].languages[i].name)
            }
            console.log(languagesArray)

            var bordersArray = []
            for (var i = 0; i < resJson[index].borders.length; i++) {
                bordersArray.push(resJson[index].borders[i])
            }
            console.log(bordersArray)


            var countryInject = document.createElement('div');
            countryInject.innerHTML = ` <span class="back"><img src="./images/back.png" height=20px>Back</span>
        <div class="country-card">
            <div class="country-flag"><img src="${resJson[index].flag}" height="300px" width="300px" style=" background-color:grey;" alt=""></div>
            <div class="country-content">
                <div class="title">${resJson[index].name}</div>
                <div class="details">
                    <div class="details1"><p>Native Name : ${resJson[index].nativeName}</p>
                    <p>Population : ${resJson[index].population}</p>
                    <p>Region : ${resJson[index].region}</p>
                    <p>Sub Region : ${resJson[index].subregion}</p>
                    <p>Capital : ${resJson[index].capital}</p>
                    </div>
                    <div class="details2">
                    <p>Top Level Domain : ${resJson[index].topLevelDomain}</p>
                    <p>Currencies : ${resJson[index].currencies[0].name}</p>
                    <p>Languages : ${languagesArray}</p>
                    </div>
                </div>
                <div class="footer">
                Border Countries : ${bordersArray}
                </div>
            </div>
        </div>`

            country.insertAdjacentElement('beforeend', countryInject)
            var back= document.querySelector('.back')
            back.addEventListener('click',function(){
                window.location.reload()
            })

        })
})

//setTimeout(submit, 5000);