Meteor.methods({
    adiciona: function(obj) {
        DBProdutos.insert({
            nome: obj.nome,
            preco: obj.preco,
            usuario: this.userId
        });
    },

    remove: function(id) {
        DBProdutos.remove({
            _id: id/*,
            usuario: this.userId //Somente  usuario que criou a tarefa
            // pode deletar. Logicamente porque ele esta logado na sua senha
            */
        });
    }

});
/* Afim de evitar brechas na segurança, apos terminar toda a implementacao do
 sistema deve-se remover alguns templates e refatorar o codigo. Remover:
 meteor remove autopublish //Impede total acesso ao banco do servidor
 meteor remove insecure //Impede sqlInjection pelo console
 meteor remove subscribe
*/
