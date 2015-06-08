import Color from 'color-js';

export default function(settings){
  let style = `
    .ship-root{
      font-family: 'Helvetica Neue', Helvetica, 'sans-serif';
      min-height: 100%;
      -webkit-font-smoothing:antialiased;
    }
    .ship-root:after{
      content: '';
    }

    .content{
      position:relative;
      z-index: 1;
    }

    h1, h2{
      font-weight: 200;
    }
    h1 strong, h2 strong{
      font-weight: 500;
    }

    .btn-yellow{
      color: black;
      border-color: #E59D16;
      background-color: #FFBA1C;
    }

    .btn-yellow:hover, .btn-yellow:active, .btn-yellow:focus{
      color: black;
      border-color: #E59D16;
      background-color: #E59D16;
    }


    .mt-1{ margin-top: 12px; }
    .mt-2{ margin-top: 24px; }
    .mt-3{ margin-top: 36px; }
    .mt-4{ margin-top: 48px; }
    .mb-1{ margin-bottom: 12px; }
    .mb-2{ margin-bottom: 24px; }
    .mb-3{ margin-bottom: 36px; }
    .mb-4{ margin-bottom: 48px; }

    .ps-0{ padding-left: 0; padding-right:0; }
    .pt-1{ padding-top: 12px; }
    .pt-2{ padding-top: 24px; }
    .pt-3{ padding-top: 36px; }
    .pt-4{ padding-top: 48px; }
    .pb-1{ padding-bottom: 12px; }
    .pb-2{ padding-bottom: 24px; }
    .pb-3{ padding-bottom: 36px; }
    .pb-4{ padding-bottom: 48px; }

    @media (max-width: 600px) {
      .small-ps{
        padding-left: 0;
        padding-right: 0;
      }
    }

    .flex-row{
      display: flexbox;
      display: flex;
    }
    .flex-item{
      flex-grow:1;
      flex-shrink:1;
    }
    .ship-root {
      background: ${settings.background_color};
      color: ${settings.text_color};
    }
    h1, h2, h3, h4, h5, h6{
      color: ${settings.title_color};
    }
    h1 small, h2 small, h3 small, h4 small, h5 small, h6 small{
      color: ${Color(settings.title_color).setAlpha(.6).toCSS()};
    }
    .btn{
      -webkit-border-radius:${settings.button_border_radius}px;
      -moz-border-radius:${settings.button_border_radius}px;
      -o-border-radius:${settings.button_border_radius}px;
      border-radius:${settings.button_border_radius}px;
    }
    .btn-main{
      color: ${settings.button_text_color};
      border-color: ${Color(settings.button_background_color).darkenByRatio(.1).toCSS()};
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
