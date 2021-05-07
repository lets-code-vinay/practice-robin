let countries;
const loadingElement = document.querySelector('.loading');
/*
fetch('https://restcountries.eu/rest/v2/all')
    .then(function(res){
        console.log(res.json());
        return res.json();
    })
    .then(function(data){
        console.log(data);
        initialize(data);
    })
    .catch(function(err){
        console.log(err);
        alert('Error :'+ err)
    })
*/
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(data => initialize(data))
    .catch(err => console.log("Error:", err));    

//Dropdown

//----------Search By Region-------------
        fetch('https://restcountries.eu/rest/v2/region/{region}')

        //loadingElement.style.display = 'none';
    function initialize(countriesData){
        countries = countriesData;
//DropDown
                        loadingElement.style.display = 'none ';

            let dropdown = " ";
            let flag = " ";

            for(var i =0; i<= countries.length; i++){

                $("#listCountries").append(
                //dropdown += `<option class="dropdown-item" value="${countries[i].alpha2Code}">${countries[i].name}</option>`);
                dropdown += `<a class="dropdown-item" ><span>${countries[i].region}</span></a>`);
//homepage    
                $('.flagImage').append(
                    flag += `<a href="#"> <img src="${countries[i].flag}" class="flag-img-top" id="${countries[i].alpha3Code}" style="width: 18rem; height: 12rem " >   
                  <div class="list-group-head country-name"><span id="${countries[i].alpha3Code}">${countries[i].name}</span></div>
                  <div class="list-group-item population">Population : <span id="population">${countries[i].population}</span></div>
                  <div class="list-group-item region">Region : <span id="region"></span>${countries[i].region}</div>
                  <div class="list-group-item capital"> Capital : <span id="capital">${countries[i].capitals}</span></div></a>`);
                
                //console.log("Printing name of "+ countries[i].region)
                
            }
            //document.getElementById("listCountries").innerHTML = dropdown;
           //Search flag display
       /*
           let card = ' ';
           for(var i=0; i<= countries.length; i++){ 
                $('.flagImage').append(`<img src="${countries[i].flag}" class="card-img-top" id="${countries[i].alpha3Code}" >` );  
                 }
        */
        
        } 
            
            /*function flag(){
                    let card = ' ';
                    for(var i=0; i<= countries.length; i++){ 
                         $('.flagImage').append(
                ` <div class="list-group-head country-name"><span id="${countries[i].alpha3Code}">${countries[i].name}</span></div>
                  <div class="list-group-item population">Population : <span id="population">${countries[i].population}</span></div>
                  <div class="list-group-item region">Region : <span id="region"></span>${countries[i].region}</div>
                  <div class="list-group-item capital"> Capital : <span id="capital">${countries[i].capitals}</span></div>`);
                }
            }
              // document.gtElementsById("card").innerHTML =card;
        }
        */  
    
    //Button search

    //back button

    //Border Countries
    /* SetInvteral

    setTimeout(function(){
        $("#first_container").remove();
    }, 1000);
    */

    setInterval(initialize, 1000);
