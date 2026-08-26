const mainPurposeStructure = {
    subject: 'english',
    slug: 'main-purpose-and-text-structure',
    moduleId: 'craft-and-structure',
    title: 'Main Purpose and Text Structure',
    minutes: '25 min',
    summary: 'Zoom out from individual sentences to identify the author’s central action and the passage-wide sequence used to accomplish it.',
    goals: [
        'Distinguish subject, main idea, and main rhetorical purpose.',
        'Compress a passage into a two- or three-move structure map.',
        'Match purpose answers to the passage’s scope, stance, and emphasis.',
    ],
    openingCheck: {
        prompt: 'A passage describes an old explanation for bird migration, presents tracking data that conflicts with it, and introduces a revised explanation. Which purpose statement is strongest?',
        choices: ['To discuss birds and tracking technology', 'To prove that all earlier research on migration was useless', 'To explain how new evidence prompted a revision of one account of migration', 'To list every known cause of bird migration'],
        answer: 2,
        explanation: 'The correct purpose captures the passage’s action and full sequence: old view → conflicting evidence → revision. The topic-only answer is too vague; the others overstate scope.',
    },
    concepts: [
        {
            heading: 'Subject, main idea, and purpose are different layers',
            body: [
                'The subject is the noun phrase: urban heat, a poem, an experiment. The main idea is what the passage says about it. The purpose is what the author is doing by saying it: challenging an assumption, explaining a method, illustrating a change, or comparing interpretations.',
                'Purpose answers often begin with “to,” but the verb matters more than the grammar. “Discuss” and “describe” are usually too empty when the passage evaluates, argues, explains, or traces.',
            ],
            moves: ['Subject: what?', 'Main idea: what about it?', 'Purpose: why present it this way?'],
        },
        {
            heading: 'Build a passage skeleton',
            body: [
                'Reduce each sentence to its job, then group the jobs into two or three moves: expectation → surprising result → explanation; problem → proposed solution → remaining limitation; common reading → overlooked detail → revised reading.',
                'The skeleton prevents the vivid detail from impersonating the whole passage. A correct purpose answer must cover the center of gravity, not merely the opening or the final example.',
            ],
            moves: ['Label sentence roles', 'Group related moves', 'Find the turn', 'State the whole trajectory'],
        },
        {
            heading: 'Match scope and stance',
            body: [
                'Ask how much the passage covers and how strongly the author speaks. One study cannot explain an entire field. A qualified proposal is not a definitive proof. An account of how a technique works is not automatically an argument that everyone should use it.',
                'For literature, purpose may involve revealing a tension, characterizing a speaker, or tracing a change in perception. The same structure method works: follow what changes from beginning to end.',
            ],
            moves: ['Whole passage, not one detail', 'Exact population or text', 'Argument strength', 'Author attitude'],
        },
    ],
    workedExample: {
        skill: 'Text Structure and Purpose · main purpose',
        passage: 'Readers often interpret the locked gate in Esi Maru’s poem as a simple symbol of exclusion. The speaker, however, repeatedly describes tending vines that grow through the gate and trading fruit with a neighbor on the other side. These details do not erase the barrier, but they present it as a boundary across which care and exchange remain possible.',
        question: 'Which choice best describes the main purpose of the text?',
        prediction: 'To revise a simple interpretation of the gate by showing that the poem treats it as both a barrier and a site of connection.',
        choices: [
            {text: 'To argue that the gate does not function as a barrier anywhere in the poem', verdict: 'Erases tension', analysis: 'The final sentence explicitly says the details do not erase the barrier.'},
            {text: 'To list the gardening tasks performed by the poem’s speaker', verdict: 'Detail only', analysis: 'Tending vines is evidence for an interpretation, not the passage’s main aim.'},
            {text: 'To qualify a common reading of the gate by emphasizing details of connection across it', verdict: 'Best', analysis: 'This captures the common view, the countervailing details, and the qualified reinterpretation.'},
            {text: 'To compare Maru’s use of symbolism with another poet’s', verdict: 'Outside scope', analysis: 'No second poet or comparison appears.'},
        ],
        answer: 2,
        decision: 'The passage does not replace “barrier” with “connection”; it complicates the symbol by preserving both. The purpose must preserve that structure.',
    },
    takeaways: {
        rule: 'Compress the passage into moves, then choose the purpose that names the author’s central action across all of those moves.',
        highScore: 'When two purpose answers are plausible, compare what each erases. Hard passages often preserve a tension—useful yet limited, traditional yet innovative, stable yet changing. The right answer usually keeps both sides in their proper relationship.',
        checklist: ['What is the author doing—not merely discussing?', 'What are the passage’s two or three moves?', 'Does the answer cover the center of gravity?', 'Does it preserve scope and stance?'],
    },
    practiceSet: {
        title: 'See the whole machine',
        intro: 'Practice turning passages into structure maps and matching the map to a precise rhetorical purpose.',
        questions: [
            {
                id: 'purpose-foundation', difficulty: 'Foundation', skill: 'Main purpose',
                passage: 'Traditional weather stations collect precise data but can be expensive to install in remote valleys. A research team developed small, low-cost sensors that local hikers can place along established trails. The sensors are less precise individually, but together they can reveal broad temperature patterns across areas with few stations.',
                question: 'Which choice best describes the main purpose of the text?',
                choices: ['To describe a lower-cost method for gathering broad weather data in remote areas', 'To prove that hikers collect more accurate data than scientists', 'To argue that traditional weather stations should be removed', 'To explain why all valleys have identical temperatures'],
                answer: 0,
                explanation: {
                    whyCorrect: 'The passage presents a cost and access problem, a sensor method, and the method’s useful outcome.',
                    choices: ['Correct: problem → method → benefit at the right scope.', 'The sensors are explicitly less precise individually.', 'The new method supplements sparse stations; removal is never proposed.', 'The sensors reveal patterns, not identical temperatures.'],
                    takeaway: 'A purpose answer should include both the method and the problem it addresses.',
                },
            },
            {
                id: 'purpose-core', difficulty: 'Core SAT', skill: 'Structure map',
                passage: 'For years, conservators assumed the blue pigment in a temple mural had been imported. Spectroscopy revealed a mineral composition matching clay found near the temple. Archaeologists then located a nearby kiln containing traces of the same mineral, strengthening the case for local production.',
                question: 'Which choice best describes the overall structure of the text?',
                choices: ['A theory is introduced, supporting evidence is summarized, and the theory is restated.', 'A prior assumption is presented, evidence against it is described, and a new conclusion gains support.', 'Two production methods are compared, and both are rejected.', 'A discovery is announced, and its practical disadvantages are listed.'],
                answer: 1,
                explanation: {
                    whyCorrect: 'The import assumption gives way to chemical and archaeological evidence for local production.',
                    choices: ['The evidence undermines rather than supports the initial assumption.', 'Correct: old view → contrary evidence → supported revision.', 'The passage contrasts origins, not two rejected methods.', 'No disadvantages are discussed.'],
                    takeaway: 'Track which claim each piece of evidence strengthens or weakens.',
                },
            },
            {
                id: 'purpose-advanced', difficulty: 'Advanced', skill: 'Purpose and limitation',
                passage: 'A translation app correctly conveyed the basic meaning of most tested public signs. It performed less reliably on jokes, regional idioms, and signs whose meaning depended on an image. The researchers argue that the app may help travelers with routine information while cautioning against treating it as a substitute for culturally informed translation.',
                question: 'Which choice best describes the main purpose of the text?',
                choices: ['To establish that translation apps fail on most public signs', 'To evaluate an app by identifying both a practical use and important limits', 'To explain how programmers should remove images from public signs', 'To show that regional idioms have only one correct translation'],
                answer: 1,
                explanation: {
                    whyCorrect: 'The passage balances success on basic signs with failures on context-dependent language and draws a qualified use case.',
                    choices: ['The app succeeded on most basic meanings.', 'Correct: evidence → limitation → calibrated conclusion.', 'The passage evaluates translation, not sign design.', 'Nothing suggests idioms have one translation.'],
                    takeaway: 'When the conclusion is “useful for X, limited for Y,” keep both in the purpose.',
                },
            },
            {
                id: 'purpose-700', difficulty: '700+ Lens', skill: 'Literary structure',
                passage: 'At the story’s opening, the narrator describes the train station clock as “the town’s one reliable witness.” After learning that the clock has been stopped for years, she begins noticing other supposed constants—a family recipe, a boundary stone, an old nickname—that have quietly changed. By the end, “reliable” names not permanence but the certainty that people will keep revising what they inherit.',
                question: 'Which choice best describes the main purpose of the text?',
                choices: ['To show how the narrator’s idea of reliability changes from permanence to continual revision', 'To prove that every tradition mentioned in the story is historically false', 'To explain the mechanical reason the station clock stopped', 'To argue that the narrator wants the town to abandon inherited customs'],
                answer: 0,
                explanation: {
                    whyCorrect: 'The passage traces a conceptual shift in the narrator’s understanding of reliability.',
                    choices: ['Correct: initial meaning → destabilizing examples → redefined meaning.', 'Change does not make every tradition false.', 'The clock’s mechanism is not discussed.', 'Revision is presented as ongoing, not as a demand for abandonment.'],
                    takeaway: 'In literary passages, structure often tracks a change in perception rather than an explicit argument.',
                },
            },
        ],
    },
    reflection: {
        prompt: 'Reduce one passage to three arrows, such as “old view → new evidence → qualified revision.” Then write its purpose in one sentence beginning with a strong verb.',
        steps: ['Label the moves.', 'Circle the central turn.', 'Check that your purpose covers every move without becoming vague.'],
    },
};

export default mainPurposeStructure;
