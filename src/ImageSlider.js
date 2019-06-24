import React, {
  Component
} from 'react';

export default class ImageSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlideIndex: 0
    }
  }

  slideState = () => {
    return (
      `I am on slide ${this.state.currentSlideIndex}`
    )
  }


  render() {
    return (<div>
      {this.slideState()}
      </div>
    )
  }
}
