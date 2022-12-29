import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUESTS,
    ALL_PRODUCT_SUCCESS,
    CLEAR_ERROR,
} from '../constants/productsConstant';

const initialState = {
    products: [],
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUESTS:
            return {
                loading: true,
                product: [],
            };
        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount,
            };

        case ALL_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERROR:
            return {
                ...state,

                error: null,
            };

        default:
            return state;
    }
};
