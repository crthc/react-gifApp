
export const getGifs = async(category) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=EF8vAQK2ZokEVmZ1GNy6iZxWdwaRAQor`
  const resp = await fetch(url);
  const {data} = await resp.json();

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url // ? Por si vienen imagenes 
    }
  })

  return gifs;
 
}