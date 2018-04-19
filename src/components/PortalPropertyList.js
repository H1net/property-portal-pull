import React, { Component } from 'react';

// import request from 'request-promise-native';

class PortalPropertyList extends Component {
  constructor() {
    super();
    this.state = {
      properties: []
    }
  }

  componentDidMount() {
    let propertyId = '64326220';
    let apiURL = 'http://api.rightmove.co.uk/api/propertyDetails?propertyId=' + propertyId + '&apiApplication=IPAD';
    console.log("apiURL", apiURL);
    
    // fetch(apiURL, {mode: 'no-cors'})
    // .then(results => results.json())
    // .then(data => {
    //   // console.log(data);
    //   // let properties = data.results.map((property) => {
    //   //   return(
    //   //     <div key="{property.results}">
    //   //       {/* {property.name} */}
    //   //     </div>
    //   //   )
    //   // })
    //   // this.setState(properties: properties);
    //   // console.log("state", this.state.properties);
    // })

    fetch(apiURL, {
      // body: JSON.stringify(data), // must match 'Content-Type' header
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, same-origin, *omit
      // headers: {
      //   'user-agent': 'Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19',
      //   'content-type': 'application/json'
      // },
      // method: 'GET', // *GET, POST, PUT, DELETE, etc.
      // mode: 'no-cors', // no-cors, cors, *same-origin
      // redirect: 'follow', // manual, *follow, error
      // referrer: 'no-referrer', // *client, no-referrer
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'multipart/form-data'
    }).then(function(response) {
      console.log("response", response);
      if(response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    }).then(results => results.json()).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ', error.message);
    });

    // let req = apiURL;
    // request(req)
    //   .then(function (res) {
    //       try {
    //           JSON.parse(res)
    //       } catch (e) {
              
    //       }
    //   })
    //   .catch();
  }

  render () {
    return (
      <div className="property_container">
        {this.state.properties}
      </div>
    );
  }
}

export default PortalPropertyList;