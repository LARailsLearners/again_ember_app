import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{ text: "walk down the street" },
            { text: "fly to the moon" },
            { text: "go over the hill" }
    ];
  }
});
