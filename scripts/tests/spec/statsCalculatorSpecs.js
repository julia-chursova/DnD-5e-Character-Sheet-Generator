describe("Stats Calculator", function () {
    describe("statsCalculator", function () {
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

        for (statValue in statModifierMapping) {
            var expectedModifier = statModifierMapping[statValue];
            it('for stat value ' + statValue + ' modifier should be ' + expectedModifier, inject(function (statsCalculator) {
                expect(statsCalculator.getModifier(statValue)).toBe(expectedModifier);
            }));
        }
    });
});
