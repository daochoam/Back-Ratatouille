import axios from "axios"
import path from "path"
import config from "../../config/config.js"

const handlerRecipes = async () => {
    try {
        return await axios
            .get(path.join(config.URL_SPOONACULAR, `complexSearch${config.API_KEY}&addRecipeInformation=true&number=100`))
            // .get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`)
            .then(({ data }) => {
                console.log("🚀 ~ file: handlerRecipes.js:11 ~ .then ~ data:", data)
                return data.results
            })

    }
    catch (error) {
        throw Error(error)
    }
}

export default handlerRecipes
