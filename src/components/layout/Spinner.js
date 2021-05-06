import React, { Fragment } from 'react'
import spinnerGif from './spinner.gif'


const Spinner = () => <Fragment>
    <img src={spinnerGif} alt="loading" style={spinnerStyle}></img>
</Fragment>

const spinnerStyle = {
    width : '200px',
    margin : 'auto',
    display : 'block'
}
export default Spinner
