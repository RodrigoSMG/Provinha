let usuarios=[]
adicionarUsuario()
listarUsuarios()

function adicionarUsuario () {
let usuario= {
    nome:"Jones Fortnite",
    idade:"27",
    email:"jonesbaatatinhadofortnite@gmail.com"
}
if (usuario.nome==undefined||usuario.nome==""){
    throw new Error("Nome não definido")
}
if (usuario.idade<=0) {
    throw new Error("Idade menor que zero")
}
if (usuario.email==undefined||usuario.email=="") {
    throw new Error("Email não definido")
}
usuarios.push(usuario)
}
function listarUsuarios() {
    console.log(usuarios)
}