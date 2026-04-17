import axios from "axios";

const Trekcategories = [
  "natural.mountain",
  "natural.mountain.cave_entrance",
  "natural.mountain.peak",
];
const Attractioncategories = ["tourism.attraction"];

async function fetchPlaces(preference) {
  const params = {
    categories: `${Trekcategories.join(",")},${Attractioncategories.join(",")}`,
    filter: `circle:${preference.lon},${preference.lat},40000`,
    limit: 20,
    apiKey: process.env.GEOAPIFY_API_KEY,
  };
  const url = "https://api.geoapify.com/v2/places";
  try {
    const data =
      (await axios.get(url, { params })).data.features || [];
    return data;
  } catch (error) {
    console.log("geoapify api error", error);
    return [];
  }
}

function filterPlaces(places) {
  const seen = new Set();

  const filteredPlaces = places.filter((place) => {
    const name = place?.properties?.name;
    const lat = place?.properties?.lat;
    const lon = place?.properties?.lon;

    if (!name || lat == null || lon == null) {
      return false;
    }
    const nameLower = name.trim().toLowerCase().replace(/\s+/g, " ");

    if (seen.has(nameLower)) {
      return false;
    }

    seen.add(nameLower);
    return true;
  });

  const normalisedPlaces = filteredPlaces.map((place) => ({
    name: place.properties.name,
    latitude: place.properties.lat,
    longitude: place.properties.lon,
    state: place?.properties?.state || null,
    county: place?.properties?.county || null,
    district: place?.properties?.state_district || null,
   
    city: place?.properties?.city || null,
 
    category: place?.properties?.categories?.some((cat) =>
      Trekcategories.includes(cat),
    )
      ? "trek or viewpoint"
      : "tourist attraction",
    
    openingHours: place?.properties?.opening_hours || null,
    source: "geoapify",
    
  }));
  return normalisedPlaces;

}

export default { fetchPlaces, filterPlaces };
