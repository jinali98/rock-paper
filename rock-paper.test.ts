import { Move, Outcomes, createRockPaperScissors } from "./rock-paper";

describe("rock paper scissors", () => {
  describe("play", () => {
    it("given player move paper and opponent move rock should return player wins", () => {
      // Arrange
      const expected = Outcomes.playerWins;
      const player = Move.paper;
      const opponent = Move.rock;
      const sut = createRockPaperScissors();

      // Act
      const actual = sut.play(player, opponent);

      // Assert
      expect(actual).toBe(expected);
    });

    it("given player move paper and opponent move scissor should return player losses", () => {
      // Arrange
      const expected = Outcomes.playerLosses;
      const player = Move.paper;
      const opponent = Move.scissor;
      const sut = createRockPaperScissors();

      // Act
      const actual = sut.play(player, opponent);

      // Assert
      expect(actual).toBe(expected);
    });
    it("given player move paper and opponent move paper should return tie", () => {
      // Arrange
      const expected = Outcomes.tie;
      const player = Move.paper;
      const opponent = Move.paper;
      const sut = createRockPaperScissors();

      // Act
      const actual = sut.play(player, opponent);

      // Assert
      expect(actual).toBe(expected);
    });
    it("given player move rock and opponent move scissors should return player wins", () => {
      // Arrange
      const expected = Outcomes.playerWins;
      const player = Move.rock;
      const opponent = Move.scissor;
      const sut = createRockPaperScissors();

      // Act
      const actual = sut.play(player, opponent);

      // Assert
      expect(actual).toBe(expected);
    });
    it("given player move rock and opponent move paper should return player losses", () => {
      // Arrange
      const expected = Outcomes.playerLosses;
      const player = Move.rock;
      const opponent = Move.paper;
      const sut = createRockPaperScissors();

      // Act
      const actual = sut.play(player, opponent);

      // Assert
      expect(actual).toBe(expected);
    });
    it("given player move rock and opponent move rock should return player tie", () => {
      // Arrange
      const expected = Outcomes.tie;
      const player = Move.rock;
      const opponent = Move.rock;
      const sut = createRockPaperScissors();

      // Act
      const actual = sut.play(player, opponent);

      // Assert
      expect(actual).toBe(expected);
    });
    it("given player move scissors and opponent move paper should return player wins", () => {
      // Arrange
      const expected = Outcomes.playerWins;
      const player = Move.scissor;
      const opponent = Move.paper;
      const sut = createRockPaperScissors();

      // Act
      const actual = sut.play(player, opponent);

      // Assert
      expect(actual).toBe(expected);
    });
    it("given player move scissors and opponent move rock should return player losses", () => {
      // Arrange
      const expected = Outcomes.playerLosses;
      const player = Move.scissor;
      const opponent = Move.rock;
      const sut = createRockPaperScissors();

      // Act
      const actual = sut.play(player, opponent);

      // Assert
      expect(actual).toBe(expected);
    });
    it("given player move scissors and opponent move scissors should return player tie", () => {
      // Arrange
      const expected = Outcomes.tie;
      const player = Move.scissor;
      const opponent = Move.scissor;
      const sut = createRockPaperScissors();

      // Act
      const actual = sut.play(player, opponent);

      // Assert
      expect(actual).toBe(expected);
    });
  });
});
