// This is where our actual App begings.
// It's used by:
// - ship.js to boot from an Embedded HTML Import
// - index.js to boot directly for a Standalone page

// Our boilerplate uses React.
// We love it, and we thing you will too.
import React      from 'react';
// import Styles from './styles/main.css';

// The engine contains all the logic and state for the app
import Engine       from './lib/engine';
import Header       from './components/Header';
import Content      from './components/Content';
import CallToAction from './components/CallToAction';
import Images       from './components/Images';
import Style        from './components/Style';

var App = React.createClass({
  getDefaultProps() {
    return {
      engine : {},
      settings : {}
    };
  },
  render(){
    return <div className="content">
      <div className="container text-center">
        <Style {...this.props.ship}/>
        <Header {...this.props.ship}/>
        <Content {...this.props.ship}/>
        <CallToAction {...this.props.ship}/>
        <Images {...this.props.ship}/>
      </div>
    </div>
  },
  statics : {
    start(element, deployment, hull){
      // Create the Ship Engine
      var engine = new Engine(deployment, hull);
      // Automatically resize the frame to match the Ship Content
      hull.autoSize(400);
      React.render(<App engine={engine} {...deployment} />, element.querySelector('.ship-root') || element);
    }
  }
});

module.exports = App;
