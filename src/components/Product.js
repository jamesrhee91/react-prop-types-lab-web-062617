import React from 'react'
import PropTypes from 'prop-types'
import { createPropType } from 'react-custom-proptypes';


class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h4>Producer: {this.props.producer}</h4>
        <h4>{this.props.hasWatermark}</h4>
        <h4>Color: {this.props.color}</h4>
        <h4>Weight: {this.props.weight}</h4>
      </div>
    )
  }
}

function rangePropType(props, propName, componentName) {
  if (props[propName] === undefined) {
    return new Error('Required')
  } else if (isNaN(props[propName])) {
    return new Error('Must be a number')
  } else if (props[propName] > 300 || props[propName] < 80) {
    return new Error('Must be in between 80 - 300')
  }
}
// const rangePropType = createPropType(prop =>
//   Number.isInteger(prop) &&
//   prop >= 80 &&
//   prop <= 300,
//   'Must be between 80 - 300'
// )

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: rangePropType
}

export default Product
