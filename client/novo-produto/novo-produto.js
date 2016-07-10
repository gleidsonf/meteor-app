Template.novoproduto.events({

    "submit form": function(e, template) {
        e.preventDefault();

        var nome = $('#nome').val();
        var preco = "R$ " + $('#preco').val();
        Meteor.call("adiciona", {
            nome: nome,
            preco: preco,
            usuario: this.userId
        });
        // DBProdutos.insert({nome: nome, preco: valor});
        $('#nome').val("");
        $('#preco').val("");
    }

});
