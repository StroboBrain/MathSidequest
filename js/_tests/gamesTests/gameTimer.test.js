import GameTimer from "../../games/gameFeatures/gameTimer.js";
import { describe, vi, it, expect, assert } from "vitest";


describe('GameTimer', () => {
    it('should correctly calculate passed time', () => {
        // Mock Performance.now() to return specific values
        const mockNow = vi.fn()
            .mockReturnValueOnce(1000) // First call for startTime
            .mockReturnValueOnce(1500); // Second call for currentTime

        vi.stubGlobal('performance', {
            now: mockNow
        });

        const timer = new GameTimer();
        timer.startTimer();

        // Simulate some time passing
        const passedTime = timer.passedTime();

        expect(passedTime).toBe(500); // 1500 - 1000 = 500
    });

    it('should correctly calculate passed time when timer is ended', () => {
        // Mock Performance.now() to return specific values
        const mockNow = vi.fn()
            .mockReturnValueOnce(1000) // First call for startTime
            .mockReturnValueOnce(1500); // Second call for endTime

        vi.stubGlobal('performance', {
            now: mockNow
        });

        const timer = new GameTimer();
        timer.startTimer();
        timer.endTimer();
        expect(timer.passedTime).toBe(500); // 1500 - 1000 = 500
    });

    it('should handle multiple calls to passedTime correctly', () => {
        // Mock Performance.now() to return specific values
        const mockNow = vi.fn()
            .mockReturnValueOnce(1000) // First call for startTime
            .mockReturnValueOnce(1500) // Second call for first passedTime
            .mockReturnValueOnce(2000); // Third call for second passedTime
        vi.stubGlobal('performance', {
            now: mockNow
        });

        const timer = new GameTimer();
        timer.startTimer();

        const firstPassedTime = timer.passedTime();
        const secondPassedTime = timer.passedTime();

        expect(firstPassedTime).toBe(500); // 1500 - 1000 = 500
        expect(secondPassedTime).toBe(1000); // 2000 - 1000 = 1000
    });
});