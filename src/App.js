import React, {Component} from 'react';
import Home from './Components/home'
import {Provider} from 'react-redux';
import store from './Components/Redux/store'

class App extends Component{

  render(){
    return(
      <Provider store={store}>
      
        < Home />
      
      </Provider>
    )
  }
}

export default App;