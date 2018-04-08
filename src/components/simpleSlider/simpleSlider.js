import React from 'react'
import Slider from 'react-slick'


class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <Slider {...settings}>
        {/*<div>
          <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg" />
          <h3>Milky way</h3>
          <p>Lorem ipsum...
            The Milky Way is full of energy. Let's harvest it!
            This can be made to fit some special size requirements
          </p>
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2016/10/17/10/52/wind-farm-1747331_1280.jpg" />
          <h3>Wind farm</h3>
          <p>Lorem ipsum...
            This can be made to fit some special size requirements
          </p>
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2013/06/07/09/59/cape-ortegal-117601_1280.jpg" />
          <h3>Cape Ortegal Wind farm</h3>
          <p>Lorem ipsum...
            This can be made to fit some special size requirements
          </p>
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/10/09/09/49/jeju-island-978983_1280.jpg" />
          <h3>Island with wind</h3>
          <p>Lorem ipsum...
            This can be made to fit some special size requirements
          </p>
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2016/07/04/04/41/solar-1495928_1280.jpg" />
          <h3>Solar power</h3>
          <p>Lorem ipsum...
            This can be made to fit some special size requirements
          </p>
        </div>*/}
      </Slider>
    );
  }
}
export default SimpleSlider;