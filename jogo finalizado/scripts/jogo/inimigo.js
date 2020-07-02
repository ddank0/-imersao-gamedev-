class Inimigo extends Animaçao {
    constructor(matriz, imagem, x, variaçaoY, largura, altura, larguraSprite, alturaSprite, velocidade) {
        super(matriz, imagem, x, variaçaoY, largura, altura, larguraSprite, alturaSprite)

        this.velocidade = velocidade
        this.x = width 
    }
    move() {
        this.x = this.x - this.velocidade
    }
    aparece() {
        this.x = width
    }
    
}
