import Mustache from 'mustache'

let templates = {
  logo:`
    {{#settings.logo}}
      <div class="row logo_row">
        <div class="mb-2 mt-1">
          {{#settings.cta_link}}<a href="{{settings.cta_link}}" target="_top">{{/settings.cta_link}}
           <img src="{{settings.logo}}" alt="" width="160" />
          {{#settings.cta_link}}</a>{{/settings.cta_link}}
        </div>
      </div
    {{/settings.logo}}
  `,

  header:`
    {{#translations.header}}
      <div class="row">
        <div class="col-sm-12">
          <h1>{{{translations.header}}}</h1>
        </div>
      </div>
    {{/translations.header}}
  `,

  tagline:`
    {{#translations.tagline}}
      <div class="row">
        <div class="col-sm-12">
          <h3>{{{translations.tagline}}}</h3>
        </div>
      </div>
    {{/translations.tagline}}
  `,

  content:`
    <div class="row">
      <div class="col-sm-12">
        <p>{{{translations.content}}}</p>
      </div>
    </div>
  `,

  cta: `
    {{#settings.cta_link}}
      <div class="row mt-2">
        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <a href={{settings.cta_link}} class='btn btn-main btn-lg btn-block'>
            <span>{{{translations.call_to_action}}}</span>
          </a>
        </div>
      </div>
    {{/settings.cta_link}}
  `,

  images:`
    <div class="images mt-4 flex-row">
      {{#settings.images}}
        <div class="col-xs-2 small-ps flex-item">
          <img src="{{.}}" class="img-responsive" />
        </div>
      {{/settings.images}}
    </div>
  `
}

export default function(template, data={}){
  let t = templates[template];
  if(t){
    return Mustache.render(t, data);
  } else {
    return ""
  }
}
