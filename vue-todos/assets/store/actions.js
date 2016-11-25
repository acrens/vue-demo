import * as types from './mutation-types'

export const addToCart = ({ commit }, product) => {
    if (product.inventory > 0) {
        commit(types.ADD_TO_CART, {
            id: product.id
        })
    }
}

// export const getAllProducts = ({ commit }) => {
// 	console.log(11111111111);
// }