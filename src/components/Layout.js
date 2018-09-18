import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPrograms } from '../actions/programActions'
import { fetchDataElements } from '../actions/dataelementsActions'
import { fetchIndicators } from '../actions/indicatorActions'
import { fetchDataSets } from '../actions/datasetActions'

//try print the whole array kwanza

//import { bindActionCreators } from 'redux'

var arr = []; //stores all info

const emptyarray= () => {
  for (var i = 0;i< arr.length; i++) {
 
    arr.pop();
    
   }
}
 



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      filterText: ''
    }
  }

  //fetch the data from api
  componentWillMount(){
    this.props.dispatch(fetchDataSets())     

    this.props.dispatch(fetchPrograms())    
    this.props.dispatch(fetchIndicators())     
    this.props.dispatch(fetchDataElements())     


     
  }

//get programs,datasets,indicators,dataelements
  getPrograms(){
   // console.log('Search Array: ',arr)

    console.log('received programs',this.props.programs)
    return this.props.programs.map((program) => {
      arr.push(program)
      //return (
        //<li key={program.id} >{program.displayName}</li>
     // )
    })
  }

  getDataSets(){
   // console.log('received datasets',this.props.dataSets)
    
    if (this.props.dataSets) {
      return this.props.dataSets.map(function (item){
        arr.push(item)
          // return (
          
          //     <li key={item.id} >{item.displayName}</li>
        
          // );
      });
    }
    else{
      return(
        <div>

        <h1> get data sets error loading </h1>

        </div>
      )
    }
  }
  getIndicators(){
    //console.log('received indicators',this.props.indicators)

    if (this.props.indicators) {
      return this.props.indicators.map(function (item){
        arr.push(item)
          // return (
          
          //     <li key={item.id} >{item.displayName}</li>
        
          // );
      });
    }
    else{
      return(
        <div>

        <h1> get indicators error loading </h1>

        </div>
      )
    }
  }
  getdataElements(){
   // console.log('received dataElements',this.props.dataElements)

    if (this.props.dataElements) {
      return this.props.dataElements.map(function (item){
        arr.push(item)
          // return (
          
          //     <li key={item.id} >{item.displayName}</li>
        
          // );
      });
    }
    else{
      return(
        <div>

        <h1>data elements error loading </h1>

        </div>
      )
    }
  }




  getSearchArray(){
    console.log('received searcharray',arr)

    if (arr) {
      return arr
      .filter( item =>{

        //console.log(dynamicData.name)
        return item.displayName.toLowerCase().indexOf(this.state.filterText.toLowerCase()) >= 0
      })     
      .map(function (item){
       
          return (
          
              <li>{item.displayName}</li>
        
          );
      });
    }
    else{
      return(
        <div>

        <h1>error loading </h1>

        </div>
      )
    }
  }

  setInput = (e) => {
    // e.target.value is the text from our input
    console.log(e.target.value)
    this.setState({
      filterText: e.target.value
    });
  }


 


  render() {
    return (
      

      
      <div className="App">
             {emptyarray()}
            {this.getPrograms()}
            {this.getDataSets()}          
            {this.getIndicators()}          
            {this.getdataElements()}
            
            {/* add search button here */}
           
            {/* <form id='search-bar' onKeyDown={this.search} > */}
            <input type="text" onChange={ this.setInput } value={ this.state.filterText } />
            
            
            {/* combine all objects and search as one */}
            
           


            
            
          

            {this.getSearchArray()}

    
         
           

            
      
      
        
      </div>
     
    );
  }
}


function mapStateToProps(state) {
    //testing importing elements
    //console.log('the state',state.dataElements.dataElements.dataElements)
    return{
      programs: state.programs.programs, //done
      indicators: state.indicators.indicators.indicators,
      dataSets: state.dataSets.dataSet.dataSets,//done
      dataElements: state.dataElements.dataElements.dataElements
    }
}

export default connect(mapStateToProps)(App);
