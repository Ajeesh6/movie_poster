function search(){
    destination=dest.value
    fetch(`https://imdb-api.com/en/API/SearchMovie/k_6dm3gxws/${destination}`).then(data=>data.json())
    .then(data=>dispayData(data))

}

function dispayData(destinationDetails){
    Destination=destinationDetails.results[0].title
    weather=destinationDetails.results[0].image
    description=destinationDetails.results[0].description
   
    result.innerHTML=`<p style="font-size:20px;color:white"><span style=" font-family: inherit;font-weight: bold;font-size: 35px;">${Destination}</span>
    <span>-${description}</span></P>
    <img src="${weather}" class="card-img-top" style="height:700px;width:550px;border:10px solid black" alt="...">`
   
}