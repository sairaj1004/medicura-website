# TODO — MediCura World frontend

## Brand, routes and frontend-only boundary
- [x] Use the supplied MediCura World logo and its blue/green/white identity; do not use Future Mind Educare branding or claim that this is that company's site.
- [x] Provide working routes for Home, About, MBBS India college directory, MBBS abroad, MD/MS, NEET Predictor, Blog, Contact, Privacy, Terms and Site Map. Preserve `/colleges/mbbs-abroad`, `/colleges/md-ms`, relevant `/services/...` aliases and `/blog/:slug` article detail URLs.
- [x] Provide consistent shared navigation and a responsive mobile menu, with the user's logo/wordmark, pathway links and counseling call to action.
- [ ] Remove About and Contact as top-level navigation links and put both existing pages under an accessible, responsive Updates dropdown together with the Blog/Articles link; keep About/Contact page content and footer links available.
- [x] Preserve the current user-supplied stylesheet's font pairings and text sizing while implementing this navigation and card update.
- [x] Keep the product frontend-only: no backend, database, authentication, external API, persistent personal-data storage or actual form/chat submission.
- [x] Clearly mark company figures, awards, university counts, college data, testimonials, articles and contact details as sample placeholders where unverified; include official-source verification caveats for admissions/cutoff material.

## Homepage
- [x] Show an MBBS-in-India medical admissions hero, featured-college area, colleges/states/seats indicators, and counseling CTA.
- [x] Show MBBS Abroad, MBBS India and MD/MS pathways, plus a counseling prompt.
- [x] Show a MediCura introduction, experience/achievement metrics, guidance services and placeholder awards/recognition.
- [x] Show the global study-destination cards for Russia (8), Kazakhstan (6), Georgia (15), Bangladesh (50), Uzbekistan (10), Nepal (22) and Tajikistan (3) as clearly marked sample/reference figures.
- [ ] Give each of those seven destination cards its own accurate country-related landscape photo, descriptive alt text and local project asset; do not reuse the same image for multiple countries, and retain the designed color fallback if an image fails.
- [x] Include featured medical colleges, student testimonials/reviews, student-departure stories and the FAQ experience.
- [x] Include footer navigation, college-state links, contact area, disclaimer and counseling CTA.

## About and pathway pages
- [x] `/about` presents the company story, milestones, trust/achievement indicators, testimonial highlights and counseling CTA using MediCura branding and sample labels for unverified facts.
- [x] Provide dedicated `/colleges/mbbs-abroad` and `/colleges/md-ms` guidance pages as well as `/colleges/mbbs-india`; retain working `/services/mbbs-india`, `/services/mbbs-abroad` and `/services/md-ms` aliases.

## Colleges directory
- [x] Provide sample MBBS college cards with basic details, text search and state filtering that work in the browser.
- [x] Provide an empty-results state and a route to counseling.

## NEET Predictor
- [x] Accept a score out of 720 and a category selection, then show a browser-generated indicative comparison result.
- [x] Clearly state that the result is a sample estimate, not an official allotment or admission guarantee; include category cutoff information, example closing ranks and a counselor CTA.

## Blog
- [x] Provide 22 sample article cards, category filtering, search and pagination across three pages; provide a working sample article detail view at `/blog/:slug`.
- [x] Make blog navigation work from both the list and shared navigation; clearly mark sample articles as placeholder content.

## Contact, FAQs and helper
- [x] Provide contact details area and form fields for full name, phone, email, service interest and optional NEET score; validate locally and show a success state without transmitting data.
- [x] Provide FAQ categories/accordion and working in-page controls.
- [x] Provide a floating, accessible client-side demo guide with canned answers; state that it is not connected to a live AI/messaging service and include a route to contact.
- [x] Provide Privacy, Terms and Site Map pages with navigation back to the main sections and clear frontend-draft context for policies.

## Assets, route declaration and preview
- [x] Use the supplied logo, a branded hero visual area with a graceful CSS fallback, and responsive desktop/mobile styling.
- [x] Serve `/manus-routes.json` as a static JSON manifest listing the page routes and `/blog/:slug` dynamic pattern.
- [x] Serve the frontend through the configured preview and support direct access to declared deep links.
