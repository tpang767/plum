Plum.UserRoute = Ember.Route.extend({
  model: function(params) {
    console.log(params.username);
    return this.store.find('user', params.username);
  },
  setupController: function(controller, user) {
    controller.set('model', user);
    controller.set('username', user.id);
  }
});