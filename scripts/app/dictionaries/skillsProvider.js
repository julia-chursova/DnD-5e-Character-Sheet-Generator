(function() {
    'use strict';
    angular.module(appName)
        .factory('skillsProvider', [
            'statsModel',
            'characterModel',

            function(statsModel, characterModel) {
                var packedSkills = [
                    {
                        modName: 'STR',
                        addFunc: statsModel.strModifier,
                        skills: {
                            athletics: 'Athletics'
                        }
                    },
                    {
                        modName: 'DEX',
                        addFunc: statsModel.dexModifier,
                        skills: {
                            acrobatics: 'Acrobatics',
                            sleightOfHand: 'Sleight of Hand',
                            stealth: 'Stealth'
                        }
                    },
                    {
                        modName: 'INT',
                        addFunc: statsModel.intModifier,
                        skills: {
                            arcana: 'Arcana',
                            history: 'History',
                            investigation: 'Investigation',
                            knowledgeNature: 'Knowledge Nature',
                            knowledgeReligion: 'Knowledge Religion'
                        }
                    },
                    {
                        modName: 'WIS',
                        addFunc: statsModel.wisModifier,
                        skills: {
                            animalHandling: 'Animal Handling',
                            insight: 'Insight',
                            medicine: 'Medicine',
                            perception: 'Perception',
                            survival: 'Survival'
                        }
                    },
                    {
                        modName: 'CHA',
                        addFunc: statsModel.chaModifier,
                        skills: {
                            deception: 'Deception',
                            intimidation: 'Intimidation',
                            performance: 'Performance',
                            persuation: 'Persuation'
                        }
                    }
                ];

                function transformGroup(group) {
                    var result = {};

                    for (var skill in group.skills) {
                        if (!group.skills.hasOwnProperty(skill))
                            continue;

                        result[skill] = {
                            name: group.skills[skill],
                            modName: group.modName,
                            haveProficiency: false,
                            miscBonus: 0,
                            statsBonus: group.addFunc,
                            proficiencyBonus: function() {
                                return this.haveProficiency ? characterModel.proficiencyBonus() : '';
                            },
                            value: function() {
                                var skillScore = this.miscBonus + group.addFunc();

                                if (this.haveProficiency)
                                    skillScore += characterModel.proficiencyBonus();

                                return skillScore;
                            }
                        };
                    }

                    return result;
                }

                function transformResult() {
                    var result = {};

                    for (var i = 0; i < packedSkills.length; i++)
                        result = angular.extend(result, transformGroup(packedSkills[i]));

                    return result;
                }

                var originsOfStone = {
                    name: "Origins of Stone",
                    isCustom: true,
                    modName: "INT",
                    haveProficiency: true,
                    miscBonus: 0,
                    statsBonus: statsModel.intModifier,
                    proficiencyBonus: function() {
                        return characterModel.proficiencyBonus() * 2;
                    },
                    value: function() {
                        var skillScore = this.miscBonus + this.statsBonus();

                        if (this.haveProficiency)
                            skillScore += (this.proficiencyBonus() || 0);

                        return skillScore;
                    }
                };

                var historyOfMagic = {
                    name: "History of Magic",
                    isCustom: true,
                    modName: "INT",
                    haveProficiency: true,
                    miscBonus: 0,
                    statsBonus: statsModel.intModifier,
                    proficiencyBonus: function() {
                        return characterModel.proficiencyBonus() * 2;
                    },
                    value: function() {
                        var skillScore = this.miscBonus + this.statsBonus();

                        if (this.haveProficiency)
                            skillScore += (this.proficiencyBonus() || 0);

                        return skillScore;
                    }
                }

                return angular.extend({}, transformResult(), {
                    originsOfStone: originsOfStone,
                    historyOfMagic: historyOfMagic
                }, {
                    skillList: transformResult
                });
            }
        ]);
})();