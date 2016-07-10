import {
    Meteor
} from 'meteor/meteor';

Meteor.startup(function() {

    Meteor.publish("produtos", function() {
        return DBProdutos.find({});
        // retorna somente os produtos criados por seus respectivos usuarios logados
        // return DBProdutos.find({ usuario: this.userId });
    });

});
