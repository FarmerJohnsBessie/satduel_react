const crossTextConnections = {
    subject: 'english',
    slug: 'cross-text-connections',
    moduleId: 'craft-and-structure',
    title: 'Cross-Text Connections',
    minutes: '24 min',
    summary: 'Model each author’s claim, evidence, and limits separately, then compare the exact point the question asks about.',
    goals: [
        'Build a compact position for each text before connecting them.',
        'Distinguish agreement, disagreement, qualification, and different focus.',
        'Predict how one author would respond to a specific claim or finding.',
    ],
    openingCheck: {
        prompt: 'Text 1 argues that a park redesign increased visits. Text 2 agrees visits rose but says a new bus route may also have contributed. How does Text 2 relate to Text 1?',
        choices: ['It rejects the reported increase in visits.', 'It qualifies the proposed explanation for the increase.', 'It discusses an entirely unrelated subject.', 'It proves the redesign reduced visits.'],
        answer: 1,
        explanation: 'Text 2 accepts the outcome but questions whether the redesign alone caused it. That is qualification, not total disagreement.',
    },
    concepts: [
        {
            heading: 'Solve two small texts before one big relationship',
            body: [
                'Read Text 1 and write its spine: claim, key reason or evidence, and any limit. Reset, then do the same for Text 2. Combining too early makes students blur distinct positions into a vague shared topic.',
                'A useful note can be tiny: “T1: restoration caused return” and “T2: return began before restoration.” The note should preserve direction and certainty.',
            ],
            moves: ['Text 1 claim', 'Text 1 support or limit', 'Text 2 claim', 'Text 2 support or limit'],
        },
        {
            heading: 'Compare on the same axis',
            body: [
                'Authors can agree on a fact while disagreeing about its cause, importance, or interpretation. They can also examine different parts of the same topic without disagreeing at all. Name the axis before naming the relationship.',
                'Use a simple matrix: same or different conclusion? same or different explanation? same or different evidence? same or different scope? The question usually targets one cell.',
            ],
            moves: ['Conclusion', 'Explanation', 'Evidence', 'Scope'],
        },
        {
            heading: 'A response must fit the responding author',
            body: [
                'For “How would Text 2 respond?” questions, treat the claim from Text 1 as a new statement shown to Author 2. Predict Author 2’s reply using only Text 2’s commitments.',
                'Avoid personality guesses and dramatic language. An author who presents a limitation would likely caution, qualify, or request more evidence—not necessarily reject the entire claim.',
            ],
            moves: ['Quote the target claim', 'Recall Text 2’s commitment', 'State the likely reply', 'Match its strength'],
        },
    ],
    workedExample: {
        skill: 'Cross-Text Connections · response',
        passage: 'Text 1: Ecologist Priya Nwosu argues that reintroducing fallen logs to managed forests can rapidly restore beetle diversity because many beetle species depend on decaying wood. In three forests, plots receiving logs hosted more beetle species after two years than control plots did. Text 2: Ecologist Mateo Ruiz notes that beetle communities in restored forests can take decades to stabilize. Short studies may capture species attracted to fresh wood while missing whether those species form lasting populations.',
        question: 'Based on the texts, how would Ruiz most likely respond to Nwosu’s interpretation of the two-year results?',
        prediction: 'He would accept that more species appeared but caution that two years cannot show lasting restoration.',
        choices: [
            {text: 'By denying that any beetle species depend on decaying wood', verdict: 'Contradicts Text 2', analysis: 'Ruiz does not challenge the dependence; he challenges what a short time span can establish.'},
            {text: 'By arguing that control plots should never be used in forest research', verdict: 'Unsupported', analysis: 'Text 2 says nothing against control plots.'},
            {text: 'By cautioning that the increase may not demonstrate a stable, long-term recovery', verdict: 'Best', analysis: 'This applies Ruiz’s time-scale concern directly to Nwosu’s interpretation.'},
            {text: 'By agreeing that the study proves full restoration occurred within two years', verdict: 'Too strong', analysis: 'This is precisely the conclusion Ruiz’s warning resists.'},
        ],
        answer: 2,
        decision: 'The authors may agree on the observed count. Their difference is what that count proves about durable recovery.',
    },
    takeaways: {
        rule: 'Model each text independently, choose the shared comparison axis, and state the relationship at the same strength as both authors.',
        highScore: 'Hard paired-text items hide partial agreement inside disagreement. Separate observation from interpretation: both authors may accept the data while differing on cause, generality, or what follows from it.',
        checklist: ['What does each author actually claim?', 'On what exact point must I compare them?', 'Is the relationship agreement, disagreement, qualification, or different focus?', 'Would the proposed response sound natural from Text 2?'],
    },
    practiceSet: {
        title: 'Keep two voices distinct',
        intro: 'Compare claims across literature, history, humanities, and science without flattening partial agreement.',
        questions: [
            {
                id: 'cross-text-foundation', difficulty: 'Foundation', skill: 'Agreement',
                passage: 'Text 1: Music historian Lena Park argues that inexpensive home keyboards broadened access to composing in the 1980s. Text 2: Historian Omar Bell notes that community studios also lowered barriers, but he agrees that home keyboards let more musicians experiment without booking professional space.',
                question: 'Which statement would both authors most likely agree with?',
                choices: ['Home keyboards enabled more musicians to experiment with composing.', 'Community studios were the only reason access broadened.', 'Professional studios disappeared during the 1980s.', 'Home keyboards produced better music than studio equipment did.'],
                answer: 0,
                explanation: {
                    whyCorrect: 'Park makes the claim, and Bell explicitly agrees with it while adding another factor.',
                    choices: ['Correct: shared point with matched scope.', 'Bell adds studios but does not make them the only cause.', 'Neither text says professional studios vanished.', 'Access is discussed; music quality is not.'],
                    takeaway: 'An added factor can coexist with agreement on the original factor.',
                },
            },
            {
                id: 'cross-text-core', difficulty: 'Core SAT', skill: 'Different interpretation',
                passage: 'Text 1: Historian Ana Velasquez interprets repeated repairs to an ancient road as evidence that a central government maintained it. Text 2: Archaeologist Jun Seo argues that villages along the road could have organized repairs locally; similar stonework appears in village walls built without central direction.',
                question: 'How do the authors differ in their interpretations of the road repairs?',
                choices: ['Velasquez sees the repairs as centrally organized, whereas Seo argues local coordination is also plausible.', 'Velasquez believes the road was never repaired, whereas Seo believes it was.', 'Velasquez studies roads, whereas Seo studies only written laws.', 'Velasquez dates the road as ancient, whereas Seo dates it as modern.'],
                answer: 0,
                explanation: {
                    whyCorrect: 'Both accept that repairs occurred; they differ over what social organization the repairs imply.',
                    choices: ['Correct: same evidence, different explanation.', 'Both texts discuss repeated repairs.', 'Seo uses archaeological comparison, not written laws.', 'Neither author dates the road as modern.'],
                    takeaway: 'State the disputed inference, not a fact both authors accept.',
                },
            },
            {
                id: 'cross-text-advanced', difficulty: 'Advanced', skill: 'Response to evidence',
                passage: 'Text 1: Botanist Elise Tran proposes that silverleaf plants close their leaves at midday mainly to reduce water loss. Text 2: Botanist Rafi Okeke found that plants kept in high humidity still closed their leaves at nearly the same time, but plants exposed to intense light closed them earlier. Okeke argues that light protection deserves more study.',
                question: 'How would Okeke most likely respond to Tran’s proposal?',
                choices: ['The humidity result proves that water loss can never affect leaf closure.', 'The light result is consistent with the idea that closure may serve a function besides, or in addition to, reducing water loss.', 'Silverleaf plants do not close their leaves at midday.', 'Only plants in low humidity respond to intense light.'],
                answer: 1,
                explanation: {
                    whyCorrect: 'Closure under high humidity and earlier closure under intense light support a possible light-protection role without ruling out every role for water loss.',
                    choices: ['The evidence challenges “mainly” but does not prove water loss is irrelevant.', 'Correct: it offers a qualified alternative interpretation.', 'Both texts accept midday closure.', 'The passage does not limit the light response to low humidity.'],
                    takeaway: 'A response can broaden an explanation without declaring the original factor impossible.',
                },
            },
            {
                id: 'cross-text-700', difficulty: '700+ Lens', skill: 'Subtle alignment',
                passage: 'Text 1: Critic Mira Solano reads the final silence in the play as the protagonist’s refusal to participate in a corrupt negotiation. Text 2: Critic David Ibe notes that an earlier scene shows the protagonist losing the ability to speak under stress. Ibe argues that the ending remains politically powerful even if the silence is involuntary.',
                question: 'Which choice best describes the relationship between the two critics’ views?',
                choices: ['Ibe rejects Solano’s view that the ending can have political force.', 'Ibe accepts Solano’s account of the silence’s cause but disputes its effect.', 'Ibe offers a different explanation for the silence while preserving part of Solano’s interpretation of its significance.', 'The critics agree that the protagonist speaks during the negotiation.'],
                answer: 2,
                explanation: {
                    whyCorrect: 'Ibe changes the proposed cause—from refusal to stress response—but retains the possibility of political significance.',
                    choices: ['Ibe explicitly calls the ending politically powerful.', 'He disputes cause but preserves effect, the reverse of this choice.', 'Correct: different mechanism, partial agreement on meaning.', 'Both discuss silence, not speech.'],
                    takeaway: 'Compare cause and significance separately; authors can diverge on one and align on the other.',
                },
            },
        ],
    },
    reflection: {
        prompt: 'For a paired-text miss, draw two rows—claim, evidence, limit—and fill them before writing one sentence about the relationship.',
        steps: ['Keep the texts separate first.', 'Circle the shared comparison axis.', 'Use a calibrated verb: agrees, challenges, qualifies, or reframes.'],
    },
};

export default crossTextConnections;
