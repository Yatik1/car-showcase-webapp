

const url = process.env.URI!;

export async function fetchCars() {
 const headers = {
    'X-RapidAPI-Key': process.env.API_KEY!,
    'X-RapidAPI-Host': process.env.API_HOST!,
 }

 const response = await fetch(url, {
    headers: headers,
 });

 const result = await response.json();
 return result;
}
