const vocabularyByContext = {
    subject: 'english',
    slug: 'vocabulary-by-context-and-prediction',
    moduleId: 'craft-and-structure',
    title: 'Vocabulary by Context and Prediction',
    minutes: '23 min',
    summary: 'Solve Words in Context questions from the sentence’s logic: predict a plain meaning, test the surrounding clues, and only then compare the choices.',
    goals: [
        'Use contrast, cause, examples, and tone as meaning clues.',
        'Predict a plain replacement before evaluating answer choices.',
        'Handle unfamiliar words without relying on memorized definitions alone.',
    ],
    openingCheck: {
        prompt: 'A critic calls a new translation “lucid: even readers unfamiliar with the original can follow its argument.” In context, “lucid” most nearly means',
        choices: ['lengthy', 'clear', 'literal', 'celebrated'],
        answer: 1,
        explanation: 'The explanation after the colon defines the needed idea: easy to follow. You can solve the logic even if “lucid” is unfamiliar.',
    },
    concepts: [
        {
            heading: 'The blank has a job before it has a word',
            body: [
                'A Words in Context question is a miniature reasoning problem. The surrounding sentence already limits what can fit: positive or negative, similar or contrasting, cause or result, broad or specific. Your first task is to name those limits.',
                'Cover the choices and complete the thought in ordinary language. “The finding was surprising,” “the method made the estimate less certain,” or “the two accounts agree” is enough. A plain prediction gives you an independent target.',
            ],
            moves: ['Read through the full sentence', 'Mark the logical hinge', 'Predict a plain word or phrase', 'Test grammar and meaning'],
        },
        {
            heading: 'Read clue architecture, not just nearby words',
            body: [
                'Definitions can be signaled by a colon or dash. “Although,” “yet,” and “despite” create contrast. “Therefore” and “because” create cause and result. Examples reveal a category. Repetition may restate the same idea in different language.',
                'The best clue is sometimes a sentence away. Read enough to understand the author’s direction, especially when the target sentence contains a concession or a shift.',
            ],
            moves: ['Definition or restatement', 'Contrast', 'Cause and result', 'Example or category'],
        },
        {
            heading: 'Use word knowledge as a check, not a guess',
            body: [
                'Roots, prefixes, and familiar meanings can generate possibilities, but context chooses among them. A word may have several legitimate definitions, and the SAT tests the one the passage activates.',
                'If every choice is unfamiliar, use polarity, degree, grammar, and roots to eliminate. Then reread the completed sentence. The winner must preserve the passage’s logic without requiring you to invent a new idea.',
            ],
            moves: ['Polarity: positive, negative, neutral', 'Degree: mild or extreme', 'Part of speech', 'Known roots and related words'],
        },
    ],
    workedExample: {
        skill: 'Words in Context · logical completion',
        passage: 'Marine biologist Talia Wynn expected the two reef surveys to produce similar fish counts because the sites were only a kilometer apart. The results were far from ______, however: one team recorded nearly three times as many species as the other.',
        question: 'Which choice completes the text with the most logical and precise word or phrase?',
        prediction: '“Similar” or “consistent.” The expectation was similarity, but “however” and the threefold difference show that the results did not match.',
        choices: [
            {text: 'conclusive', verdict: 'Wrong dimension', analysis: 'The sentence compares the two results with each other; it does not ask whether either result settled a debate.'},
            {text: 'uniform', verdict: 'Best', analysis: '“Uniform” means consistent or similar, exactly the quality the large difference rules out.'},
            {text: 'accidental', verdict: 'Unsupported', analysis: 'The difference may need explanation, but the text does not establish that it happened by chance.'},
            {text: 'measurable', verdict: 'Contradicted', analysis: 'The results include counts and a threefold comparison, so they were measurable.'},
        ],
        answer: 1,
        decision: 'The contrast controls the blank: expected similarity, but observed a large difference. Choose the word that names similarity.',
    },
    takeaways: {
        rule: 'Predict the missing meaning from the sentence’s logic, then choose the word that fits that meaning, degree, and grammar exactly.',
        highScore: 'Hard items often offer one choice that matches the topic and another that completes the logic. “Conclusive” sounds scientific in the example, but only “uniform” answers the comparison the sentence actually makes.',
        checklist: ['What relationship controls the blank?', 'What plain word would I supply?', 'What tone and degree are required?', 'Does the completed sentence preserve the author’s logic?'],
    },
    practiceSet: {
        title: 'Let context write the definition',
        intro: 'Move from explicit restatement to subtler contrast, tone, and degree clues.',
        questions: [
            {
                id: 'vocab-context-foundation', difficulty: 'Foundation', skill: 'Definition clue',
                passage: 'The glass sculpture looks delicate, but it is surprisingly robust: it can withstand strong wind, heavy rain, and sharp changes in temperature.',
                question: 'As used in the text, “robust” most nearly means',
                choices: ['colorful', 'durable', 'valuable', 'complicated'],
                answer: 1,
                explanation: {
                    whyCorrect: 'The examples after the colon show that the sculpture can endure harsh conditions, so “robust” means durable.',
                    choices: ['No clue concerns color.', 'Correct: the sculpture withstands several stresses.', 'Price or worth is never discussed.', 'The sculpture’s construction may be complex, but the sentence describes strength.'],
                    takeaway: 'A colon often cashes out an abstract word with a concrete definition or example.',
                },
            },
            {
                id: 'vocab-context-core', difficulty: 'Core SAT', skill: 'Contrast clue',
                passage: 'At first, the newly discovered letters seemed to corroborate the biographer’s account of the composer’s departure. A later letter, however, directly contradicted the date the biographer had proposed.',
                question: 'As used in the text, “corroborate” most nearly means',
                choices: ['support', 'publicize', 'complicate', 'replace'],
                answer: 0,
                explanation: {
                    whyCorrect: 'The later contradiction reverses the initial relationship, so the earlier letters had seemed to support the account.',
                    choices: ['Correct: support contrasts with “contradicted.”', 'Making an account public is unrelated to whether it is accurate.', 'The first sentence initially suggests agreement, not complication.', 'The letters provide evidence about the account; they do not take its place.'],
                    takeaway: 'An antonym across a contrast can define the target word.',
                },
            },
            {
                id: 'vocab-context-advanced', difficulty: 'Advanced', skill: 'Logical completion',
                passage: 'Because the archive contains tax records only for landowners, any estimate of the town’s total eighteenth-century population based solely on those records would be ______: tenants and unhoused residents would be absent from the count.',
                question: 'Which choice completes the text with the most logical and precise word or phrase?',
                choices: ['methodical', 'incomplete', 'unnecessary', 'unprecedented'],
                answer: 1,
                explanation: {
                    whyCorrect: 'The second clause names groups the records omit, so an estimate using only those records would be incomplete.',
                    choices: ['A process can be methodical and still omit people.', 'Correct: missing populations make the estimate incomplete.', 'The text critiques the estimate’s coverage, not its usefulness.', 'Nothing says such an estimate has never been attempted.'],
                    takeaway: 'Translate the evidence after the colon into the exact property the blank must name.',
                },
            },
            {
                id: 'vocab-context-700', difficulty: '700+ Lens', skill: 'Degree and qualification',
                passage: 'The newly cataloged sketches do not overturn the accepted account of the mural’s design. They do, however, ______ it by showing that the artist tested several arrangements before settling on the version historians already knew.',
                question: 'Which choice completes the text with the most logical and precise word or phrase?',
                choices: ['repudiate', 'complicate', 'authenticate', 'duplicate'],
                answer: 1,
                explanation: {
                    whyCorrect: 'The sketches leave the accepted account standing but add a previously unknown layer to it, so they complicate that account.',
                    choices: ['“Repudiate” means reject, but the first sentence says the account is not overturned.', 'Correct: the evidence adds nuance without reversal.', 'The account’s authenticity is not in doubt.', 'The sketches do not make a copy of the historical account.'],
                    takeaway: 'Hard vocabulary questions often turn on calibrated change: complicate is not the same as overturn.',
                },
            },
        ],
    },
    reflection: {
        prompt: 'For one difficult word today, ignore its dictionary definition and write the four clues the sentence gave you: relationship, polarity, degree, and grammar.',
        steps: ['Name the logical hinge.', 'Write a plain substitute.', 'Explain why the strongest distractor failed one constraint.'],
    },
};

export default vocabularyByContext;
