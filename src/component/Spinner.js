import React, { Component } from 'react'

import loading from './loading.gif'


export class Spinner extends Component {
 

  render() {
	return (
	  <div   >
			<img  style={{    display: 'block', marginLeft:' auto', marginRight: 'auto'}} src={loading} alt="loading" />
	  </div>
	)
  }
}

export default Spinner
