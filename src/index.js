class Heroi{
    constructor(nome, idade, tipo = "vagrant"){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    tipoAtaque(){
        if(this.tipo === "monge"){
            return "usando artes marciais"
        }else if(this.tipo === "ninja"){
            return "usando shuriken"
        }else if(this.tipo === "mago"){
            return "usando magia"
        }else if(this.tipo === "guerreiro"){
            return "usando a espada"
        }else{
            return "ultilizando ataque básico"
        }
    }

    atacar(){
        console.log(`O ${this.tipo} atacou ${this.tipoAtaque()}`)
    }
}

let mago = new Heroi("Merlin", 25, "mago")
let guerreiro = new Heroi("Gormack", 47, "guerreiro")
let ninja = new Heroi("Naruto", 18, "ninja")
let monge = new Heroi("Buda", 32, "monge")
let semClasse = new Heroi("SemNome", 25)

mago.atacar()
guerreiro.atacar()
ninja.atacar()
monge.atacar()
semClasse.atacar()