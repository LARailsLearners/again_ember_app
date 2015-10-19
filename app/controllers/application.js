import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createTodo(text) {
      console.log(text);
    }
  }
});
