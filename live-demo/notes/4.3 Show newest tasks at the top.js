---------------------------------------
4.3 Show newest tasks at the top.js

  Template.body.helpers({
    tasks: function () {
      // Show newest tasks at the top
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });

