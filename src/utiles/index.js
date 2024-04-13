export async function fetchRecipes(filter){
    const {query,limit} =filter
     const appId = '19a6fc06'
     const appKey = '1e995e03454ee01b15fe37159cb1bee8'
    const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=0&to=${limit}&`

    const response = await fetch(url)
    const data = await  response.json()
    console.log(data)
    return data?.hits

}
export async function fetchRecipe(id){
    const appId = '19a6fc06'
    const appKey = '1e995e03454ee01b15fe37159cb1bee8'
    const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${appId}&app_key=${appKey}`

const response = await fetch(url)
const data = await response.json();

console.log(data)
return data[0]


}