import { BUY_CAKE, BUY_ICE } from './constant';

const initialCakeState = {
    noOfCakes: 10
}

const initialIceState = {
    noOfIce: 56
}

export const cakeReducer = (state = initialCakeState, action = {}) => {
    switch (action.type) {
        case BUY_CAKE:
            return { ...state, noOfCakes: state.noOfCakes + 1 }

        default:
            return state
    }
}

export const iceReducer = (state = initialIceState, action = {}) => {
    switch (action.type) {
        case BUY_ICE:
            return { ...state, noOfIce: state.noOfIce * 1.4 }

        default:
            return state
    }


}