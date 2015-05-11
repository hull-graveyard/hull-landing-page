var React = require('react');

var Header = React.createClass({

  render: function() {
    return (
      <div>
        <div className="row logo_row">
          <div className="col-sm-12">
            <a href="https://www.facebook.com/pathedistribution" id="logo">
              <img src={this.props.settings.logo} alt="" width="160"/>
            </a>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-12">
            <h1>Bienvenue dans l'univers <strong>Pathé Films</strong></h1>
          </div>
        </div>
        <div className="row mt-4">
          <h3>
            En restant <strong>connecté</strong> à notre application,
            vous pourrez bénéficier d'une <strong>expérience personnalisée</strong> autour de <strong>votre univers cinéma !</strong>
          </h3>
        </div>
      </div>
    );
  }

});

module.exports = Header;
