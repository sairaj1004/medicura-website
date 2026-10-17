/*
 * Collected college information for the first 115 entries in the requested
 * Future Mind Educare directory order (accessed 2026-10-16).
 *
 * These are NOT official admissions, NMC, MCC, fee, seat, ranking, placement,
 * or stipend records. The college information sources do not provide a verifiable fee year
 * or ranking methodology. Keep the profile-page warning visible and check
 * every time-sensitive or identity-sensitive value before any publication.
 */
(function registerMediCuraCollegeProfiles() {
    const common = {
        recognition: "NMC, MCI ",
        establishment: "Not stated (our college information summary says ‘Recognized’)",
        hostelAndMess: "Included/Nominal (collected-information wording; details not stated)",
        otherFees: "Registration and examination fees as per university norms ",
        feeNote: "The our college information summary says fees may change and that refundable security deposits may apply. Its approximate annual total repeats tuition and may not include all costs.",
        feeYear: "Not stated in the collected information",
        admissionYearLabel: "2026–27 (label shown by our college information summary; confirm current counselling cycle)",
        entranceExams: ["NEET UG (collected-information claim; check current official rules)"],
        eligibility: "The our college information summary states: minimum age 17 years; 50% in PCB in Class 12 for General category and 40% for SC/ST/OBC. This generic text is not independently verified and may not reflect the latest rules or the relevant course/quota.",
        admissionSteps: [
            { title: "NEET UG exam", detail: "Qualify the national entrance examination under the current official rules." },
            { title: "Counselling registration", detail: "Register through the counselling authority applicable to the seat and quota; confirm the current authority and dates." },
            { title: "Choice filling", detail: "Select and prioritise eligible colleges during the applicable choice-filling round." },
            { title: "Seat allotment", detail: "Allotment depends on merit, choices, seat availability and the applicable counselling rules." },
            { title: "Document verification", detail: "Follow the allotment letter and the institution/counselling authority's current reporting instructions." }
        ],
        careerMetrics: [
            { value: "100%", label: "Internship placement (collected-information claim; not independently confirmed)" },
            { value: "Top Tier", label: "PG selections (collected-information wording; not independently confirmed)" },
            { value: "Global", label: "Alumni network (collected-information wording; not independently confirmed)" }
        ],
        internship: "The our college information summary describes a Compulsory Rotatory Residential Internship (CRRI) at an associated teaching hospital, with exposure across Medicine, Surgery, Obstetrics & Gynecology, and Pediatrics. Confirm the current programme and stipend with the official institute.",
        postGraduation: "The our college information summary says the institute provides a foundation for INI-CET and NEET-PG preparation and that students pursue clinical specialities. This is general promotional wording, not an independently verified outcome claim.",
        documents: [
            "NEET UG admit card",
            "NEET UG scorecard",
            "Class 10 certificate and marksheet",
            "Class 12 certificate and marksheet",
            "Government identity proof (our collected list includes Aadhaar/PAN/driving licence/passport)",
            "Passport-size photographs",
            "Provisional allotment letter",
            "Caste/category certificate, if applicable"
        ],
        documentNote: "failure to provide originals during verification may affect an allotment; this profile does not replace the allotment letter or official instructions.",
        defaultPlacementQuote: "The our college information summary describes clinical exposure and internship opportunities at associated hospitals, and says graduates pursue postgraduate study or join health organisations. This is general information not independently confirmed.",
        sourceOnly: true
    };

    const abroadCommon = {
        recognition: "WHO, NMC, FAIMER (as listed by the directory; verify current status)",
        establishment: "Not stated in the collected information",
        hostelAndMess: "Not stated in the collected information; confirm directly with the university",
        otherFees: "Visa, registration, hostel, insurance, travel and other charges are not fully itemized in the directory",
        feeNote: "Displayed fees are directory-listed estimates. Confirm the fee year, currency, payment schedule, hostel/living costs and refundable deposits with the university or official representative.",
        feeYear: "Not stated in the collected information",
        admissionYearLabel: "2026–27 (directory page title; confirm current intake)",
        entranceExams: ["NEET UG (confirm current NMC and university requirements)"],
        eligibility: "Confirm current NEET, academic, age, language, visa and university eligibility requirements with official sources.",
        admissionSteps: [
            { title: "Check eligibility", detail: "Confirm NEET, academic, age, language and country-specific requirements." },
            { title: "Select university", detail: "Compare official recognition, curriculum, fees, hostel and clinical-training details." },
            { title: "Apply and receive offer", detail: "Submit documents through the university or an authorised channel and verify the offer directly." },
            { title: "Visa and travel", detail: "Complete the current student-visa, insurance, travel and reporting requirements." },
            { title: "Registration and study", detail: "Follow university onboarding and comply with current NMC and country rules." }
        ],
        careerMetrics: [
            { value: "International", label: "Study environment (directory positioning)" },
            { value: "English", label: "Medium listed for these profiles" },
            { value: "Verify", label: "Recognition and licensing before enrolment" }
        ],
        internship: "The directory does not provide a complete, independently verified internship or stipend record for these abroad listings. Confirm clinical rotations, internship eligibility, licensing pathway and stipend directly with the university and relevant authorities.",
        postGraduation: "Postgraduate study and practice options depend on current licensing and country-specific rules. Verify the pathway with the relevant authority before relying on any claim.",
        documents: ["NEET UG admit card and scorecard, if applicable", "Class 10 and Class 12 certificates and marksheets", "Passport and government identity proof", "Passport-size photographs", "Offer/admission letter", "Financial, medical and visa documents as currently required"],
        documentNote: "Document requirements vary by country and university; follow the current official checklist.",
        defaultPlacementQuote: "The directory does not independently verify placement, package or stipend outcomes for abroad listings.",
        sourceOnly: true
    };

    const records = [
        {
            order: 1, slug: "all-india-institute-of-medical-sciences-aiims",
            name: "All India Institute of Medical Sciences (AIIMS)", shortName: "AIIMS New Delhi", city: "New Delhi", state: "Delhi", type: "Government",
            seats: 125, ranking: "#1 in India", annualTuition: "₹1,500 per year", approximateAnnualTotal: "₹1,500 per year", nriFee: "Not available (collected-information claim)",
            academicHighlights: ["World-class medical research", "Premier faculty and mentorship", "Advanced tertiary care exposure", "State-of-the-art simulation labs", "Extensive library and digital resources"],
            about: "The our college information summary describes AIIMS as a government medical institution in New Delhi and claims 125 MBBS seats and a #1-in-India ranking. The page's ranking method and year are not stated.",
            admissionIntro: "The our college information summary says AIIMS New Delhi admission is solely through NEET UG, followed by MCC counselling. check the current quota, authority, eligibility and process with official sources.",
            placementQuote: "The our college information summary claims that AIIMS Delhi graduates secure the highest medical packages in India and attributes figures to NIRF 2025: a ₹34 LPA median for PG students, around ₹16 LPA for UG graduates, and an internship stipend of ₹26,300 per month. These figures and their interpretation are not independently verified here.",
            stipendClaim: "₹26,300 per month (collected-information claim; not verified)",
            sourceUrl: "https://www.futuremindedu.in/colleges/all-india-institute-of-medical-sciences-aiims",
            flags: ["Ranking, seats, tuition and the NIRF/placement/stipend statements are collected-information claims only. The ranking system and data year for most figures are not supplied."]
        },
        {
            order: 2, slug: "maulana-azad-medical-college-mamc",
            name: "Maulana Azad Medical College (MAMC)", shortName: "MAMC Delhi", city: "New Delhi", state: "Delhi", type: "Government",
            seats: 250, ranking: "#5 in India", annualTuition: "₹2,000 per year", approximateAnnualTotal: "₹2,000 per year", nriFee: "Not available (collected-information claim)",
            academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
            about: "The our college information summary describes MAMC as a government medical institution in New Delhi and claims 250 MBBS seats and a #5-in-India ranking. The page's ranking method and year are not stated.",
            placementQuote: "The our college information summary claims a near-100% placement rate, an average package of ₹10–15 LPA, top clinical-specialty packages up to ₹25 LPA, and internship stipends of approximately ₹25,000 per month. None of these figures is independently verified here.",
            stipendClaim: "Approximately ₹25,000 per month (collected-information claim; not verified)",
            sourceUrl: "https://www.futuremindedu.in/colleges/maulana-azad-medical-college-mamc",
            flags: ["Ranking, seats, tuition and all placement/package/stipend claims are not independently confirmed listed information; no academic year or methodology is stated."]
        },
        {
            order: 3, slug: "lady-hardinge-medical-college-lhmc",
            name: "Lady Hardinge Medical College (LHMC)", shortName: "LHMC Delhi", city: "New Delhi", state: "Delhi", type: "Government",
            seats: 200, ranking: "#8 in India", annualTuition: "₹1,800 per year", approximateAnnualTotal: "₹1,800 per year", nriFee: "Not available (collected-information claim)",
            academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
            about: "The our college information summary describes LHMC as a government medical institution in New Delhi and claims 200 MBBS seats and a #8-in-India ranking. The page's ranking method and year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/lady-hardinge-medical-college-lhmc",
            flags: ["Ranking, seats, tuition and recognition wording are not independently confirmed listed information; the ranking year and method are not stated."]
        },
        {
            order: 4, slug: "university-college-of-medical-sciences-ucms",
            name: "University College of Medical Sciences (UCMS)", shortName: "UCMS Delhi", city: "New Delhi", state: "Delhi", type: "Government",
            seats: 150, ranking: "#12 in India", annualTuition: "₹2,500 per year", approximateAnnualTotal: "₹2,500 per year", nriFee: "Not available (collected-information claim)",
            academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
            about: "The our college information summary describes UCMS as a government medical institution in New Delhi and claims 150 MBBS seats and a #12-in-India ranking. The page's ranking method and year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/university-college-of-medical-sciences-ucms",
            flags: ["Ranking, seats, tuition and recognition wording are not independently confirmed listed information; confirm the current college/counselling data officially."]
        },
        {
            order: 5, slug: "vardhman-mahavir-medical-college-vmmc",
            name: "Vardhman Mahavir Medical College (VMMC)", shortName: "VMMC Delhi", city: "New Delhi", state: "Delhi", type: "Government",
            seats: 180, ranking: "#15 in India", annualTuition: "₹2,200 per year", approximateAnnualTotal: "₹2,200 per year", nriFee: "Not available (collected-information claim)",
            academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
            about: "The our college information summary describes VMMC as a government medical institution in New Delhi and claims 180 MBBS seats and a #15-in-India ranking. The page's ranking method and year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/vardhman-mahavir-medical-college-vmmc",
            flags: ["Ranking, seats, tuition and recognition wording are not independently confirmed listed information; the ranking year and method are not stated."]
        },
        {
            order: 6, slug: "hamdard-institute-of-medical-sciences",
            name: "Hamdard Institute of Medical Sciences", shortName: "Hamdard Institute", city: "New Delhi", state: "Delhi", type: "Private",
            seats: 150, ranking: "#45 in India", annualTuition: "₹12,00,000 per year", approximateAnnualTotal: "₹12,00,000 per year", nriFee: "₹39,00,000 per year (collected-information claim)",
            academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
            about: "The our college information summary describes Hamdard Institute of Medical Sciences as a private medical institution in New Delhi and claims 150 MBBS seats and a #45-in-India ranking. The page's ranking method and year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/hamdard-institute-of-medical-sciences",
            flags: ["The source uses the shortened name ‘Hamdard Institute of Medical Sciences’; check the exact institution/programme name, current seat matrix and fee schedule officially."]
        },
        {
            order: 7, slug: "indira-gandhi-institute-of-medical-sciences",
            name: "Indira Gandhi Institute of Medical Sciences", shortName: "IGIMS (our directory label)", city: "New Delhi (as listed in our collected information)", state: "Delhi (as listed in our collected information)", type: "Private (as listed in our collected information)",
            seats: 120, ranking: "#52 in India", annualTuition: "₹8,50,000 per year", approximateAnnualTotal: "₹8,50,000 per year", nriFee: "₹2,700,000 per year (as listed in our collected information; not verified)",
            academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
            about: "The our college information summary labels this entry as a private institute in New Delhi, with 120 seats and a #52-in-India ranking. The name/location/type combination is not independently verified and should not be relied on until the exact institution is confirmed.",
            sourceUrl: "https://www.futuremindedu.in/colleges/indira-gandhi-institute-of-medical-sciences",
            flags: ["Identity/location concern: our college information summary pairs ‘Indira Gandhi Institute of Medical Sciences’ with New Delhi and labels it private. Confirm the exact institution and city before use; do not treat this record as a verified college listing.", "Fees and seat count are source-only claims with no year stated."]
        },
        {
            order: 8, slug: "army-college-of-medical-sciences",
            name: "Army College of Medical Sciences", shortName: "ACMS Delhi", city: "New Delhi", state: "Delhi", type: "Private (as listed in our collected information)",
            seats: 100, ranking: "#38 in India", annualTuition: "₹6,00,000 per year", approximateAnnualTotal: "₹6,00,000 per year", nriFee: "Not available (collected-information claim)",
            academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
            about: "The our college information summary describes Army College of Medical Sciences as a private institution in New Delhi and claims 100 MBBS seats and a #38-in-India ranking. The page's ranking method and year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/army-college-of-medical-sciences",
            flags: ["check the current admission eligibility/seat rules, institution classification and tuition with official sources; collected-information values are not verified."]
        },
        {
            order: 9, slug: "guru-gobind-singh-indraprastha-university",
            name: "Guru Gobind Singh Indraprastha University", shortName: "GGSIPU (our directory label)", city: "New Delhi", state: "Delhi", type: "Private (as listed in our collected information)",
            seats: 150, ranking: "#41 in India", annualTuition: "₹10,00,000 per year", approximateAnnualTotal: "₹10,00,000 per year", nriFee: "Not available (collected-information claim)",
            academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
            about: "The our college information summary labels Guru Gobind Singh Indraprastha University as a private medical institution and reports 150 seats. It does not identify a specific constituent or affiliated medical college in this entry.",
            sourceUrl: "https://www.futuremindedu.in/colleges/guru-gobind-singh-indraprastha-university",
            flags: ["Institution identity concern: the source names a university rather than specifying the medical college/programme to which the seat, fee and ranking claims apply. check the exact college and counselling route officially."]
        },
        {
            order: 10, slug: "south-delhi-medical-college",
            name: "South Delhi Medical College", shortName: "South Delhi Medical College", city: "New Delhi", state: "Delhi", type: "Private (as listed in our collected information)",
            seats: 120, ranking: "#55 in India", annualTuition: "₹11,00,000 per year", approximateAnnualTotal: "₹11,00,000 per year", nriFee: "Not available (collected-information claim)",
            academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
            about: "The our college information summary lists a private ‘South Delhi Medical College’ in New Delhi, with 120 seats and a #55-in-India ranking. This entry's exact institution identity and recognition are not independently verified.",
            sourceUrl: "https://www.futuremindedu.in/colleges/south-delhi-medical-college",
            flags: ["Identity concern: the source does not provide an official institution name or official institutional link. check existence, approval, current seat matrix and fee schedule before use."]
        },
        {
            order: 11, slug: "delhi-medical-college-and-hospital",
            name: "Delhi Medical College and Hospital", shortName: "Delhi Medical College & Hospital", city: "New Delhi", state: "Delhi", type: "Private (as listed in our collected information)",
            seats: 90, ranking: "#58 in India", annualTuition: "₹6,80,000 per year", approximateAnnualTotal: "₹6,80,000 per year", nriFee: "$35,000 per year (collected-information claim)",
            academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
            about: "The our college information summary lists ‘Delhi Medical College and Hospital’ as a private medical institution in New Delhi, reporting 90 seats and a #58-in-India ranking. Its exact institution identity is not independently verified.",
            sourceUrl: "https://www.futuremindedu.in/colleges/delhi-medical-college-and-hospital",
            flags: ["Identity concern: the source provides no official institution name/link to substantiate this listing. check existence, NMC status, counselling route, seat matrix and fees before relying on it."]
        },
        {
            order: 12, slug: "metropolitan-medical-college-delhi",
            name: "Metropolitan Medical College Delhi", shortName: "Metropolitan Medical College", city: "New Delhi", state: "Delhi", type: "Private (as listed in our collected information)",
            seats: 135, ranking: "#44 in India", annualTuition: "₹9,80,000 per year", approximateAnnualTotal: "₹9,80,000 per year", nriFee: "$35,000 per year (collected-information claim)",
            academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
            about: "The our college information summary lists ‘Metropolitan Medical College Delhi’ as a private medical institution in New Delhi, reporting 135 seats and a #44-in-India ranking. Its exact institution identity is not independently verified.",
            sourceUrl: "https://www.futuremindedu.in/colleges/metropolitan-medical-college-delhi",
            flags: ["Identity concern: the source provides no official institution name/link to substantiate this listing. check existence, NMC status, counselling route, seat matrix and fees before relying on it."]
        },
        {
            order: 13, slug: "grant-medical-college-gmc",
            name: "Grant Medical College (GMC)", shortName: "Grant Medical College", city: "Mumbai", state: "Maharashtra", type: "Government",
            seats: 200, ranking: "#7 in India", annualTuition: "₹3,000 per year", approximateAnnualTotal: "₹3,000 per year", nriFee: "Not available (collected-information claim)",
            academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
            about: "The our college information summary describes Grant Medical College as a government medical institution in Mumbai and claims 200 MBBS seats and a #7-in-India ranking. The page's ranking method and year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/grant-medical-college-gmc",
            flags: ["Ranking, seats, tuition and recognition wording are not independently confirmed listed information; confirm current official data and the fee year."]
        },
        {
            order: 14, slug: "kem-hospital-and-seth-gs-medical-college",
            name: "KEM Hospital and Seth G.S. Medical College", shortName: "KEM & Seth G.S. Medical College", city: "Mumbai", state: "Maharashtra", type: "Government",
            seats: 250, ranking: "#9 in India", annualTuition: "₹3,500 per year", approximateAnnualTotal: "₹3,500 per year", nriFee: "Not available (collected-information claim)",
            academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
            about: "The our college information summary describes KEM Hospital and Seth G.S. Medical College as a government medical institution in Mumbai and claims 250 MBBS seats and a #9-in-India ranking.",
            sourceUrl: "https://www.futuremindedu.in/colleges/kem-hospital-and-seth-gs-medical-college",
            flags: ["Potential duplicate: the same Seth G.S. Medical College/KEM Hospital pairing appears again as entry 16 under the reversed name, with different seats, ranking and fee claims. Resolve against official data before publication."]
        },
        {
            order: 15, slug: "bj-government-medical-college",
            name: "B.J. Government Medical College", shortName: "BJGMC Pune", city: "Pune", state: "Maharashtra", type: "Government",
            seats: 200, ranking: "#15 in India", annualTuition: "₹2,800 per year", approximateAnnualTotal: "₹2,800 per year", nriFee: "Not available (collected-information claim)",
            academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
            about: "The our college information summary describes B.J. Government Medical College as a government medical institution in Pune and claims 200 MBBS seats and a #15-in-India ranking.",
            sourceUrl: "https://www.futuremindedu.in/colleges/bj-government-medical-college",
            flags: ["Ranking, seats, tuition and recognition wording are not independently confirmed listed information; confirm current official data and the fee year."]
        },
        {
            order: 16, slug: "seth-gs-medical-college-and-kem-hospital",
            name: "Seth G.S. Medical College and KEM Hospital", shortName: "Seth G.S. & KEM (second source entry)", city: "Mumbai", state: "Maharashtra", type: "Government",
            seats: 180, ranking: "#11 in India", annualTuition: "₹4,000 per year", approximateAnnualTotal: "₹4,000 per year", nriFee: "Not available (collected-information claim)",
            academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
            about: "The our college information summary describes Seth G.S. Medical College and KEM Hospital as a government medical institution in Mumbai and claims 180 MBBS seats and a #11-in-India ranking.",
            sourceUrl: "https://www.futuremindedu.in/colleges/seth-gs-medical-college-and-kem-hospital",
            flags: ["Potential duplicate: the same Seth G.S. Medical College/KEM Hospital pairing appears at entry 14 under a reversed name, with conflicting seats (250 vs 180), ranking (#9 vs #11) and fees (₹3,500 vs ₹4,000). This duplicate is preserved only to match the existing college order."]
        },
        {
            order: 17, slug: "topiwala-national-medical-college",
            name: "Topiwala National Medical College", shortName: "TNMC Mumbai", city: "Mumbai", state: "Maharashtra", type: "Government",
            seats: 150, ranking: "#17 in India", annualTuition: "₹3,200 per year", approximateAnnualTotal: "₹3,200 per year", nriFee: "Not available (collected-information claim)",
            academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
            about: "The our college information summary describes Topiwala National Medical College as a government medical institution in Mumbai and claims 150 MBBS seats and a #17-in-India ranking.",
            sourceUrl: "https://www.futuremindedu.in/colleges/topiwala-national-medical-college",
            flags: ["Ranking, seats, tuition and recognition wording are not independently confirmed listed information; confirm current official data and the fee year."]
        },

        {
            order: 18, slug: "lokmanya-tilak-municipal-medical-college",
            name: "Lokmanya Tilak Municipal Medical College", shortName: "Lokmanya Tilak Municipal Medical College", city: "Mumbai", state: "Maharashtra", type: "GOVERNMENT",
            seats: "200", ranking: "#13 IN INDIA", annualTuition: "₹3,800 per year", approximateAnnualTotal: "₹3,800 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Lokmanya Tilak Municipal Medical College as a government medical college in Mumbai and lists 200 MBBS seats, fees of ₹3,800 per year, and a ranking label of #13 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/lokmanya-tilak-municipal-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 19, slug: "armed-forces-medical-college-afmc",
            name: "Armed Forces Medical College (AFMC)", shortName: "Armed Forces Medical College (AFMC)", city: "Pune", state: "Maharashtra", type: "GOVERNMENT",
            seats: "150", ranking: "#4 IN INDIA", annualTuition: "₹25,000 per year", approximateAnnualTotal: "₹25,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Armed Forces Medical College (AFMC) as a government medical college in Pune and lists 150 MBBS seats, fees of ₹25,000 per year, and a ranking label of #4 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/armed-forces-medical-college-afmc",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 20, slug: "mahatma-gandhi-institute-of-medical-sciences",
            name: "Mahatma Gandhi Institute of Medical Sciences", shortName: "Mahatma Gandhi Institute of Medical Sciences", city: "Nagpur", state: "Maharashtra", type: "GOVERNMENT",
            seats: "180", ranking: "#19 IN INDIA", annualTuition: "₹4,200 per year", approximateAnnualTotal: "₹4,200 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Mahatma Gandhi Institute of Medical Sciences as a government medical college in Nagpur and lists 180 MBBS seats, fees of ₹4,200 per year, and a ranking label of #19 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/mahatma-gandhi-institute-of-medical-sciences",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 21, slug: "siddhartha-medical-college",
            name: "Siddhartha Medical College", shortName: "Siddhartha Medical College", city: "Nashik", state: "Maharashtra", type: "GOVERNMENT",
            seats: "150", ranking: "#26 IN INDIA", annualTuition: "₹3,400 per year", approximateAnnualTotal: "₹3,400 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Siddhartha Medical College as a government medical college in Nashik and lists 150 MBBS seats, fees of ₹3,400 per year, and a ranking label of #26 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/siddhartha-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 22, slug: "maharashtra-institute-of-medical-sciences",
            name: "Maharashtra Institute of Medical Sciences", shortName: "Maharashtra Institute of Medical Sciences", city: "Aurangabad", state: "Maharashtra", type: "GOVERNMENT",
            seats: "160", ranking: "#28 IN INDIA", annualTuition: "₹3,800 per year", approximateAnnualTotal: "₹3,800 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Maharashtra Institute of Medical Sciences as a government medical college in Aurangabad and lists 160 MBBS seats, fees of ₹3,800 per year, and a ranking label of #28 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/maharashtra-institute-of-medical-sciences",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 23, slug: "bharati-vidyapeeth-medical-college",
            name: "Bharati Vidyapeeth Medical College", shortName: "Bharati Vidyapeeth Medical College", city: "Pune", state: "Maharashtra", type: "PRIVATE",
            seats: "200", ranking: "#35 IN INDIA", annualTuition: "₹25,96,000 per year", approximateAnnualTotal: "₹25,96,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Bharati Vidyapeeth Medical College as a private medical college in Pune and lists 200 MBBS seats, fees of ₹25,96,000 per year, and a ranking label of #35 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/bharati-vidyapeeth-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 24, slug: "symbiosis-medical-college",
            name: "Symbiosis Medical College", shortName: "Symbiosis Medical College", city: "Pune", state: "Maharashtra", type: "PRIVATE",
            seats: "150", ranking: "#32 IN INDIA", annualTuition: "₹10,50,000 per year", approximateAnnualTotal: "₹10,50,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Symbiosis Medical College as a private medical college in Pune and lists 150 MBBS seats, fees of ₹10,50,000 per year, and a ranking label of #32 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/symbiosis-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 25, slug: "dy-patil-medical-college",
            name: "D.Y. Patil Medical College", shortName: "D.Y. Patil Medical College", city: "Navi Mumbai", state: "Maharashtra", type: "PRIVATE",
            seats: "250", ranking: "#30 IN INDIA", annualTuition: "₹25,00,000 per year", approximateAnnualTotal: "₹25,00,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes D.Y. Patil Medical College as a private medical college in Navi Mumbai and lists 250 MBBS seats, fees of ₹25,00,000 per year, and a ranking label of #30 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/dy-patil-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 26, slug: "kj-somaiya-medical-college",
            name: "K.J. Somaiya Medical College", shortName: "K.J. Somaiya Medical College", city: "Mumbai", state: "Maharashtra", type: "PRIVATE",
            seats: "150", ranking: "#37 IN INDIA", annualTuition: "₹12,00,000 per year", approximateAnnualTotal: "₹12,00,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes K.J. Somaiya Medical College as a private medical college in Mumbai and lists 150 MBBS seats, fees of ₹12,00,000 per year, and a ranking label of #37 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/kj-somaiya-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 27, slug: "tata-memorial-hospital-medical-college",
            name: "Tata Memorial Hospital Medical College", shortName: "Tata Memorial Hospital Medical College", city: "Mumbai", state: "Maharashtra", type: "PRIVATE",
            seats: "100", ranking: "#39 IN INDIA", annualTuition: "₹12,00,000 per year", approximateAnnualTotal: "₹12,00,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Tata Memorial Hospital Medical College as a private medical college in Mumbai and lists 100 MBBS seats, fees of ₹12,00,000 per year, and a ranking label of #39 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/tata-memorial-hospital-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 28, slug: "nashik-medical-college",
            name: "Nashik Medical College", shortName: "Nashik Medical College", city: "Nashik", state: "Maharashtra", type: "PRIVATE",
            seats: "120", ranking: "#50 IN INDIA", annualTuition: "₹14,00,000 per year", approximateAnnualTotal: "₹14,00,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Nashik Medical College as a private medical college in Nashik and lists 120 MBBS seats, fees of ₹14,00,000 per year, and a ranking label of #50 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/nashik-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 29, slug: "aurangabad-medical-college",
            name: "Aurangabad Medical College", shortName: "Aurangabad Medical College", city: "Aurangabad", state: "Maharashtra", type: "PRIVATE",
            seats: "110", ranking: "#53 IN INDIA", annualTuition: "₹13,00,000 per year", approximateAnnualTotal: "₹13,00,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Aurangabad Medical College as a private medical college in Aurangabad and lists 110 MBBS seats, fees of ₹13,00,000 per year, and a ranking label of #53 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/aurangabad-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 30, slug: "solapur-medical-college",
            name: "Solapur Medical College", shortName: "Solapur Medical College", city: "Solapur", state: "Maharashtra", type: "PRIVATE",
            seats: "100", ranking: "#57 IN INDIA", annualTuition: "₹11,00,000 per year", approximateAnnualTotal: "₹11,00,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Solapur Medical College as a private medical college in Solapur and lists 100 MBBS seats, fees of ₹11,00,000 per year, and a ranking label of #57 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/solapur-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 31, slug: "kolhapur-medical-college",
            name: "Kolhapur Medical College", shortName: "Kolhapur Medical College", city: "Kolhapur", state: "Maharashtra", type: "PRIVATE",
            seats: "90", ranking: "#59 IN INDIA", annualTuition: "₹10,00,000 per year", approximateAnnualTotal: "₹10,00,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Kolhapur Medical College as a private medical college in Kolhapur and lists 90 MBBS seats, fees of ₹10,00,000 per year, and a ranking label of #59 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/kolhapur-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 32, slug: "sangli-medical-college",
            name: "Sangli Medical College", shortName: "Sangli Medical College", city: "Sangli", state: "Maharashtra", type: "PRIVATE",
            seats: "80", ranking: "#61 IN INDIA", annualTuition: "₹9,00,000 per year", approximateAnnualTotal: "₹9,00,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Sangli Medical College as a private medical college in Sangli and lists 80 MBBS seats, fees of ₹9,00,000 per year, and a ranking label of #61 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/sangli-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 33, slug: "satara-medical-college",
            name: "Satara Medical College", shortName: "Satara Medical College", city: "Satara", state: "Maharashtra", type: "PRIVATE",
            seats: "70", ranking: "#63 IN INDIA", annualTuition: "₹8,00,000 per year", approximateAnnualTotal: "₹8,00,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Satara Medical College as a private medical college in Satara and lists 70 MBBS seats, fees of ₹8,00,000 per year, and a ranking label of #63 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/satara-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 34, slug: "amravati-medical-college",
            name: "Amravati Medical College", shortName: "Amravati Medical College", city: "Amravati", state: "Maharashtra", type: "PRIVATE",
            seats: "60", ranking: "#65 IN INDIA", annualTuition: "₹7,00,000 per year", approximateAnnualTotal: "₹7,00,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Amravati Medical College as a private medical college in Amravati and lists 60 MBBS seats, fees of ₹7,00,000 per year, and a ranking label of #65 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/amravati-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 35, slug: "acpm-medical-college",
            name: "ACPM Medical College", shortName: "ACPM Medical College", city: "Dhule", state: "Maharashtra", type: "TRUST",
            seats: "100", ranking: "Not stated in the collected information", annualTuition: "₹8,00,000 per year", approximateAnnualTotal: "₹8,00,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes ACPM Medical College as a trust medical college in Dhule and lists 100 MBBS seats, fees of ₹8,00,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/acpm-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 36, slug: "ashwini-rural-medical-college",
            name: "Ashwini Rural Medical College", shortName: "Ashwini Rural Medical College", city: "Solapur", state: "Maharashtra", type: "TRUST",
            seats: "150", ranking: "Not stated in the collected information", annualTuition: "₹1,033,000 per year", approximateAnnualTotal: "₹1,033,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Ashwini Rural Medical College as a trust medical college in Solapur and lists 150 MBBS seats, fees of ₹1,033,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/ashwini-rural-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 37, slug: "bharatratna-atal-bihari-vajpayee-medical-college",
            name: "Bharatratna Atal Bihari Vajpayee Medical College", shortName: "Bharatratna Atal Bihari Vajpayee Medical College", city: "Pune", state: "Maharashtra", type: "TRUST",
            seats: "100", ranking: "Not stated in the collected information", annualTuition: "₹750,000 per year", approximateAnnualTotal: "₹750,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Bharatratna Atal Bihari Vajpayee Medical College as a trust medical college in Pune and lists 100 MBBS seats, fees of ₹750,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/bharatratna-atal-bihari-vajpayee-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 38, slug: "bkl-walawalkar-rural-medical-college",
            name: "B.K.L. Walawalkar Rural Medical College", shortName: "B.K.L. Walawalkar Rural Medical College", city: "Ratnagiri", state: "Maharashtra", type: "TRUST",
            seats: "150", ranking: "Not stated in the collected information", annualTuition: "₹1,165,000 per year", approximateAnnualTotal: "₹1,165,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes B.K.L. Walawalkar Rural Medical College as a trust medical college in Ratnagiri and lists 150 MBBS seats, fees of ₹1,165,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/bkl-walawalkar-rural-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 39, slug: "dr-d-y-patil-medical-college",
            name: "Dr. D Y Patil Medical College", shortName: "Dr. D Y Patil Medical College", city: "Navi Mumbai", state: "Maharashtra", type: "TRUST",
            seats: "250", ranking: "Not stated in the collected information", annualTuition: "₹2,700,000 per year", approximateAnnualTotal: "₹2,700,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Dr. D Y Patil Medical College as a trust medical college in Navi Mumbai and lists 250 MBBS seats, fees of ₹2,700,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/dr-d-y-patil-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 40, slug: "tasgaonkar-medical-college",
            name: "Tasgaonkar Medical College", shortName: "Tasgaonkar Medical College", city: "Raigad", state: "Maharashtra", type: "TRUST",
            seats: "100", ranking: "Not stated in the collected information", annualTuition: "₹621,500 per year", approximateAnnualTotal: "₹621,500 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Tasgaonkar Medical College as a trust medical college in Raigad and lists 100 MBBS seats, fees of ₹621,500 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/tasgaonkar-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 41, slug: "panjabrao-deshmukh-memorial-medical-college",
            name: "Panjabrao Deshmukh Memorial Medical College", shortName: "Panjabrao Deshmukh Memorial Medical College", city: "Amravati", state: "Maharashtra", type: "TRUST",
            seats: "150", ranking: "Not stated in the collected information", annualTuition: "₹1,078,000 per year", approximateAnnualTotal: "₹1,078,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Panjabrao Deshmukh Memorial Medical College as a trust medical college in Amravati and lists 150 MBBS seats, fees of ₹1,078,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/panjabrao-deshmukh-memorial-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 42, slug: "dr-ulhas-patil-medical-college",
            name: "Dr. Ulhas Patil Medical College", shortName: "Dr. Ulhas Patil Medical College", city: "Jalgaon", state: "Maharashtra", type: "TRUST",
            seats: "200", ranking: "Not stated in the collected information", annualTuition: "₹700,000 per year", approximateAnnualTotal: "₹700,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Dr. Ulhas Patil Medical College as a trust medical college in Jalgaon and lists 200 MBBS seats, fees of ₹700,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/dr-ulhas-patil-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 43, slug: "dr-vasantrao-pawar-medical-college",
            name: "Dr. Vasantrao Pawar Medical College", shortName: "Dr. Vasantrao Pawar Medical College", city: "Nashik", state: "Maharashtra", type: "TRUST",
            seats: "150", ranking: "Not stated in the collected information", annualTuition: "₹1,196,000 per year", approximateAnnualTotal: "₹1,196,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Dr. Vasantrao Pawar Medical College as a trust medical college in Nashik and lists 150 MBBS seats, fees of ₹1,196,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/dr-vasantrao-pawar-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 44, slug: "vithalrao-vikhe-patil-foundation-medical-college",
            name: "Vithalrao Vikhe Patil Foundation Medical College", shortName: "Vithalrao Vikhe Patil Foundation Medical College", city: "Ahmednagar", state: "Maharashtra", type: "TRUST",
            seats: "200", ranking: "Not stated in the collected information", annualTuition: "₹1,300,000 per year", approximateAnnualTotal: "₹1,300,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Vithalrao Vikhe Patil Foundation Medical College as a trust medical college in Ahmednagar and lists 200 MBBS seats, fees of ₹1,300,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/vithalrao-vikhe-patil-foundation-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 45, slug: "indian-institute-of-medical-science",
            name: "Indian Institute of Medical Science", shortName: "Indian Institute of Medical Science", city: "Jalna", state: "Maharashtra", type: "TRUST",
            seats: "150", ranking: "Not stated in the collected information", annualTuition: "₹750,000 per year", approximateAnnualTotal: "₹750,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Indian Institute of Medical Science as a trust medical college in Jalna and lists 150 MBBS seats, fees of ₹750,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/indian-institute-of-medical-science",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 46, slug: "jawaharlal-nehru-medical-college",
            name: "Jawaharlal Nehru Medical College", shortName: "Jawaharlal Nehru Medical College", city: "Wardha", state: "Maharashtra", type: "TRUST",
            seats: "250", ranking: "Not stated in the collected information", annualTuition: "₹2,200,000 per year", approximateAnnualTotal: "₹2,200,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Jawaharlal Nehru Medical College as a trust medical college in Wardha and lists 250 MBBS seats, fees of ₹2,200,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/jawaharlal-nehru-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 47, slug: "krishna-institute-of-medical-sciences",
            name: "Krishna Institute of Medical Sciences", shortName: "Krishna Institute of Medical Sciences", city: "Karad", state: "Maharashtra", type: "TRUST",
            seats: "250", ranking: "Not stated in the collected information", annualTuition: "₹2,450,000 per year", approximateAnnualTotal: "₹2,450,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Krishna Institute of Medical Sciences as a trust medical college in Karad and lists 250 MBBS seats, fees of ₹2,450,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/krishna-institute-of-medical-sciences",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 48, slug: "mimer-medical-college",
            name: "MIMER Medical College", shortName: "MIMER Medical College", city: "Pune", state: "Maharashtra", type: "TRUST",
            seats: "150", ranking: "Not stated in the collected information", annualTuition: "₹1,130,000 per year", approximateAnnualTotal: "₹1,130,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes MIMER Medical College as a trust medical college in Pune and lists 150 MBBS seats, fees of ₹1,130,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/mimer-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 49, slug: "mimsr-medical-college",
            name: "MIMSR Medical College", shortName: "MIMSR Medical College", city: "Latur", state: "Maharashtra", type: "TRUST",
            seats: "150", ranking: "Not stated in the collected information", annualTuition: "₹945,000 per year", approximateAnnualTotal: "₹945,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes MIMSR Medical College as a trust medical college in Latur and lists 150 MBBS seats, fees of ₹945,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/mimsr-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 50, slug: "mgm-medical-college",
            name: "MGM Medical College", shortName: "MGM Medical College", city: "Navi Mumbai", state: "Maharashtra", type: "TRUST",
            seats: "100", ranking: "Not stated in the collected information", annualTuition: "₹2,350,000 per year", approximateAnnualTotal: "₹2,350,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes MGM Medical College as a trust medical college in Navi Mumbai and lists 100 MBBS seats, fees of ₹2,350,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/mgm-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 51, slug: "malati-vasantdada-patil-medical-college",
            name: "MALATI Vasantdada Patil Medical College", shortName: "MALATI Vasantdada Patil Medical College", city: "Sangli", state: "Maharashtra", type: "SOCIETY",
            seats: "50", ranking: "Not stated in the collected information", annualTuition: "₹850,000 per year", approximateAnnualTotal: "₹850,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes MALATI Vasantdada Patil Medical College as a society medical college in Sangli and lists 50 MBBS seats, fees of ₹850,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/malati-vasantdada-patil-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 52, slug: "n-k-p-salve-institute-of-medical-sciences",
            name: "N. K. P. Salve Institute of Medical Sciences", shortName: "N. K. P. Salve Institute of Medical Sciences", city: "Nagpur", state: "Maharashtra", type: "TRUST",
            seats: "250", ranking: "Not stated in the collected information", annualTuition: "₹1,300,000 per year", approximateAnnualTotal: "₹1,300,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes N. K. P. Salve Institute of Medical Sciences as a trust medical college in Nagpur and lists 250 MBBS seats, fees of ₹1,300,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/n-k-p-salve-institute-of-medical-sciences",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 53, slug: "padmashree-dr-dy-patil-medical-college",
            name: "Padmashree Dr. D.Y. Patil Medical College", shortName: "Padmashree Dr. D.Y. Patil Medical College", city: "Navi Mumbai", state: "Maharashtra", type: "TRUST",
            seats: "250", ranking: "Not stated in the collected information", annualTuition: "₹2,700,000 per year", approximateAnnualTotal: "₹2,700,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Padmashree Dr. D.Y. Patil Medical College as a trust medical college in Navi Mumbai and lists 250 MBBS seats, fees of ₹2,700,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/padmashree-dr-dy-patil-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 54, slug: "parbhani-medical-college",
            name: "Parbhani Medical College", shortName: "Parbhani Medical College", city: "Parbhani", state: "Maharashtra", type: "SOCIETY",
            seats: "150", ranking: "Not stated in the collected information", annualTuition: "₹754,000 per year", approximateAnnualTotal: "₹754,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Parbhani Medical College as a society medical college in Parbhani and lists 150 MBBS seats, fees of ₹754,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/parbhani-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 55, slug: "prakash-institute-of-medical-sciences",
            name: "Prakash Institute of Medical Sciences", shortName: "Prakash Institute of Medical Sciences", city: "Sangli", state: "Maharashtra", type: "TRUST",
            seats: "150", ranking: "Not stated in the collected information", annualTuition: "₹851,000 per year", approximateAnnualTotal: "₹851,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Prakash Institute of Medical Sciences as a trust medical college in Sangli and lists 150 MBBS seats, fees of ₹851,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/prakash-institute-of-medical-sciences",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 56, slug: "rk-damani-medical-college",
            name: "RK Damani Medical College", shortName: "RK Damani Medical College", city: "Akola", state: "Maharashtra", type: "TRUST",
            seats: "150", ranking: "Not stated in the collected information", annualTuition: "₹850,000 per year", approximateAnnualTotal: "₹850,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes RK Damani Medical College as a trust medical college in Akola and lists 150 MBBS seats, fees of ₹850,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/rk-damani-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 57, slug: "rural-medical-college",
            name: "Rural Medical College", shortName: "Rural Medical College", city: "Loni", state: "Maharashtra", type: "TRUST",
            seats: "200", ranking: "Not stated in the collected information", annualTuition: "₹1,900,000 per year", approximateAnnualTotal: "₹1,900,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Rural Medical College as a trust medical college in Loni and lists 200 MBBS seats, fees of ₹1,900,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/rural-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 58, slug: "sindhudurg-medical-college",
            name: "Sindhudurg Medical College", shortName: "Sindhudurg Medical College", city: "Sindhudurg", state: "Maharashtra", type: "TRUST",
            seats: "149", ranking: "Not stated in the collected information", annualTuition: "₹764,000 per year", approximateAnnualTotal: "₹764,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Sindhudurg Medical College as a trust medical college in Sindhudurg and lists 149 MBBS seats, fees of ₹764,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/sindhudurg-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 59, slug: "sakhubai-medical-college",
            name: "Sakhubai Medical College", shortName: "Sakhubai Medical College", city: "Solapur", state: "Maharashtra", type: "TRUST",
            seats: "100", ranking: "Not stated in the collected information", annualTuition: "₹772,000 per year", approximateAnnualTotal: "₹772,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Sakhubai Medical College as a trust medical college in Solapur and lists 100 MBBS seats, fees of ₹772,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/sakhubai-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 60, slug: "terna-medical-college",
            name: "Terna Medical College", shortName: "Terna Medical College", city: "Navi Mumbai", state: "Maharashtra", type: "TRUST",
            seats: "150", ranking: "Not stated in the collected information", annualTuition: "₹790,000 per year", approximateAnnualTotal: "₹790,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Terna Medical College as a trust medical college in Navi Mumbai and lists 150 MBBS seats, fees of ₹790,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/terna-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 61, slug: "datta-meghe-medical-college",
            name: "Datta Meghe Medical College", shortName: "Datta Meghe Medical College", city: "Nagpur", state: "Maharashtra", type: "PRIVATE",
            seats: "250", ranking: "Not stated in the collected information", annualTuition: "₹2,325,000 per year", approximateAnnualTotal: "₹2,325,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Datta Meghe Medical College as a private medical college in Nagpur and lists 250 MBBS seats, fees of ₹2,325,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/datta-meghe-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 62, slug: "rajendra-gode-medical-college",
            name: "Rajendra Gode Medical College", shortName: "Rajendra Gode Medical College", city: "Amravati", state: "Maharashtra", type: "PRIVATE",
            seats: "150", ranking: "Not stated in the collected information", annualTuition: "₹771,000 per year", approximateAnnualTotal: "₹771,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Rajendra Gode Medical College as a private medical college in Amravati and lists 150 MBBS seats, fees of ₹771,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/rajendra-gode-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 63, slug: "king-georges-medical-university-kgmu",
            name: "King George's Medical University (KGMU)", shortName: "King George's Medical University (KGMU)", city: "Lucknow", state: "Uttar Pradesh", type: "GOVERNMENT",
            seats: "250", ranking: "#3 IN INDIA", annualTuition: "₹2,500 per year", approximateAnnualTotal: "₹2,500 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes King George's Medical University (KGMU) as a government medical college in Lucknow and lists 250 MBBS seats, fees of ₹2,500 per year, and a ranking label of #3 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/king-georges-medical-university-kgmu",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 64, slug: "banaras-hindu-university-bhu",
            name: "Banaras Hindu University (BHU)", shortName: "Banaras Hindu University (BHU)", city: "Varanasi", state: "Uttar Pradesh", type: "GOVERNMENT",
            seats: "200", ranking: "#6 IN INDIA", annualTuition: "₹2,000 per year", approximateAnnualTotal: "₹2,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Banaras Hindu University (BHU) as a government medical college in Varanasi and lists 200 MBBS seats, fees of ₹2,000 per year, and a ranking label of #6 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/banaras-hindu-university-bhu",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 65, slug: "jawaharlal-nehru-medical-college-jnmc",
            name: "Jawaharlal Nehru Medical College (JNMC)", shortName: "Jawaharlal Nehru Medical College (JNMC)", city: "Aligarh", state: "Uttar Pradesh", type: "GOVERNMENT",
            seats: "150", ranking: "#18 IN INDIA", annualTuition: "₹3,000 per year", approximateAnnualTotal: "₹3,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Jawaharlal Nehru Medical College (JNMC) as a government medical college in Aligarh and lists 150 MBBS seats, fees of ₹3,000 per year, and a ranking label of #18 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/jawaharlal-nehru-medical-college-jnmc",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 66, slug: "sanjay-gandhi-post-graduate-institute-of-medical-sciences",
            name: "Sanjay Gandhi Post Graduate Institute of Medical Sciences", shortName: "Sanjay Gandhi Post Graduate Institute of Medical Sciences", city: "Lucknow", state: "Uttar Pradesh", type: "GOVERNMENT",
            seats: "180", ranking: "#10 IN INDIA", annualTuition: "₹4,000 per year", approximateAnnualTotal: "₹4,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Sanjay Gandhi Post Graduate Institute of Medical Sciences as a government medical college in Lucknow and lists 180 MBBS seats, fees of ₹4,000 per year, and a ranking label of #10 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/sanjay-gandhi-post-graduate-institute-of-medical-sciences",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 67, slug: "moti-lal-nehru-medical-college",
            name: "Moti Lal Nehru Medical College", shortName: "Moti Lal Nehru Medical College", city: "Allahabad", state: "Uttar Pradesh", type: "GOVERNMENT",
            seats: "200", ranking: "#22 IN INDIA", annualTuition: "₹2,800 per year", approximateAnnualTotal: "₹2,800 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Moti Lal Nehru Medical College as a government medical college in Allahabad and lists 200 MBBS seats, fees of ₹2,800 per year, and a ranking label of #22 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/moti-lal-nehru-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 68, slug: "gandhi-medical-college",
            name: "Gandhi Medical College", shortName: "Gandhi Medical College", city: "Bhopal", state: "Uttar Pradesh", type: "GOVERNMENT",
            seats: "150", ranking: "#24 IN INDIA", annualTuition: "₹3,200 per year", approximateAnnualTotal: "₹3,200 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Gandhi Medical College as a government medical college in Bhopal and lists 150 MBBS seats, fees of ₹3,200 per year, and a ranking label of #24 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/gandhi-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 69, slug: "maharani-laxmi-bai-medical-college",
            name: "Maharani Laxmi Bai Medical College", shortName: "Maharani Laxmi Bai Medical College", city: "Jhansi", state: "Uttar Pradesh", type: "GOVERNMENT",
            seats: "120", ranking: "#31 IN INDIA", annualTuition: "₹2,600 per year", approximateAnnualTotal: "₹2,600 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Maharani Laxmi Bai Medical College as a government medical college in Jhansi and lists 120 MBBS seats, fees of ₹2,600 per year, and a ranking label of #31 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/maharani-laxmi-bai-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 70, slug: "lala-lajpat-rai-medical-college",
            name: "Lala Lajpat Rai Medical College", shortName: "Lala Lajpat Rai Medical College", city: "Meerut", state: "Uttar Pradesh", type: "GOVERNMENT",
            seats: "160", ranking: "#34 IN INDIA", annualTuition: "₹3,000 per year", approximateAnnualTotal: "₹3,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Lala Lajpat Rai Medical College as a government medical college in Meerut and lists 160 MBBS seats, fees of ₹3,000 per year, and a ranking label of #34 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/lala-lajpat-rai-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 71, slug: "sarojini-naidu-medical-college",
            name: "Sarojini Naidu Medical College", shortName: "Sarojini Naidu Medical College", city: "Agra", state: "Uttar Pradesh", type: "GOVERNMENT",
            seats: "140", ranking: "#36 IN INDIA", annualTuition: "₹2,900 per year", approximateAnnualTotal: "₹2,900 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Sarojini Naidu Medical College as a government medical college in Agra and lists 140 MBBS seats, fees of ₹2,900 per year, and a ranking label of #36 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/sarojini-naidu-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 72, slug: "uttar-pradesh-university-of-medical-sciences",
            name: "Uttar Pradesh University of Medical Sciences", shortName: "Uttar Pradesh University of Medical Sciences", city: "Saifai", state: "Uttar Pradesh", type: "GOVERNMENT",
            seats: "100", ranking: "#38 IN INDIA", annualTuition: "₹3,100 per year", approximateAnnualTotal: "₹3,100 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Uttar Pradesh University of Medical Sciences as a government medical college in Saifai and lists 100 MBBS seats, fees of ₹3,100 per year, and a ranking label of #38 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/uttar-pradesh-university-of-medical-sciences",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 73, slug: "dr-ram-manohar-lohia-institute-of-medical-sciences",
            name: "Dr. Ram Manohar Lohia Institute of Medical Sciences", shortName: "Dr. Ram Manohar Lohia Institute of Medical Sciences", city: "Lucknow", state: "Uttar Pradesh", type: "GOVERNMENT",
            seats: "130", ranking: "#41 IN INDIA", annualTuition: "₹3,300 per year", approximateAnnualTotal: "₹3,300 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Dr. Ram Manohar Lohia Institute of Medical Sciences as a government medical college in Lucknow and lists 130 MBBS seats, fees of ₹3,300 per year, and a ranking label of #41 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/dr-ram-manohar-lohia-institute-of-medical-sciences",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 74, slug: "baba-raghav-das-medical-college",
            name: "Baba Raghav Das Medical College", shortName: "Baba Raghav Das Medical College", city: "Gorakhpur", state: "Uttar Pradesh", type: "GOVERNMENT",
            seats: "110", ranking: "#43 IN INDIA", annualTuition: "₹2,700 per year", approximateAnnualTotal: "₹2,700 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Baba Raghav Das Medical College as a government medical college in Gorakhpur and lists 110 MBBS seats, fees of ₹2,700 per year, and a ranking label of #43 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/baba-raghav-das-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 75, slug: "maharaja-gaj-singh-medical-college",
            name: "Maharaja Gaj Singh Medical College", shortName: "Maharaja Gaj Singh Medical College", city: "Kanpur", state: "Uttar Pradesh", type: "GOVERNMENT",
            seats: "120", ranking: "#45 IN INDIA", annualTuition: "₹3,400 per year", approximateAnnualTotal: "₹3,400 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Maharaja Gaj Singh Medical College as a government medical college in Kanpur and lists 120 MBBS seats, fees of ₹3,400 per year, and a ranking label of #45 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/maharaja-gaj-singh-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 76, slug: "shri-ram-murti-smarak-institute-of-medical-sciences",
            name: "Shri Ram Murti Smarak Institute of Medical Sciences", shortName: "Shri Ram Murti Smarak Institute of Medical Sciences", city: "Bareilly", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "200", ranking: "#54 IN INDIA", annualTuition: "₹19,78,214 per year", approximateAnnualTotal: "₹19,78,214 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Shri Ram Murti Smarak Institute of Medical Sciences as a private medical college in Bareilly and lists 200 MBBS seats, fees of ₹19,78,214 per year, and a ranking label of #54 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/shri-ram-murti-smarak-institute-of-medical-sciences",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 77, slug: "hind-institute-of-medical-sciences",
            name: "Hind Institute of Medical Sciences", shortName: "Hind Institute of Medical Sciences", city: "Sultanpur", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "150", ranking: "#58 IN INDIA", annualTuition: "₹12,92,675 per year", approximateAnnualTotal: "₹12,92,675 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Hind Institute of Medical Sciences as a private medical college in Sultanpur and lists 150 MBBS seats, fees of ₹12,92,675 per year, and a ranking label of #58 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/hind-institute-of-medical-sciences",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 78, slug: "santosh-medical-college",
            name: "Santosh Medical College", shortName: "Santosh Medical College", city: "Ghaziabad", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "150", ranking: "#47 IN INDIA", annualTuition: "₹24,00,000 per year", approximateAnnualTotal: "₹24,00,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Santosh Medical College as a private medical college in Ghaziabad and lists 150 MBBS seats, fees of ₹24,00,000 per year, and a ranking label of #47 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/santosh-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 79, slug: "saraswathi-institute-of-medical-sciences",
            name: "Saraswathi Institute of Medical Sciences", shortName: "Saraswathi Institute of Medical Sciences", city: "Ghaziabad", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "150", ranking: "#52 IN INDIA", annualTuition: "₹13,00,000 per year", approximateAnnualTotal: "₹13,00,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Saraswathi Institute of Medical Sciences as a private medical college in Ghaziabad and lists 150 MBBS seats, fees of ₹13,00,000 per year, and a ranking label of #52 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/saraswathi-institute-of-medical-sciences",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 80, slug: "teerthanker-mahaveer-medical-college",
            name: "Teerthanker Mahaveer Medical College", shortName: "Teerthanker Mahaveer Medical College", city: "Moradabad", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "250", ranking: "#56 IN INDIA", annualTuition: "₹16,20,000 per year", approximateAnnualTotal: "₹16,20,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Teerthanker Mahaveer Medical College as a private medical college in Moradabad and lists 250 MBBS seats, fees of ₹16,20,000 per year, and a ranking label of #56 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/teerthanker-mahaveer-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 81, slug: "rohilkhand-medical-college",
            name: "Rohilkhand Medical College", shortName: "Rohilkhand Medical College", city: "Bareilly", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "250", ranking: "#60 IN INDIA", annualTuition: "₹18,72,361 per year", approximateAnnualTotal: "₹18,72,361 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Rohilkhand Medical College as a private medical college in Bareilly and lists 250 MBBS seats, fees of ₹18,72,361 per year, and a ranking label of #60 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/rohilkhand-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 82, slug: "siddhartha-institute-of-medical-sciences",
            name: "Siddhartha Institute of Medical Sciences", shortName: "Siddhartha Institute of Medical Sciences", city: "Kanpur", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "80", ranking: "#62 IN INDIA", annualTuition: "₹8,00,000 per year", approximateAnnualTotal: "₹8,00,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Siddhartha Institute of Medical Sciences as a private medical college in Kanpur and lists 80 MBBS seats, fees of ₹8,00,000 per year, and a ranking label of #62 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/siddhartha-institute-of-medical-sciences",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 83, slug: "prasad-institute-of-medical-sciences",
            name: "Prasad Institute of Medical Sciences", shortName: "Prasad Institute of Medical Sciences", city: "Lucknow", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "150", ranking: "#64 IN INDIA", annualTuition: "₹11,03,932 per year", approximateAnnualTotal: "₹11,03,932 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Prasad Institute of Medical Sciences as a private medical college in Lucknow and lists 150 MBBS seats, fees of ₹11,03,932 per year, and a ranking label of #64 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/prasad-institute-of-medical-sciences",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 84, slug: "mayo-institute-of-medical-sciences",
            name: "Mayo Institute of Medical Sciences", shortName: "Mayo Institute of Medical Sciences", city: "Lucknow", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "50", ranking: "#66 IN INDIA", annualTuition: "₹6,00,000 per year", approximateAnnualTotal: "₹6,00,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Mayo Institute of Medical Sciences as a private medical college in Lucknow and lists 50 MBBS seats, fees of ₹6,00,000 per year, and a ranking label of #66 IN INDIA. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/mayo-institute-of-medical-sciences",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 85, slug: "autonomous-state-medical-college",
            name: "Autonomous State Medical College", shortName: "Autonomous State Medical College", city: "Uttar Pradesh", state: "Uttar Pradesh", type: "GOVERNMENT",
            seats: "100", ranking: "Not stated in the collected information", annualTuition: "Contact for Fees", approximateAnnualTotal: "Contact for Fees", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Autonomous State Medical College as a government medical college in Uttar Pradesh and lists 100 MBBS seats, fees of Contact for Fees, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/autonomous-state-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 86, slug: "career-instt-of-medical-sciences",
            name: "Career Instt. Of Medical Sciences", shortName: "Career Instt. Of Medical Sciences", city: "Lucknow", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "150", ranking: "Not stated in the collected information", annualTuition: "₹16,50,000 per year", approximateAnnualTotal: "₹16,50,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Career Instt. Of Medical Sciences as a private medical college in Lucknow and lists 150 MBBS seats, fees of ₹16,50,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/career-instt-of-medical-sciences",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 87, slug: "dr-bs-kushwah-medical-college",
            name: "Dr. B.S. Kushwah Medical College", shortName: "Dr. B.S. Kushwah Medical College", city: "Kanpur", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "150", ranking: "Not stated in the collected information", annualTuition: "₹14,14,159 per year", approximateAnnualTotal: "₹14,14,159 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Dr. B.S. Kushwah Medical College as a private medical college in Kanpur and lists 150 MBBS seats, fees of ₹14,14,159 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/dr-bs-kushwah-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 88, slug: "dr-kns-memorial-medical-college",
            name: "Dr. KNS Memorial Medical College", shortName: "Dr. KNS Memorial Medical College", city: "Lucknow", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "250", ranking: "Not stated in the collected information", annualTuition: "₹11,21,162 per year", approximateAnnualTotal: "₹11,21,162 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Dr. KNS Memorial Medical College as a private medical college in Lucknow and lists 250 MBBS seats, fees of ₹11,21,162 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/dr-kns-memorial-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 89, slug: "era-lucknow-medical-college",
            name: "Era Lucknow Medical College", shortName: "Era Lucknow Medical College", city: "Lucknow", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "250", ranking: "Not stated in the collected information", annualTuition: "₹16,60,000 per year", approximateAnnualTotal: "₹16,60,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Era Lucknow Medical College as a private medical college in Lucknow and lists 250 MBBS seats, fees of ₹16,60,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/era-lucknow-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 90, slug: "fh-medical-college",
            name: "F.H. Medical College", shortName: "F.H. Medical College", city: "Agra", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "250", ranking: "Not stated in the collected information", annualTuition: "₹17,95,000 per year", approximateAnnualTotal: "₹17,95,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes F.H. Medical College as a private medical college in Agra and lists 250 MBBS seats, fees of ₹17,95,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/fh-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 91, slug: "gs-medical-college",
            name: "G.S. Medical College", shortName: "G.S. Medical College", city: "Hapur", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "250", ranking: "Not stated in the collected information", annualTuition: "₹14,42,654 per year", approximateAnnualTotal: "₹14,42,654 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes G.S. Medical College as a private medical college in Hapur and lists 250 MBBS seats, fees of ₹14,42,654 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/gs-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 92, slug: "heritage-institute-of-medical-sciences",
            name: "Heritage Institute of Medical Sciences", shortName: "Heritage Institute of Medical Sciences", city: "Varanasi", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "200", ranking: "Not stated in the collected information", annualTuition: "₹13,21,492 per year", approximateAnnualTotal: "₹13,21,492 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Heritage Institute of Medical Sciences as a private medical college in Varanasi and lists 200 MBBS seats, fees of ₹13,21,492 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/heritage-institute-of-medical-sciences",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 93, slug: "integral-institute-of-medical-sciences",
            name: "Integral Institute of Medical Sciences", shortName: "Integral Institute of Medical Sciences", city: "Lucknow", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "200", ranking: "Not stated in the collected information", annualTuition: "₹18,00,000 per year", approximateAnnualTotal: "₹18,00,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Integral Institute of Medical Sciences as a private medical college in Lucknow and lists 200 MBBS seats, fees of ₹18,00,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/integral-institute-of-medical-sciences",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 94, slug: "kd-medical-college",
            name: "K.D. Medical College", shortName: "K.D. Medical College", city: "Mathura", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "250", ranking: "Not stated in the collected information", annualTuition: "₹12,28,240 per year", approximateAnnualTotal: "₹12,28,240 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes K.D. Medical College as a private medical college in Mathura and lists 250 MBBS seats, fees of ₹12,28,240 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/kd-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 95, slug: "kmc-medical-college",
            name: "KMC Medical College", shortName: "KMC Medical College", city: "Meerut", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "200", ranking: "Not stated in the collected information", annualTuition: "₹14,14,159 per year", approximateAnnualTotal: "₹14,14,159 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes KMC Medical College as a private medical college in Meerut and lists 200 MBBS seats, fees of ₹14,14,159 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/kmc-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 96, slug: "krishna-mohan-medical-college",
            name: "Krishna Mohan Medical College", shortName: "Krishna Mohan Medical College", city: "Mathura", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "200", ranking: "Not stated in the collected information", annualTuition: "₹11,73,856 per year", approximateAnnualTotal: "₹11,73,856 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Krishna Mohan Medical College as a private medical college in Mathura and lists 200 MBBS seats, fees of ₹11,73,856 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/krishna-mohan-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 97, slug: "major-s-d-singh-medical-college",
            name: "Major S D Singh Medical College", shortName: "Major S D Singh Medical College", city: "Farrukhabad", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "100", ranking: "Not stated in the collected information", annualTuition: "Contact for Fees", approximateAnnualTotal: "Contact for Fees", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Major S D Singh Medical College as a private medical college in Farrukhabad and lists 100 MBBS seats, fees of Contact for Fees, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/major-s-d-singh-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 98, slug: "muzaffarnagar-medical-college",
            name: "Muzaffarnagar Medical College", shortName: "Muzaffarnagar Medical College", city: "Muzaffarnagar", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "200", ranking: "Not stated in the collected information", annualTuition: "₹16,72,660 per year", approximateAnnualTotal: "₹16,72,660 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Muzaffarnagar Medical College as a private medical college in Muzaffarnagar and lists 200 MBBS seats, fees of ₹16,72,660 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/muzaffarnagar-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 99, slug: "naraina-medical-college",
            name: "Naraina Medical College", shortName: "Naraina Medical College", city: "Kanpur", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "250", ranking: "Not stated in the collected information", annualTuition: "₹12,14,683 per year", approximateAnnualTotal: "₹12,14,683 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Naraina Medical College as a private medical college in Kanpur and lists 250 MBBS seats, fees of ₹12,14,683 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/naraina-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 100, slug: "national-capital-region-institute",
            name: "National Capital Region Institute", shortName: "National Capital Region Institute", city: "Meerut", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "200", ranking: "Not stated in the collected information", annualTuition: "₹12,19,917 per year", approximateAnnualTotal: "₹12,19,917 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes National Capital Region Institute as a private medical college in Meerut and lists 200 MBBS seats, fees of ₹12,19,917 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/national-capital-region-institute",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 101, slug: "noida-international-institute",
            name: "Noida International Institute", shortName: "Noida International Institute", city: "Noida", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "150", ranking: "Not stated in the collected information", annualTuition: "₹17,16,784 per year", approximateAnnualTotal: "₹17,16,784 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Noida International Institute as a private medical college in Noida and lists 150 MBBS seats, fees of ₹17,16,784 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/noida-international-institute",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 102, slug: "punyashloka-medical-college",
            name: "Punyashloka Medical College", shortName: "Punyashloka Medical College", city: "Uttar Pradesh", state: "Uttar Pradesh", type: "GOVERNMENT",
            seats: "100", ranking: "Not stated in the collected information", annualTuition: "Contact for Fees", approximateAnnualTotal: "Contact for Fees", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Punyashloka Medical College as a government medical college in Uttar Pradesh and lists 100 MBBS seats, fees of Contact for Fees, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/punyashloka-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 103, slug: "rajshree-medical-research-institute",
            name: "Rajshree Medical Research Institute", shortName: "Rajshree Medical Research Institute", city: "Bareilly", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "250", ranking: "Not stated in the collected information", annualTuition: "₹17,68,904 per year", approximateAnnualTotal: "₹17,68,904 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Rajshree Medical Research Institute as a private medical college in Bareilly and lists 250 MBBS seats, fees of ₹17,68,904 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/rajshree-medical-research-institute",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 104, slug: "rama-medical-college",
            name: "Rama Medical College", shortName: "Rama Medical College", city: "Kanpur", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "250", ranking: "Not stated in the collected information", annualTuition: "₹11,73,856 per year", approximateAnnualTotal: "₹11,73,856 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Rama Medical College as a private medical college in Kanpur and lists 250 MBBS seats, fees of ₹11,73,856 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/rama-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 105, slug: "saraswati-institute-of-medical-sciences",
            name: "Saraswati Institute of Medical Sciences", shortName: "Saraswati Institute of Medical Sciences", city: "Hapur", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "250", ranking: "Not stated in the collected information", annualTuition: "₹11,81,671 per year", approximateAnnualTotal: "₹11,81,671 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Saraswati Institute of Medical Sciences as a private medical college in Hapur and lists 250 MBBS seats, fees of ₹11,81,671 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/saraswati-institute-of-medical-sciences",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 106, slug: "saraswati-medical-college",
            name: "Saraswati Medical College", shortName: "Saraswati Medical College", city: "Unnao", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "150", ranking: "Not stated in the collected information", annualTuition: "₹11,59,610 per year", approximateAnnualTotal: "₹11,59,610 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Saraswati Medical College as a private medical college in Unnao and lists 150 MBBS seats, fees of ₹11,59,610 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/saraswati-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 107, slug: "sharda-school-of-medical-sciences",
            name: "Sharda School of Medical Sciences", shortName: "Sharda School of Medical Sciences", city: "Greater Noida", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "250", ranking: "Not stated in the collected information", annualTuition: "₹15,23,183 per year", approximateAnnualTotal: "₹15,23,183 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Sharda School of Medical Sciences as a private medical college in Greater Noida and lists 250 MBBS seats, fees of ₹15,23,183 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/sharda-school-of-medical-sciences",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 108, slug: "shri-gorakhnath-medical-college",
            name: "Shri Gorakhnath Medical College", shortName: "Shri Gorakhnath Medical College", city: "Gorakhpur", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "150", ranking: "Not stated in the collected information", annualTuition: "₹14,14,159 per year", approximateAnnualTotal: "₹14,14,159 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Shri Gorakhnath Medical College as a private medical college in Gorakhpur and lists 150 MBBS seats, fees of ₹14,14,159 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/shri-gorakhnath-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 109, slug: "shri-siddhi-vinayak-medical-college",
            name: "Shri Siddhi Vinayak Medical College", shortName: "Shri Siddhi Vinayak Medical College", city: "Bareilly", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "150", ranking: "Not stated in the collected information", annualTuition: "₹14,14,159 per year", approximateAnnualTotal: "₹14,14,159 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Shri Siddhi Vinayak Medical College as a private medical college in Bareilly and lists 150 MBBS seats, fees of ₹14,14,159 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/shri-siddhi-vinayak-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 110, slug: "sks-hospital-medical-college",
            name: "SKS Hospital Medical College", shortName: "SKS Hospital Medical College", city: "Mathura", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "200", ranking: "Not stated in the collected information", annualTuition: "₹12,14,683 per year", approximateAnnualTotal: "₹12,14,683 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes SKS Hospital Medical College as a private medical college in Mathura and lists 200 MBBS seats, fees of ₹12,14,683 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/sks-hospital-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 111, slug: "subharti-medical-college",
            name: "Subharti Medical College", shortName: "Subharti Medical College", city: "Meerut", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "200", ranking: "Not stated in the collected information", annualTuition: "₹14,22,160 per year", approximateAnnualTotal: "₹14,22,160 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Subharti Medical College as a private medical college in Meerut and lists 200 MBBS seats, fees of ₹14,22,160 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/subharti-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 112, slug: "t-s-misra-medical-college",
            name: "T S Misra Medical College", shortName: "T S Misra Medical College", city: "Lucknow", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "250", ranking: "Not stated in the collected information", annualTuition: "₹18,70,847 per year", approximateAnnualTotal: "₹18,70,847 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes T S Misra Medical College as a private medical college in Lucknow and lists 250 MBBS seats, fees of ₹18,70,847 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/t-s-misra-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 113, slug: "united-institute-of-medical-sciences",
            name: "United Institute of Medical Sciences", shortName: "United Institute of Medical Sciences", city: "Prayagraj", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "150", ranking: "Not stated in the collected information", annualTuition: "₹11,90,401 per year", approximateAnnualTotal: "₹11,90,401 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes United Institute of Medical Sciences as a private medical college in Prayagraj and lists 150 MBBS seats, fees of ₹11,90,401 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/united-institute-of-medical-sciences",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 114, slug: "varun-arjun-medical-college",
            name: "Varun Arjun Medical College", shortName: "Varun Arjun Medical College", city: "Shahjahanpur", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "250", ranking: "Not stated in the collected information", annualTuition: "₹14,52,000 per year", approximateAnnualTotal: "₹14,52,000 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Varun Arjun Medical College as a private medical college in Shahjahanpur and lists 250 MBBS seats, fees of ₹14,52,000 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/varun-arjun-medical-college",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 115, slug: "venkateshwara-institute-of-medical-sciences",
            name: "Venkateshwara Institute of Medical Sciences", shortName: "Venkateshwara Institute of Medical Sciences", city: "Gajraula", state: "Uttar Pradesh", type: "PRIVATE",
            seats: "250", ranking: "Not stated in the collected information", annualTuition: "₹11,10,508 per year", approximateAnnualTotal: "₹11,10,508 per year", nriFee: "Not listed in the collected information",
            academicHighlights: ["Clinical training (listed information)", "Teaching faculty (listed information)", "Hospital exposure (check officially)"],
            about: "The our college directory describes Venkateshwara Institute of Medical Sciences as a private medical college in Gajraula and lists 250 MBBS seats, fees of ₹11,10,508 per year, and a ranking label of Not stated in the collected information. These are listed informations and the ranking method/year are not stated.",
            sourceUrl: "https://www.futuremindedu.in/colleges/venkateshwara-institute-of-medical-sciences",
            flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are not independently confirmed collected-information claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
        },
        {
            order: 1, section: "abroad", slug: "perm-state-medical-university-perm",
            name: "Perm State Medical University, Perm", shortName: "Perm State Medical University, Perm", city: "Perm", country: "Russia", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "$6,500 | Total: $39,000 + 15,000 RUB", approximateAnnualTotal: "$6,500 | Total: $39,000 + 15,000 RUB", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Perm State Medical University, Perm as a government institution in Perm, Russia, with 6 years duration, $6,500 | Total: $39,000 + 15,000 RUB fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/perm-state-medical-university-perm",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 2, section: "abroad", slug: "pskov-state-university-pskov",
            name: "Pskov State University, Pskov", shortName: "Pskov State University, Pskov", city: "Pskov", country: "Russia", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "$4,500 | Total: $27,000 + 15,000 RUB", approximateAnnualTotal: "$4,500 | Total: $27,000 + 15,000 RUB", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Pskov State University, Pskov as a government institution in Pskov, Russia, with 6 years duration, $4,500 | Total: $27,000 + 15,000 RUB fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/pskov-state-university-pskov",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 3, section: "abroad", slug: "samara-state-medical-university-tambov",
            name: "Samara State Medical University, Tambov", shortName: "Samara State Medical University, Tambov", city: "Tambov", country: "Russia", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "4,82,000 RUB | Total: 27,32,000 RUB + 25,000 RUB", approximateAnnualTotal: "4,82,000 RUB | Total: 27,32,000 RUB + 25,000 RUB", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Samara State Medical University, Tambov as a government institution in Tambov, Russia, with 6 years duration, 4,82,000 RUB | Total: 27,32,000 RUB + 25,000 RUB fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/samara-state-medical-university-tambov",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 4, section: "abroad", slug: "tambov-state-medical-university-tambov",
            name: "Tambov State Medical University, Tambov", shortName: "Tambov State Medical University, Tambov", city: "Tambov", country: "Russia", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "3,85,000 RUB | Total: 23,10,000 RUB + 30,000 RUB", approximateAnnualTotal: "3,85,000 RUB | Total: 23,10,000 RUB + 30,000 RUB", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Tambov State Medical University, Tambov as a government institution in Tambov, Russia, with 6 years duration, 3,85,000 RUB | Total: 23,10,000 RUB + 30,000 RUB fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/tambov-state-medical-university-tambov",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 5, section: "abroad", slug: "tver-state-medical-university-tver",
            name: "Tver State Medical University, Tver", shortName: "Tver State Medical University, Tver", city: "Tver", country: "Russia", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "5,06,000 RUB + $1,500 | Total: 30,36,000 RUB + $9,000 + 15,000 RUB", approximateAnnualTotal: "5,06,000 RUB + $1,500 | Total: 30,36,000 RUB + $9,000 + 15,000 RUB", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Tver State Medical University, Tver as a government institution in Tver, Russia, with 6 years duration, 5,06,000 RUB + $1,500 | Total: 30,36,000 RUB + $9,000 + 15,000 RUB fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/tver-state-medical-university-tver",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 6, section: "abroad", slug: "ural-state-medical-university-yekaterinburg",
            name: "Ural State Medical University, Yekaterinburg", shortName: "Ural State Medical University, Yekaterinburg", city: "Yekaterinburg", country: "Russia", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "3,12,000 RUB | Total: 18,72,000 RUB + 22,000 RUB", approximateAnnualTotal: "3,12,000 RUB | Total: 18,72,000 RUB + 22,000 RUB", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Ural State Medical University, Yekaterinburg as a government institution in Yekaterinburg, Russia, with 6 years duration, 3,12,000 RUB | Total: 18,72,000 RUB + 22,000 RUB fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/ural-state-medical-university-yekaterinburg",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 7, section: "abroad", slug: "yaroslavl-state-medical-university-yaroslavl",
            name: "Yaroslavl State Medical University, Yaroslavl", shortName: "Yaroslavl State Medical University, Yaroslavl", city: "Yaroslavl", country: "Russia", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "4,58,000 RUB | Total: 27,48,000 RUB + 35,000 RUB", approximateAnnualTotal: "4,58,000 RUB | Total: 27,48,000 RUB + 35,000 RUB", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Yaroslavl State Medical University, Yaroslavl as a government institution in Yaroslavl, Russia, with 6 years duration, 4,58,000 RUB | Total: 27,48,000 RUB + 35,000 RUB fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/yaroslavl-state-medical-university-yaroslavl",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 8, section: "abroad", slug: "yaroslavl-the-wise-novgorod-state-university-novgorod",
            name: "Yaroslavl The Wise Novgorod State University, Novgorod", shortName: "Yaroslavl The Wise Novgorod State University, Novgorod", city: "Novgorod", country: "Russia", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "4,58,000 RUB | Total: 27,48,000 RUB + 30,000 RUB", approximateAnnualTotal: "4,58,000 RUB | Total: 27,48,000 RUB + 30,000 RUB", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Yaroslavl The Wise Novgorod State University, Novgorod as a government institution in Novgorod, Russia, with 6 years duration, 4,58,000 RUB | Total: 27,48,000 RUB + 30,000 RUB fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/yaroslavl-the-wise-novgorod-state-university-novgorod",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 9, section: "abroad", slug: "alfarabi-kazakh-national-university",
            name: "Alfarabi Kazakh National University", shortName: "Alfarabi Kazakh National University", city: "Almaty", country: "Kazakhstan", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "$9,900 | 2nd-6th: $7,400/yr | Total: $46,900", approximateAnnualTotal: "$9,900 | 2nd-6th: $7,400/yr | Total: $46,900", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Alfarabi Kazakh National University as a government institution in Almaty, Kazakhstan, with 6 years duration, $9,900 | 2nd-6th: $7,400/yr | Total: $46,900 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/alfarabi-kazakh-national-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 10, section: "abroad", slug: "astana-medical-university",
            name: "Astana Medical University", shortName: "Astana Medical University", city: "Astana", country: "Kazakhstan", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "$10,200 | 2nd-6th: $7,700/yr | Total: $48,700", approximateAnnualTotal: "$10,200 | 2nd-6th: $7,700/yr | Total: $48,700", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Astana Medical University as a government institution in Astana, Kazakhstan, with 6 years duration, $10,200 | 2nd-6th: $7,700/yr | Total: $48,700 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/astana-medical-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 11, section: "abroad", slug: "kazakh-national-medical-university",
            name: "Kazakh National Medical University", shortName: "Kazakh National Medical University", city: "Almaty", country: "Kazakhstan", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "$10,400 | 2nd-6th: $8,400/yr | Total: $52,400", approximateAnnualTotal: "$10,400 | 2nd-6th: $8,400/yr | Total: $52,400", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Kazakh National Medical University as a government institution in Almaty, Kazakhstan, with 6 years duration, $10,400 | 2nd-6th: $8,400/yr | Total: $52,400 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/kazakh-national-medical-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 12, section: "abroad", slug: "semey-medical-university",
            name: "Semey Medical University", shortName: "Semey Medical University", city: "Semey", country: "Kazakhstan", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "$8,900 | 2nd-6th: $6,400/yr | Total: $40,900", approximateAnnualTotal: "$8,900 | 2nd-6th: $6,400/yr | Total: $40,900", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Semey Medical University as a government institution in Semey, Kazakhstan, with 6 years duration, $8,900 | 2nd-6th: $6,400/yr | Total: $40,900 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/semey-medical-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 13, section: "abroad", slug: "south-kazakhstan-medical-academy",
            name: "South Kazakhstan Medical Academy", shortName: "South Kazakhstan Medical Academy", city: "Shymkent", country: "Kazakhstan", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $9,000 | 2nd-6th: $6,500/yr | Total: $41,500", approximateAnnualTotal: "1st Yr: $9,000 | 2nd-6th: $6,500/yr | Total: $41,500", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government Academy",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists South Kazakhstan Medical Academy as a government institution in Shymkent, Kazakhstan, with 6 years duration, 1st Yr: $9,000 | 2nd-6th: $6,500/yr | Total: $41,500 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/south-kazakhstan-medical-academy",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 14, section: "abroad", slug: "west-kazakhstan-marat-ospanov-medical-university",
            name: "West Kazakhstan Marat Ospanov Medical University", shortName: "West Kazakhstan Marat Ospanov Medical University", city: "Aktobe", country: "Kazakhstan", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $8,700 | 2nd-6th: $6,200/yr | Total: $39,700", approximateAnnualTotal: "1st Yr: $8,700 | 2nd-6th: $6,200/yr | Total: $39,700", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists West Kazakhstan Marat Ospanov Medical University as a government institution in Aktobe, Kazakhstan, with 6 years duration, 1st Yr: $8,700 | 2nd-6th: $6,200/yr | Total: $39,700 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/west-kazakhstan-marat-ospanov-medical-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 15, section: "abroad", slug: "alte-university",
            name: "ALTE University", shortName: "ALTE University", city: "Tbilisi", country: "Georgia", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $11,000 | 2nd-6th: $8,500/yr | Total: $53,500", approximateAnnualTotal: "1st Yr: $11,000 | 2nd-6th: $8,500/yr | Total: $53,500", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Medical University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists ALTE University as a private institution in Tbilisi, Georgia, with 6 years duration, 1st Yr: $11,000 | 2nd-6th: $8,500/yr | Total: $53,500 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/alte-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 16, section: "abroad", slug: "avicenna-medical-university",
            name: "Avicenna Medical University", shortName: "Avicenna Medical University", city: "Tbilisi", country: "Georgia", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $10,400 | 2nd-6th: $7,900/yr | Total: $49,900", approximateAnnualTotal: "1st Yr: $10,400 | 2nd-6th: $7,900/yr | Total: $49,900", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Medical University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Avicenna Medical University as a private institution in Tbilisi, Georgia, with 6 years duration, 1st Yr: $10,400 | 2nd-6th: $7,900/yr | Total: $49,900 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/avicenna-medical-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 17, section: "abroad", slug: "bau-international-university",
            name: "BAU International University", shortName: "BAU International University", city: "Tbilisi", country: "Georgia", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $10,300 | 2nd-6th: $7,800/yr | Total: $49,300", approximateAnnualTotal: "1st Yr: $10,300 | 2nd-6th: $7,800/yr | Total: $49,300", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Medical University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists BAU International University as a private institution in Tbilisi, Georgia, with 6 years duration, 1st Yr: $10,300 | 2nd-6th: $7,800/yr | Total: $49,300 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/bau-international-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 18, section: "abroad", slug: "batumi-shota-rustaveli-state-university",
            name: "Batumi Shota Rustaveli State University", shortName: "Batumi Shota Rustaveli State University", city: "Batumi", country: "Georgia", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $10,500 | 2nd-6th: $8,000/yr | Total: $50,500", approximateAnnualTotal: "1st Yr: $10,500 | 2nd-6th: $8,000/yr | Total: $50,500", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Batumi Shota Rustaveli State University as a government institution in Batumi, Georgia, with 6 years duration, 1st Yr: $10,500 | 2nd-6th: $8,000/yr | Total: $50,500 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/batumi-shota-rustaveli-state-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 19, section: "abroad", slug: "caucasus-international-university",
            name: "Caucasus International University", shortName: "Caucasus International University", city: "Tbilisi", country: "Georgia", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $11,500 | 2nd-6th: $9,000/yr | Total: $56,500", approximateAnnualTotal: "1st Yr: $11,500 | 2nd-6th: $9,000/yr | Total: $56,500", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Medical University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Caucasus International University as a private institution in Tbilisi, Georgia, with 6 years duration, 1st Yr: $11,500 | 2nd-6th: $9,000/yr | Total: $56,500 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/caucasus-international-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 20, section: "abroad", slug: "east-european-university",
            name: "East European University", shortName: "East European University", city: "Tbilisi", country: "Georgia", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $11,000 | 2nd-6th: $8,500/yr | Total: $53,500", approximateAnnualTotal: "1st Yr: $11,000 | 2nd-6th: $8,500/yr | Total: $53,500", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Medical University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists East European University as a private institution in Tbilisi, Georgia, with 6 years duration, 1st Yr: $11,000 | 2nd-6th: $8,500/yr | Total: $53,500 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/east-european-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 21, section: "abroad", slug: "east-west-university",
            name: "East West University", shortName: "East West University", city: "Tbilisi", country: "Georgia", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $9,400 | 2nd-6th: $6,900/yr | Total: $43,900", approximateAnnualTotal: "1st Yr: $9,400 | 2nd-6th: $6,900/yr | Total: $43,900", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Medical University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists East West University as a private institution in Tbilisi, Georgia, with 6 years duration, 1st Yr: $9,400 | 2nd-6th: $6,900/yr | Total: $43,900 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/east-west-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 22, section: "abroad", slug: "georgian-american-university",
            name: "Georgian American University", shortName: "Georgian American University", city: "Tbilisi", country: "Georgia", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $11,500 | 2nd-6th: $9,000/yr | Total: $56,500", approximateAnnualTotal: "1st Yr: $11,500 | 2nd-6th: $9,000/yr | Total: $56,500", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Medical University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Georgian American University as a private institution in Tbilisi, Georgia, with 6 years duration, 1st Yr: $11,500 | 2nd-6th: $9,000/yr | Total: $56,500 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/georgian-american-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 23, section: "abroad", slug: "georgian-national-university-seu",
            name: "Georgian National University SEU", shortName: "Georgian National University SEU", city: "Tbilisi", country: "Georgia", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $11,400 | 2nd-6th: $8,900/yr | Total: $55,900", approximateAnnualTotal: "1st Yr: $11,400 | 2nd-6th: $8,900/yr | Total: $55,900", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Medical University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Georgian National University SEU as a private institution in Tbilisi, Georgia, with 6 years duration, 1st Yr: $11,400 | 2nd-6th: $8,900/yr | Total: $55,900 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/georgian-national-university-seu",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 24, section: "abroad", slug: "geomedi-medical-university",
            name: "Geomedi Medical University", shortName: "Geomedi Medical University", city: "Tbilisi", country: "Georgia", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $11,000 | 2nd-6th: $8,500/yr | Total: $53,500", approximateAnnualTotal: "1st Yr: $11,000 | 2nd-6th: $8,500/yr | Total: $53,500", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Medical University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Geomedi Medical University as a private institution in Tbilisi, Georgia, with 6 years duration, 1st Yr: $11,000 | 2nd-6th: $8,500/yr | Total: $53,500 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/geomedi-medical-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 25, section: "abroad", slug: "international-black-sea-university",
            name: "International Black Sea University", shortName: "International Black Sea University", city: "Tbilisi", country: "Georgia", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $11,400 | 2nd-6th: $8,900/yr | Total: $55,900", approximateAnnualTotal: "1st Yr: $11,400 | 2nd-6th: $8,900/yr | Total: $55,900", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Medical University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists International Black Sea University as a private institution in Tbilisi, Georgia, with 6 years duration, 1st Yr: $11,400 | 2nd-6th: $8,900/yr | Total: $55,900 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/international-black-sea-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 26, section: "abroad", slug: "international-university-of-tbilisi",
            name: "International University of Tbilisi", shortName: "International University of Tbilisi", city: "Tbilisi", country: "Georgia", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $10,500 | 2nd-6th: $8,000/yr | Total: $58,500", approximateAnnualTotal: "1st Yr: $10,500 | 2nd-6th: $8,000/yr | Total: $58,500", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Medical University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists International University of Tbilisi as a private institution in Tbilisi, Georgia, with 6 years duration, 1st Yr: $10,500 | 2nd-6th: $8,000/yr | Total: $58,500 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/international-university-of-tbilisi",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 27, section: "abroad", slug: "ken-walker-international-university",
            name: "Ken Walker International University", shortName: "Ken Walker International University", city: "Tbilisi", country: "Georgia", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $11,300 | 2nd-6th: $8,800/yr | Total: $55,300", approximateAnnualTotal: "1st Yr: $11,300 | 2nd-6th: $8,800/yr | Total: $55,300", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Medical University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Ken Walker International University as a private institution in Tbilisi, Georgia, with 6 years duration, 1st Yr: $11,300 | 2nd-6th: $8,800/yr | Total: $55,300 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/ken-walker-international-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 28, section: "abroad", slug: "tbilisi-state-medical-university",
            name: "Tbilisi State Medical University", shortName: "Tbilisi State Medical University", city: "Tbilisi", country: "Georgia", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $14,000 | 2nd-6th: $11,500/yr | Total: $71,500", approximateAnnualTotal: "1st Yr: $14,000 | 2nd-6th: $11,500/yr | Total: $71,500", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Tbilisi State Medical University as a government institution in Tbilisi, Georgia, with 6 years duration, 1st Yr: $14,000 | 2nd-6th: $11,500/yr | Total: $71,500 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/tbilisi-state-medical-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 29, section: "abroad", slug: "university-of-georgia",
            name: "University of Georgia", shortName: "University of Georgia", city: "Tbilisi", country: "Georgia", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $12,000 | 2nd-6th: $9,500/yr | Total: $59,500", approximateAnnualTotal: "1st Yr: $12,000 | 2nd-6th: $9,500/yr | Total: $59,500", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Medical University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists University of Georgia as a private institution in Tbilisi, Georgia, with 6 years duration, 1st Yr: $12,000 | 2nd-6th: $9,500/yr | Total: $59,500 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/university-of-georgia",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 30, section: "abroad", slug: "dhaka-medical-college",
            name: "Dhaka Medical College", shortName: "Dhaka Medical College", city: "Dhaka", country: "Bangladesh", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "#1 in Bangladesh", annualTuition: "$4,000 -$6,000 per year", approximateAnnualTotal: "$4,000 -$6,000 per year", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5 years", directoryFeature: "#1 in Bangladesh",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Dhaka Medical College as a private institution in Dhaka, Bangladesh, with 5 years duration,  fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/dhaka-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 31, section: "abroad", slug: "bangladesh-medical-college",
            name: "Bangladesh Medical College", shortName: "Bangladesh Medical College", city: "Dhaka", country: "Bangladesh", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "#2 in Bangladesh", annualTuition: "$3,500 -$5,000 per year", approximateAnnualTotal: "$3,500 -$5,000 per year", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5 years", directoryFeature: "#2 in Bangladesh",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Bangladesh Medical College as a private institution in Dhaka, Bangladesh, with 5 years duration,  fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/bangladesh-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 32, section: "abroad", slug: "sir-salimullah-medical-college",
            name: "Sir Salimullah Medical College", shortName: "Sir Salimullah Medical College", city: "Dhaka", country: "Bangladesh", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "#3 in Bangladesh", annualTuition: "$4,000 -$5,500 per year", approximateAnnualTotal: "$4,000 -$5,500 per year", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5 years", directoryFeature: "#3 in Bangladesh",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Sir Salimullah Medical College as a private institution in Dhaka, Bangladesh, with 5 years duration,  fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/sir-salimullah-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 33, section: "abroad", slug: "shaheed-suhrawardy-medical-college",
            name: "Shaheed Suhrawardy Medical College", shortName: "Shaheed Suhrawardy Medical College", city: "Dhaka", country: "Bangladesh", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "#4 in Bangladesh", annualTuition: "$3,800 -$5,200 per year", approximateAnnualTotal: "$3,800 -$5,200 per year", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5 years", directoryFeature: "#4 in Bangladesh",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Shaheed Suhrawardy Medical College as a private institution in Dhaka, Bangladesh, with 5 years duration,  fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/shaheed-suhrawardy-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 34, section: "abroad", slug: "mymensingh-medical-college",
            name: "Mymensingh Medical College", shortName: "Mymensingh Medical College", city: "Mymensingh", country: "Bangladesh", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "#5 in Bangladesh", annualTuition: "$3,200 -$4,500 per year", approximateAnnualTotal: "$3,200 -$4,500 per year", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5 years", directoryFeature: "#5 in Bangladesh",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Mymensingh Medical College as a private institution in Mymensingh, Bangladesh, with 5 years duration,  fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/mymensingh-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 35, section: "abroad", slug: "rajshahi-medical-college",
            name: "Rajshahi Medical College", shortName: "Rajshahi Medical College", city: "Rajshahi", country: "Bangladesh", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "#6 in Bangladesh", annualTuition: "$2,800 -$4,200 per year", approximateAnnualTotal: "$2,800 -$4,200 per year", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5 years", directoryFeature: "#6 in Bangladesh",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Rajshahi Medical College as a private institution in Rajshahi, Bangladesh, with 5 years duration,  fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/rajshahi-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 36, section: "abroad", slug: "chittagong-medical-college",
            name: "Chittagong Medical College", shortName: "Chittagong Medical College", city: "Chittagong", country: "Bangladesh", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "#7 in Bangladesh", annualTuition: "$3,500 -$4,500 per year", approximateAnnualTotal: "$3,500 -$4,500 per year", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5 years", directoryFeature: "#7 in Bangladesh",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Chittagong Medical College as a private institution in Chittagong, Bangladesh, with 5 years duration,  fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/chittagong-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 37, section: "abroad", slug: "khulna-medical-college",
            name: "Khulna Medical College", shortName: "Khulna Medical College", city: "Khulna", country: "Bangladesh", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "#8 in Bangladesh", annualTuition: "$2,500 -$4,000 per year", approximateAnnualTotal: "$2,500 -$4,000 per year", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5 years", directoryFeature: "#8 in Bangladesh",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Khulna Medical College as a private institution in Khulna, Bangladesh, with 5 years duration,  fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/khulna-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 38, section: "abroad", slug: "rangpur-medical-college",
            name: "Rangpur Medical College", shortName: "Rangpur Medical College", city: "Rangpur", country: "Bangladesh", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "#9 in Bangladesh", annualTuition: "$2,200 -$3,800 per year", approximateAnnualTotal: "$2,200 -$3,800 per year", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5 years", directoryFeature: "#9 in Bangladesh",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Rangpur Medical College as a private institution in Rangpur, Bangladesh, with 5 years duration,  fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/rangpur-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 39, section: "abroad", slug: "comilla-medical-college",
            name: "Comilla Medical College", shortName: "Comilla Medical College", city: "Comilla", country: "Bangladesh", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "#10 in Bangladesh", annualTuition: "$2,000 -$3,800 per year", approximateAnnualTotal: "$2,000 -$3,800 per year", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5 years", directoryFeature: "#10 in Bangladesh",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Comilla Medical College as a private institution in Comilla, Bangladesh, with 5 years duration,  fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/comilla-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 40, section: "abroad", slug: "sylhet-medical-college",
            name: "Sylhet Medical College", shortName: "Sylhet Medical College", city: "Sylhet", country: "Bangladesh", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "#11 in Bangladesh", annualTuition: "$2,500 -$4,000 per year", approximateAnnualTotal: "$2,500 -$4,000 per year", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5 years", directoryFeature: "#11 in Bangladesh",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Sylhet Medical College as a private institution in Sylhet, Bangladesh, with 5 years duration,  fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/sylhet-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 41, section: "abroad", slug: "barisal-medical-college",
            name: "Barisal Medical College", shortName: "Barisal Medical College", city: "Barisal", country: "Bangladesh", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "#12 in Bangladesh", annualTuition: "$2,800 -$4,000 per year", approximateAnnualTotal: "$2,800 -$4,000 per year", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5 years", directoryFeature: "#12 in Bangladesh",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Barisal Medical College as a private institution in Barisal, Bangladesh, with 5 years duration,  fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/barisal-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 42, section: "abroad", slug: "m-a-gafur-medical-college",
            name: "M. A. Gafur Medical College", shortName: "M. A. Gafur Medical College", city: "Dhaka", country: "Bangladesh", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "#13 in Bangladesh", annualTuition: "$3,000 -$4,500 per year", approximateAnnualTotal: "$3,000 -$4,500 per year", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5 years", directoryFeature: "#13 in Bangladesh",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists M. A. Gafur Medical College as a private institution in Dhaka, Bangladesh, with 5 years duration,  fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/m-a-gafur-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 43, section: "abroad", slug: "sherebangla-medical-college",
            name: "Sher-e-Bangla Medical College", shortName: "Sher-e-Bangla Medical College", city: "Dhaka", country: "Bangladesh", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "#14 in Bangladesh", annualTuition: "$2,500 -$4,000 per year", approximateAnnualTotal: "$2,500 -$4,000 per year", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5 years", directoryFeature: "#14 in Bangladesh",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Sher-e-Bangla Medical College as a private institution in Dhaka, Bangladesh, with 5 years duration,  fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/sherebangla-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 44, section: "abroad", slug: "shaheed-tajuddin-ahmed-medical-college",
            name: "Shaheed Tajuddin Ahmed Medical College", shortName: "Shaheed Tajuddin Ahmed Medical College", city: "Dhaka", country: "Bangladesh", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "#15 in Bangladesh", annualTuition: "$2,200 -$3,800 per year", approximateAnnualTotal: "$2,200 -$3,800 per year", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5 years", directoryFeature: "#15 in Bangladesh",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Shaheed Tajuddin Ahmed Medical College as a private institution in Dhaka, Bangladesh, with 5 years duration,  fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/shaheed-tajuddin-ahmed-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 45, section: "abroad", slug: "ibrahim-medical-college",
            name: "Ibrahim Medical College", shortName: "Ibrahim Medical College", city: "Dhaka", country: "Bangladesh", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "#16 in Bangladesh", annualTuition: "$2,000 -$3,800 per year", approximateAnnualTotal: "$2,000 -$3,800 per year", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5 years", directoryFeature: "#16 in Bangladesh",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Ibrahim Medical College as a private institution in Dhaka, Bangladesh, with 5 years duration,  fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/ibrahim-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 46, section: "abroad", slug: "kumudini-medical-college",
            name: "Kumudini Medical College", shortName: "Kumudini Medical College", city: "Kumudini", country: "Bangladesh", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "#17 in Bangladesh", annualTuition: "$1,800 -$3,200 per year", approximateAnnualTotal: "$1,800 -$3,200 per year", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5 years", directoryFeature: "#17 in Bangladesh",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Kumudini Medical College as a private institution in Kumudini, Bangladesh, with 5 years duration,  fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/kumudini-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 47, section: "abroad", slug: "anwer-khan-modern-medical-college",
            name: "Anwer Khan Modern Medical College", shortName: "Anwer Khan Modern Medical College", city: "Dhaka", country: "Bangladesh", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "#18 in Bangladesh", annualTuition: "$3,500 -$4,500 per year", approximateAnnualTotal: "$3,500 -$4,500 per year", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5 years", directoryFeature: "#18 in Bangladesh",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Anwer Khan Modern Medical College as a private institution in Dhaka, Bangladesh, with 5 years duration,  fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/anwer-khan-modern-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 48, section: "abroad", slug: "jalalabad-medical-college",
            name: "Jalalabad Medical College", shortName: "Jalalabad Medical College", city: "Jalalabad", country: "Bangladesh", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "#19 in Bangladesh", annualTuition: "$1,500 -$3,000 per year", approximateAnnualTotal: "$1,500 -$3,000 per year", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5 years", directoryFeature: "#19 in Bangladesh",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Jalalabad Medical College as a private institution in Jalalabad, Bangladesh, with 5 years duration,  fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/jalalabad-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 49, section: "abroad", slug: "andijan-state-medical-university",
            name: "Andijan State Medical University", shortName: "Andijan State Medical University", city: "Andijan", country: "Uzbekistan", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $8,200 | 2nd-6th: $6,000/yr | Total: $38,200", approximateAnnualTotal: "1st Yr: $8,200 | 2nd-6th: $6,000/yr | Total: $38,200", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Andijan State Medical University as a government institution in Andijan, Uzbekistan, with 6 years duration, 1st Yr: $8,200 | 2nd-6th: $6,000/yr | Total: $38,200 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/andijan-state-medical-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 50, section: "abroad", slug: "bukhara-state-medical-institute",
            name: "Bukhara State Medical Institute", shortName: "Bukhara State Medical Institute", city: "Bukhara", country: "Uzbekistan", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $7,600 | 2nd-6th: $5,750/yr | Total: $36,350", approximateAnnualTotal: "1st Yr: $7,600 | 2nd-6th: $5,750/yr | Total: $36,350", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government Institute",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Bukhara State Medical Institute as a government institution in Bukhara, Uzbekistan, with 6 years duration, 1st Yr: $7,600 | 2nd-6th: $5,750/yr | Total: $36,350 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/bukhara-state-medical-institute",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 51, section: "abroad", slug: "fergana-medical-institute-of-public-health",
            name: "Fergana Medical Institute of Public Health", shortName: "Fergana Medical Institute of Public Health", city: "Fergana", country: "Uzbekistan", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $8,400 | 2nd-6th: $6,150/yr | Total: $39,150", approximateAnnualTotal: "1st Yr: $8,400 | 2nd-6th: $6,150/yr | Total: $39,150", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government Institute",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Fergana Medical Institute of Public Health as a government institution in Fergana, Uzbekistan, with 6 years duration, 1st Yr: $8,400 | 2nd-6th: $6,150/yr | Total: $39,150 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/fergana-medical-institute-of-public-health",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 52, section: "abroad", slug: "gulistan-state-university-faculty-of-medicine",
            name: "Gulistan State University – Faculty of Medicine", shortName: "Gulistan State University – Faculty of Medicine", city: "Gulistan", country: "Uzbekistan", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $6,950 | 2nd-6th: $5,550/yr | Total: $34,700", approximateAnnualTotal: "1st Yr: $6,950 | 2nd-6th: $5,550/yr | Total: $34,700", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Gulistan State University – Faculty of Medicine as a government institution in Gulistan, Uzbekistan, with 6 years duration, 1st Yr: $6,950 | 2nd-6th: $5,550/yr | Total: $34,700 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/gulistan-state-university-faculty-of-medicine",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 53, section: "abroad", slug: "medical-institute-of-karakalpakstan-kmi",
            name: "Medical Institute of Karakalpakstan (KMI)", shortName: "Medical Institute of Karakalpakstan (KMI)", city: "Nukus", country: "Uzbekistan", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $6,950 | 2nd-6th: $5,750/yr | Total: $35,700", approximateAnnualTotal: "1st Yr: $6,950 | 2nd-6th: $5,750/yr | Total: $35,700", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government Institute",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Medical Institute of Karakalpakstan (KMI) as a government institution in Nukus, Uzbekistan, with 6 years duration, 1st Yr: $6,950 | 2nd-6th: $5,750/yr | Total: $35,700 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/medical-institute-of-karakalpakstan-kmi",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 54, section: "abroad", slug: "namangan-state-university-faculty-of-medicine",
            name: "Namangan State University Faculty of Medicine", shortName: "Namangan State University Faculty of Medicine", city: "Namangan", country: "Uzbekistan", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $7,200 | 2nd-6th: $5,700/yr | Total: $35,700", approximateAnnualTotal: "1st Yr: $7,200 | 2nd-6th: $5,700/yr | Total: $35,700", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Namangan State University Faculty of Medicine as a government institution in Namangan, Uzbekistan, with 6 years duration, 1st Yr: $7,200 | 2nd-6th: $5,700/yr | Total: $35,700 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/namangan-state-university-faculty-of-medicine",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 55, section: "abroad", slug: "navoi-state-university",
            name: "Navoi State University", shortName: "Navoi State University", city: "Navoi", country: "Uzbekistan", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $6,900 | 2nd-6th: $4,300/yr | Total: $28,400", approximateAnnualTotal: "1st Yr: $6,900 | 2nd-6th: $4,300/yr | Total: $28,400", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Navoi State University as a government institution in Navoi, Uzbekistan, with 6 years duration, 1st Yr: $6,900 | 2nd-6th: $4,300/yr | Total: $28,400 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/navoi-state-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 56, section: "abroad", slug: "samarkand-state-medical-university",
            name: "Samarkand State Medical University", shortName: "Samarkand State Medical University", city: "Samarkand", country: "Uzbekistan", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $7,750 | 2nd-6th: $6,200/yr | Total: $38,750", approximateAnnualTotal: "1st Yr: $7,750 | 2nd-6th: $6,200/yr | Total: $38,750", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Samarkand State Medical University as a government institution in Samarkand, Uzbekistan, with 6 years duration, 1st Yr: $7,750 | 2nd-6th: $6,200/yr | Total: $38,750 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/samarkand-state-medical-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 57, section: "abroad", slug: "tashkent-state-medical-university",
            name: "Tashkent State Medical University", shortName: "Tashkent State Medical University", city: "Tashkent", country: "Uzbekistan", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $8,200 | 2nd-6th: $5,850/yr | Total: $37,450", approximateAnnualTotal: "1st Yr: $8,200 | 2nd-6th: $5,850/yr | Total: $37,450", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Tashkent State Medical University as a government institution in Tashkent, Uzbekistan, with 6 years duration, 1st Yr: $8,200 | 2nd-6th: $5,850/yr | Total: $37,450 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/tashkent-state-medical-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 58, section: "abroad", slug: "tashkent-pharmaceutical-institute",
            name: "Tashkent Pharmaceutical Institute", shortName: "Tashkent Pharmaceutical Institute", city: "Tashkent", country: "Uzbekistan", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $8,750 | 2nd-6th: $6,450/yr | Total: $41,000", approximateAnnualTotal: "1st Yr: $8,750 | 2nd-6th: $6,450/yr | Total: $41,000", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government Institute",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Tashkent Pharmaceutical Institute as a government institution in Tashkent, Uzbekistan, with 6 years duration, 1st Yr: $8,750 | 2nd-6th: $6,450/yr | Total: $41,000 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/tashkent-pharmaceutical-institute",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 59, section: "abroad", slug: "institute-of-medicine-iom",
            name: "Institute of Medicine (IOM)", shortName: "Institute of Medicine (IOM)", city: "Kathmandu", country: "Nepal", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "#1 in Nepal", annualTuition: "Total: $75,021.00 | 1st Inst.: $25,007.00", approximateAnnualTotal: "Total: $75,021.00 | 1st Inst.: $25,007.00", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5.5 years", directoryFeature: "#1 in Nepal",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Institute of Medicine (IOM) as a government institution in Kathmandu, Nepal, with 5.5 years duration, Total: $75,021.00 | 1st Inst.: $25,007.00 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/institute-of-medicine-iom",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 60, section: "abroad", slug: "bp-koirala-institute-of-health-sciences-bpkihs",
            name: "B.P. Koirala Institute of Health Sciences (BPKIHS)", shortName: "B.P. Koirala Institute of Health Sciences (BPKIHS)", city: "Dharan", country: "Nepal", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "#2 in Nepal", annualTuition: "Total: $74,555.00 | 1st Inst.: $25,440.00", approximateAnnualTotal: "Total: $74,555.00 | 1st Inst.: $25,440.00", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5.5 years", directoryFeature: "#2 in Nepal",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists B.P. Koirala Institute of Health Sciences (BPKIHS) as a government institution in Dharan, Nepal, with 5.5 years duration, Total: $74,555.00 | 1st Inst.: $25,440.00 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/bp-koirala-institute-of-health-sciences-bpkihs",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 61, section: "abroad", slug: "karnali-academy-of-health-science",
            name: "Karnali Academy of Health Science", shortName: "Karnali Academy of Health Science", city: "Karnali", country: "Nepal", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "Total: $75,000.00 | 1st Inst.: $25,000.00", approximateAnnualTotal: "Total: $75,000.00 | 1st Inst.: $25,000.00", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5.5 years", directoryFeature: "Government Academy",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Karnali Academy of Health Science as a government institution in Karnali, Nepal, with 5.5 years duration, Total: $75,000.00 | 1st Inst.: $25,000.00 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/karnali-academy-of-health-science",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 62, section: "abroad", slug: "patan-academy-of-health-sciences-pahs",
            name: "Patan Academy of Health Sciences (PAHS)", shortName: "Patan Academy of Health Sciences (PAHS)", city: "Lalitpur", country: "Nepal", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "Total: $75,000.00 | 1st Inst.: $25,000.00", approximateAnnualTotal: "Total: $75,000.00 | 1st Inst.: $25,000.00", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5.5 years", directoryFeature: "Government Academy",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Patan Academy of Health Sciences (PAHS) as a government institution in Lalitpur, Nepal, with 5.5 years duration, Total: $75,000.00 | 1st Inst.: $25,000.00 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/patan-academy-of-health-sciences-pahs",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 63, section: "abroad", slug: "national-academy-of-medical-sciences-nams",
            name: "National Academy of Medical Sciences (NAMS)", shortName: "National Academy of Medical Sciences (NAMS)", city: "Kathmandu", country: "Nepal", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "Total: $75,000.00 | 1st Inst.: $25,000.00", approximateAnnualTotal: "Total: $75,000.00 | 1st Inst.: $25,000.00", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5.5 years", directoryFeature: "Government Academy",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists National Academy of Medical Sciences (NAMS) as a government institution in Kathmandu, Nepal, with 5.5 years duration, Total: $75,000.00 | 1st Inst.: $25,000.00 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/national-academy-of-medical-sciences-nams",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 64, section: "abroad", slug: "nepalese-army-institute-of-health-sciences",
            name: "Nepalese Army Institute of Health Sciences", shortName: "Nepalese Army Institute of Health Sciences", city: "Kathmandu", country: "Nepal", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "Total: $75,000.00 | 1st Inst.: $25,007.00", approximateAnnualTotal: "Total: $75,000.00 | 1st Inst.: $25,007.00", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5.5 years", directoryFeature: "Top Military Medical Institute",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Nepalese Army Institute of Health Sciences as a government institution in Kathmandu, Nepal, with 5.5 years duration, Total: $75,000.00 | 1st Inst.: $25,007.00 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/nepalese-army-institute-of-health-sciences",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 65, section: "abroad", slug: "manipal-medical-college-mcoms",
            name: "Manipal Medical College (MCOMS)", shortName: "Manipal Medical College (MCOMS)", city: "Pokhara", country: "Nepal", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "Total: $75,000.00 | 1st Inst.: $25,000.00", approximateAnnualTotal: "Total: $75,000.00 | 1st Inst.: $25,000.00", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5.5 years", directoryFeature: "Top Private College",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Manipal Medical College (MCOMS) as a private institution in Pokhara, Nepal, with 5.5 years duration, Total: $75,000.00 | 1st Inst.: $25,000.00 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/manipal-medical-college-mcoms",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 66, section: "abroad", slug: "college-of-medical-science",
            name: "College of Medical Science", shortName: "College of Medical Science", city: "Bharatpur", country: "Nepal", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "Total: $75,000.00 | 1st Inst.: $25,000.00", approximateAnnualTotal: "Total: $75,000.00 | 1st Inst.: $25,000.00", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5.5 years", directoryFeature: "Highly Rated Private College",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists College of Medical Science as a private institution in Bharatpur, Nepal, with 5.5 years duration, Total: $75,000.00 | 1st Inst.: $25,000.00 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/college-of-medical-science",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 67, section: "abroad", slug: "kathmandu-school-of-medical-science",
            name: "Kathmandu School of Medical Science", shortName: "Kathmandu School of Medical Science", city: "Dhulikhel", country: "Nepal", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "Total: $75,000.00 | 1st Inst.: $25,000.00", approximateAnnualTotal: "Total: $75,000.00 | 1st Inst.: $25,000.00", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5.5 years", directoryFeature: "Premier Private School",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Kathmandu School of Medical Science as a private institution in Dhulikhel, Nepal, with 5.5 years duration, Total: $75,000.00 | 1st Inst.: $25,000.00 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/kathmandu-school-of-medical-science",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 68, section: "abroad", slug: "nepal-medical-college",
            name: "Nepal Medical College", shortName: "Nepal Medical College", city: "Jorpati, Kathmandu", country: "Nepal", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "Total: $75,000.00 | 1st Inst.: $25,000.00", approximateAnnualTotal: "Total: $75,000.00 | 1st Inst.: $25,000.00", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5.5 years", directoryFeature: "Excellent Private College",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Nepal Medical College as a private institution in Jorpati, Kathmandu, Nepal, with 5.5 years duration, Total: $75,000.00 | 1st Inst.: $25,000.00 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/nepal-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 69, section: "abroad", slug: "kathmandu-medical-college",
            name: "Kathmandu Medical College", shortName: "Kathmandu Medical College", city: "Kathmandu", country: "Nepal", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "Total: $75,000.00 | 1st Inst.: $25,000.00", approximateAnnualTotal: "Total: $75,000.00 | 1st Inst.: $25,000.00", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5.5 years", directoryFeature: "Highly Demanded Private College",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Kathmandu Medical College as a private institution in Kathmandu, Nepal, with 5.5 years duration, Total: $75,000.00 | 1st Inst.: $25,000.00 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/kathmandu-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 70, section: "abroad", slug: "birat-medical-college",
            name: "Birat Medical College", shortName: "Birat Medical College", city: "Biratnagar", country: "Nepal", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "Total: $75,000.00 | 1st Inst.: $25,000.00", approximateAnnualTotal: "Total: $75,000.00 | 1st Inst.: $25,000.00", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5.5 years", directoryFeature: "Reputed Private College",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Birat Medical College as a private institution in Biratnagar, Nepal, with 5.5 years duration, Total: $75,000.00 | 1st Inst.: $25,000.00 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/birat-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 71, section: "abroad", slug: "nepalgunj-medical-college",
            name: "Nepalgunj Medical College", shortName: "Nepalgunj Medical College", city: "Nepalgunj", country: "Nepal", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Top Private College in West Nepal", annualTuition: "Total: $75,000.00 | 1st Inst.: $25,000.00", approximateAnnualTotal: "Total: $75,000.00 | 1st Inst.: $25,000.00", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5.5 years", directoryFeature: "Top Private College in West Nepal",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Nepalgunj Medical College as a private institution in Nepalgunj, Nepal, with 5.5 years duration, Total: $75,000.00 | 1st Inst.: $25,000.00 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/nepalgunj-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 72, section: "abroad", slug: "lumbini-medical-college-lmc",
            name: "Lumbini Medical College (LMC)", shortName: "Lumbini Medical College (LMC)", city: "Tansen", country: "Nepal", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "Total: $75,000.00 | 1st Inst.: $25,000.00", approximateAnnualTotal: "Total: $75,000.00 | 1st Inst.: $25,000.00", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5.5 years", directoryFeature: "Established Private College",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Lumbini Medical College (LMC) as a private institution in Tansen, Nepal, with 5.5 years duration, Total: $75,000.00 | 1st Inst.: $25,000.00 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/lumbini-medical-college-lmc",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 73, section: "abroad", slug: "nobel-medical-college",
            name: "Nobel Medical College", shortName: "Nobel Medical College", city: "Biratnagar", country: "Nepal", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "Total: $75,000.00 | 1st Inst.: $25,000.00", approximateAnnualTotal: "Total: $75,000.00 | 1st Inst.: $25,000.00", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5.5 years", directoryFeature: "Popular Private College",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Nobel Medical College as a private institution in Biratnagar, Nepal, with 5.5 years duration, Total: $75,000.00 | 1st Inst.: $25,000.00 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/nobel-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 74, section: "abroad", slug: "devdaha-medical-college-teaching-hospital",
            name: "Devdaha Medical College & Teaching Hospital", shortName: "Devdaha Medical College & Teaching Hospital", city: "Devdaha", country: "Nepal", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "Total: $75,000.00 | 1st Inst.: $25,000.00", approximateAnnualTotal: "Total: $75,000.00 | 1st Inst.: $25,000.00", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5.5 years", directoryFeature: "Private Teaching Hospital",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Devdaha Medical College & Teaching Hospital as a private institution in Devdaha, Nepal, with 5.5 years duration, Total: $75,000.00 | 1st Inst.: $25,000.00 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/devdaha-medical-college-teaching-hospital",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 75, section: "abroad", slug: "kist-medical-college",
            name: "KIST Medical College", shortName: "KIST Medical College", city: "Lalitpur", country: "Nepal", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "Total: $75,021.00 | 1st Inst.: $25,007.00", approximateAnnualTotal: "Total: $75,021.00 | 1st Inst.: $25,007.00", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5.5 years", directoryFeature: "Top Private College",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists KIST Medical College as a private institution in Lalitpur, Nepal, with 5.5 years duration, Total: $75,021.00 | 1st Inst.: $25,007.00 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/kist-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 76, section: "abroad", slug: "chitwan-medical-college-cmc",
            name: "Chitwan Medical College (CMC)", shortName: "Chitwan Medical College (CMC)", city: "Bharatpur", country: "Nepal", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "Total: $75,021.00 | 1st Inst.: $25,007.00", approximateAnnualTotal: "Total: $75,021.00 | 1st Inst.: $25,007.00", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5.5 years", directoryFeature: "Elite Private College",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Chitwan Medical College (CMC) as a private institution in Bharatpur, Nepal, with 5.5 years duration, Total: $75,021.00 | 1st Inst.: $25,007.00 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/chitwan-medical-college-cmc",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 77, section: "abroad", slug: "gandaki-medical-college",
            name: "Gandaki Medical College", shortName: "Gandaki Medical College", city: "Pokhara", country: "Nepal", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "Total: $75,021.00 | 1st Inst.: $25,007.00", approximateAnnualTotal: "Total: $75,021.00 | 1st Inst.: $25,007.00", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5.5 years", directoryFeature: "highly Rated Private College",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Gandaki Medical College as a private institution in Pokhara, Nepal, with 5.5 years duration, Total: $75,021.00 | 1st Inst.: $25,007.00 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/gandaki-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 78, section: "abroad", slug: "national-medical-college",
            name: "National Medical College", shortName: "National Medical College", city: "Birgunj", country: "Nepal", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "Total: $75,021.00 | 1st Inst.: $25,007.00", approximateAnnualTotal: "Total: $75,021.00 | 1st Inst.: $25,007.00", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5.5 years", directoryFeature: "Popular Private College",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists National Medical College as a private institution in Birgunj, Nepal, with 5.5 years duration, Total: $75,021.00 | 1st Inst.: $25,007.00 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/national-medical-college",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 79, section: "abroad", slug: "universal-college-of-medical-sciences-ucms",
            name: "Universal College of Medical Sciences (UCMS)", shortName: "Universal College of Medical Sciences (UCMS)", city: "Bhairahawa", country: "Nepal", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "Total: $75,021.00 | 1st Inst.: $25,007.00", approximateAnnualTotal: "Total: $75,021.00 | 1st Inst.: $25,007.00", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5.5 years", directoryFeature: "Highly Demanded Private College",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Universal College of Medical Sciences (UCMS) as a private institution in Bhairahawa, Nepal, with 5.5 years duration, Total: $75,021.00 | 1st Inst.: $25,007.00 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/universal-college-of-medical-sciences-ucms",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 80, section: "abroad", slug: "janaki-medical-college-jmc",
            name: "Janaki Medical College (JMC)", shortName: "Janaki Medical College (JMC)", city: "Janakpur", country: "Nepal", type: "PRIVATE",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "Total: $75,021.00 | 1st Inst.: $25,007.00", approximateAnnualTotal: "Total: $75,021.00 | 1st Inst.: $25,007.00", nriFee: "Not listed in the collected information",
            medium: "English", duration: "5.5 years", directoryFeature: "Private Teaching College",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Janaki Medical College (JMC) as a private institution in Janakpur, Nepal, with 5.5 years duration, Total: $75,021.00 | 1st Inst.: $25,007.00 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/janaki-medical-college-jmc",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 81, section: "abroad", slug: "avicenna-tajik-state-medical-university",
            name: "Avicenna Tajik State Medical University", shortName: "Avicenna Tajik State Medical University", city: "Dushanbe", country: "Tajikistan", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $8,500 | 2nd-6th: $6,800/yr | Total: $42,500", approximateAnnualTotal: "1st Yr: $8,500 | 2nd-6th: $6,800/yr | Total: $42,500", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Avicenna Tajik State Medical University as a government institution in Dushanbe, Tajikistan, with 6 years duration, 1st Yr: $8,500 | 2nd-6th: $6,800/yr | Total: $42,500 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/avicenna-tajik-state-medical-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 82, section: "abroad", slug: "khatlon-state-medical-university",
            name: "Khatlon State Medical University", shortName: "Khatlon State Medical University", city: "Danghara", country: "Tajikistan", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $8,300 | 2-6th: $28,000 total | Total: $36,300", approximateAnnualTotal: "1st Yr: $8,300 | 2-6th: $28,000 total | Total: $36,300", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Khatlon State Medical University as a government institution in Danghara, Tajikistan, with 6 years duration, 1st Yr: $8,300 | 2-6th: $28,000 total | Total: $36,300 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/khatlon-state-medical-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
        {
            order: 83, section: "abroad", slug: "tajik-national-university",
            name: "Tajik National University", shortName: "Tajik National University", city: "Dushanbe", country: "Tajikistan", type: "GOVERNMENT",
            seats: "Not listed in the collected information", ranking: "Not stated in the collected information", annualTuition: "1st Yr: $8,500 | 2-6th: $30,250 total | Total: $38,750", approximateAnnualTotal: "1st Yr: $8,500 | 2-6th: $30,250 total | Total: $38,750", nriFee: "Not listed in the collected information",
            medium: "English", duration: "6 years", directoryFeature: "Top Government University",
            academicHighlights: ["English-medium programme (directory-listed)", "WHO & NMC recognition (directory-listed)", "International clinical exposure (verify officially)"],
            about: "The Future Mind Educare MBBS-abroad directory lists Tajik National University as a government institution in Dushanbe, Tajikistan, with 6 years duration, 1st Yr: $8,500 | 2-6th: $30,250 total | Total: $38,750 fees, English-medium study and WHO & NMC recognition. These are directory-listed claims; confirm current approval, fees, admission rules and programme details with official sources.",
            admissionIntro: "The directory presents this as an abroad MBBS option. Confirm current NEET, NMC, university, visa and counselling requirements before applying.",
            sourceUrl: "https://www.futuremindedu.in/colleges/tajik-national-university",
            flags: ["All country, type, recognition, fee, duration, feature and ranking values are directory-listed claims and are not independently confirmed here. Verify the university, current NMC/WHO/FAIMER status, fee year, visa requirements, clinical training, internship and eligibility with official sources before publication."]
        },
    ];

    const result = records.map((record) => ({
        ...(record.section === "abroad" ? abroadCommon : common),
        ...record,
        recognition: record.recognition || (record.section === "abroad" ? abroadCommon.recognition : common.recognition),
        annualTotal: record.approximateAnnualTotal,
        sourceAccessed: record.section === "abroad" ? "2026-10-17" : "2026-10-16",
        sourceLabel: record.section === "abroad" ? "Future Mind Educare MBBS-abroad directory (not an official university, NMC, WHO, FAIMER or counselling authority)" : "Future Mind Educare our college information summary (not an official college or counselling authority)",
        placementQuote: record.placementQuote || (record.section === "abroad" ? abroadCommon.defaultPlacementQuote : common.defaultPlacementQuote),
        stipendClaim: record.stipendClaim || "Not listed in the collected information",
        academicHighlights: record.academicHighlights || ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"]
    }));

    window.MEDICURA_ABROAD_COLLEGE_PROFILES = result;
})();
