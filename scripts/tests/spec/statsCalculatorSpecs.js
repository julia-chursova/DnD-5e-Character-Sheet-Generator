describe("statsModel", function () {
    beforeEach(module(appName));

    var statModifierMapping = {
        1: -5,
        2: -4,
        3: -4,
        4: -3,
        5: -3,
        6: -2,
        7: -2,
        8: -1,
        9: -1,
        10: 0,
        11: 0,
        12: 1,
        13: 1,
        14: 2,
        15: 2,
        16: 3,
        17: 3,
        18: 4,
        19: 4,
        20: 5
    };

    for (var score in statModifierMapping) {
        var expectedModifier = statModifierMapping[score];

        it('For stat score ' + score + ' modifier should be ' + expectedModifier, inject(function (statsModel) {
            statsModel.strength = score;

            expect(statsModel.strModifier()).toBe(expectedModifier);
        }));
    }
});
