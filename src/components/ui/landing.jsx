/**
 * Landing-zone primitives, for pages inside `.sd-landing` (see the two token
 * systems in CLAUDE.md). The kit in ./index.jsx is the app-shell palette —
 * slate surfaces, chunky 3D buttons — which reads wrong against the arena
 * theme, so these use --sd-* tokens instead.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import {Spinner} from './index';

export const EYEBROW = 'sd-mono m-0 text-[11px] font-bold tracking-[0.12em]';
export const PANEL = 'rounded-[20px] border border-[var(--sd-line2)] bg-[var(--sd-panel)]';

// Both variants carry a 1.5px border so solid and outline share a box height
// wherever they sit side by side.
const CTA_BASE = 'flex items-center justify-center gap-2 rounded-xl border-[1.5px] font-bold no-underline transition-colors';
const CTA_SOLID = `${CTA_BASE} border-transparent bg-[#7C5CF0] text-white shadow-[0_6px_20px_rgba(124,92,240,0.4)] hover:bg-[#9678FF]`;
const CTA_OUTLINE = `${CTA_BASE} border-[var(--sd-line3)] text-[var(--sd-body)] hover:border-[#A78BFA] hover:text-[var(--sd-text)]`;

export function Eyebrow({tone = 'violet', className = '', children}) {
    const color = tone === 'dim' ? 'text-[var(--sd-dim)]' : 'text-[var(--sd-violet-lbl)]';
    return <p className={`${EYEBROW} ${color} ${className}`}>{children}</p>;
}

export function Cta({solid = false, to, href, onClick, type = 'button', loading = false, className = '', children}) {
    const classes = `${solid ? CTA_SOLID : CTA_OUTLINE} ${className}`;
    const content = (
        <>
            {loading && <Spinner className="size-4 border-2"/>}
            {children}
        </>
    );

    if (to) return <Link to={to} className={classes}>{content}</Link>;
    if (href) return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{content}</a>;
    return (
        <button type={type} onClick={onClick} disabled={loading} className={`${classes} cursor-pointer disabled:opacity-60`}>
            {content}
        </button>
    );
}
