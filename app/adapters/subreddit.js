import Ember from 'ember';

export default Ember.Object.extend({
  find (name, id) {
    return Ember.$
      .ajax('http://www.reddit.com/r/' + id + '.json')
      .then(function(result) {
        return result.data.children.map(function(c) {
          return {id: c.id,
                  title: c.data.title,
                  domain: c.data.domain,
                  url: c.data.url};
        });
      });
  }
});
