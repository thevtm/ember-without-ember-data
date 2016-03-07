import Ember from 'ember';

let cache = {};

export default Ember.Object.extend({
  find (name, id) {
    if(cache[name] && cache[name][id]) {
      return cache[name][id];
    }

    let adapter = Ember.getOwner(this).lookup('adapter:' + name);
    return adapter.find(name, id)
      .then(record => {
        cache[name] = cache[name] || {};
        cache[name][id] = record;
        return record;
      });
  }
});
