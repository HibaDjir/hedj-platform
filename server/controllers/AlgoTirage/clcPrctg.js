// const Wilaya =require('../../models/wilaya')
// const Commune =require('../../models/Commune')
function setStatus(pelerins,status){

    for(let i=0;i<pelerins.length;i++){
        pelerins[i].status=status

    }
    return pelerins
}

module.exports = {setStatus} 
 
 
 
//  function calculateCityPopulationPercentages(cityPop, totalPop, nbPlaces) {
//     const cityPerc =  (cityPop * totalPop)/100
//     const cityNbPlaces = Math.round((cityPerc*nbPlaces)/100)
    
//     return cityNbPlaces

//  }
//  exports.clcWilaya=async(req,res)=>{

//   const wilaya = await.findById() 
//  }




// function calculateCityPopulationPercentages(cities, totalPop, nbPlaces) {
//     // Calculate total population of the country
//    // const totalPopulation = cities.reduce((acc, city) => acc + city.population, 0);

  
//     // Calculate the percentage of each city
//     const cityPercentages = cities.map(city => {
//       return {
//         name: city.name,
//         percentage: (city.population / totalPop) * 100
//       };
//     });

//     const cityNbPlaces = cityPercentages.map(cityPer =>{
//         return{
//             name: cityPer.name,
//             nbPlace: Math.round((nbPlaces * cityPer.percentage)/100)
//         };
//     })



  
//     return cityNbPlaces;
//   }
  
//   // Example usage:
//   const cities = [
//     { name: 'Algerie', population: 1977663 },
//     { name: 'Oran', population: 645984 },
//     { name: 'Constantine', population: 450097 }
//   ];
  
//   const percentages = calculateCityPopulationPercentages(cities);
//   console.log(percentages);