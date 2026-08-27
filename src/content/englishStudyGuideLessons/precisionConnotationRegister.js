const precisionConnotationRegister = {
    subject: 'english',
    slug: 'precision-connotation-and-register',
    moduleId: 'craft-and-structure',
    title: 'Precision, Connotation, and Register',
    minutes: '24 min',
    summary: 'Choose among near-synonyms by testing the exact relationship, emotional coloring, intensity, and level of formality the passage requires.',
    goals: [
        'Separate a word’s basic definition from its connotation and intensity.',
        'Match word choice to the passage’s academic register and authorial attitude.',
        'Resolve difficult choices that all seem broadly relevant.',
    ],
    openingCheck: {
        prompt: 'A researcher describes a preliminary result that “offers a useful direction for future study but cannot yet support a firm conclusion.” Which verb best fits the result’s effect on the theory?',
        choices: ['proves', 'suggests', 'celebrates', 'ignores'],
        answer: 1,
        explanation: '“Suggests” matches tentative evidence. “Proves” points in the right direction but claims far more certainty than the sentence allows.',
    },
    concepts: [
        {
            heading: 'Near-synonyms make different promises',
            body: [
                'Two words can share a dictionary neighborhood while differing in scope or force. “Notice,” “acknowledge,” and “concede” can all involve recognizing a point, but “concede” implies reluctant acceptance of a point that works against one’s position.',
                'Substitute each choice into the sentence and paraphrase the claim it creates. The correct word must express the exact relationship, not merely belong to the topic.',
            ],
            moves: ['Core definition', 'Implied relationship', 'Strength', 'What the word commits the author to'],
        },
        {
            heading: 'Connotation carries attitude',
            body: [
                'Words can be approving, critical, or neutral. A proposal may be “ambitious” in praise or “grandiose” in criticism. A method may be “unconventional” neutrally or “erratic” negatively. The surrounding evaluation chooses the coloring.',
                'Do not import your own reaction to the topic. Locate the author’s attitude in adjectives, contrasts, limitations, and outcomes.',
            ],
            moves: ['Positive', 'Negative', 'Neutral', 'Mixed or qualified'],
        },
        {
            heading: 'Register is part of precision',
            body: [
                'SAT passages generally use an academic register: clear, controlled, and suited to literature, science, history, or the humanities. A casual or dramatic word can be grammatically valid yet rhetorically wrong.',
                'At high difficulty, compare the choices on four axes: definition, logical relation, intensity, and register. Usually one word survives all four.',
            ],
            moves: ['Definition', 'Logic', 'Intensity', 'Academic fit'],
        },
    ],
    workedExample: {
        skill: 'Words in Context · precision',
        passage: 'Although architect Lina Bo Bardi admired traditional museum displays, she did not simply ______ them in her own work. Her glass easels removed paintings from the wall and allowed visitors to move among them, fundamentally altering the viewing experience.',
        question: 'Which choice completes the text with the most logical and precise word or phrase?',
        prediction: '“Copy” or “preserve unchanged.” The second sentence shows that she admired the tradition but transformed it.',
        choices: [
            {text: 'replicate', verdict: 'Best', analysis: '“Replicate” precisely means reproduce or copy, which the innovative display shows she did not do.'},
            {text: 'observe', verdict: 'Too weak', analysis: 'She could observe traditional displays while still changing them; the contrast concerns imitation, not attention.'},
            {text: 'advertise', verdict: 'Wrong action', analysis: 'Nothing in the passage concerns promoting traditional displays.'},
            {text: 'tolerate', verdict: 'Wrong attitude', analysis: 'The passage says she admired the displays, which is stronger and more positive than merely tolerating them.'},
        ],
        answer: 0,
        decision: 'The innovation establishes a copy-versus-transform contrast. “Replicate” names copying with the right force and register.',
    },
    takeaways: {
        rule: 'When several words seem related, compare the exact claim each one makes about relationship, attitude, intensity, and register.',
        highScore: 'Do not reward a “fancy” word for sounding scholarly. The hardest correct answer is often the most disciplined word—the one that adds no praise, criticism, certainty, or drama the passage did not earn.',
        checklist: ['What is the core relationship?', 'Is the author positive, negative, neutral, or mixed?', 'How strong may the word be?', 'Does it sound natural in this academic sentence?'],
    },
    practiceSet: {
        title: 'Choose the exact promise',
        intro: 'Each item narrows from broad meaning to attitude, intensity, and subtle rhetorical relationship.',
        questions: [
            {
                id: 'precision-foundation', difficulty: 'Foundation', skill: 'Intensity',
                passage: 'The first edition contained several minor labeling errors. The revised edition ______ them, replacing each incorrect date with the verified one.',
                question: 'Which choice completes the text with the most logical and precise word or phrase?',
                choices: ['corrected', 'discussed', 'concealed', 'magnified'],
                answer: 0,
                explanation: {
                    whyCorrect: 'Replacing incorrect dates with verified dates corrects the errors.',
                    choices: ['Correct: it names the exact repair.', 'The revision does more than talk about the errors.', 'The changes reveal accuracy rather than hide mistakes.', 'The errors are fixed, not made larger.'],
                    takeaway: 'Prefer the verb that names the actual change described.',
                },
            },
            {
                id: 'precision-core', difficulty: 'Core SAT', skill: 'Connotation',
                passage: 'Reviewers praised the novelist’s ______ treatment of the dispute: rather than presenting either family as entirely right, the novel reveals the fears and loyalties shaping both sides.',
                question: 'Which choice completes the text with the most logical and precise word or phrase?',
                choices: ['one-sided', 'nuanced', 'indifferent', 'evasive'],
                answer: 1,
                explanation: {
                    whyCorrect: 'Showing the complexity of both sides is nuanced, and the praise establishes a positive connotation.',
                    choices: ['The sentence explicitly rejects a one-sided account.', 'Correct: balanced complexity is the defining clue.', 'Understanding both sides is not the same as lacking concern.', 'The novel explores the dispute rather than avoiding it.'],
                    takeaway: 'Let both the evidence and the evaluative tone control connotation.',
                },
            },
            {
                id: 'precision-advanced', difficulty: 'Advanced', skill: 'Logical relation',
                passage: 'The new measurements do not ______ the earlier estimate; both fall within the same narrow range. Instead, they strengthen confidence in it by using a different method.',
                question: 'Which choice completes the text with the most logical and precise word or phrase?',
                choices: ['refute', 'repeat', 'announce', 'simplify'],
                answer: 0,
                explanation: {
                    whyCorrect: 'Agreement within the same range means the new measurements do not refute, or disprove, the estimate.',
                    choices: ['Correct: the following agreement rules out disproof.', 'A different method means the work does not merely repeat the earlier process.', 'The logical issue is evidentiary support, not publicity.', 'No claim is made about making the estimate easier to understand.'],
                    takeaway: 'Identify the evidence relationship—support, challenge, qualify, or replicate—before selecting the verb.',
                },
            },
            {
                id: 'precision-700', difficulty: '700+ Lens', skill: 'Calibrated stance',
                passage: 'Political theorist Amina Reyes does not dismiss the standard interpretation of the speech. She ______ it, accepting its account of the speaker’s immediate goal while arguing that it overlooks the speech’s longer-term influence on labor organizers.',
                question: 'Which choice completes the text with the most logical and precise word or phrase?',
                choices: ['echoes', 'qualifies', 'abandons', 'vindicates'],
                answer: 1,
                explanation: {
                    whyCorrect: 'Reyes accepts part of the interpretation but limits its completeness, so she qualifies it.',
                    choices: ['She does not merely repeat the interpretation; she adds a limitation.', 'Correct: partial acceptance plus a boundary is qualification.', 'The first sentence explicitly says she does not dismiss it.', 'She does not prove the interpretation right in full; she identifies what it misses.'],
                    takeaway: '“Qualifies” is the precise middle position between full agreement and rejection.',
                },
            },
        ],
    },
    reflection: {
        prompt: 'Choose two answer choices from a missed question that looked synonymous. Write one sentence explaining the extra promise each word makes.',
        steps: ['Define both in plain language.', 'Name the difference in force or attitude.', 'Point to the clue that selects one promise.'],
    },
};

export default precisionConnotationRegister;
