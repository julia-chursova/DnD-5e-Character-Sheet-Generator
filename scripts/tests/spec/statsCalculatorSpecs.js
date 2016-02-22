describe("Stats Model", function() {
    var model;

    // INJECTS
    beforeEach(module(appName));
    beforeEach(inject(function(_statsModel_) {
        model = _statsModel_;
    }));

    // TEST DATA
    var maxBonus = 3;
    var maxCustomBonus = 2;

    var fields = [
        { stat: 'strength', mod: 'strModifier', racialBonus: 'customRacialStrBonus', bonus: 'strBonus' },
        { stat: 'dexterity', mod: 'dexModifier', racialBonus: 'customRacialDexBonus', bonus: 'dexBonus' },
        { stat: 'constitution', mod: 'conModifier', racialBonus: 'customRacialConBonus', bonus: 'conBonus' },
        { stat: 'intelligence', mod: 'intModifier', racialBonus: 'customRacialIntBonus', bonus: 'intBonus' },
        { stat: 'wisdom', mod: 'wisModifier', racialBonus: 'customRacialWisBonus', bonus: 'wisBonus' },
        { stat: 'charisma', mod: 'chaModifier', racialBonus: 'customRacialChaBonus', bonus: 'chaBonus' }
    ];

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

    function generateCheckSimple(score, expectedModifier) {
        return function() {
            for (var i = 0; i < fields.length; i++) {
                var statFields = fields[i];

                model[statFields.stat] = score;
                expect(model[statFields.mod]()).toBe(expectedModifier);
            }
        }
    }

    function generateCheckWithBonus(score, bonus) {
        return function() {
            for (var i = 0; i < fields.length; i++) {
                var statFields = fields[i];

                model[statFields.stat] = score + bonus;
                var expectedModifier = model[statFields.mod]();

                model[statFields.stat] = score;
                model[statFields.racialBonus] = bonus;
                var actualModifier = model[statFields.mod]();

                expect(actualModifier).toBe(expectedModifier);
            }
        }
    }

    function generateCheckWithRacialAndCustomBonus(score, racialBonus, customBonus) {
        return function() {
            for (var i = 0; i < fields.length; i++) {
                var statFields = fields[i];

                model[statFields.stat] = score;
                model[statFields.racialBonus]= racialBonus;
                var expectedModifier = model[statFields.mod]() + customBonus;

                model[statFields.bonus] = customBonus;
                var actualModifier = model[statFields.mod]();

                expect(actualModifier).toBe(expectedModifier);
            }
        }
    }

    // Modifier calculation when user defined only stat
    (function() {
        for (var score in statModifierMapping) {
            if (!statModifierMapping.hasOwnProperty(score))
                return;

            var expectedModifier = statModifierMapping[score];

            var scenarioName = 'Correctly calculates modifier for score ' + score;
            it(scenarioName, generateCheckSimple(score, expectedModifier));
        }
    })();

    // Modifier calculation when user defined both stat and racial bonus
    (function() {
        for (var score = 1; score <= 20; score++) {
            for (var bonus = 0; bonus <= maxBonus && score + bonus <= 20; bonus++) {
                var scenarioName = 'Correctly calculates modifier for score ' + score + ' and racial bonus ' + bonus;
                it(scenarioName, generateCheckWithBonus(score, bonus));
            }
        }
    })();

    (function() {
        for (var score = 1; score <= 20; score++) {
            for (var racialBonus = 0; racialBonus <= maxBonus && score + racialBonus <= 20; racialBonus++) {
                for (var customBonus = 0; customBonus <= maxCustomBonus; customBonus++) {
                    var scenarioName = 'Correctly calculates modifier for score ' + score + ', racial bonus ' + racialBonus + ' and custom bonus ' + customBonus;
                    it(scenarioName, generateCheckWithRacialAndCustomBonus(score, racialBonus, customBonus));
                }
            }
        }
    })();
});
