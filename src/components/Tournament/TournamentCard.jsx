import React from 'react';
import {ArrowRight, Clock3, Trophy, Users} from 'lucide-react';
import {useNavigate} from 'react-router-dom';
import {Button, Card} from '../ui';

const STATUS_STYLES = {
    active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    upcoming: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    ended: 'bg-slate-100 text-slate-600 border-slate-200',
};

// The API sends a Django duration ("00:20:00", or "1 02:00:00" past a day).
function formatDuration(value) {
    if (!value) return 'Timed round';
    const [days, clock] = value.includes(' ') ? value.split(' ') : ['0', value];
    const [hours, minutes] = clock.split(':').map(Number);
    const parts = [];
    if (Number(days)) parts.push(`${Number(days)}d`);
    if (hours) parts.push(`${hours}h`);
    if (minutes) parts.push(`${minutes}m`);
    return parts.length ? parts.join(' ') : '<1m';
}

function TournamentCard({tournament}) {
    const navigate = useNavigate();
    const status = (tournament.status || 'active').toLowerCase();
    const participantCount = tournament.participantNumber ?? tournament.participants ?? 0;

    return (
        <Card hover className="sat-arena-card flex h-full flex-col overflow-hidden">
            <div className="sat-score-strip h-1 border-0"/>
            <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                        <Trophy className="size-5"/>
                    </div>
                    <span className={`rounded-full border px-2.5 py-1 text-xs font-black uppercase ${STATUS_STYLES[status] || STATUS_STYLES.ended}`}>
                        {status}
                    </span>
                </div>

                <h3 className="m-0 mt-4 font-display text-xl font-black leading-tight text-slate-950">
                    {tournament.name}
                </h3>
                <p className="m-0 mt-2 line-clamp-3 text-sm leading-relaxed text-slate-500">
                    {tournament.description || 'A timed SAT tournament with shared questions and live rankings.'}
                </p>

                <div className="mt-5 grid gap-2 text-sm font-semibold text-slate-600">
                    <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2">
                        <Users className="size-4 text-primary-600"/>
                        {participantCount} participant{participantCount === 1 ? '' : 's'}
                    </div>
                    <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2">
                        <Clock3 className="size-4 text-primary-600"/>
                        {formatDuration(tournament.duration)}
                    </div>
                </div>

                <div className="mt-6">
                    <Button onClick={() => navigate(`/tournament/${tournament.id}`)} block>
                        {status === 'active' ? 'Enter tournament' : 'View tournament'} <ArrowRight className="size-4"/>
                    </Button>
                </div>
            </div>
        </Card>
    );
}

export default TournamentCard;
