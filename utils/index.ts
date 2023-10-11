
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': ,
// 		'X-RapidAPI-Host': '
// 	}
// };


// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

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
