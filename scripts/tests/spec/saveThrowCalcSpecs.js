describe('Save Throws', function() {
    var statsModel;
    var characterModel;
    var saveThrowModel;

    // INJECTS
    beforeEach(module(appName));
    beforeEach(inject(function (_statsModel_, _characterModel_, _saveThrowModel_) {
        statsModel = _statsModel_;
        characterModel = _characterModel_;
        saveThrowModel = _saveThrowModel_;
    }));

    // TEST DATA
    var fields = [
       { stat: 'strength', mod: 'strModifier', save: 'strSave', isProficient: 'isStrProficient' },
       { stat: 'dexterity', mod: 'dexModifier', save: 'dexSave', isProficient: 'isDexProficient' },
       { stat: 'constitution', mod: 'conModifier', save: 'conSave', isProficient: 'isConProficient' },
       { stat: 'intelligence', mod: 'intModifier', save: 'intSave', isProficient: 'isIntProficient' },
       { stat: 'wisdom', mod: 'wisModifier', save: 'wisSave', isProficient: 'isWisProficient' },
       { stat: 'charisma', mod: 'chaModifier', save: 'chaSave', isProficient: 'isChaProficient' }
    ];

    it('Correctly calculates for a stat w/o proficiency', function () {
        characterModel.classes.push({ level: 5 });

        for (var i = 0; i < fields.length; i++) {
            var statFields = fields[i];

            statsModel[statFields.stat] = 10;

            var actual = saveThrowModel[statFields.save]();
            var expected = statsModel[statFields.mod]();

            expect(actual).toBe(expected);
        }
    });

    it('Correctly calculates for a stat w/ proficiency', function () {
        characterModel.classes.push({ level: 5 });
        var proficiencyBonus = 3;

        for (var i = 0; i < fields.length; i++) {
            var statFields = fields[i];

            statsModel[statFields.stat] = 10;
            saveThrowModel[statFields.isProficient] = true;

            var actual = saveThrowModel[statFields.save]();
            var expected = statsModel[statFields.mod]() + proficiencyBonus;

            expect(actual).toBe(expected);
        }
    });
});