export default class Service {

  getResource = async () => {
    const res = await fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/RU/RUB/en-US/VKO-sky/JFK-sky/2021-08-12?inboundpartialdate=2021-08-15", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "f70226455emshd372e9b6b3e03b7p183683jsn316101700180",
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
      }
    });

    if (!res.ok) {
      throw new Error(`Could not fetch "skyscanner-skyscanner", status: ${res.status}`)
    }

    return await res.json();
  }

  getFlights = async () => {
    const res = await this.getResource();
    return await {
      from: res.Places[1].CityName,
      to: res.Places[0].CityName,
      airport: res.Places[1].SkyscannerCode,
      airportTo: res.Places[0].SkyscannerCode,
      comp: res.Carriers[0].Name,
      date: res.Dates.OutboundDates[0].PartialDate,
      time: res.Dates.OutboundDates[0].QuoteDateTime,
      price: res.Quotes[0].MinPrice,
      like: false,
      key: Math.random().toString()
    }
       
    
  }
}

// {from: 'Moscow1', to: 'New York', airport: 'VKO', date: '28 June, 2020', time: '14.50', comp: 'Aeroflot', price: '23924', like: true, key: '1'},
// {from: 'Moscow2', to: 'New York', airport: 'VKO', date: '28 June, 2020', time: '14.50', comp: 'Aeroflot', price: '20398', like: false, key: '2'},
// {from: 'Moscow3', to: 'New York', airport: 'VKO', date: '28 June, 2020', time: '14.50', comp: 'Aeroflot', price: '24573', like: true, key: '3'},
// {from: 'Moscow4', to: 'New York', airport: 'VKO', date: '28 June, 2020', time: '14.50', comp: 'Aeroflot', price: '24573', like: false, key: '4'},
// {from: 'Moscow5', to: 'New York', airport: 'VKO', date: '28 June, 2020', time: '14.50', comp: 'Aeroflot', price: '24573', like: false, key: '5'},

// const service = new Service();

// console.log(service.getFlights)
// useEffect(()=>{
// service.getResource()
// .then((res) => {
//   setLikedFligths({
//     from: res.Places[1].CityName,
//     to: res.Places[0].CityName,
//     airport: res.Places[1].SkyscannerCode,
//     comp: res.Carriers[0].Name,
//     date: res.Dates.OutboundDates[0].PartialDate,
//     time: res.Dates.OutboundDates[0].QuoteDateTime,
//     price: res.Quotes[0].MinPrice,
//     like: false,
//     key: Math.random()
//   })
// })}, [])
// console.log(likedFligths)