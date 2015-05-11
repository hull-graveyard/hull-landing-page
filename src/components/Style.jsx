import React      from 'react';
import Color      from 'color';

var Style = React.createClass({
  getDefaultProps: function() {
    return {
      document: {}
    };
  },

  getStyle: function(){

    // Just Javascript™
    var props = this.props

    var style = `
      .ship-root {
        background: ${this.props.settings.background_color};
      }
      .content{
        position:relative;
        z-index: 1;
      }
      .content::after{
        -webkit-filter: blur(${this.props.settings.background_blur}px);
        -moz-filter: blur(${this.props.settings.background_blur}px);
        -o-filter: blur(${this.props.settings.background_blur}px);
        -ms-filter: blur(${this.props.settings.background_blur}px);
        filter: blur(${this.props.settings.background_blur}px);
        opacity: ${this.props.settings.background_opacity};
        position: absolute;
        z-index:-1;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:url('${this.props.settings.background_image}') repeat-x top left;
        background-size:cover;
      }
    `+".content::after{content:''}";
    return style
  },
  render: function() {
    return <style type="text/css" dangerouslySetInnerHTML={{__html:this.getStyle()}}></style>;
  }

});

module.exports = Style;

