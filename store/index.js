import portfolios from './api/portfolio'
import skills from './api/skills'

export const state = () => ({
    pages: {
        current_page: "",
        title: "Romadhan Edy Prasetyo"
    },
    portfolios,
    skills,
})

export const mutations = {
    INITIAL_PAGE: (state, { page, title }) => {
        state.pages.current_page = page
        state.pages.title = title
    }
}

export const actions = {
    INITIAL_PAGE: async ({ commit }, { page, title }) => {
        try {
            commit("INITIAL_PAGE", { page: page, title: title })
        } catch (ex) {
            console.log(ex)
        }
    }
}