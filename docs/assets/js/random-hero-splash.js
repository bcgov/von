---
---

{% assign numberOfHeroOptions = site.data.hero.images | size %}

(function() {
  var body = document.body;
  var options = [];

  {% for hero in site.data.hero.images %}
    options.push("{{ hero.class }}");
  {% endfor %}

  var randomNumber = Math.floor((Math.random() * {{ numberOfHeroOptions }} ));

  function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }

  if(hasClass(body, "layout--splash")) {
    var randomlySelectedHero = document.getElementsByClassName("page__hero-image " + options[randomNumber])[0];
    randomlySelectedHero.className += " active";
  }
})();