import React from 'react'
import { connect } from 'react-redux'
import Button from './components/Button'
import Header from './components/Header'
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
      </div>

    )
  }

  export default connect(mapStateToProps, mapDispatchToProps)(App)
