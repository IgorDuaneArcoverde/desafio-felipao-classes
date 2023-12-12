class hero{
    constructor(name, age, type, atack){
        this.name = name
        this.age = age
        this.type = type
        this.atack = atack
    }

    saida(){
        console.log(`O herói ${this.name} de idade ${this.age}
        do tipo ${this.type} atacou usando ${this.atack}`)

    }
    }
let hero1 = new hero("Igor", 27, "mago", "magia")
let hero2 = new hero("Igor", 27, "guerreiro", "espada")
let hero3 = new hero("Igor", 27, "monge", "artes marciais")
let hero4 = new hero("Igor", 27, "ninja", "shuriken")
hero1.saida()
hero2.saida()
hero3.saida()
hero4.saida()