import React, { Component } from 'react';

class PortalPropertyList extends Component {
  constructor() {
    super();
    this.state = {
      properties: []
    }
  }

  componentDidMount() {
    let propertyId = 64326220;
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

    fetch(apiURL, {credentials: 'include'}).then(function(response) {
      if(response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    }).then(results => results.json()).catch(function(error) {
      console.log('There has been a problem with your fetch operation: ', error.message);
    });
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