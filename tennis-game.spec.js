function TennisGame(){
  this.reset = () => {

  }

  this.echo = () => {
    return 'Love - Love'
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
