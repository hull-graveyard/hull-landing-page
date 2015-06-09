import getStyles from './components/styles';
import template from './components/template';

(function(){

  let getResizedImage = function(img, render){
    return `http://proxy.boxresizer.com/convert?resize=500x332&source=${encodeURIComponent(img)}`;
  }

  let start = function(rootElement, deployment, hull){
    let translate = function(string){ return deployment.ship.translations.en[string] }

    let settings = deployment.ship.settings
    let translations = deployment.ship.translations.en

    let content = [];

    let styles = getStyles(settings);
    content.push(styles);

    let view    = {settings, translations}

    if(view.settings.logo){
      view.settings.logo = getResizedImage(view.settings.logo);
      content.push(template('logo', view));
    }
    content.push(template('header', view));
    content.push(template('tagline', view));
    content.push(template('content', view));
    content.push(template('cta', view));
    content.push(template('images', view));

    $(rootElement)
    .find('.ship-root')
    .empty()
    .append(`<div class="content"><div class="container">${content.join('')}</div></div>`);

  }
  Hull.onEmbed(start);
})()
