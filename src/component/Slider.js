import React ,{Component} from 'react';
import product_1 from '../img/product_1.png';
import product_2 from '../img/product_2.png';
import product_3 from '../img/product_3.png';
import { Carousel } from 'react-bootstrap';
export default class Slider extends Component{
    render(){
        return(
            <React.Fragment>

        <Carousel className="info">
          <Carousel.Item >

            <img
              className="d-block w-60 space "
              src={product_1}
              alt="First slide"
            />

            <Carousel.Caption >

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-60 space"
              src={product_2}
              alt="Third slide"
            />

            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="space"
              className="d-block w-60 space"
              src={product_3}
              alt="Third slide"
            />

            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
</React.Fragment>
        );
        
    }
}