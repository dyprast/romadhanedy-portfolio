import axios from 'axios'

const baseURL = process.env.API_PORTFOLIO

export const actions = {
    index: async () => {
        try {
            var response = await axios.get(baseURL + `/portfolios-v1.json`)
            return response.data
        } catch (ex) {
            console.log(ex);
            throw "something went wrong please try again."
        }
    }
}