import Color      from 'color';
export default function(settings){
  let style = `
    .ship-root {
      background: ${settings.background_color};
      color: ${settings.text_color};
    }
    h1, h2, h3, h4, h5, h6{
      color: ${settings.title_color};
    }
    h1 small, h2 small, h3 small, h4 small, h5 small, h6 small{
      color: ${Color(settings.title_color).alpha(.6).rgbString()};
    }
    .btn{
      -webkit-border-radius:${settings.button_border_radius}px;
      -moz-border-radius:${settings.button_border_radius}px;
      -o-border-radius:${settings.button_border_radius}px;
      border-radius:${settings.button_border_radius}px;
    }
    .btn-main{
      color: ${settings.button_text_color};
      border-color: ${Color(settings.button_background_color).darken(.05).rgbString()};
      background-color: ${settings.button_background_color};
    }
    .content::after{
      -webkit-filter: blur(${settings.background_blur}px);
      -moz-filter: blur(${settings.background_blur}px);
      -o-filter: blur(${settings.background_blur}px);
      -ms-filter: blur(${settings.background_blur}px);
      filter: blur(${settings.background_blur}px);
      opacity: ${settings.background_opacity};
      position: absolute;
      z-index:-1;
      top:0;
      left:0;
      right:0;
      bottom:0;
      background:url('${settings.background_image}') repeat-x center top;
      background-size:cover;
    }
  `+".content::after{content:''}";
  return `<style type='text/css'>${style}</style>`;
}
