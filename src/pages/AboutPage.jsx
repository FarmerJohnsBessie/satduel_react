import React, {useEffect, useRef, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {ArrowRight, Mail, PartyPopper, Send, Swords, Target} from 'lucide-react';
import emailjs from 'emailjs-com';
import {Alert, Input, PageContainer} from '../components/ui';
import {Cta, Eyebrow, PANEL} from '../components/ui/landing';
import {DISCORD_INVITE, DiscordIcon} from '../components/Discord';
import SEO, {breadcrumbJsonLd, organizationJsonLd} from '../components/SEO';
import '../styles/landing.css';
import clement from '../assets/teamphoto/clementzhou.jpg';
import alex from '../assets/teamphoto/alexjin.jpg';
import weiwei from '../assets/teamphoto/weiwei.jpg';
import bryan from '../assets/teamphoto/9dc66da09989aebf1037be575264899c.jpg';

// The whole page argues one thing: the SAT is a solo test, but prep does not
// have to be. Everything below is either that argument or a real feature that
// backs it — no interchangeable "our values" cards.
const ALONE = [
    'A PDF, a timer, and a quiet room.',
    'Nobody notices when you skip a day.',
    'You find out how it went once you finish the whole section.',
    'Nothing to say about it afterwards.',
];

const TOGETHER = [
    'A live opponent working the same question, right now.',
    'A room of friends racing you through a set.',
    'A rating that moves on every single answer.',
    'A Discord full of people studying tonight too.',
];

// Every number here is a real cap in the code — party_views.py CAPS (50/50),
// duel rating from Profile.elo, practice Elo from PracticeStats.
const MODES = [
    {
        icon: Swords,
        title: 'Duel someone',
        text: 'One opponent, the same questions, one clock. Win and your duel rating goes up; lose and it goes the other way. Matches run a few minutes, so a duel fits where scrolling would have.',
    },
    {
        icon: PartyPopper,
        title: 'Host a party',
        text: 'Punch out a room code and up to 50 friends join from their phones — a live scoreboard, up to 50 questions, and Gold Rush when you want chaos. Guests never need an account upgrade to play.',
    },
    {
        icon: Target,
        title: 'Practice on your own',
        text: 'Adaptive questions with a Practice Elo that reacts to every answer, separately for English and Math. Solo, but you can still see where you land on the leaderboard tomorrow.',
    },
];

const TEAM = [
    {name: 'Clement Zhou', role: 'Co-founder & CEO', avatar: clement},
    {name: 'Alex Jin', role: 'Co-founder & CTO', avatar: alex},
    {name: 'Bryan Zhou', role: 'Co-founder & CFO', avatar: bryan},
    {name: 'Weiwei Luo', role: 'President & Project Manager', avatar: weiwei},
];

const FAQS = [
    {
        question: 'Is SAT Duel free?',
        answer: 'Yes. Free covers 25 adaptive questions a day, duels, tournaments, free practice-test forms and party rooms up to six players. Premium removes the cap and scales the rest up.',
    },
    {
        question: 'What is the best way to reach you?',
        answer: 'The form on this page, or email satduel@gmail.com directly. The Discord is usually faster if the question is about a game in progress.',
    },
    {
        question: 'How long until you reply?',
        answer: 'Within 24 to 48 hours.',
    },
    {
        question: 'Do my friends need an account to join my party?',
        answer: 'They need a free account, but nothing more — only the host plan sets the room size and question count.',
    },
];

function ModeCard({mode}) {
    const Icon = mode.icon;
    return (
        <div className={`p-6 sm:p-7 ${PANEL}`}>
            <span className="flex size-11 items-center justify-center rounded-[14px] bg-[rgba(124,92,240,0.14)] text-[var(--sd-violet-lbl)]">
                <Icon className="size-[22px]" strokeWidth={1.9}/>
            </span>
            <h3 className="sd-display m-0 mt-5 text-xl font-bold tracking-[-0.01em] text-[var(--sd-text)]">{mode.title}</h3>
            <p className="m-0 mt-2.5 text-[14.5px] leading-relaxed text-[var(--sd-mut)] text-pretty">{mode.text}</p>
        </div>
    );
}

function AboutPage() {
    const {hash} = useLocation();
    const form = useRef(null);
    const [status, setStatus] = useState(null);
    const [sending, setSending] = useState(false);

    useEffect(() => {
        if (!hash) return;
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }, [hash]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSending(true);
        setStatus(null);
        try {
            await emailjs.sendForm(
                'service_6c2ymlq',
                'template_1qosfaq',
                form.current,
                'eqBzs3BVZxwSyxMQE'
            );
            form.current.reset();
            setStatus({type: 'success', text: 'Email sent successfully. We will get back to you soon.'});
        } catch (error) {
            setStatus({type: 'error', text: 'Failed to send email. You can also email satduel@gmail.com directly.'});
        } finally {
            setSending(false);
        }
    };

    return (
        <div>
            <SEO
                seoKey="about"
                structuredData={[
                    organizationJsonLd(),
                    breadcrumbJsonLd([
                        {name: 'Home', path: '/'},
                        {name: 'About SAT Duel', path: '/about'},
                    ]),
                ]}
            />

            {/* hero */}
            <section id="header" className="sd-hero-bg border-b border-[var(--sd-line)]">
                <PageContainer className="pb-14 pt-12 sm:pt-[76px]">
                    <div className="max-w-3xl">
                        <Eyebrow>ABOUT SAT DUEL</Eyebrow>
                        <h1 className="sd-display m-0 mt-4 text-4xl font-bold leading-[1.06] tracking-[-0.02em] text-[var(--sd-text)] sm:text-[54px]">
                            The SAT is a solo test.<br className="hidden sm:block"/> Prep does not have to be.
                        </h1>
                        <p className="m-0 mt-5 max-w-[640px] text-[17px] leading-relaxed text-[var(--sd-mut)] text-pretty">
                            SAT Duel turns practice into something you do with people. Duel a stranger for rating, host
                            a room for fifty friends, or drill on your own and watch your Elo move. Real Digital SAT
                            questions — wrapped in something you actually want to open.
                        </p>
                        <div className="mt-7 flex flex-wrap gap-3">
                            <Cta solid to="/register" className="px-[22px] py-3.5 text-[15px]">
                                Start practicing <ArrowRight className="size-[17px]"/>
                            </Cta>
                            <Cta href={DISCORD_INVITE} className="px-[22px] py-3.5 text-[15px]">
                                <DiscordIcon className="size-[18px]"/> Join the Discord
                            </Cta>
                        </div>
                    </div>
                </PageContainer>
            </section>

            <PageContainer>
                {/* the argument */}
                <section className="pt-16 sm:pt-18">
                    <Eyebrow>WHY WE BUILT IT</Eyebrow>
                    <h2 className="sd-display m-0 mt-3.5 max-w-2xl text-3xl font-bold leading-tight tracking-[-0.02em] text-[var(--sd-text)] sm:text-4xl">
                        Prep fails when it is boring, not when it is hard.
                    </h2>
                    <p className="m-0 mt-3 max-w-[640px] text-base leading-relaxed text-[var(--sd-mut)]">
                        Plenty of students know exactly what they should be doing. They still do not open the book,
                        because there is nothing on the other side of it. So we put someone on the other side.
                    </p>

                    <div className="mt-8 grid gap-5 lg:grid-cols-2">
                        <div className={`p-6 sm:p-7 ${PANEL}`}>
                            <Eyebrow tone="dim">STUDYING ALONE</Eyebrow>
                            <ul className="m-0 mt-5 flex list-none flex-col gap-3.5 p-0">
                                {ALONE.map((line) => (
                                    <li key={line} className="flex items-start gap-3 text-[15px] leading-normal text-[var(--sd-mut)]">
                                        <span className="mt-2.5 h-px w-3 shrink-0 bg-[var(--sd-line3)]"/>
                                        <span>{line}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={`border-[1.5px] border-[#7C5CF0] p-6 shadow-[0_18px_50px_rgba(124,92,240,0.18)] sm:p-7 ${PANEL}`}>
                            <Eyebrow>STUDYING ON SAT DUEL</Eyebrow>
                            <ul className="m-0 mt-5 flex list-none flex-col gap-3.5 p-0">
                                {TOGETHER.map((line) => (
                                    <li key={line} className="flex items-start gap-3 text-[15px] leading-normal text-[var(--sd-body)]">
                                        <span className="mt-2 size-[7px] shrink-0 rounded-full bg-[#7C5CF0]"/>
                                        <span>{line}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* the three ways in */}
                <section className="pt-16 sm:pt-18">
                    <Eyebrow>THREE WAYS TO PRACTICE</Eyebrow>
                    <h2 className="sd-display m-0 mt-3.5 text-3xl font-bold leading-tight tracking-[-0.02em] text-[var(--sd-text)] sm:text-4xl">
                        Bring one friend, or forty-nine.
                    </h2>

                    <div className="mt-8 grid gap-5 lg:grid-cols-3">
                        {MODES.map((mode) => <ModeCard key={mode.title} mode={mode}/>)}
                    </div>
                </section>

                {/* origin */}
                <section className="pt-16 sm:pt-18">
                    <div className={`overflow-hidden ${PANEL}`}>
                        <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                            <div>
                                <Eyebrow>SINCE JUNE 2024</Eyebrow>
                                <p className="sd-display m-0 mt-4 text-2xl font-bold leading-[1.25] tracking-[-0.01em] text-[var(--sd-text)] text-pretty sm:text-[28px]">
                                    &ldquo;Make SAT prep something you look forward to, because somebody else is
                                    already there.&rdquo;
                                </p>
                            </div>
                            <div className="text-[15px] leading-relaxed text-[var(--sd-mut)]">
                                <p className="m-0">
                                    SAT Duel started in June 2024 with four students who had all sat through the same
                                    lonely version of prep and thought it was a solvable problem. Not a content
                                    problem — there is no shortage of SAT questions in the world — but a reason-to-open-it
                                    problem.
                                </p>
                                <p className="m-0 mt-4">
                                    So the arena came first: ratings that move while you watch, rooms you can fill with
                                    your entire class, a leaderboard worth checking. The questions are the real thing.
                                    The part we built is everything around them that makes you come back tomorrow.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* team */}
                <section className="pt-16 sm:pt-18">
                    <Eyebrow>TEAM</Eyebrow>
                    <h2 className="sd-display m-0 mt-3.5 text-3xl font-bold leading-tight tracking-[-0.02em] text-[var(--sd-text)] sm:text-4xl">
                        Four students, still building it.
                    </h2>

                    <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
                        {TEAM.map((member) => (
                            <div key={member.name} className={`p-5 ${PANEL}`}>
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    loading="lazy"
                                    className="aspect-square w-full rounded-[14px] border border-[var(--sd-line2)] bg-[var(--sd-bg2)] object-cover"
                                />
                                <p className="m-0 mt-4 text-[15px] font-bold text-[var(--sd-text)]">{member.name}</p>
                                <p className="m-0 mt-1 text-[13.5px] text-[var(--sd-mut)]">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* contact */}
                <section id="contact-us" className="pt-16 sm:pt-18">
                    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
                        <div>
                            <Eyebrow>CONTACT</Eyebrow>
                            <h2 className="sd-display m-0 mt-3.5 text-3xl font-bold leading-tight tracking-[-0.02em] text-[var(--sd-text)] sm:text-4xl">
                                Tell us what is broken.
                            </h2>
                            <p className="m-0 mt-3 text-base leading-relaxed text-[var(--sd-mut)]">
                                Bug reports, billing questions, school partnerships and feature ideas all land in the
                                same inbox, and a student reads them.
                            </p>

                            <a
                                href="mailto:satduel@gmail.com"
                                className={`mt-6 inline-flex items-center gap-2.5 px-4 py-3 text-sm font-bold text-[var(--sd-body)] no-underline hover:text-[var(--sd-text)] ${PANEL}`}
                            >
                                <Mail className="size-4 text-[var(--sd-violet-lbl)]"/> satduel@gmail.com
                            </a>

                            <a
                                href={DISCORD_INVITE}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 flex items-center gap-3 rounded-[20px] border border-[rgba(88,101,242,0.38)] bg-[var(--sd-blurple-wash)] px-4 py-3 no-underline transition-colors hover:border-[rgba(88,101,242,0.6)]"
                            >
                                <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[var(--sd-blurple)] text-white">
                                    <DiscordIcon className="size-[18px]"/>
                                </span>
                                <span className="min-w-0">
                                    <span className="block text-sm font-bold text-[var(--sd-text)]">Join the Discord</span>
                                    <span className="block text-[13px] text-[var(--sd-mut)]">Find duel partners, ask questions, catch the offers.</span>
                                </span>
                            </a>
                        </div>

                        <div className={`p-6 sm:p-7 ${PANEL}`}>
                            {status && <div className="mb-5"><Alert type={status.type}>{status.text}</Alert></div>}

                            <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <label className="block">
                                    <span className="mb-1.5 block text-sm font-semibold text-[var(--sd-body)]">Name</span>
                                    <Input name="name" placeholder="Your name" required/>
                                </label>
                                <label className="block">
                                    <span className="mb-1.5 block text-sm font-semibold text-[var(--sd-body)]">Email</span>
                                    <Input name="email" type="email" placeholder="you@example.com" required/>
                                </label>
                                <label className="block">
                                    <span className="mb-1.5 block text-sm font-semibold text-[var(--sd-body)]">Message</span>
                                    <textarea
                                        name="message"
                                        rows={5}
                                        placeholder="What should we know?"
                                        required
                                        className="w-full resize-y rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-[15px] text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-primary-500"
                                    />
                                </label>
                                <Cta solid type="submit" loading={sending} className="mt-1 px-5 py-3.5 text-[15px]">
                                    Send message <Send className="size-4"/>
                                </Cta>
                            </form>
                        </div>
                    </div>
                </section>

                {/* faq */}
                <section id="faq" className="pb-4 pt-16 sm:pt-18">
                    <Eyebrow>QUICK ANSWERS</Eyebrow>
                    <h2 className="sd-display m-0 mt-3.5 text-[32px] font-bold tracking-[-0.02em] text-[var(--sd-text)]">
                        Before you write in
                    </h2>

                    <div className="mt-7 grid gap-5 sm:grid-cols-2 sm:gap-x-12">
                        {FAQS.map((faq) => (
                            <div key={faq.question}>
                                <p className="m-0 text-[15.5px] font-bold text-[var(--sd-text)]">{faq.question}</p>
                                <p className="m-0 mt-2 text-[14.5px] leading-relaxed text-[var(--sd-mut)]">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </PageContainer>

            {/* closing */}
            <section className="mt-16 border-t border-[var(--sd-line)] bg-[var(--sd-bg2)] sm:mt-18">
                <PageContainer className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                    <div>
                        <p className="sd-display m-0 text-[22px] font-bold tracking-[-0.01em] text-[var(--sd-text)]">
                            Nobody wants to practice alone.
                        </p>
                        <p className="m-0 mt-1.5 text-[14.5px] text-[var(--sd-mut)]">
                            Make an account, send a room code to your group chat, and see what happens.
                        </p>
                    </div>
                    <div className="flex shrink-0 gap-3">
                        <Cta to="/pricing" className="px-[22px] py-3.5 text-[15px]">See pricing</Cta>
                        <Cta solid to="/register" className="px-[22px] py-3.5 text-[15px]">
                            Start practicing <ArrowRight className="size-[17px]"/>
                        </Cta>
                    </div>
                </PageContainer>
            </section>
        </div>
    );
}

export default AboutPage;
