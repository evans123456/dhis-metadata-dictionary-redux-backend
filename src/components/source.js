import React, { Component } from 'react'
import Layout from './Layout'
import Store from '../Store';
import {Provider} from 'react-redux'



export default class source extends Component {
  render() {
    return (

        <Provider store={Store}>
        
      <div>
        <Layout/>
      </div>
        
        </Provider>
    )
  }
}
