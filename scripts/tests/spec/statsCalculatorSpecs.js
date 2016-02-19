describe("Stats Model", function () {
    var model;

    beforeEach(module(appName));

    // ReSharper disable once InconsistentNaming
    beforeEach(inject(function (_statsModel_) {
        model = _statsModel_;
    }));

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

    function generateFunction (score, expectedModifier) {
        return function() {
            model.strength = score;

            expect(model.strModifier()).toBe(expectedModifier);
        }
    }

    for (var score in statModifierMapping) {
        if (!statModifierMapping.hasOwnProperty(score))
            return;

        var expectedModifier = statModifierMapping[score];

        it('Correctly calculates modifier for score ' + score, generateFunction(score, expectedModifier));
    }
});
