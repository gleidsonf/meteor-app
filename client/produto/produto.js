Template.produto.helpers({
    produtos: function() {
        return DBProdutos.find({});
    }
});

Template.produto.events({
    "click button": function() {
        var produto = this;
        Meteor.call("remove", produto._id);
    }
});
