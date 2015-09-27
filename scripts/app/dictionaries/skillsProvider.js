(function() {
    'use strict';
    angular.module(appName)
        .factory('skillsProvider', [
            'statsModel',
            'characterModel',

            function (statsModel, characterModel) {
                var skills = [
                    {
                        modName: 'STR',
                        addFunc: statsModel.strModifier,
                        skills: [
                            'Athletics'
                        ]
                    },
                    {
                        modName: 'DEX',
                        addFunc: statsModel.dexModifier,
                        skills: [
                            'Acrobatics',
                            'Sleight of Hand',
                            'Stealth'
                        ]
                    },
                    {
                        modName: 'INT',
                        addFunc: statsModel.intModifier,
                        skills: [
                            'Arcana',
                            'History',
                            'Investigation',
                            'Knowledge Nature',
                            'Knowledge Religion'
                        ]
                    },
                    {
                        modName: 'WIS',
                        addFunc: statsModel.wisModifier,
                        skills: [
                            'Animal Handling',
                            'Insight',
                            'Medicine',
                            'Perception',
                            'Survival'
                        ]
                    },
                    {
                        modName: 'CHA',
                        addFunc: statsModel.chaModifier,
                        skills: [
                            'Deception',
                            'Intimidation',
                            'Performance',
                            'Persuation'
                        ]
                    }
                ];

                function transformGroup(group) {
                    var result = [];

                    for (var i = 0; i < group.skills.length; i++) {
                        result.push({
                            name: group.skills[i],
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
                        });
                    }

                    return result;
                }

                function transformResult() {
                    var result = [];

                    for (var i = 0; i < skills.length; i++) {
                        result = result.concat(transformGroup(skills[i]));
                    }

                    result.sort(function(a, b) { return a.name.toLowerCase() > b.name.toLowerCase(); });

                    return result;
                }

                return transformResult();
            }
        ]);
})();