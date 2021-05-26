const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'));


fetch('https://api.covid19api.com/summary')
.then((apidata)=>{return apidata.json();
}).then((actualdata)=>{
    console.log(actualdata);
    
    var tbval= document.getElementById('tbval');
    for(i=1; i<(actualdata['Countries'].length);i++ ){
        var x = tbval.insertRow();
            x.insertCell(0);
        tbval.rows[i].cells[0].innerHTML = (actualdata['Countries'][i-1]['Date']);
        x.insertCell(1);
        tbval.rows[i].cells[1].innerHTML = (actualdata['Countries'][i-1]['CountryCode']);
        x.insertCell(2);
        tbval.rows[i].cells[2].innerHTML = (actualdata['Countries'][i-1]['Country']);
        x.insertCell(3);
        tbval.rows[i].cells[3].innerHTML = (actualdata['Countries'][i-1]['NewConfirmed']);
        x.insertCell(4);
        tbval.rows[i].cells[4].innerHTML = (actualdata['Countries'][i-1]['NewDeaths']);
        x.insertCell(5);
        tbval.rows[i].cells[5].innerHTML = (actualdata['Countries'][i-1]['NewRecovered']);
        x.insertCell(6);
        tbval.rows[i].cells[6].innerHTML = (actualdata['Countries'][i-1]['TotalConfirmed']);
        x.insertCell(7);
        tbval.rows[i].cells[7].innerHTML = (actualdata['Countries'][i-1]['TotalDeaths']);
        x.insertCell(8);
        tbval.rows[i].cells[8].innerHTML = (actualdata['Countries'][i-1]['TotalRecovered']);




        

    }
})
.catch((error)=>{console.log(error);})
