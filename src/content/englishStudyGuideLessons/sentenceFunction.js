const sentenceFunction = {
    subject: 'english',
    slug: 'sentence-function-role-not-topic',
    moduleId: 'craft-and-structure',
    title: 'Sentence Function: Role, Not Topic',
    minutes: '24 min',
    summary: 'Explain how a sentence moves the passage forward by connecting its content to the ideas immediately before and after it.',
    goals: [
        'Distinguish what a sentence says from what it does.',
        'Use backward and forward links to identify rhetorical role.',
        'Choose precise function verbs such as illustrates, qualifies, and motivates.',
    ],
    openingCheck: {
        prompt: 'A passage states a common theory, then says, “Yet recent measurements reveal a pattern the theory cannot explain.” What is that sentence’s most likely function?',
        choices: ['It defines a technical term in the theory.', 'It introduces evidence that challenges the theory’s completeness.', 'It repeats the theory in simpler language.', 'It proves that all earlier measurements were inaccurate.'],
        answer: 1,
        explanation: '“Yet” marks opposition, and the unexplained pattern limits the theory. The sentence’s role is challenge or qualification—not merely “discussing measurements.”',
    },
    concepts: [
        {
            heading: 'Topic tells you what; function tells you why here',
            body: [
                'A content summary might say, “The sentence mentions a failed crop.” A function answer explains why the author mentions it: “It gives an example that complicates the proposed explanation for the region’s prosperity.”',
                'Use this equation: function = content + relationship + contribution. A strong answer names enough content to identify the sentence, its link to a nearby idea, and what that link accomplishes in the text as a whole.',
            ],
            moves: ['What does it say?', 'How does it connect?', 'What does that connection accomplish?'],
        },
        {
            heading: 'Read one step backward and one step forward',
            body: [
                'The previous sentence creates a need: a claim may need evidence, a puzzle may need an explanation, or a generalization may need an example. The next sentence shows the result: the author may interpret the evidence, change direction, or return to a larger claim.',
                'Signal words help, but structure decides. “For example” often illustrates; “however” contrasts; “therefore” draws a conclusion. When no signal appears, ask what would be missing if the target sentence disappeared.',
            ],
            moves: ['Need created before', 'Move made here', 'Consequence after', 'Deletion test'],
        },
        {
            heading: 'Function verbs are precise tools',
            body: [
                'Common roles include introducing a claim, defining a term, providing an example, presenting evidence, acknowledging a limitation, contrasting two views, raising a question, and explaining a result. Learn the distinctions rather than memorizing a list.',
                'At higher difficulty, the correct choice may combine roles: “concedes a limitation before defending the method’s usefulness.” Preserve both parts when the sentence turns on “although,” “while,” or “even though.”',
            ],
            moves: ['Introduces or defines', 'Supports or illustrates', 'Contrasts or qualifies', 'Explains or concludes'],
        },
    ],
    workedExample: {
        skill: 'Text Structure and Purpose · sentence function',
        passage: 'Some historians once treated the sudden appearance of imported pottery at Ketu as proof that foreign merchants had settled there. Chemical analysis now shows that local potters used imported clay to make many of the vessels. The pottery therefore documents long-distance material exchange, but it does not by itself establish who lived at Ketu.',
        question: 'Which choice best describes the function of the second sentence in the text as a whole?',
        prediction: 'It introduces evidence that weakens the old inference: imported material does not necessarily mean foreign makers or residents.',
        choices: [
            {text: 'It presents a finding that changes what the pottery can support about Ketu’s population.', verdict: 'Best', analysis: 'The chemical result breaks the assumed link between imported pottery and foreign residents, setting up the narrower conclusion.'},
            {text: 'It explains why local potters refused to use materials from nearby sources.', verdict: 'Invented motive', analysis: 'The sentence identifies imported clay but gives no reason for choosing it.'},
            {text: 'It proves that no foreign merchants ever visited Ketu.', verdict: 'Too strong', analysis: 'The evidence limits one argument for settlement; it does not rule out visits or settlement on other evidence.'},
            {text: 'It provides an example of the decorative techniques used on Ketu pottery.', verdict: 'Wrong topic', analysis: 'The sentence concerns clay origin and manufacture, not decoration.'},
        ],
        answer: 0,
        decision: 'Connect the finding backward to the old inference and forward to the narrowed conclusion. Its role is revision of what the evidence can prove.',
    },
    takeaways: {
        rule: 'State sentence function as “The author [rhetorical verb] [content] in order to [contribution to the passage].”',
        highScore: 'Beware of answers that correctly paraphrase the sentence but omit its relationship to the text. Also beware of accurate roles with inflated consequences: challenging one inference is not disproving an entire historical account.',
        checklist: ['What need exists before the sentence?', 'What move does the sentence make?', 'What changes after it?', 'Does the choice name role rather than topic alone?'],
    },
    practiceSet: {
        title: 'Read the joints of the passage',
        intro: 'Track how each target sentence connects ideas, from direct examples to concessions and reframed evidence.',
        questions: [
            {
                id: 'function-foundation', difficulty: 'Foundation', skill: 'Example',
                passage: 'Many city trees provide services beyond shade. A mature oak can absorb storm water that might otherwise overwhelm drains. Trees can also trap some airborne particles and provide habitat for insects and birds.',
                question: 'Which choice best describes the function of the second sentence?',
                choices: ['It gives a specific example of a service city trees provide.', 'It argues that oak trees should replace city drains.', 'It defines the term “mature oak.”', 'It presents the passage’s only reason to plant trees.'],
                answer: 0,
                explanation: {
                    whyCorrect: 'Storm-water absorption is one concrete instance of the broader services introduced in the first sentence.',
                    choices: ['Correct: general claim followed by example.', 'Absorbing some water is not replacing drainage systems.', 'No definition of oak appears.', 'The following sentence names additional benefits.'],
                    takeaway: 'When a specific case follows a broad claim, test “illustrates the claim.”',
                },
            },
            {
                id: 'function-core', difficulty: 'Core SAT', skill: 'Problem and response',
                passage: 'Restoring silent films is difficult because surviving copies are often scratched or incomplete. Some archives compare several damaged copies, selecting the clearest surviving frames from each. The reconstructed sequence can then preserve scenes that no single copy contains in full.',
                question: 'Which choice best describes the function of the second sentence?',
                choices: ['It identifies the reason silent films were originally damaged.', 'It describes a method for addressing the restoration problem.', 'It argues that incomplete films should not be restored.', 'It contrasts silent films with modern digital films.'],
                answer: 1,
                explanation: {
                    whyCorrect: 'The first sentence states a difficulty; the second gives the archives’ method for overcoming it.',
                    choices: ['The causes of damage are not explained.', 'Correct: it is the response to the stated problem.', 'The method supports restoration rather than rejecting it.', 'Modern films never appear.'],
                    takeaway: 'Map the passage as problem → method → benefit.',
                },
            },
            {
                id: 'function-advanced', difficulty: 'Advanced', skill: 'Counterexample',
                passage: 'A popular account holds that the poet Mara Venn abandoned nature imagery after moving to the capital. Yet “Market at Dawn,” written eight years after the move, compares awnings to leaves and traffic to a river. The poem suggests that Venn adapted natural imagery to an urban setting rather than discarding it.',
                question: 'Which choice best describes the function of the second sentence?',
                choices: ['It supplies an example that challenges the popular account.', 'It summarizes every image in Venn’s early nature poetry.', 'It explains why Venn disliked living in the capital.', 'It establishes that “Market at Dawn” was Venn’s final poem.'],
                answer: 0,
                explanation: {
                    whyCorrect: 'A later poem containing transformed nature imagery is a counterexample to the claim that Venn abandoned such imagery.',
                    choices: ['Correct: the evidence challenges the opening view and supports the final interpretation.', 'The sentence concerns one later poem, not all earlier work.', 'No personal dislike is stated.', 'Its place in Venn’s career is not given.'],
                    takeaway: 'An example can do argumentative work when it tests a general claim.',
                },
            },
            {
                id: 'function-700', difficulty: '700+ Lens', skill: 'Concession',
                passage: 'Economist Dev Imani notes that the survey excludes informal vendors, who make up part of the local market. Even so, the survey tracks the same registered shops for fifteen years, offering an unusually consistent record of change within that group. Imani therefore uses the data to study registered businesses while avoiding claims about the entire market.',
                question: 'Which choice best describes the function of the second sentence?',
                choices: ['It denies that the survey has any limitation.', 'It concedes that registered shops changed during the study.', 'It explains why a limitation does not eliminate the survey’s value for a narrower purpose.', 'It shows that informal vendors were secretly included in the survey.'],
                answer: 2,
                explanation: {
                    whyCorrect: '“Even so” pivots from the omission to a real strength that supports a limited use of the data.',
                    choices: ['The first and third sentences preserve the limitation.', 'The sentence says the record can track change, not that a particular change occurred.', 'Correct: strength despite limitation, followed by narrowed use.', 'The informal vendors remain excluded.'],
                    takeaway: 'A concession structure can acknowledge a flaw while defending qualified usefulness.',
                },
            },
        ],
    },
    reflection: {
        prompt: 'Take one paragraph from today and label each sentence with a verb: introduces, supports, contrasts, qualifies, explains, or concludes. Where does the reasoning turn?',
        steps: ['Summarize each sentence in five words.', 'Add its connection to the prior sentence.', 'Replace any vague label like “talks about.”'],
    },
};

export default sentenceFunction;
