function TennisGame(){
  const scoreString = ['Love','Fifteen','Thirty','Forthy']
  this.playerAScore = 0
  this.playerBScore = 0
  this.reset = () => {
    this.playerAScore = 0
    this.playerBScore = 0
  }
  this.echo = () => {
     return `${scoreString[this.playerAScore]} - ${scoreString[this.playerBScore]}`
  }
  this.playerAGetScore = () => {
    this.playerAScore++
  }
  this.playerBGetScore = () => {
    this.playerBScore++
  }
}
test('Echo "Love - Love " When press reset button', () => {
    //Arrange
      let app = new TennisGame()
    //Act
      app.reset()
      let result = app.echo()
    //Assert
      expect(result).toBe('Love - Love')
})

test('Echo "Fifteen - Love" When playerA get First score and playerB no score', () => {
    //Arrange
      //let app = new ButtonA()
      let app = new TennisGame()
      app.reset()
      app.playerAGetScore()
    //Act
      let result = app.echo()
    //Assert
      expect(result).toBe('Fifteen - Love')
})

test('Echo "Love - Fifteen" When playerA no score and playerB get Frist score', () => {
    //Arrange
      let app = new TennisGame()
      app.reset()
      app.playerBGetScore()
    //Act
      let result = app.echo()
    //Assert
      expect(result).toBe('Love - Fifteen')
})
test('Echo "Thirty - Forthy" When playerA get two score and playerB get Three score', () => {
    //Arrange
      let app = new TennisGame()
      while(app.playerAScore != 2){
        app.playerAGetScore()
      }
      while(app.playerBScore != 3){
        app.playerBGetScore()
      }
    //Act
      let result = app.echo()
    //Assert
      expect(result).toBe('Thirty - Forthy')
})
