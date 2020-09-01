import React, {Component} from 'react';
import AwesomeSlider from 'react-awesome-slider';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import store from './store';
import Switch from "react-switch";

import dataImage from './dataImage';
import serviceImage from './serviceImage';

class SliderPage extends Component {
  state = {
    checked: false
  }

  toggleImages = () => {
    store.dispatch({
      type: 'toggleImages',
      imageList: this.state.checked ? dataImage : serviceImage
    });
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <>
        <Link to={{pathname: '/home'}}>
          <button className='toHome-btn'>
              На главную страницу
          </button>
        </Link>
        <Switch 
          onChange={this.toggleImages} 
          checked={this.state.checked}  
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}/>
        <AwesomeSlider>
          {this.props.imageList.map(image=>(
            <div key={`${image.id}`}>
              <img src={image.src} alt="img" ></img>
            </div>
          ))}
        </AwesomeSlider>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
      changeParams: (nameField, type) => {
        dispatch(changeParams(nameField, type))
      }
  }
}

const changeParams = (type, value) => {
  return {
      type: 'toggleImages',
      payload: {
        type,
        value
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SliderPage);
