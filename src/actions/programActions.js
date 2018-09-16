const headers ={
    headers:{
        'Authorization': `Basic ${btoa('evanpersie3@gmail.com:skolastikA97')}`
}
}


export function fetchPrograms(){
    return function(dispatch){
        fetch('http://197.136.81.99:8082/test/api/programs.json?paging=false', headers)
        .then(res => res.json())
        .then((response) => {
            dispatch({ 
                type: 'FETCH_PROGRAMS_FULLFILLED',
                payload: response})
                console.log('programs fetched')

                
                
        })
        .catch((err) => {
            dispatch({ 
                type: 'FETCH_PROGRAMS_REJECTED',
                payload: err })
        })
    }
}