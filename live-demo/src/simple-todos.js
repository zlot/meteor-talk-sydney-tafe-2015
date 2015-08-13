if (Meteor.isClient) {
  // This code runs only on the client!

  Template.body.helpers({
    tasks: [
      {text: "This is task 1"},
      {text: "This is task 2"}
    ]
  })
}
