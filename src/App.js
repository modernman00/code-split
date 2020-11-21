import React from 'react'
import { connect } from 'react-redux'
import Button from './components/Button'
import Header from './components/Header'
import Index from './components/UseReducer.js/ContextReducer/Index'
import FetchData2 from './components/UseReducer.js/FetchData2'
import Reducer from './components/UseReducer.js/Reducer'
import { buyCakes, buyIce } from './redux/cakes/action'

const mapStateToProps = (state) => {
  return {
    noOfCakes: state.cake.noOfCakes,
    noOfIce: state.ice.noOfIce
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCakes : () => dispatch(buyCakes()),
    ice : () => dispatch(buyIce())
  }
}


  function App(props) {

    console.log(props)

    return (
      <div>
        <Header countCakes={props.noOfCakes} title = 'Number of Cake'  />
        <Button fn = {props.buyCakes} titleButton = 'Buy Cake' color = 'green' />
        <Header countCakes={props.noOfIce} title = 'Number of IceCream' />
        <Button fn = {props.ice} titleButton = 'Buy Ice Cream' color = 'blue' />
        <Reducer/>
        <Index/>
        <FetchData2/>

      </div>

    )
  }

  export default connect(mapStateToProps, mapDispatchToProps)(App)
