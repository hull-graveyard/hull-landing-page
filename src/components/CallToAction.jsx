var React = require('react');

var CallToAction = React.createClass({

  render: function() {
    return (
      <div className="row mt-4">
          <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <a href='https://www.facebook.com/pathedistribution' target='_top' className="btn btn-primary btn-yellow btn-lg btn-block">
              <i className="glyphicon glyphicon-chevron-right"></i>
              <strong>Cliquez ici</strong> pour découvrir les jeux du moment
            </a>
          </div>
        </div>
      );
  }

});

module.exports = CallToAction;
