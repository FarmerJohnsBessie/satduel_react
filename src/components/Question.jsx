import React, {useEffect, useState} from 'react';
import PracticeQuestionCard from './practice/PracticeQuestionCard';
import api from './api';

function isAnswered(status) {
    const value = String(status || 'Blank').toLowerCase();
    return value === 'correct' || value === 'incorrect';
}

function Question({
    questionData,
    onSubmit,
    status,
    questionNumber,
    totalQuestions,
    disabled = false,
    showQuestionNumber = true,
    timerSeconds = null,
    timerRunning = false,
    onTimerToggle,
    onTimerReset,
    allowSaving = false,
    // Review surfaces set `reveal` to show the solution on questions the user
    // never answered — skipping one is exactly when the explanation matters.
    reveal = false,
    // What the user picked, so review can mark their answer, not just the right one.
    initialChoice = '',
}) {
    const [selectedChoice, setSelectedChoice] = useState(initialChoice);
    const [answerDetails, setAnswerDetails] = useState(null);
    const [checking, setChecking] = useState(false);

    useEffect(() => {
        setSelectedChoice(initialChoice);
        setAnswerDetails(null);
    }, [questionData?.id, initialChoice]);

    useEffect(() => {
        let cancelled = false;

        const getAnswer = async () => {
            if ((!isAnswered(status) && !reveal) || !questionData?.id) return;
            try {
                const response = await api.post('/api/get_answer/', {question_id: questionData.id});
                if (!cancelled) {
                    setAnswerDetails(response.data);
                }
            } catch {
                if (!cancelled) {
                    setAnswerDetails(null);
                }
            }
        };

        getAnswer();
        return () => {
            cancelled = true;
        };
    }, [questionData?.id, status, reveal]);

    const handleSubmit = async (choice) => {
        if (!choice || checking) return;
        setChecking(true);
        try {
            await onSubmit(questionData.id, choice);
        } finally {
            setChecking(false);
        }
    };

    return (
        <PracticeQuestionCard
            question={questionData}
            questionNumber={questionNumber}
            totalQuestions={totalQuestions}
            selectedChoice={selectedChoice}
            onSelectChoice={setSelectedChoice}
            onSubmit={handleSubmit}
            status={status}
            disabled={disabled}
            reveal={reveal}
            checking={checking}
            timerSeconds={timerSeconds}
            timerRunning={timerRunning}
            onTimerToggle={onTimerToggle}
            onTimerReset={onTimerReset}
            allowSaving={allowSaving}
            correctAnswer={answerDetails?.answer}
            correctChoiceLabel={answerDetails?.answer_choice}
            explanation={answerDetails?.explanation}
        />
    );
}

export default Question;
