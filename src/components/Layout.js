import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPrograms } from '../actions/programActions'
import { fetchDataElements } from '../actions/dataelementsActions'
import { fetchIndicators } from '../actions/indicatorActions'
import { fetchDataSets } from '../actions/datasetActions'



//import { bindActionCreators } from 'redux'



class App extends Component {
  componentWillMount(){
   
    this.props.dispatch(fetchPrograms())    
    this.props.dispatch(fetchIndicators())     
    this.props.dispatch(fetchDataSets())     
    this.props.dispatch(fetchDataElements())     

    
  }


  getPrograms(){
    //console.log('received programs',this.props.programs)
    return this.props.programs.map((program) => {
      return (
        <li key={program.id} >{program.displayName}</li>
      )
    })
  }

  getIndicators(){
    //console.log('received indicators',this.props.indicators)

    //add returning functions here
  }

  getDataSets(){
    //console.log('received DataSets',this.props.dataSets)

    //add returning functions here
  }
  getDataElements(){
    //console.log('received DataElements',this.props.dataElements)

    //add returning functions here
  }

  render() {
    return (
      

      
      <div className="App">

            {/* add search button here */}
            
            {/* combine all objects and search as one */}

            <h2>programs </h2>
            {this.getPrograms()}

            <h2> Indicators </h2>
            {this.getIndicators()}

            <h2> DataSets </h2>
            {this.getDataSets()}

            <h2> DataElements </h2>
            {this.getDataElements()}
      
      
        
      </div>
     
    );
  }
}


function mapStateToProps(state) {
    //testing importing elements
    //console.log('the state',state.dataElements.dataElements.dataElements)
    return{
      programs: state.programs.programs,
      indicators: state.indicators.indicators.indicators,
      dataSets: state.dataSets.dataSet.dataSets,
      dataElements: state.dataElements.dataElements.dataElements
    }
}

export default connect(mapStateToProps)(App);
