import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Button from './components/Button'
import Header from './components/Header'
import {buyCakes, buyIce} from './redux/cakes/action'

function HookApp() {

    const numberOfCakes = useSelector(state => state.numberOfCakes)
    const numberOfIce = useSelector(state => state.numberOfIce)
    const dispatch = useDispatch()
    const buyCakeFn = () => dispatch(buyCakes())
    const buyIceFn = () => dispatch(buyIce())
    return (
        <div>
              <Header countCakes={numberOfCakes} title= 'number of cakes Hook' />
                <Button fn = { buyCakeFn } titleButton = 'Buy Cakes Hook' />

                 <Header countCakes={numberOfIce} title= 'number of ice cream hook ' />
                <Button fn = { buyIceFn } titleButton = 'Buy ice cream hook' />
        </div>
    )
}

export default HookApp
