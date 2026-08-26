const advancedCraft = {
    subject: 'english',
    slug: 'advanced-craft-reading-the-fine-print',
    moduleId: 'craft-and-structure',
    title: '700+ Craft: Reading the Fine Print',
    minutes: '25 min',
    summary: 'Resolve the last two plausible answers by preserving concessions, qualifications, causal limits, and partial alignment across demanding Craft and Structure texts.',
    goals: [
        'Track who believes what and with what degree of certainty.',
        'Preserve both sides of concessions and qualifications.',
        'Audit near-miss answers at the level of one consequential word.',
    ],
    openingCheck: {
        prompt: 'A scholar says a new document “does not disprove the standard account, but it makes that account harder to maintain without revision.” Which description is exact?',
        choices: ['The document confirms the account without qualification.', 'The document completely refutes the account.', 'The document complicates the account while stopping short of disproving it.', 'The document is unrelated to the account.'],
        answer: 2,
        explanation: 'The sentence occupies a precise middle: the old account can survive, but only with revision. Advanced Craft questions often live between total agreement and total rejection.',
    },
    concepts: [
        {
            heading: 'Preserve the hinge',
            body: [
                'Words such as although, while, yet, even if, and nevertheless hold two ideas in a deliberate relationship. Do not remember only the first clause or the final clause. State the whole hinge: “limited in one respect, yet useful for a narrower purpose.”',
                'The main clause often carries the author’s emphasis, but the subordinate clause still sets a boundary. A correct answer preserves the priority without deleting the concession.',
            ],
            moves: ['Concession', 'Main claim', 'Which side is emphasized?', 'What boundary remains?'],
        },
        {
            heading: 'Separate voice from evidence',
            body: [
                'Dense passages may contain a common view, another researcher’s finding, and the current author’s interpretation. Attach every claim to its owner. Reporting a theory is not endorsing it; presenting a limitation is not necessarily rejecting the study.',
                'Use initials or labels in the margin: “old view,” “Kim finds,” “author argues.” Many hard distractors state something present in the passage but assign it to the wrong voice.',
            ],
            moves: ['Claim owner', 'Evidence owner', 'Author’s evaluation', 'Final level of certainty'],
        },
        {
            heading: 'Audit the expensive word',
            body: [
                'When two choices survive, identify the word that makes their claims different: primarily, merely, necessarily, some, all, cause, suggest, or prove. Ask what evidence that word costs.',
                'Also test the relationship verb. Supports, illustrates, qualifies, and contradicts are not decorative synonyms. Replace each with a plain sentence about what happens to the claim, then compare that sentence with the passage.',
            ],
            moves: ['Underline the difference', 'Price its evidence', 'Check claim ownership', 'Reread the full hinge'],
        },
    ],
    workedExample: {
        skill: '700+ Craft · qualification and voice',
        passage: 'Historian Noor Patel does not dispute that the canal increased trade between the two ports; customs records make that conclusion difficult to avoid. Patel questions, however, the common claim that trade was the canal’s primary political consequence. Petitions from inland towns suggest that disputes over water access reshaped regional alliances at least as much as new commerce did.',
        question: 'Which choice best describes the function of the second sentence in the text as a whole?',
        prediction: 'It pivots from accepting the canal’s trade effect to challenging the ranking of that effect as the main political consequence.',
        choices: [
            {text: 'It rejects the customs records as unreliable evidence of increased trade.', verdict: 'Wrong voice and direction', analysis: 'Patel accepts the trade conclusion and calls it difficult to avoid.'},
            {text: 'It qualifies a common interpretation by shifting attention from whether trade increased to how important that increase was politically.', verdict: 'Best', analysis: 'The sentence preserves the accepted fact but challenges the claim of primacy, setting up another major consequence.'},
            {text: 'It introduces the inland towns’ petitions as proof that trade decreased.', verdict: 'Misstates evidence', analysis: 'The petitions appear in the next sentence and concern water disputes, not declining trade.'},
            {text: 'It argues that the canal had no important political effects.', verdict: 'Reversal', analysis: 'Patel compares two significant effects rather than denying political consequences.'},
        ],
        answer: 1,
        decision: 'The costly word is “primary.” Patel accepts increased trade but disputes its rank among the canal’s political consequences.',
    },
    takeaways: {
        rule: 'At high difficulty, keep a ledger of claim owner, concession, main emphasis, scope, and certainty—then audit the one word separating the finalists.',
        highScore: 'Do not choose the weaker answer simply because it sounds safer. Choose the exactly supported answer. Sometimes the passage proves a narrow claim decisively; sometimes it only suggests a broad one. Precision, not timidity, is the goal.',
        checklist: ['Whose view is this?', 'What does the author concede?', 'What does the author emphasize?', 'Which single word separates my finalists?'],
    },
    practiceSet: {
        title: 'Win the last-two-choice decision',
        intro: 'These mixed Craft and Structure questions concentrate the qualifications and partial alignments that define harder second modules.',
        questions: [
            {
                id: 'advanced-craft-vocab', difficulty: 'Advanced', skill: 'Precise word choice',
                passage: 'The newly found rehearsal notes do not reveal why the director cut the final scene. They do, however, ______ the claim that the cut was made at the last minute: several notes from early rehearsals already mark the scene as optional.',
                question: 'Which choice completes the text with the most logical and precise word or phrase?',
                choices: ['undermine', 'document', 'circulate', 'resolve'],
                answer: 0,
                explanation: {
                    whyCorrect: 'Early notes marking the scene optional weaken the claim that the decision was last-minute.',
                    choices: ['Correct: the timing evidence makes the claim less credible.', 'The notes document early uncertainty, not the last-minute claim itself.', 'Nothing concerns spreading the claim.', 'The notes weaken one explanation but do not reveal the actual reason, so they do not resolve the question.'],
                    takeaway: 'Evidence can undermine one account without solving the entire mystery.',
                },
            },
            {
                id: 'advanced-craft-function', difficulty: 'Advanced', skill: 'Concessive function',
                passage: 'The telescope cannot resolve individual clouds on the distant planet. Even so, repeated measurements show a consistent seasonal change in the planet’s overall brightness. Researchers can therefore test broad atmospheric models, though not detailed weather predictions.',
                question: 'Which choice best describes the function of the second sentence?',
                choices: ['It explains why the telescope’s limitation still permits a narrower kind of evidence.', 'It proves that the telescope can produce detailed weather forecasts.', 'It identifies an error that makes every measurement unusable.', 'It gives an example of an individual cloud observed by the telescope.'],
                answer: 0,
                explanation: {
                    whyCorrect: '“Even so” introduces a consistent pattern that remains measurable despite the resolution limit and supports a narrower use.',
                    choices: ['Correct: limitation → surviving evidence → qualified application.', 'The final clause explicitly rules out detailed predictions.', 'The measurements remain useful for broad models.', 'Individual clouds cannot be resolved.'],
                    takeaway: 'Preserve both halves: real limitation, real but narrower value.',
                },
            },
            {
                id: 'advanced-craft-cross-text', difficulty: '700+ Lens', skill: 'Partial agreement',
                passage: 'Text 1: Linguist Hana Idris argues that repeated phrases in the epic were memory aids created for oral performance. Text 2: Linguist Pavel Chen agrees that repetition helped performers remember long passages, but notes that some repeated phrases occur at emotionally charged moments where no memory aid seems necessary. Chen argues that repetition also shaped the audience’s emotional expectations.',
                question: 'Which statement best describes the relationship between the texts?',
                choices: ['Chen rejects Idris’s claim that repetition ever aided memory.', 'Chen accepts Idris’s proposed function but argues that repetition served an additional function as well.', 'Chen agrees with Idris that emotional effects are impossible to study.', 'Chen argues that the epic was never performed orally.'],
                answer: 1,
                explanation: {
                    whyCorrect: 'Chen explicitly agrees with the memory function and expands the account to include audience expectation.',
                    choices: ['He accepts the memory-aid claim.', 'Correct: agreement plus supplementation.', 'Chen makes a claim about emotional effects rather than denying study is possible.', 'Both accounts concern oral performance.'],
                    takeaway: '“Also” often marks expansion, not replacement.',
                },
            },
            {
                id: 'advanced-craft-purpose', difficulty: '700+ Lens', skill: 'Purpose and stance',
                passage: 'Economists often use nighttime satellite brightness as a rough measure of economic activity where official records are sparse. In coastal regions, however, fishing fleets can create intense light far from settlements, inflating apparent activity. A new model filters likely vessel light before estimating local growth. The adjustment does not make brightness a perfect measure, but it reduces one systematic source of error.',
                question: 'Which choice best describes the main purpose of the text?',
                choices: ['To dismiss satellite brightness as having no value in economic research', 'To argue that fishing fleets are the main source of economic growth in coastal regions', 'To describe a limitation in a common proxy and a method that reduces, but does not eliminate, that limitation', 'To prove that the new model measures local growth perfectly'],
                answer: 2,
                explanation: {
                    whyCorrect: 'The passage introduces a proxy, identifies vessel light as a distortion, and explains a partial correction while preserving imperfection.',
                    choices: ['The adjusted proxy retains value.', 'Fleet light distorts the measurement; it is not identified as the cause of growth.', 'Correct: problem → correction → remaining limit.', 'The final sentence explicitly denies perfection.'],
                    takeaway: 'The exact purpose preserves the improvement and the residual uncertainty.',
                },
            },
        ],
    },
    reflection: {
        prompt: 'Revisit one question where two choices remained. Copy only the words that differ, then write the evidence each word would require.',
        steps: ['Name the claim owner.', 'Preserve the concession and main clause.', 'Choose the word whose evidence cost the passage fully pays.'],
    },
};

export default advancedCraft;
