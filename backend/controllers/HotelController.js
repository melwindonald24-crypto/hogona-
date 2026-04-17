import SerpOb from "../services/SerpHotelServices.js";

async function getHotels(preferences)
{
    const results=await SerpOb.searchHotels(preferences);
    return SerpOb.extractHotels(results); 
}

async function BookHotel(params) {
  
}

export default getHotels