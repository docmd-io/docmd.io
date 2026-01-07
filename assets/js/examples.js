// assets/js/examples.js

/* 
 * Configuration for the Live Typing Preview
 * 
 * Each scenario object contains:
 * - code: Array of line objects { t: text, c: class }
 *   Classes: 'kw' (keyword), 'str' (string), 'cl' (content/plain), 'cm' (comment)
 * - html: String containing the simulated rendered output
 */

window.DOCMD_EXAMPLES = [
    {
        name: 'Callout',
        code: [
            { t: '::: callout tip', c: 'kw' },
            { t: 'Documentation made simple.', c: 'cl' },
            { t: ':::', c: 'kw' },
            { t: '', c: 'kw' },
            { t: '::: callout warning', c: 'kw' },
            { t: 'Attention is all you need.', c: 'cl' },
            { t: ':::', c: 'kw' }
        ],
        html: `
            <h3 class="doc-h1" style="margin-top:0">Callouts</h3>
            <div style="background:var(--bg-surface); border-left:4px solid #10b981; padding:16px; border-radius:4px; color:var(--text-main); margin-top:20px;">
                <strong style="color:#10b981; display:flex; align-items:center; gap:6px; margin-bottom:4px">
                    💡 Tip
                </strong>
                Documentation made simple.
            </div>
            <div style="background:var(--bg-surface); border-left:4px solid #f59e0b; padding:16px; border-radius:4px; color:var(--text-main); margin-top:20px;">
                <strong style="color:#f59e0b; display:flex; align-items:center; gap:6px; margin-bottom:4px">
                    ⚠️ Warning
                </strong>
                Attention is all you need.
            </div>
        `
    },
    {
        name: 'Changelog',
        code: [
            { t: '::: changelog', c: 'kw' },
            { t: '== v1.0.0', c: 'str' },
            { t: 'Initial Release.', c: 'cl' },
            { t: '', c: 'kw' },
            { t: '== v1.0.1', c: 'str' },
            { t: 'Bug Fix Patch.', c: 'cl' },
            { t: '', c: 'kw' },
            { t: '== v1.5.0', c: 'str' },
            { t: 'New Stable feature Addition.', c: 'cl' },
            { t: ':::', c: 'kw' }
        ],
        html: `
            <h3 class="doc-h1" style="margin-top:0">Changelog</h3>
            <div style="display:block; gap:16px; margin-top:20px;">
                <div style="font-family:monospace; color:var(--text-muted); padding-top:4px; font-size:0.85rem;">v1.0.0</div>
                <div style="border-left:2px solid var(--border-default); padding-left:16px; padding-bottom:10px;">
                    <strong style="display:block; margin-bottom:4px; font-size:0.9rem;">App Launch</strong>
                    <p style="margin:0; color:var(--text-muted); font-size:0.9rem;">Initial Release.</p>
                </div>
                <div style="font-family:monospace; color:var(--text-muted); padding-top:4px; font-size:0.85rem;">v1.0.1</div>
                <div style="border-left:2px solid var(--border-default); padding-left:16px; padding-bottom:10px;">
                    <strong style="display:block; margin-bottom:4px; font-size:0.9rem;">New Feature Drop</strong>
                    <p style="margin:0; color:var(--text-muted); font-size:0.9rem;">Bug Fix Patch.</p>
                </div>
                <div style="font-family:monospace; color:var(--text-muted); padding-top:4px; font-size:0.85rem;">v1.5.0</div>
                <div style="border-left:2px solid var(--border-default); padding-left:16px; padding-bottom:10px;">
                    <strong style="display:block; margin-bottom:4px; font-size:0.9rem;">Latest Stable Release</strong>
                    <p style="margin:0; color:var(--text-muted); font-size:0.9rem;">New Stable Feature Addition.</p>
                </div>
            </div>
        `
    },
    {
        name: 'Tabs',
        code: [
            { t: '::: tabs', c: 'kw' },
            { t: '== tab "NPM"', c: 'str' },
            { t: 'npm i docmd', c: 'cl' },
            { t: '', c: 'kw' },
            { t: '== tab "Yarn"', c: 'str' },
            { t: 'yarn add docmd', c: 'cl' },
            { t: ':::', c: 'kw' }
        ],
        html: `
            <h3 class="doc-h1" style="margin-top:0">Tabs</h3>
            <div style="border:1px solid var(--border-default); border-radius:8px; margin-top:20px; overflow:hidden;">
                <div style="display:flex; background:var(--bg-surface); border-bottom:1px solid var(--border-default);">
                    <div style="padding:8px 16px; border-bottom:2px solid #2563eb; font-weight:600; font-size:0.85rem; color:#2563eb;">NPM</div>
                    <div style="padding:8px 16px; color:var(--text-muted); font-size:0.85rem;">Yarn</div>
                </div>
                <div style="padding:16px; font-family:monospace; font-size:0.85rem; color:var(--text-main);">npm i docmd</div>
            </div>
        `
    },
    {
        name: 'Steps',
        code: [
            { t: '::: steps', c: 'kw' },
            { t: '1. Install CLI', c: 'cl' },
            { t: '   Install the command line tool.', c: 'cl' },
            { t: '2. Run Init', c: 'cl' },
            { t: '3. Test Dev', c: 'cl' },
            { t: '4. Build App', c: 'cl' },
            { t: '5. Launch Live', c: 'cl' },
            { t: '6. Deploy App', c: 'cl' },
            { t: ':::', c: 'kw' }
        ],
        html: `
            <h3 class="doc-h1" style="margin-top:0">Steps</h3>
            <div style="margin-top:24px; padding-left:12px; border-left:2px solid var(--border-default);">
                <div style="position:relative; padding-left:24px; margin-bottom:24px;">
                    <div style="position:absolute; left:-19px; top:0; width:12px; height:12px; border-radius:50%; background:#2563eb; border:2px solid var(--bg-canvas);"></div>
                    <span style="display:block; font-size:0.9rem;">
                        <strong>Install CLI</strong>
                        <br/>
                        Install the command line tool.
                    </span>
                </div>
                <div style="position:relative; padding-left:24px;">
                    <div style="position:absolute; left:-19px; top:0; width:12px; height:12px; border-radius:50%; background:var(--bg-surface); border:2px solid var(--text-muted);"></div>
                    <strong style="display:block; font-size:0.9rem;">Run Init</strong>
                </div>
                <div style="position:relative; padding-left:24px;">
                    <div style="position:absolute; left:-19px; top:0; width:12px; height:12px; border-radius:50%; background:var(--bg-surface); border:2px solid var(--text-muted);"></div>
                    <strong style="display:block; font-size:0.9rem;">Test Dev</strong>
                </div>
                <div style="position:relative; padding-left:24px;">
                    <div style="position:absolute; left:-19px; top:0; width:12px; height:12px; border-radius:50%; background:var(--bg-surface); border:2px solid var(--text-muted);"></div>
                    <strong style="display:block; font-size:0.9rem;">Build App</strong>
                </div>
                <div style="position:relative; padding-left:24px;">
                    <div style="position:absolute; left:-19px; top:0; width:12px; height:12px; border-radius:50%; background:var(--bg-surface); border:2px solid var(--text-muted);"></div>
                    <strong style="display:block; font-size:0.9rem;">Launch Live</strong>
                </div>
                <div style="position:relative; padding-left:24px;">
                    <div style="position:absolute; left:-19px; top:0; width:12px; height:12px; border-radius:50%; background:var(--bg-surface); border:2px solid var(--text-muted);"></div>
                    <strong style="display:block; font-size:0.9rem;">Deploy App</strong>
                </div>
            </div>
        `
    }
];