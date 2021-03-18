class Personagem extends Animaçao {
  constructor(matriz, imagem, x, variaçaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variaçaoY, largura, altura, larguraSprite, alturaSprite)

    this.variaçaoY = variaçaoY
    this.yInicial = height - this.altura - variaçaoY ;
    this.y = this.yInicial;

    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
    this.alturaDoPulo = -30
    this.pulos = 0
    this.invencivel = false
  }

  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo
      this.pulos++
    }
  }
  aplicaGravidade() {
    this.y = this.y +  this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade
    if(this.y  > this.yInicial) {
      this.y = this.yInicial
      this.pulos = 0
    }
  }

  tornarInvencivel() {
    this.invencivel = true
    setTimeout( () => {
      this.invencivel = false
    }, 1000)
  }

  estaColidindo(inimigo) {
    if(this.invencivel){
      return false
    }

    const precisao = .7
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao, 
      inimigo.x, 
      inimigo.y, 
      inimigo.altura * precisao, 
      inimigo.altura * precisao
    );

   return colisao;

  }
}
