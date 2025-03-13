import { describe, it, vi, expect, beforeEach } from "vitest";
import ScoreKeeper from "../../../games/gameFeatures/scoreKeeper";

describe("ScoreKeeper", () => {
    let scoreKeeper;
    let onNoLivesMock;

    beforeEach(() => {
        // Mock the onNoLives callback
        onNoLivesMock = () => {};
        scoreKeeper = new ScoreKeeper(3, onNoLivesMock);
    });

    describe("constructor", () => {
        it("should initialize with the correct starting lives", () => {
            expect(scoreKeeper.getLives()).toBe(3);
        });

        it("should throw an error if onNoLives is not a function", () => {
            expect(() => new ScoreKeeper(3, "not a function")).toThrow(
                "onNoLives must be a function"
            );
        });
    });

    describe("incrementWrongAnswers", () => {
        it("should increment wrong answers by 1 by default", () => {
            scoreKeeper.incrementWrongAnswers();
            expect(scoreKeeper.getWrongAnswers()).toBe(1);
        });

        it("should increment wrong answers by the specified amount", () => {
            scoreKeeper.incrementWrongAnswers(2);
            expect(scoreKeeper.getWrongAnswers()).toBe(2);
        });
    });

    describe("incrementRightAnswers", () => {
        it("should increment right answers by 1 by default", () => {
            scoreKeeper.incrementRightAnswers();
            expect(scoreKeeper.getRightAnswers()).toBe(1);
        });

        it("should increment right answers by the specified amount", () => {
            scoreKeeper.incrementRightAnswers(2);
            expect(scoreKeeper.getRightAnswers()).toBe(2);
        });
    });

    describe("changeLives", () => {
        it("should decrease lives by 1 by default", () => {
            scoreKeeper.changeLives();
            expect(scoreKeeper.getLives()).toBe(2);
        });

        it("should decrease lives by the specified amount", () => {
            scoreKeeper.changeLives(-2);
            expect(scoreKeeper.getLives()).toBe(1);
        });

        it("should call onNoLives when lives reach 0", () => {
            const onNoLivesMock = vi.fn();
            const scoreKeeper = new ScoreKeeper(1, onNoLivesMock);

            scoreKeeper.changeLives();
            expect(onNoLivesMock).toHaveBeenCalled();
        });

        it("should not call onNoLives when lives are still positive", () => {
            const onNoLivesMock = vi.fn();
            const scoreKeeper = new ScoreKeeper(2, onNoLivesMock);

            scoreKeeper.changeLives();
            expect(onNoLivesMock).not.toHaveBeenCalled();
        });
    });

    describe("resetLives", () => {
        it("should reset lives to the starting value", () => {
            scoreKeeper.changeLives(); // Lives: 2
            scoreKeeper.resetLives();
            expect(scoreKeeper.getLives()).toBe(3);
        });
    });

    describe("livesLeft", () => {
        it("should return true if lives are greater than 0", () => {
            expect(scoreKeeper.livesLeft()).toBe(true);
        });

        it("should return false if lives are 0 or less", () => {
            scoreKeeper.changeLives(-3); // Lives: 0
            expect(scoreKeeper.livesLeft()).toBe(false);
        });
    });

    describe("getLives", () => {
        it("should return the current number of lives", () => {
            expect(scoreKeeper.getLives()).toBe(3);
        });
    });

    describe("getWrongAnswers", () => {
        it("should return the current number of wrong answers", () => {
            scoreKeeper.incrementWrongAnswers();
            expect(scoreKeeper.getWrongAnswers()).toBe(1);
        });
    });

    describe("getRightAnswers", () => {
        it("should return the current number of right answers", () => {
            scoreKeeper.incrementRightAnswers();
            expect(scoreKeeper.getRightAnswers()).toBe(1);
        });
    });
});