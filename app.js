const heroImage = "sample14.png";

const logoImage = "/assets/medicura-logo.png";

const root = document.getElementById("app");

const navItems = [

  ["Home", "/"],

  ["MBBS India", "/colleges/mbbs-india"],

  ["MBBS Abroad", "/colleges/mbbs-abroad"],

  ["MD / MS", "/colleges/md-ms"],

  ["Updates", "/blog"],

  ["NEET Predictor", "/neet-predictor"],

];

const colleges = [

  { name: "All India Institute of Medical Sciences", short: "AIIMS New Delhi", city: "New Delhi", state: "Delhi", type: "Government", tag: "Featured" },

  { name: "VMMC & Safdarjung Hospital", short: "VMMC Delhi", city: "New Delhi", state: "Delhi", type: "Government", tag: "Public institute" },

  { name: "Maulana Azad Medical College", short: "MAMC Delhi", city: "New Delhi", state: "Delhi", type: "Government", tag: "Public institute" },

  { name: "Seth GS Medical College", short: "Seth GS Mumbai", city: "Mumbai", state: "Maharashtra", type: "Government", tag: "Public institute" },

  { name: "King George's Medical University", short: "KGMU Lucknow", city: "Lucknow", state: "Uttar Pradesh", type: "Government", tag: "Public institute" },

  { name: "Institute of Medical Sciences, BHU", short: "IMS BHU Varanasi", city: "Varanasi", state: "Uttar Pradesh", type: "Government", tag: "Public institute" },

  { name: "Madras Medical College", short: "MMC Chennai", city: "Chennai", state: "Tamil Nadu", type: "Government", tag: "Public institute" },

  { name: "Bangalore Medical College and Research Institute", short: "BMCRI Bengaluru", city: "Bengaluru", state: "Karnataka", type: "Government", tag: "Public institute" },

  { name: "Government Medical College, Thiruvananthapuram", short: "GMC Thiruvananthapuram", city: "Thiruvananthapuram", state: "Kerala", type: "Government", tag: "Public institute" },

  { name: "Gajra Raja Medical College", short: "GRMC Gwalior", city: "Gwalior", state: "Madhya Pradesh", type: "Government", tag: "Public institute" },

  { name: "Government Medical College, Jaipur", short: "GMC Jaipur", city: "Jaipur", state: "Rajasthan", type: "Government", tag: "Public institute" },

  { name: "Medical College Kolkata", short: "Medical College Kolkata", city: "Kolkata", state: "West Bengal", type: "Government", tag: "Public institute" },

];

const directoryColleges = window.MEDICURA_COLLEGE_PROFILES || [];
function profileForSlug(slug) { return directoryColleges.find((profile) => profile.slug === slug); }
const collegeSlideSize = 10;
let currentCollegeSlide = 1;

const destinations = [

  { name: "Russia", count: 8, code: "RU" },

  { name: "Kazakhstan", count: 6, code: "KZ" },

  { name: "Georgia", count: 15, code: "GE" },

  { name: "Bangladesh", count: 50, code: "BD" },

  { name: "Uzbekistan", count: 10, code: "UZ" },

  { name: "Nepal", count: 22, code: "NP" },

  { name: "Tajikistan", count: 3, code: "TJ" },

];

const articles = [

  { slug: "neet-2026-counselling-guide", title: "NEET counselling: a clear guide to your next steps", category: "Counselling", date: "Admissions guide", read: "6 min read", excerpt: "Understand the counselling journey, the choices ahead and the questions worth asking before you lock a preference." },

  { slug: "mbbs-india-college-shortlist", title: "How to build an MBBS college shortlist in India", category: "MBBS India", date: "College planning", read: "5 min read", excerpt: "A practical framework for comparing location, learning environment, recognition and the details that matter to you." },

  { slug: "mbbs-abroad-questions", title: "Considering MBBS abroad? Start with these questions", category: "Study Abroad", date: "Study abroad", read: "7 min read", excerpt: "Explore how to assess a university and what to verify with official sources before making a decision." },

  { slug: "neet-document-checklist", title: "Documents to keep ready for medical admissions", category: "Admissions", date: "Application prep", read: "4 min read", excerpt: "An editable checklist of commonly requested records for students and families to review against official instructions." },

  { slug: "md-ms-pathway", title: "From MBBS to MD/MS: mapping the postgraduate pathway", category: "PG Medical", date: "Career pathways", read: "6 min read", excerpt: "Get familiar with postgraduate medical study choices, planning questions and where to find current requirements." },

  { slug: "neet-score-planning", title: "How to think about a NEET score without over-reading cut-offs", category: "NEET Exam", date: "Exam planning", read: "5 min read", excerpt: "Cut-offs shift across years and rounds. Learn how to use historical information as one input—not a promise." },

  { slug: "medical-college-visit", title: "What to look for when comparing medical colleges", category: "College Guide", date: "Decision guide", read: "5 min read", excerpt: "A student's checklist for campus, teaching, facilities, support and the questions to take to an official source." },

  { slug: "admission-budget-planning", title: "Planning the cost of a medical education", category: "Planning", date: "Family guide", read: "4 min read", excerpt: "Build a conversation around tuition, living costs, travel and verified fee schedules before choosing a path." },

  { slug: "student-predeparture", title: "Preparing for a new campus and a new country", category: "Study Abroad", date: "Student life", read: "5 min read", excerpt: "Practical areas to plan before departure, from documents and travel to staying connected with family." },

  { slug: "neet-answer-key-guide", title: "How to review a NEET answer key and response sheet", category: "NEET Exam", date: "Exam guide", read: "5 min read", excerpt: "Understand what to compare in an answer key and where to confirm the official update." },

  { slug: "neet-counselling-choice-filling", title: "Choice filling: questions to ask before locking preferences", category: "Counselling", date: "Choice planning", read: "7 min read", excerpt: "Build a thoughtful order of preferences and check the current rules for your counselling authority." },

  { slug: "mbbs-fees-checklist", title: "A family checklist for comparing MBBS fees", category: "Planning", date: "Family guide", read: "4 min read", excerpt: "Compare official fee schedules, living costs and other published charges before deciding." },

  { slug: "nmc-recognition-questions", title: "Questions to verify about a medical university", category: "Study Abroad", date: "University guide", read: "6 min read", excerpt: "Know which recognition, licensing and course details to confirm with official authorities." },

  { slug: "studying-medicine-russia", title: "Studying medicine in Russia: what to check first", category: "Study Abroad", date: "Destination guide", read: "6 min read", excerpt: "Review language, curriculum, campus location and current requirements from official sources." },

  { slug: "mbbs-georgia-student-guide", title: "A student guide to comparing MBBS options in Georgia", category: "Study Abroad", date: "Destination guide", read: "5 min read", excerpt: "Create a checklist for comparing universities and the practical details of student life." },

  { slug: "neet-pg-md-ms-selection", title: "Planning your next step after MBBS", category: "PG Medical", date: "Career pathways", read: "6 min read", excerpt: "Explore postgraduate interests and confirm current entrance and counselling requirements." },

  { slug: "college-ranking-priorities", title: "How to use college rankings without relying on one number", category: "College Guide", date: "Decision guide", read: "5 min read", excerpt: "Combine published rankings with course, location, facilities and your own priorities." },

  { slug: "state-quota-basics", title: "State quota and All India Quota: a starting overview", category: "Counselling", date: "Admissions guide", read: "6 min read", excerpt: "Learn what to verify about eligibility and counselling routes for your chosen state." },

  { slug: "neet-documents-counselling", title: "Get organized for counselling document verification", category: "Admissions", date: "Application prep", read: "4 min read", excerpt: "Keep official checklists and original documents organized for the process that applies to you." },

  { slug: "medical-college-campus-facilities", title: "What campus facilities should students compare?", category: "College Guide", date: "Campus guide", read: "5 min read", excerpt: "Use a consistent checklist when reviewing teaching spaces, hospitals, housing and student support." },

  { slug: "scholarship-funding-questions", title: "Scholarship and funding questions to ask early", category: "Planning", date: "Family guide", read: "4 min read", excerpt: "Confirm eligibility, renewal rules, deadlines and terms with the scholarship provider." },

  { slug: "family-admission-timeline", title: "A family's medical-admissions planning timeline", category: "Planning", date: "Planning guide", read: "5 min read", excerpt: "Map key milestones while leaving room for official updates and counselling changes." },

];

const testimonials = [

  { name: "A. Student", path: "MBBS applicant · sample story", quote: "The guidance helped me understand the steps in the admission process and the questions I needed to ask." },

  { name: "R. Student", path: "Medical student · sample story", quote: "I appreciated having someone explain my options clearly while my family and I compared pathways." },

  { name: "S. Student", path: "MBBS applicant · sample story", quote: "Having a checklist for documents and deadlines made a complicated process feel more manageable." },

];

const departures = [

  { country: "Georgia", city: "Tbilisi", route: "A new campus, a new chapter", code: "GE", tone: "mint" },

  { country: "Philippines", city: "Manila", route: "The first flight toward a medical dream", code: "PH", tone: "blue" },

  { country: "Kazakhstan", city: "Almaty", route: "Ready to begin the next step", code: "KZ", tone: "sand" },

  { country: "Russia", city: "Moscow", route: "Medical students bound for Russia", code: "RU", tone: "coral" },

];

const faqs = [

  { category: "General", question: "What is NEET UG?", answer: "NEET UG is India's national entrance examination used for admission to undergraduate medical programmes covered by the current official rules. Always confirm eligibility and application details with the exam authority." },

  { category: "Eligibility", question: "What are the basic eligibility requirements?", answer: "Requirements depend on the course, category and current admission rules. Students should verify age, qualifying subjects, marks and other conditions in the latest official information bulletin." },

  { category: "Exam Rules", question: "How many times can I attempt NEET UG?", answer: "Attempt limits and exam rules can change. Check the latest NTA information bulletin for the current cycle before making an application decision." },

  { category: "Exam Pattern", question: "Where can I find the current exam pattern?", answer: "The latest official information bulletin is the reliable source for the format, syllabus, marking scheme and examination dates." },

  { category: "Admission Process", question: "How are MBBS seats allotted?", answer: "Seat allocation happens through the applicable counselling authorities and rounds. The process may vary by quota, institution and state. Confirm dates, eligibility and choices with the relevant official counselling portal." },

  { category: "Documentation", question: "Which documents may I need for admission?", answer: "Commonly requested records can include academic mark sheets, NEET details, identity documents, photographs and applicable category or domicile certificates. Follow the official checklist for your counselling process." },

  { category: "Admission Process", question: "Can I study MBBS in India without NEET?", answer: "NEET qualification is required for most regulated MBBS admission routes in India. Check current rules with the relevant official authority and institution." },

  { category: "Scoring", question: "What NEET score will get me a seat?", answer: "A qualifying score is not a seat guarantee. Outcomes depend on category, rank, quota, choices, counselling round, state rules and seat availability." },

];

const cutoffRows = [

  ["General / UR", "50th", "715–213", "686–144", "9,96,935", 213],

  ["EWS", "50th", "715–213", "686–144", "9,96,935", 213],

  ["OBC-NCL", "40th", "212–177", "143–113", "81,111", 177],

  ["SC", "40th", "212–177", "143–113", "29,947", 177],

  ["ST", "40th", "212–177", "143–113", "12,452", 177],

  ["UR / EWS – PwBD", "45th", "212–194", "143–127", "480", 194],

  ["OBC – PwBD", "40th", "193–177", "126–113", "185", 177],

  ["SC – PwBD", "40th", "193–177", "126–113", "64", 177],

  ["ST – PwBD", "40th", "191–178", "126–113", "11", 178],

];

const categories = [

  "General / UR", "EWS", "OBC-NCL", "SC (Scheduled Caste)", "ST (Scheduled Tribe)",

  "UR / EWS – PwBD", "OBC – PwBD", "SC – PwBD", "ST – PwBD",

];

const categoryThreshold = {

  "General / UR": 213,

  EWS: 213,

  "OBC-NCL": 177,

  "SC (Scheduled Caste)": 177,

  "ST (Scheduled Tribe)": 177,

  "UR / EWS – PwBD": 194,

  "OBC – PwBD": 177,

  "SC – PwBD": 177,

  "ST – PwBD": 178,

};

const sampleMetricNote = '<p class="sample-note">Sample figures and stories for this frontend preview. Replace with MediCura World’s verified information before publishing.</p>';

function esc(value) {

  return String(value ?? "").replace(/[&<>"']/g, (character) => ({

    "&": "&amp;",

    "<": "&lt;",

    ">": "&gt;",

    '"': "&quot;",

    "'": "&#39;",

  })[character]);

}

function arrow() {

  return '<span class="arrow" aria-hidden="true">↗</span>';

}

function buttonLink(label, href, kind = "primary") {

  return `<a class="button ${kind}" href="${href}">${esc(label)} ${arrow()}</a>`;

}

function eyebrow(text, extra = "") {

  return `<p class="eyebrow ${extra}"><span class="eyebrow-dot"></span>${esc(text)}</p>`;

}

/* ==========================================

   PART 2 — HEADER, FOOTER & DESTINATION CARDS

========================================== */

function header() {

  const links = navItems

    .map(([label, href]) => label === "Updates"

      ? `<div class="nav-dropdown">

          <button class="nav-link nav-dropdown-trigger" type="button" aria-label="Open Updates menu" aria-haspopup="true" aria-expanded="false" aria-controls="updates-menu">

            Updates <span class="nav-chevron" aria-hidden="true">⌄</span>

          </button>

          <div class="nav-dropdown-menu" id="updates-menu">

            <a href="/blog">Blog</a>

            <a href="/services/mbbs-india">NEET UG Packages</a>

            <a href="/services/mbbs-abroad">MBBS Abroad Packages</a>

            <a href="/contact">Contact Us</a>

          </div>

        </div>`

      : `<a href="${href}" class="nav-link">${esc(label)}</a>`

    )

    .join("");

  return `

    <div class="topline">

      <div class="container topline-inner">

        <span>Medical admissions guidance, made clearer</span>

        <a href="/contact">Talk with a counselor →</a>

      </div>

    </div>

    <header class="site-header">

      <div class="container header-inner">

        <a class="brand" href="/" aria-label="MediCura World home">

          <img class="brand-logo" src="${logoImage}" alt="MediCura World logo" />

          <span class="brand-copy">

            <strong>MediCura <em>World</em></strong>

            <small>MEDICAL ADMISSIONS GUIDANCE</small>

          </span>

        </a>

        <button class="menu-toggle" type="button"

          aria-label="Open navigation" aria-expanded="false">

          <span></span><span></span>

        </button>

        <nav class="main-nav" aria-label="Main navigation">

          ${links}

          <a class="button nav-cta" href="/contact">

            Free counselling ${arrow()}

          </a>

        </nav>

      </div>

    </header>

  `;

}

function footer() {

  return `

    <footer class="site-footer">

      <div class="footer-cta">

        <div class="container footer-cta-inner">

          <div>

            <span class="footer-kicker">YOUR NEXT STEP STARTS HERE</span>

            <h2>Make your medical career plan with clarity.</h2>

          </div>

          ${buttonLink("Get free counselling", "/contact", "button-light")}

        </div>

      </div>

      <div class="container footer-main">

        <div class="footer-brand-col">

          <a class="brand footer-brand" href="/">

            <img class="brand-logo" src="${logoImage}" alt="" />

            <span class="brand-copy">

              <strong>MediCura <em>World</em></strong>

              <small>MEDICAL ADMISSIONS GUIDANCE</small>

            </span>

          </a>

          <p>Supportive guidance for students exploring medical education in India and abroad.</p>

          <span class="footer-seal">A clearer path to medicine</span>

        </div>

        <div class="footer-col">

          <h3>Explore</h3>

          <a href="/about">About us</a>

          <a href="/colleges/mbbs-india">MBBS colleges</a>

          <a href="/neet-predictor">NEET predictor</a>

          <a href="/blog">Insights &amp; articles</a>

        </div>

        <div class="footer-col">

          <h3>Study pathways</h3>

          <a href="/services/mbbs-india">MBBS in India</a>

          <a href="/services/mbbs-abroad">MBBS abroad</a>

          <a href="/services/md-ms">MD / MS guidance</a>

          <a href="/contact">Talk to a counselor</a>

        </div>

        <div class="footer-col">

          <h3>Get in touch</h3>

          <p class="footer-contact"><a href="tel:+919226808967">+91 92268 08967</a></p>

          <a href="/contact">Contact page</a>

        </div>

      </div>

      <div class="container footer-disclaimer">

        <p>

          Admissions, eligibility, cut-offs and seat availability depend on

          current official rules. Verify details with the relevant authorities.

        </p>

        ${sampleMetricNote}

      </div>

      <div class="footer-bottom">

        <div class="container footer-bottom-inner">

          <span>© ${new Date().getFullYear()} MediCura World</span>

          <div>

            <a href="/privacy">Privacy</a>

            <a href="/terms">Terms</a>

            <a href="/site-map">Site map</a>

          </div>

          <span>Designed for future doctors</span>

        </div>

      </div>

    </footer>

  `;

}

function breadcrumb(items) {

  return `

    <div class="breadcrumb">

      <a href="/">Home</a>

      ${items.map(item =>

        `<span aria-hidden="true">/</span><span>${esc(item)}</span>`

      ).join("")}

    </div>

  `;

}

function pageHero(kicker, title, text, crumb, action = "") {

  return `

    <section class="page-hero">

      <div class="container page-hero-inner">

        ${breadcrumb([crumb])}

        <div class="page-hero-copy">

          ${eyebrow(kicker)}

          <h1>${title}</h1>

          <p>${text}</p>

          ${action}

        </div>

        <div class="page-hero-mark" aria-hidden="true">

          <span>MC</span><i></i>

        </div>

      </div>

    </section>

  `;

}

function coverageStrip() {

  const metrics = [

    ["296+", "college listings"],

    ["18", "states covered"],

    ["46,696", "MBBS seats"],

  ];

  return `

    <section class="coverage-strip">

      <div class="container">

        <div class="coverage-top">

          <span class="mini-index">MBBS IN INDIA · OVERVIEW</span>

          <span class="sample-chip">REFERENCE FIGURES · PLACEHOLDERS</span>

        </div>

        <div class="coverage-row">

          ${metrics.map(([value, label]) => `

            <div>

              <strong>${value}</strong>

              <span>${label}</span>

            </div>

          `).join("")}

        </div>

        <p>Replace these sample figures with current, verified directory data.</p>

      </div>

    </section>

  `;

}

function metricStrip() {

  const metrics = [

    ["5,000+", "students counselled"],

    ["15+", "countries explored"],

    ["100+", "university options"],

    ["95%", "visa support success"],

  ];

  return `

    <div class="metric-strip">

      <div class="container metric-row">

        ${metrics.map(([value, label]) => `

          <div class="metric">

            <strong>${value}</strong>

            <span>${label}</span>

          </div>

        `).join("")}

      </div>

      <div class="container">${sampleMetricNote}</div>

    </div>

  `;

}

function collegeCard(college, index = 0, featured = false) {

  return `

    <article class="college-card ${featured ? "college-featured" : ""}">

      <div class="college-card-top">

        <span class="college-icon">${String(index + 1).padStart(2, "0")}</span>

        <span class="status-pill">${esc(college.tag || college.type)}</span>

      </div>

      <div class="college-card-body">

        <span class="card-kicker">

          ${esc(college.type)} · ${esc(college.state)}

        </span>

        <h3>${esc(college.short || college.name)}</h3>

        <p>${esc(college.city)}, ${esc(college.state)}</p>

      </div>

      <div class="college-card-foot">

        <span>MBBS · sample directory</span>

        <a href="/contact">Ask about this college ${arrow()}</a>

      </div>

    </article>

  `;

}

function pathwayCard(number, title, text, href, tag) {

  const isImage = number.startsWith("/");

  return `

    <article class="pathway-card">

      <div class="pathway-top">

        <span class="pathway-number">

          ${

            isImage

              ? `<img src="${number}" alt="${esc(title)}" class="pathway-number-image">`

              : number

          }

        </span>

        <span class="pathway-tag">${esc(tag)}</span>

      </div>

      <div class="pathway-symbol" aria-hidden="true">

        ${

          isImage

            ? `<img src="${number}" alt="" class="pathway-symbol-image">`

            : number === "01" ? "IND" : number === "02" ? "INT" : "PG"

        }

      </div>

      <h3>${esc(title)}</h3>

      <p>${esc(text)}</p>

      <a href="${href}" class="text-link">Explore pathway ${arrow()}</a>

    </article>

  `;

}

/* ---------- DESTINATION IMAGE CARDS ---------- */

function destinationSection() {

  const imageNames = [

    "/assets/destinations/russia.webp",

    "/assets/destinations/kazakhstan.webp",

    "/assets/destinations/georgia.webp",

    "/assets/destinations/bangladesh.webp",

    "/assets/destinations/uzbekistan.webp",

    "/assets/destinations/nepal.webp",

    "/assets/destinations/tajikistan.webp",

  ];

  return `

    <section class="section destinations-section" id="destinations">

      <div class="container">

        <div class="section-heading">

          <div>

            ${eyebrow("GLOBAL MBBS DESTINATIONS")}

            <h2>Explore study<br /><span>destinations.</span></h2>

          </div>

          <div class="heading-side">

            <p>

              Explore international medical education destinations and

              compare university options. Verify recognition, eligibility

              and tuition through official sources.

            </p>

            ${buttonLink(

              "Explore MBBS abroad",

              "/colleges/mbbs-abroad",

              "button-outline"

            )}

          </div>

        </div>

        <div class="destination-grid">

          ${destinations.map((item, index) => `

            <a

              class="destination-card destination-tone-${index % 4}"

              href="/colleges/mbbs-abroad"

            >

              <img

                class="destination-photo destination-card-image"

                src="${imageNames[index]}"

                alt="${esc(item.name)} study destination"

                loading="lazy"

                onerror="this.style.display='none'; this.parentElement.classList.add('destination-image-missing')"

              />

              <span class="destination-image-shade"></span>

              <span class="destination-code">${esc(item.code)}</span>

              <span class="destination-card-name">

                ${esc(item.name)}

              </span>

              <span class="destination-count">

                ${item.count} sample universities

              </span>

              <span class="destination-arrow">

                View ${arrow()}

              </span>

            </a>

          `).join("")}

        </div>

        <p class="data-caveat">

          Reference-layout counts only. Verify current institution listings,

          recognition and eligibility through official sources.

        </p>

      </div>

    </section>

  `;

}

/* ---------- FAQ SECTION ---------- */

function faqBlock(limit = Infinity) {

  const selected = faqs.slice(0, limit);

  const groups = [

    "All questions", "General", "Eligibility", "Exam Rules",

    "Exam Pattern", "Admission Process", "Documentation", "Scoring",

  ];

  return `

    <div class="faq-layout">

      <div class="faq-aside">

        <span class="mini-index">GUIDANCE DESK · FAQ</span>

        <h3>Good questions deserve clear answers.</h3>

        <p>Start with the basics. Check the latest official information for rules that change.</p>

        ${buttonLink("Talk to a counselor", "/contact", "button-outline")}

      </div>

      <div class="faq-main">

        <div class="faq-filters" role="group" aria-label="Filter questions by topic">

          ${groups.map((group, index) => `

            <button

              type="button"

              class="faq-filter ${index === 0 ? "active" : ""}"

              data-faq-category="${esc(group)}"

            >${esc(group)}</button>

          `).join("")}

        </div>

        <div class="faq-list">

          ${selected.map((item, index) => `

            <details

              class="faq-item"

              data-faq-item

              data-category="${esc(item.category)}"

              ${index === 0 ? "open" : ""}

            >

              <summary>

                <span class="faq-count">${String(index + 1).padStart(2, "0")}</span>

                <span>${esc(item.question)}</span>

                <span class="faq-plus" aria-hidden="true">+</span>

              </summary>

              <div class="faq-answer"><p>${esc(item.answer)}</p></div>

            </details>

          `).join("")}

        </div>

        <p class="faq-empty" hidden>No questions in this category yet.</p>

      </div>

    </div>

  `;

}

/* ---------- TESTIMONIALS & STUDENT JOURNEYS ---------- */

function testimonialCards(offset = 0) {

  const ordered = testimonials.map(

    (_, index) => testimonials[(index + offset) % testimonials.length]

  );

  return ordered.map(item => `

    <article class="quote-card">

      <div class="quote-stars" aria-label="Sample rating">★★★★★</div>

      <span class="quote-mark">“</span>

      <blockquote>${esc(item.quote)}</blockquote>

      <div class="quote-person">

        <span class="avatar-initial">${esc(item.name.slice(0, 1))}</span>

        <div>

          <strong>${esc(item.name)}</strong>

          <small>${esc(item.path)}</small>

        </div>

      </div>

    </article>

  `).join("");

}

function departureCards(offset = 0) {

  const ordered = departures.map(

    (_, index) => departures[(index + offset) % departures.length]

  );

  return ordered.map(item => `

    <article class="departure-card tone-${item.tone}">

      <div class="departure-art">

        <span class="departure-code">${esc(item.code)}</span>

        <span class="departure-route">${esc(item.route)}</span>

        <span class="departure-plane" aria-hidden="true">✈</span>

      </div>

      <div class="departure-caption">

        <div>

          <span class="card-kicker">STUDENT JOURNEY · SAMPLE</span>

          <h3>${esc(item.country)}</h3>

          <p>${esc(item.city)}</p>

        </div>

        <span class="round-arrow" aria-hidden="true">↗</span>

      </div>

    </article>

  `).join("");

}

/* ==========================================

   PART 3 — HOMEPAGE, ABOUT & COLLEGE PAGES

========================================== */

/* ---------- HOMEPAGE ---------- */

function homePage() {

  return `

    <main>

      <section class="hero-home">

        <div class="container hero-layout">

          <div class="hero-copy">

            ${eyebrow("MBBS ADMISSIONS · INDIA & ABROAD")}

            <h1>

              Find your way to a

              <span>future in medicine.</span>

            </h1>

            <p class="hero-lead">

              Explore medical education pathways, compare college options,

              and get guidance for your next admission step.

            </p>

            <div class="hero-actions">

              ${buttonLink("Talk to an expert", "/contact")}

              ${buttonLink(

                "Explore colleges",

                "/colleges/mbbs-india",

                "button-outline"

              )}

            </div>

            <div class="hero-proof">

              <span class="proof-ring">M</span>

              <p>

                <strong>One step at a time.</strong><br />

                Guidance built around your goals.

              </p>

            </div>

          </div>

          <div class="hero-visual">

            <img

              src="sample14.png"

              alt="Medical university campus"

              onerror="this.hidden=true; this.parentElement.classList.add('image-fallback')"

            />

            <div class="hero-image-wash"></div>

            <div class="hero-orbit" aria-hidden="true"></div>

            <div class="hero-caption">

              <span class="hero-caption-dot"></span>

              Every future doctor starts somewhere.

            </div>

            <div class="hero-note">

              <small>YOUR JOURNEY</small>

              <strong>Starts with a<br />clear next step.</strong>

              <span class="hero-note-arrow">↗</span>

            </div>

          </div>

        </div>

        <div class="container hero-foot">

          <span>GUIDANCE FOR ASPIRING DOCTORS</span>

          <span class="hero-foot-line"></span>

          <span>INDIA · ABROAD · POSTGRADUATE</span>

        </div>

      </section>

      ${coverageStrip()}

      ${metricStrip()}

      <section class="section featured-section">

        <div class="container featured-panel">

          <div class="featured-copy">

            <span class="mini-index">EXPLORE YOUR OPTIONS</span>

            <h2>Find a college that inspires your next step.</h2>

            <p>

              Compare institutions and build a shortlist based on your

              interests. Verify admission information through official sources.

            </p>

            ${buttonLink(

              "Browse MBBS colleges",

              "/colleges/mbbs-india",

              "button-light"

            )}

          </div>

          <div class="featured-info">

            <div class="featured-emblem">

              <span>MC</span>

              <b>MEDICAL EDUCATION</b>

            </div>

            <div>

              <span class="card-kicker">COLLEGE EXPLORER</span>

              <h3>Explore your possibilities</h3>

              <p>India and international destinations</p>

              <div class="featured-tags">

                <span>MBBS India</span>

                <span>MBBS Abroad</span>

              </div>

            </div>

            <span class="featured-star" aria-hidden="true">✳</span>

          </div>

        </div>

      </section>

      <section class="section pathways-section">

        <div class="container">

          <div class="section-heading">

            <div>

              ${eyebrow("YOUR MEDICAL JOURNEY")}

              <h2>Choose a path.<br /><span>Build a future.</span></h2>

            </div>

            <p>

              Explore different medical education pathways and identify

              which option best fits your goals.

            </p>

          </div>

          <div class="pathway-grid">

            ${pathwayCard(

              "01",

              "MBBS in India",

              "Explore colleges, NEET counselling and admission steps across states.",

              "/services/mbbs-india",

              "INDIA"

            )}

            ${pathwayCard(

              "02",

              "MBBS Abroad",

              "Compare international destinations and university options.",

              "/services/mbbs-abroad",

              "GLOBAL"

            )}

            ${pathwayCard(

  "assets/es1.png",

  "MD / MS",

  "Explore postgraduate medical education pathways.",

  "/services/md-ms",

  "POSTGRADUATE"

)}

          </div>

          <div class="not-sure">

            <span class="not-sure-symbol">?</span>

            <p>

              <strong>Not sure where to begin?</strong>

              <span>Let's talk through your options.</span>

            </p>

            ${buttonLink("Get guidance", "/contact", "button-outline")}

          </div>

        </div>

      </section>

      <section class="section about-home">

        <div class="container about-home-grid">

          <div class="about-picture">

            <div class="about-picture-card">

              <div class="picture-lines"></div>

              <div class="about-monogram">

                MC<span>WORLD</span>

              </div>

              <span class="picture-stamp">GUIDANCE<br />WITH CARE</span>

            </div>

            <div class="about-side-note">

              A supportive guide for your next step.

            </div>

          </div>

          <div class="about-home-copy">

            ${eyebrow("ABOUT MEDICURA WORLD")}

            <h2>

              Guidance that keeps

              <span>your goals</span> in focus.

            </h2>

            <p>

              Choosing where and how to study medicine involves many

              decisions. Explore your options, organize your questions

              and learn which details to verify before making a decision.

            </p>

            <ul class="check-list">

              <li><span>✓</span> University and course exploration</li>

              <li><span>✓</span> Admission process guidance</li>

              <li><span>✓</span> Application and document planning</li>

              <li><span>✓</span> Support for your next steps</li>

            </ul>

            <div class="about-home-actions">

              ${buttonLink("About us", "/about", "button-outline")}

              <a class="quiet-link" href="/contact">

                Speak with a counselor ${arrow()}

              </a>

            </div>

          </div>

        </div>

      </section>

      ${destinationSection()}

      <section class="section service-section">

        <div class="container">

          <div class="section-heading">

            <div>

              ${eyebrow("SUPPORT AT EVERY STEP")}

              <h2>A thoughtful guide,<br /><span>from shortlist to start.</span></h2>

            </div>

            <p>

              Practical support to help you understand your options

              and prepare for the next stage of your journey.

            </p>

          </div>

          <div class="service-grid">

            ${[

              ["01", "Career conversation", "Discuss your interests and goals."],

              ["02", "University options", "Explore institutions and destinations."],

              ["03", "Admission guidance", "Organize your application questions."],

              ["04", "Personal support", "Consider options that fit your needs."],

              ["05", "Document planning", "Review the relevant official checklists."],

              ["06", "Next-step planning", "Prepare for the transition to a new campus."],

            ].map(([number, title, description]) => `

              <article class="service-card">

                <span class="service-number">${number}</span>

                <span class="service-icon" aria-hidden="true">✳</span>

                <h3>${title}</h3>

                <p>${description}</p>

              </article>

            `).join("")}

          </div>

        </div>

      </section>

      <section class="section simple-cta">

        <div class="container simple-cta-inner">

          <div>

            ${eyebrow("YOUR JOURNEY STARTS HERE")}

            <h2>Let's make your next step clearer.</h2>

            <p>Explore your questions with our guidance team.</p>

          </div>

          ${buttonLink("Get free guidance", "/contact")}

        </div>

      </section>

    </main>

  `;

}

/* ---------- ABOUT PAGE ---------- */

function aboutPage() {

  return `

    <main>

      ${pageHero(

        "ABOUT MEDICURA WORLD",

        "Guiding future medical professionals.",

        "A student-focused approach to exploring medical education in India and around the world.",

        "About"

      )}

      <section class="section about-intro">

        <div class="container about-intro-grid">

          <div>

            ${eyebrow("OUR STORY")}

            <h2>Big ambitions.<br /><span>Clearer decisions.</span></h2>

          </div>

          <div>

            <p class="lead-paragraph">

              A medical career begins with many decisions. Students and

              families deserve useful information and time to compare

              their options.

            </p>

            <p>

              MediCura World helps students explore courses, colleges and

              admission steps. Important requirements should always be

              checked with the relevant official authorities.

            </p>

            ${buttonLink("Start your journey", "/contact", "button-outline")}

          </div>

        </div>

      </section>

      ${metricStrip()}

      <section class="section trust-section">

        <div class="container trust-grid">

          <div class="trust-card">

            <span class="trust-big">✳</span>

            <span class="mini-index">OUR APPROACH</span>

            <h2>Support with<br /><span>care and clarity.</span></h2>

            <p>

              Thoughtful conversations, practical next steps and

              encouragement to verify information from official sources.

            </p>

          </div>

          <div class="trust-list">

            <article>

              <span>01</span>

              <div>

                <h3>Clear conversations</h3>

                <p>Understand student questions and family priorities.</p>

              </div>

            </article>

            <article>

              <span>02</span>

              <div>

                <h3>Helpful comparisons</h3>

                <p>Compare location, course options and published costs.</p>

              </div>

            </article>

            <article>

              <span>03</span>

              <div>

                <h3>Student-first guidance</h3>

                <p>Explore a pathway that reflects your own goals.</p>

              </div>

            </article>

            <article>

              <span>04</span>

              <div>

                <h3>Official information</h3>

                <p>Check current admission requirements with the relevant authorities.</p>

              </div>

            </article>

          </div>

        </div>

      </section>

      <section class="section simple-cta">

        <div class="container simple-cta-inner">

          <div>

            ${eyebrow("YOUR NEXT STEP")}

            <h2>Let's explore your options together.</h2>

            <p>Start with a conversation about your goals.</p>

          </div>

          ${buttonLink("Contact us", "/contact")}

        </div>

      </section>

    </main>

  `;

}

/* ---------- COLLEGE DIRECTORY ---------- */

function collegePage() {
  const states = [...new Set(directoryColleges.map((college) => college.state))].sort();
  return `
    <main>
      ${pageHero("MBBS IN INDIA", "Find colleges that fit your plan.", "Explore the collected profile set, compare the details that matter, and open a college page before you ask for guidance.", "Colleges", buttonLink("Ask a counselor", "/contact", "button-outline"))}
      <section class="section directory-section"><div class="container">
        <div class="section-heading india-directory-heading"><div><span class="mini-index">MBBS IN INDIA · COLLEGE DIRECTORY</span><h2>Explore medical<br /><span>colleges in India.</span></h2></div><div class="heading-side"><p>${directoryColleges.length} collected college profiles are ready to explore. Search by college or city, filter by state, and use Ask to open a detailed profile.</p>${buttonLink("Talk to a counselor", "/contact", "button-outline")}</div></div>
        <div class="filter-panel"><label class="search-field"><span class="sr-only">Search college name or city</span><span class="search-icon" aria-hidden="true">⌕</span><input id="college-search" type="search" placeholder="Search college or city..." autocomplete="off" /></label><label class="select-field"><span class="sr-only">Filter by state</span><select id="college-state"><option value="all">All states</option>${states.map(state => `<option value="${esc(state)}">${esc(state)}</option>`).join("")}</select></label><span class="results-count" id="college-count"></span></div>
        <div class="destination-grid india-college-grid" id="college-results"></div>
        <div class="college-slider-controls" id="college-slider-controls" aria-label="College directory slides"></div>
        <div class="empty-state" id="college-empty" hidden><span>⌕</span><h3>No matching colleges</h3><p>Try another search or choose a different state.</p><button class="text-link" id="clear-college-filters" type="button">Clear filters ${arrow()}</button></div>
        <p class="data-caveat">The supplied reference-page extracts are clearly marked as unverified. Confirm current NMC, MCC, seat, fee, ranking and admission information with official sources before relying on it.</p>
      </div></section>
    </main>`;
}
function collegeProfilePage(profile) {
  const highlights = profile.academicHighlights || [];
  const steps = profile.admissionSteps || [];
  const initials = (profile.shortName || profile.name).split(/\s+/).slice(0, 2).map((word) => word[0]).join("");
  return `
    <main class="college-profile-page"><section class="college-profile-hero"><div class="container"><div class="breadcrumb"><a href="/colleges/mbbs-india">MBBS colleges</a><span>›</span><span>${esc(profile.shortName || profile.name)}</span></div><div class="college-profile-hero-grid"><div>${eyebrow("COLLEGE PROFILE · REFERENCE EXTRACT")}<h1>${esc(profile.name)}</h1><p class="college-profile-location">${esc(profile.city)}, ${esc(profile.state)} <span>·</span> ${esc(profile.type)}</p><p class="college-profile-intro">${esc(profile.about)}</p><div class="college-profile-actions">${buttonLink("Ask about this college", `/contact?college=${encodeURIComponent(profile.slug)}`)}<a class="button button-outline" href="${esc(profile.sourceUrl)}" target="_blank" rel="noreferrer">View source page ${arrow()}</a></div></div><div class="college-profile-badge"><span>${esc(initials)}</span><small>MBBS<br />PROFILE</small></div></div></div></section>
    <section class="college-quickfacts"><div class="container college-fact-grid"><div><span>SEATS</span><strong>${esc(profile.seats)}</strong><small>Source-page claim</small></div><div><span>RANKING</span><strong>${esc(profile.ranking)}</strong><small>Method/year not stated</small></div><div><span>ANNUAL TUITION</span><strong>${esc(profile.annualTuition)}</strong><small>Year not stated</small></div><div><span>RECOGNITION</span><strong>${esc(profile.recognition)}</strong><small>Verify officially</small></div></div></section>
    <section class="section college-profile-content"><div class="container college-profile-layout"><div class="college-profile-main">
      <section class="profile-section"><span class="mini-index">01 · AT A GLANCE</span><h2>What to know about<br /><span>${esc(profile.shortName || profile.name)}.</span></h2><p>${esc(profile.about)}</p><div class="highlight-grid">${highlights.map((item) => `<div><span>✓</span><p>${esc(item)}</p></div>`).join("")}</div></section>
      <section class="profile-section" id="admission"><span class="mini-index">02 · ADMISSION</span><h2>Plan the next<br /><span>five steps.</span></h2><p>${esc(profile.admissionIntro || "Review the current official admission route before making a choice.")}</p><div class="admission-steps">${steps.map((step, index) => `<div><b>${String(index + 1).padStart(2, "0")}</b><div><h3>${esc(step.title)}</h3><p>${esc(step.detail)}</p></div></div>`).join("")}</div></section>
      <section class="profile-section"><span class="mini-index">03 · COSTS &amp; SUPPORT</span><h2>Compare the published<br /><span>fee signals.</span></h2><div class="profile-table"><div><span>Approx. annual total</span><strong>${esc(profile.annualTotal || profile.approximateAnnualTotal)}</strong></div><div><span>NRI fee</span><strong>${esc(profile.nriFee)}</strong></div><div><span>Hostel &amp; mess</span><strong>${esc(profile.hostelAndMess)}</strong></div><div><span>Other fees</span><strong>${esc(profile.otherFees)}</strong></div></div><p class="profile-note">${esc(profile.feeNote)}</p></section>
      <section class="profile-section"><span class="mini-index">04 · STUDENT JOURNEY</span><h2>From internship to<br /><span>what comes next.</span></h2><div class="journey-grid"><div><span>INTERNSHIP</span><p>${esc(profile.internship)}</p></div><div><span>POSTGRADUATION</span><p>${esc(profile.postGraduation)}</p></div></div><p class="profile-note">${esc(profile.placementQuote)}</p></section>
      <section class="profile-section"><span class="mini-index">05 · DOCUMENT CHECKLIST</span><h2>Keep your documents<br /><span>ready.</span></h2><ul class="document-list">${(profile.documents || []).map((item) => `<li><span>✓</span>${esc(item)}</li>`).join("")}</ul><p class="profile-note">${esc(profile.documentNote)}</p></section>
    </div><aside class="college-profile-aside"><div class="profile-ask-card"><span class="mini-index">NEED A SECOND VIEW?</span><h3>Ask about ${esc(profile.shortName || profile.name)}.</h3><p>Bring your NEET score, category, preferred location, and questions. We’ll help you identify what to verify next.</p>${buttonLink("Ask about this college", `/contact?college=${encodeURIComponent(profile.slug)}`)}<small>No live admission submission happens here.</small></div><div class="profile-source-card"><span class="mini-index">SOURCE NOTE</span><p>This profile is based on a Future Mind Educare reference-page extract accessed ${esc(profile.sourceAccessed)}. It is not an official college, NMC, MCC, fee, ranking, placement or stipend record.</p><a href="${esc(profile.sourceUrl)}" target="_blank" rel="noreferrer">Open reference page ${arrow()}</a></div></aside></div></section></main>`;
}
/* ==========================================

   PART 4 — REMAINING PAGES & INTERACTIONS

========================================== */

/* ---------- CONTACT PAGE ---------- */

function contactPage() {

  return `

    <main>

      ${pageHero(

        "CONTACT MEDICURA WORLD",

        "Let's make your next step clearer.",

        "Connect with our team to explore your medical education options.",

        "Contact"

      )}

      <section class="section contact-section">

        <div class="container contact-grid">

          <div class="contact-info">

            ${eyebrow("WE'RE HERE TO LISTEN")}

            <h2>Bring your questions.<br /><span>We'll start there.</span></h2>

            <p>

              Tell us what you are exploring. Call us at +91 92268 08967 or send your inquiry using the form.

            </p>

            <div class="contact-cards">

              <article>

                <span class="contact-icon" aria-hidden="true">☎</span>
                <div>
                  <small>PHONE</small>
                  <strong><a href="tel:+919226808967">+91 92268 08967</a></strong>
                </div>

              </article>

              <article>

                <span class="contact-icon">⌖</span>

                <div>

                  <small>OFFICE</small>

                  <strong>Add verified office address</strong>

                </div>

              </article>

            </div>

          </div>

          <div class="contact-form-card">

            <h2>Request a conversation.</h2>

            <form id="contact-form" class="contact-form">

              <label>

                Full name *

                <input name="name" required minlength="2" placeholder="Your name" />

              </label>

              <label>

                Email address *

                <input name="email" type="email" required placeholder="you\@example.com" />

              </label>

              <label>

                Phone number

                <input name="phone" type="tel" placeholder="Your phone number" />

              </label>

              <label>

                Interested in

                <select name="interest">

                  <option>MBBS in India</option>

                  <option>MBBS Abroad</option>

                  <option>MD / MS</option>

                  <option>NEET guidance</option>

                  <option>General inquiry</option>

                </select>

              </label>

              <label>

                Your message *

                <textarea name="message" rows="4" required placeholder="How can we help?"></textarea>

              </label>

              <button type="submit" class="button">

                Submit inquiry ${arrow()}

              </button>

              <p id="form-status" class="form-status" role="status" hidden></p>

              <small>Your inquiry will be sent to our server. Email notifications require separate email-service setup.</small>

            </form>

          </div>

        </div>

      </section>

    </main>

  `;

}

/* ---------- SERVICE PAGES ---------- */

function servicePage(type) {

  const services = {

    india: {

      label: "MBBS IN INDIA",

      title: "Explore MBBS opportunities in India.",

      text: "Understand college options, NEET counselling and admission requirements.",

      points: [

        "Explore medical colleges and state options",

        "Organize your counselling questions",

        "Review relevant application documents",

        "Verify current eligibility and deadlines",

      ],

    },

    abroad: {

      label: "MBBS ABROAD",

      title: "Explore medical study destinations.",

      text: "Compare international study options and the details to verify before applying.",

      points: [

        "Explore study destinations",

        "Compare published university information",

        "Review eligibility and documentation questions",

        "Plan for student life and travel",

      ],

    },

    pg: {

      label: "MD / MS",

      title: "Plan your next medical education step.",

      text: "Explore postgraduate medical education pathways and current requirements.",

      points: [

        "Explore postgraduate interests",

        "Identify relevant exam information",

        "Organize application questions",

        "Verify counselling requirements",

      ],

    },

  };

  const item = services[type] || services.india;

  return `

    <main>

      ${pageHero(item.label, item.title, item.text, item.label)}

      <section class="section">

        <div class="container service-detail-grid">

          <div>

            ${eyebrow("YOUR NEXT STEP")}

            <h2>Make informed<br /><span>decisions.</span></h2>

            <div class="service-detail-steps">

              ${item.points.map((point, index) => `

                <article class="detail-step">

                  <span>${String(index + 1).padStart(2, "0")}</span>

                  <p>${esc(point)}</p>

                </article>

              `).join("")}

            </div>

          </div>

          <div class="service-detail-aside">

            <span class="mini-index">GUIDANCE WITH CLARITY</span>

            <h3>Start with a conversation.</h3>

            <p>

              Admission requirements vary. Confirm current information

              with the relevant official authorities and institutions.

            </p>

            ${buttonLink("Contact our team", "/contact", "button-light")}

          </div>

        </div>

      </section>

      ${destinationSection()}

    </main>

  `;

}

/* ---------- BLOG LISTING ---------- */

function blogListing() {

  return `

    <main>

      ${pageHero(

        "INSIGHTS & UPDATES",

        "Ideas for your medical education journey.",

        "Explore sample articles about admissions, NEET and college planning.",

        "Blog"

      )}

      <section class="section">

        <div class="container">

          <label class="blog-search">

            Search articles

            <input id="blog-search" type="search" placeholder="Search articles..." />

          </label>

          <div class="blog-categories">

            <button class="category-chip active" data-blog-category="All" type="button">All</button>

            ${[...new Set(articles.map(article => article.category))].map(category => `

              <button class="category-chip" data-blog-category="${esc(category)}" type="button">

                ${esc(category)}

              </button>

            `).join("")}

          </div>

          <div class="blog-grid" id="blog-grid"></div>

          <p id="blog-empty" class="empty-state" hidden>No articles found.</p>

        </div>

      </section>

    </main>

  `;

}

let activeBlogCategory = "All";

function updateBlogResults() {

  const grid = document.getElementById("blog-grid");

  if (!grid) return;

  const search = (

    document.getElementById("blog-search")?.value || ""

  ).toLowerCase().trim();

  const filtered = articles.filter(article => {

    const matchesCategory =

      activeBlogCategory === "All" ||

      article.category === activeBlogCategory;

    const text = `${article.title} ${article.category} ${article.excerpt}`.toLowerCase();

    return matchesCategory && text.includes(search);

  });

  grid.innerHTML = filtered.map((article, index) => `

    <article class="blog-card reveal" style="--delay:${index * 60}ms">

      <div class="blog-image">

        <img

          src="sample${7 + (index % 7)}.png"

          alt=""

          loading="lazy"

          onerror="this.hidden=true; this.parentElement.classList.add('image-fallback')"

        />

        <span class="blog-image-label">${esc(article.category)}</span>

      </div>

      <div class="blog-card-copy">

        <small>${esc(article.date)} · ${esc(article.read)}</small>

        <h3>${esc(article.title)}</h3>

        <p>${esc(article.excerpt)}</p>

        <a class="text-link" href="/blog/${encodeURIComponent(article.slug)}">

          Read article ${arrow()}

        </a>

      </div>

    </article>

  `).join("");

  const empty = document.getElementById("blog-empty");

  if (empty) empty.hidden = filtered.length > 0;

  bindRevealAnimations();

}

function bindBlogControls() {

  document.getElementById("blog-search")?.addEventListener("input", updateBlogResults);

  document.querySelectorAll("[data-blog-category]").forEach(button => {

    button.addEventListener("click", () => {

      activeBlogCategory = button.dataset.blogCategory || "All";

      document.querySelectorAll("[data-blog-category]").forEach(item => {

        item.classList.toggle("active", item === button);

      });

      updateBlogResults();

    });

  });

}

/* ---------- NEET PREDICTOR ---------- */

function predictorPage() {

  return `

    <main>

      ${pageHero(

        "NEET SCORE TOOL",

        "Understand your score.",

        "Enter a score to see an illustrative summary. This is not an admission prediction.",

        "NEET Predictor"

      )}

      <section class="section">

        <div class="container predictor-panel">

          <form id="predictor-form" class="predictor-form">

            <label for="neet-score">NEET score (out of 720)</label>

            <input id="neet-score" name="score" type="number" min="0" max="720" required />

            <label for="neet-category">Category</label>

            <select id="neet-category" name="category">

              ${categories.map(category => `

                <option value="${esc(category)}">${esc(category)}</option>

              `).join("")}

            </select>

            <button class="button" type="submit">View score summary ${arrow()}</button>

          </form>

          <div id="predictor-result" class="predictor-result" hidden aria-live="polite"></div>

        </div>

      </section>

    </main>

  `;

}

function bindPredictor() {

  const form = document.getElementById("predictor-form");

  if (!form) return;

  form.addEventListener("submit", event => {

    event.preventDefault();

    const score = Number(form.elements.score.value);

    const category = form.elements.category.value;

    const result = document.getElementById("predictor-result");

    if (!Number.isFinite(score) || score < 0 || score > 720) {

      result.hidden = false;

      result.textContent = "Please enter a score from 0 to 720.";

      return;

    }

    result.hidden = false;

    result.innerHTML = `

      <span class="mini-index">YOUR SCORE SUMMARY</span>

      <h3>${score} / 720</h3>

      <p>Selected category: ${esc(category)}</p>

      <p>

        This demo does not calculate a verified rank, cutoff or admission chance.

        Check the latest official counselling information.

      </p>

    `;

  });

}

/* ---------- ROUTING ---------- */

function adminLoginPage() {
  return `
    <main class="mc-admin-shell">
      <section class="mc-login-card">
        <div class="mc-admin-mark">M</div>
        <p class="mc-admin-eyebrow">MEDICURA WORLD</p>
        <h1>Admin sign in</h1>
        <p class="mc-admin-muted">Sign in to manage consultation inquiries.</p>
        <form id="mc-admin-login-form" class="mc-admin-form">
          <label for="mc-admin-email">Admin email</label>
          <input id="mc-admin-email" name="email" type="email" autocomplete="username" required placeholder="admin@example.com" />
          <label for="mc-admin-password">Password</label>
          <input id="mc-admin-password" name="password" type="password" autocomplete="current-password" required placeholder="Enter admin password" />
          <p id="mc-admin-login-error" class="mc-admin-error" role="alert"></p>
          <button type="submit" class="mc-admin-primary">Sign in</button>
        </form>
        <a class="mc-admin-back" href="/">← Back to website</a>
      </section>
    </main>`;
}

function adminDashboardPage() {
  return `
    <main class="mc-admin-shell mc-admin-dashboard">
      <header class="mc-admin-topbar">
        <div><p class="mc-admin-eyebrow">MEDICURA WORLD / ADMIN</p><h1>Consultation inquiries</h1><p class="mc-admin-muted">Review and manage requests submitted through your website.</p></div>
        <div class="mc-admin-top-actions"><button id="mc-admin-refresh" class="mc-admin-secondary">↻ Refresh</button><button id="mc-admin-logout" class="mc-admin-secondary">Log out</button></div>
      </header>
      <section class="mc-admin-stats">
        <article><span>Total inquiries</span><strong id="mc-stat-total">—</strong></article>
        <article><span>New inquiries</span><strong id="mc-stat-new">—</strong></article>
        <article><span>Contacted</span><strong id="mc-stat-contacted">—</strong></article>
      </section>
      <section class="mc-admin-panel">
        <div class="mc-admin-panel-heading"><div><h2>Submitted requests</h2><p>Live data from your MySQL database</p></div><span id="mc-admin-count" class="mc-admin-count">Loading…</span></div>
        <div class="mc-admin-tools"><input id="mc-admin-search" type="search" placeholder="Search name, email, phone or message…" /><select id="mc-admin-filter"><option value="All">All statuses</option><option value="New">New</option><option value="Contacted">Contacted</option></select></div>
        <p id="mc-admin-state" class="mc-admin-state">Loading inquiries…</p>
        <div id="mc-admin-inquiry-list" class="mc-admin-inquiry-list"></div>
      </section>
      <a class="mc-admin-back" href="/">← Back to website</a>
    </main>`;
}

function bindAdminLogin() {
  const form = document.getElementById("mc-admin-login-form");
  if (!form) return;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    const errorBox = document.getElementById("mc-admin-login-error");
    errorBox.textContent = "";
    button.disabled = true;
    button.textContent = "Signing in…";
    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email.value.trim(), password: form.password.value })
      });
      const data = await response.json();
      if (!response.ok || !data.success || !data.token) throw new Error(data.message || "Login failed.");
      sessionStorage.setItem("medicura_admin_token", data.token);
      window.location.href = "/admin/dashboard";
    } catch (error) {
      errorBox.textContent = error.message === "Failed to fetch" ? "Cannot connect to the backend. Make sure it is running on port 5000." : error.message;
    } finally {
      button.disabled = false;
      button.textContent = "Sign in";
    }
  });
}

function bindAdminDashboard() {
  const list = document.getElementById("mc-admin-inquiry-list");
  if (!list) return;
  const token = sessionStorage.getItem("medicura_admin_token");
  if (!token) { window.location.replace("/admin/login"); return; }
  const state = document.getElementById("mc-admin-state");
  const search = document.getElementById("mc-admin-search");
  const filter = document.getElementById("mc-admin-filter");
  let inquiries = [];
  const escHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (ch) => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[ch]));
  const formatDate = (value) => value ? new Date(value).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" }) : "Date unavailable";
  async function api(path, options = {}) {
    const response = await fetch(`http://localhost:5000${path}`, { ...options, headers: { Authorization: `Bearer ${token}`, ...(options.headers || {}) } });
    const data = await response.json().catch(() => ({}));
    if (response.status === 401 || response.status === 403) { sessionStorage.removeItem("medicura_admin_token"); window.location.replace("/admin/login"); throw new Error("Your session expired. Please sign in again."); }
    if (!response.ok || !data.success) throw new Error(data.message || "Request failed.");
    return data;
  }
  function renderList() {
    const term = search.value.trim().toLowerCase();
    const statusFilter = filter.value;
    const shown = inquiries.filter((item) => [item.full_name, item.email, item.phone, item.interest, item.message].some((v) => String(v || "").toLowerCase().includes(term)) && (statusFilter === "All" || (item.status || "New") === statusFilter));
    document.getElementById("mc-admin-count").textContent = `${shown.length} record${shown.length === 1 ? "" : "s"}`;
    if (!shown.length) { list.innerHTML = ""; state.textContent = inquiries.length ? "No matching inquiries found." : "No inquiries have been submitted yet."; state.hidden = false; return; }
    state.hidden = true;
    list.innerHTML = shown.map((item) => `<article class="mc-admin-inquiry"><div class="mc-admin-inquiry-heading"><h3>${escHtml(item.full_name)}</h3><span class="mc-admin-interest">${escHtml(item.interest)}</span><span class="mc-admin-status ${item.status === "Contacted" ? "is-contacted" : "is-new"}">${escHtml(item.status || "New")}</span></div><div class="mc-admin-contact"><span>✉ ${escHtml(item.email)}</span><span>☎ ${escHtml(item.phone || "Not provided")}</span></div><p class="mc-admin-message-label">Message</p><p class="mc-admin-message">${escHtml(item.message)}</p><p class="mc-admin-date">Submitted: ${escHtml(formatDate(item.created_at))}</p><div class="mc-admin-card-actions">${item.status === "Contacted" ? "" : `<button data-action="contact" data-id="${Number(item.id)}" class="mc-admin-contact-btn">Mark contacted</button>`}<button data-action="delete" data-id="${Number(item.id)}" class="mc-admin-delete-btn">Delete</button></div></article>`).join("");
  }
  async function load() {
    state.hidden = false; state.textContent = "Loading inquiries…";
    try {
      const data = await api("/api/admin/inquiries");
      inquiries = data.inquiries || [];
      document.getElementById("mc-stat-total").textContent = inquiries.length;
      document.getElementById("mc-stat-new").textContent = inquiries.filter((x) => (x.status || "New") === "New").length;
      document.getElementById("mc-stat-contacted").textContent = inquiries.filter((x) => x.status === "Contacted").length;
      renderList();
    } catch (error) { state.hidden = false; state.textContent = error.message; }
  }
  search.addEventListener("input", renderList);
  filter.addEventListener("change", renderList);
  document.getElementById("mc-admin-refresh").addEventListener("click", load);
  document.getElementById("mc-admin-logout").addEventListener("click", () => { sessionStorage.removeItem("medicura_admin_token"); window.location.href = "/admin/login"; });
  list.addEventListener("click", async (event) => {
    const button = event.target.closest("button[data-action]"); if (!button) return;
    const id = Number(button.dataset.id);
    try {
      if (button.dataset.action === "delete") {
        if (!window.confirm("Delete this inquiry permanently?")) return;
        await api(`/api/admin/inquiries/${id}`, { method: "DELETE" });
      } else {
        await api(`/api/admin/inquiries/${id}/contacted`, { method: "PATCH" });
      }
      await load();
    } catch (error) { window.alert(error.message); }
  });
  load();
}

function routeForPath(path) {
  if (path === "/admin/login") return { html: adminLoginPage(), title: "Admin Login | MediCura World" };
  if (path === "/admin/dashboard") return { html: adminDashboardPage(), title: "Admin Dashboard | MediCura World" };

  if (path === "/") {

    return {

      html: homePage(),

      title: "MediCura World | Medical Admissions Guidance",

    };

  }

  if (path === "/about") {

    return {

      html: aboutPage(),

      title: "About MediCura World",

    };

  }

  if (path === "/colleges/mbbs-india") {
    return { html: collegePage(), title: "MBBS Colleges in India" };
  }
  if (path.startsWith("/colleges/") && path !== "/colleges/mbbs-abroad" && path !== "/colleges/md-ms") {
    const profile = profileForSlug(path.slice("/colleges/".length));
    if (profile) return { html: collegeProfilePage(profile), title: `${profile.shortName || profile.name} | MediCura World` };
  }
  if (path === "/colleges/mbbs-abroad" || path === "/services/mbbs-abroad") {

    return {

      html: servicePage("abroad"),

      title: "MBBS Abroad",

    };

  }

  if (path === "/services/mbbs-india") {

    return {

      html: servicePage("india"),

      title: "MBBS in India",

    };

  }

  if (path === "/services/md-ms" || path === "/colleges/md-ms") {

    return {

      html: servicePage("pg"),

      title: "MD / MS Guidance",

    };

  }

  if (path === "/blog") {

    return {

      html: blogListing(),

      title: "Medical Education Articles",

    };

  }

  if (path === "/neet-predictor") {

    return {

      html: predictorPage(),

      title: "NEET Score Tool",

    };

  }

  if (path === "/contact") {

    return {

      html: contactPage(),

      title: "Contact MediCura World",

    };

  }

  if (path === "/privacy" || path === "/terms") {

    return {

      html: `

        <main>

          ${pageHero(

            "INFORMATION",

            path === "/privacy" ? "Privacy notice" : "Terms of use",

            "This page needs the company's reviewed and approved policy text.",

            "Information"

          )}

          <section class="section">

            <div class="container">

              <p>

                Replace this placeholder with the company's verified policy.

                Do not publish this demo as a final legal document.

              </p>

            </div>

          </section>

        </main>

      `,

      title: path === "/privacy" ? "Privacy Notice" : "Terms of Use",

    };

  }

  return {

    html: `

      <main class="not-found section">

        <div class="container">

          <h1>Page not found</h1>

          <p>The page you requested could not be found.</p>

          ${buttonLink("Back to home", "/")}

        </div>

      </main>

    `,

    title: "Page not found",

  };

}

/* ---------- MBBS INDIA IMAGE CARDS ---------- */

function indiaCollegeCard(college) {

  const collegeIndex = directoryColleges.indexOf(college);
  const imagePath = `/assets/destinations/sample${collegeIndex + 1}.png`;
  const number = String(collegeIndex + 1).padStart(2, "0");
  const collegeName = college.shortName || college.short || college.name;

  return `

    <a class="destination-card india-college-card destination-tone-${collegeIndex % 4}" href="/colleges/${esc(college.slug)}" aria-label="Ask about ${esc(collegeName)}">

      <img
        class="destination-photo"
        src="${imagePath}"
        alt="${esc(collegeName)} campus"
        loading="lazy"
        onerror="this.style.display='none'; this.parentElement.classList.add('destination-image-missing')"
      />

      <span class="destination-image-shade"></span>

      <span class="destination-code">${number}</span>

      <span class="destination-card-content">
        <span class="india-college-kicker">${esc(college.type)} · ${esc(college.state)}</span>
        <span class="destination-card-name">${esc(collegeName)}</span>
        <span class="destination-count">${esc(college.city)}, ${esc(college.state)}</span>
      </span>

      <span class="destination-arrow">Ask ${arrow()}</span>

    </a>

  `;

}

/* ---------- COLLEGE SEARCH ---------- */

function updateCollegeResults() {

  const grid = document.getElementById("college-results");

  if (!grid) return;

  const query = (

    document.getElementById("college-search")?.value || ""

  ).toLowerCase().trim();

  const state = document.getElementById("college-state")?.value || "all";

  const filtered = directoryColleges.filter(college => {

    const matchesQuery = [

      college.name,

      college.shortName || college.short,

      college.city,

      college.state,

    ].some(value => value.toLowerCase().includes(query));

    return matchesQuery && (state === "all" || college.state === state);

  });

  const totalSlides = Math.max(1, Math.ceil(filtered.length / collegeSlideSize));
  currentCollegeSlide = Math.min(Math.max(currentCollegeSlide, 1), totalSlides);
  const start = (currentCollegeSlide - 1) * collegeSlideSize;
  const visible = filtered.slice(start, start + collegeSlideSize);
  grid.innerHTML = visible.map((college) => indiaCollegeCard(college)).join("");
  grid.classList.remove("is-changing");
  requestAnimationFrame(() => grid.classList.add("is-changing"));
  const count = document.getElementById("college-count");
  if (count) count.textContent = `${filtered.length} colleges · Slide ${currentCollegeSlide} of ${totalSlides}`;
  const controls = document.getElementById("college-slider-controls");
  if (controls) {
    controls.innerHTML = `
      <button class="college-slide-button" type="button" data-slide-prev ${currentCollegeSlide === 1 ? "disabled" : ""} aria-label="Previous colleges">‹ <span>Previous</span></button>
      <div class="college-slide-pages">${Array.from({ length: totalSlides }, (_, index) => `<button class="college-slide-dot ${index + 1 === currentCollegeSlide ? "is-active" : ""}" type="button" data-slide="${index + 1}" aria-label="Show college slide ${index + 1}" aria-current="${index + 1 === currentCollegeSlide ? "true" : "false"}">${index + 1}</button>`).join("")}</div>
      <button class="college-slide-button" type="button" data-slide-next ${currentCollegeSlide === totalSlides ? "disabled" : ""} aria-label="Next colleges"><span>Next</span> ›</button>`;
    controls.querySelector("[data-slide-prev]")?.addEventListener("click", () => { currentCollegeSlide -= 1; updateCollegeResults(); });
    controls.querySelector("[data-slide-next]")?.addEventListener("click", () => { currentCollegeSlide += 1; updateCollegeResults(); });
    controls.querySelectorAll("[data-slide]").forEach((button) => button.addEventListener("click", () => { currentCollegeSlide = Number(button.dataset.slide); updateCollegeResults(); }));
    controls.hidden = filtered.length === 0;
  }
  const empty = document.getElementById("college-empty");
  if (empty) empty.hidden = filtered.length > 0;
  bindRevealAnimations();
}
function bindCollegeControls() {

  document.getElementById("college-search")?.addEventListener("input", () => { currentCollegeSlide = 1; updateCollegeResults(); });

  document.getElementById("college-state")?.addEventListener("change", () => { currentCollegeSlide = 1; updateCollegeResults(); });

  document.getElementById("clear-college-filters")?.addEventListener("click", () => {

    const search = document.getElementById("college-search");

    const state = document.getElementById("college-state");

    if (search) search.value = "";

    if (state) state.value = "all";
    currentCollegeSlide = 1;
    updateCollegeResults();

  });

}

/* ---------- MOBILE NAVIGATION ---------- */

function bindMenu() {

  const toggle = document.querySelector(".menu-toggle");

  const nav = document.querySelector(".main-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {

    const opened = nav.classList.toggle("is-open");

    toggle.setAttribute("aria-expanded", String(opened));

    document.body.classList.toggle("menu-open", opened);

  });

  const dropdown = nav.querySelector(".nav-dropdown");
  const dropdownTrigger = nav.querySelector(".nav-dropdown-trigger");

  if (dropdown && dropdownTrigger) {
    dropdownTrigger.addEventListener("click", (event) => {
      event.stopPropagation();
      const opened = dropdown.classList.toggle("is-open");
      dropdownTrigger.setAttribute("aria-expanded", String(opened));
    });

    document.addEventListener("click", (event) => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("is-open");
        dropdownTrigger.setAttribute("aria-expanded", "false");
      }
    });

    dropdownTrigger.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        dropdown.classList.remove("is-open");
        dropdownTrigger.setAttribute("aria-expanded", "false");
        dropdownTrigger.focus();
      }
    });
  }

  nav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("is-open");
      dropdown?.classList.remove("is-open");
      dropdownTrigger?.setAttribute("aria-expanded", "false");

      toggle.setAttribute("aria-expanded", "false");

      document.body.classList.remove("menu-open");

    });

  });

}

/* ---------- SCROLL REVEAL ---------- */

function bindRevealAnimations() {

  const elements = document.querySelectorAll(

    ".section-heading, .destination-card, .pathway-card, .college-card, .service-card, .blog-card"

  );

  if (!("IntersectionObserver" in window)) {

    elements.forEach(element => element.classList.add("is-visible"));

    return;

  }

  const observer = new IntersectionObserver((entries, currentObserver) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("is-visible");

        currentObserver.unobserve(entry.target);

      }

    });

  }, { threshold: 0.12 });

  elements.forEach(element => observer.observe(element));

}

/* ---------- CONTACT FORM VALIDATION ---------- */

function bindContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const status = document.getElementById("form-status");
  const button = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const data = {
      name: form.elements.name?.value.trim() || "",
      email: form.elements.email?.value.trim() || "",
      phone: form.elements.phone?.value.trim() || "",
      interest: form.elements.interest?.value || "General inquiry",
      message: form.elements.message?.value.trim() || "",
    };

    if (!data.name || !data.email || !data.message) {
      if (status) {
        status.hidden = false;
        status.className = "form-status error";
        status.textContent = "Please complete all required fields.";
      }
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      if (status) {
        status.hidden = false;
        status.className = "form-status error";
        status.textContent = "Please enter a valid email address.";
      }
      return;
    }

    if (status) {
      status.hidden = false;
      status.className = "form-status";
      status.textContent = "Submitting your inquiry...";
    }
    if (button) button.disabled = true;

    try {
      const response = await fetch("http://localhost:5000/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      let result = {};
      try {
        result = await response.json();
      } catch {
        // The server did not return JSON; show a general error below if needed.
      }

      if (!response.ok) {
        throw new Error(result.message || "Unable to submit your inquiry.");
      }

      if (status) {
        status.className = "form-status success";
        status.textContent = result.inquiryId
          ? `${result.message || "Inquiry submitted successfully."} Reference ID: ${result.inquiryId}`
          : (result.message || "Your inquiry was submitted successfully.");
      }
      form.reset();
    } catch (error) {
      console.error("Contact form submission error:", error);
      if (status) {
        status.className = "form-status error";
        status.textContent =
          "Could not submit your inquiry. Check that the backend is running, then try again.";
      }
    } finally {
      if (button) button.disabled = false;
    }
  });
}

/* ---------- SMOOTH SCROLL ---------- */

function bindSmoothScrolling() {

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

      const target = document.querySelector(link.getAttribute("href"));

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({ behavior: "smooth", block: "start" });

    });

  });

}

/* ---------- APP INITIALIZATION ---------- */

function render() {

  const rootElement = document.getElementById("app");

  if (!rootElement) {

    console.error('Add <div id="app"></div> to your HTML.');

    return;

  }

  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  const page = routeForPath(path);

  document.title = page.title;

  rootElement.innerHTML = `${header()}${page.html}${footer()}`;

  if (path === "/admin/login") { bindAdminLogin(); return; }
  if (path === "/admin/dashboard") { bindAdminDashboard(); return; }

  bindMenu();

  bindSmoothScrolling();

  bindContactForm();

  bindPredictor();

  bindCollegeControls();

  bindBlogControls();

  bindRevealAnimations();

  if (path === "/colleges/mbbs-india") updateCollegeResults();

  if (path === "/blog") updateBlogResults();

}

if (document.readyState === "loading") {

  document.addEventListener("DOMContentLoaded", render);

} else {

  render();

}
