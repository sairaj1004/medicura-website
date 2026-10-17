# MediCura World website — implementation plan

## Scope

Build a responsive, frontend-only medical admissions guidance website for **MediCura World**, using the user's supplied circular logo and the reference site's complete page and feature coverage. Retain the reference's major information architecture and interactions across separate URLs rather than collapsing the experience into one long page. Use original copy and MediCura branding.

Pages and experiences:

- `/`: MBBS-in-India hero; featured-college area; colleges, states and seats figures; MBBS in India, MBBS abroad and MD/MS career pathways; counseling calls to action; company introduction; experience and achievement indicators; guidance services and recognition; sample featured colleges; student testimonials; departure stories; FAQs; and the shared footer.
- The homepage also presents a global destination directory for Russia, Kazakhstan, Georgia, Bangladesh, Uzbekistan, Nepal and Tajikistan, with one unique, country-specific landscape photo on each card and reference-style sample university counts. These and other unverified business figures are clearly identified as placeholders.
- `/about`: company story, milestones, approach/trust indicators, sample testimonials and counseling CTA.
- `/colleges/mbbs-india`: a college directory with sample details, text search, state filter, empty state and counseling CTA.
- `/colleges/mbbs-abroad` and `/colleges/md-ms`: dedicated guidance pages for international MBBS and postgraduate medical pathways. `/services/mbbs-india`, `/services/mbbs-abroad` and `/services/md-ms` remain as matching pathway aliases.
- `/neet-predictor`: score input out of 720, category selector, local indicative comparison, qualifying-band information and rank examples, explicit non-guarantee language and counseling CTA.
- `/blog`: 22 sample articles, category filters, search and three pages of results; `/blog/:slug` displays a sample article detail view.
- `/contact`: sample contact details and a form for full name, phone, email, service interest and optional NEET score. Validate in the browser and show a local success state; do not transmit or persist form data.
- `/privacy`, `/terms` and `/site-map`: supporting pages with useful links and visibly identified draft policy text.

Interactive elements include shared navigation and mobile menu, plus an accessible Updates dropdown containing the existing Blog, About and Contact destinations; About and Contact remain available as pages but are removed from the top-level links. Also include college search/state filters, blog filters/search/pagination, predictor form, FAQ category controls and accordion, testimonial/departure carousel buttons, contact form validation, and an accessible floating MediCura demo guide with canned client-side answers. The demo guide states that no live assistant service is connected. Nothing requires a backend, database, authentication, APIs, analytics, persistent personal-data storage or real inquiry submission.

Use the reference for content coverage and functional patterns, not its brand identity or unverified company claims. The reference's stats, contact details, reviews and awards must not be presented as verified MediCura facts; they are marked as sample placeholders to replace. Admissions figures and cutoff tables are labeled as reference/sample values and must be checked against current official sources. The company name is read as “MediCura World” from the user-provided logo.

## Design

- **Design movement:** Contemporary medical-education editorial design, pairing the clarity of a university prospectus with a friendly counseling brand.
- **Core principles:** Calm credibility; clear next steps; easy-to-scan information; welcoming rather than clinical.
- **Color philosophy:** Deep blue anchors trust and expertise; the logo's vivid green signals progress and opportunity; warm white and pale blue-gray keep long sections comfortable to read. Green is used for action and progress, not oversized blocks.
- **Layout paradigm:** Asymmetric wide editorial layout with a split hero, staggered statistic tiles, full-width story bands and alternating section backgrounds rather than a monotonous centered grid.
- **Signature elements:** Circular/ring motif inspired by the logo; fine green rules and progress marks; compact pill labels for pathways, categories and locations.
- **Interaction philosophy:** Low-friction controls with clear selected states, useful empty states and in-place results. Forms and the floating helper never imply live submission or AI.
- **Animation:** Restrained short fades and slight positional transitions for navigation, cards, accordions and result reveals. Respect reduced-motion preferences; no continuous decorative motion.
- **Typography system:** Preserve the font pairings and scale from the user's latest stylesheet (DM Sans/Manrope with its editorial display fallback), including a readable 16px body baseline, bold headings, compact navigation, and smaller supporting labels; do not redesign typography as part of this country-photo/navigation change.
- **Brand essence:** “Practical, personal guidance for aspiring doctors choosing their next step.” Personality: reassuring, knowledgeable, ambitious.
- **Brand voice:** Clear, supportive and action-oriented. Examples: “Find the medical pathway that fits your goals.” “Bring your NEET questions—we’ll help make the next step clearer.”
- **Wordmark and logo:** Use the supplied circular MediCura World logo as the primary mark, paired with a custom-styled wordmark and a small “MEDICAL ADMISSIONS GUIDANCE” descriptor.
- **Signature brand color:** The deep blue in the supplied logo, supported by its vivid green.

## Implementation and serving

Use semantic HTML, CSS and browser JavaScript in a lightweight static application. A browser-side route renderer selects pages from `window.location.pathname`, including the `/blog/:slug` pattern; the shared header/footer and structured sample data are reused. A minimal Node standard-library static preview server serves frontend files on the configured port (3000) and returns the application shell for deep links. It is a static preview server, not a product backend. Search, filters, predictor, helper widget and forms run locally and do not transmit or persist personal data. Keep replaceable company facts and sample datasets easy to edit.

Keep browser-facing URLs relative. Serve a static `/manus-routes.json` that declares all implemented page routes and the dynamic blog article pattern. Do not enable server-side product features or a database. This is a preview handoff; publication is not part of this request.

## Project structure

```text
/home/ubuntu/medicura/
├── plan.md                  # Agreed scope and design
├── TODO.md                  # Outcome checklist
├── index.html               # Shared application shell and metadata
├── app.js                   # Route rendering, page data and browser interactions
├── styles.css               # Responsive design system and page/component styling
├── server.js                # Minimal static preview server with deep-link fallback
├── manus-routes.json        # Static declaration of page routes
└── assets/
    └── medicura-logo.png    # User-supplied company logo
```
