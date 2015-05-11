var React = require('react');

var Images = React.createClass({

  renderImage(image, i){
    return <div key={i+i} className="col-xs-2 small-ps flex-item">
      <img src={image} className="img-responsive"/>
    </div>
  },
  render() {
    return (
      <div className="images row mt-4 flex-row">
        {this.props.settings.images.map(this.renderImage)}
      </div>
    );
  }

});

module.exports = Images;
