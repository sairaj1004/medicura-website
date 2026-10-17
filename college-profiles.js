/*
 * Static reference-page extracts for the first 115 entries in the requested
 * Future Mind Educare directory order (accessed 2026-10-16).
 *
 * These are NOT official admissions, NMC, MCC, fee, seat, ranking, placement,
 * or stipend records. The reference pages do not provide a verifiable fee year
 * or ranking methodology. Keep the profile-page warning visible and verify
 * every time-sensitive or identity-sensitive value before any publication.
 */
(function registerMediCuraCollegeProfiles() {
  const common = {
    recognition: "NMC, MCI (as displayed on the reference page; unverified)",
    establishment: "Not stated (the reference page says ‘Recognized’)",
    hostelAndMess: "Included/Nominal (reference-page wording; details not stated)",
    otherFees: "Registration and examination fees as per university norms (reference-page wording)",
    feeNote: "The reference page says fees may change and that refundable security deposits may apply. Its approximate annual total repeats tuition and may not include all costs.",
    feeYear: "Not stated by source",
    admissionYearLabel: "2026–27 (label shown by reference page; confirm current counselling cycle)",
    entranceExams: ["NEET UG (reference-page claim; verify current official rules)"],
    eligibility: "The reference page states: minimum age 17 years; 50% in PCB in Class 12 for General category and 40% for SC/ST/OBC. This generic text is not independently verified and may not reflect the latest rules or the relevant course/quota.",
    admissionSteps: [
      { title: "NEET UG exam", detail: "Qualify the national entrance examination under the current official rules." },
      { title: "Counselling registration", detail: "Register through the counselling authority applicable to the seat and quota; confirm the current authority and dates." },
      { title: "Choice filling", detail: "Select and prioritise eligible colleges during the applicable choice-filling round." },
      { title: "Seat allotment", detail: "Allotment depends on merit, choices, seat availability and the applicable counselling rules." },
      { title: "Document verification", detail: "Follow the allotment letter and the institution/counselling authority's current reporting instructions." }
    ],
    careerMetrics: [
      { value: "100%", label: "Internship placement (reference-page claim; unverified)" },
      { value: "Top Tier", label: "PG selections (reference-page wording; unverified)" },
      { value: "Global", label: "Alumni network (reference-page wording; unverified)" }
    ],
    internship: "The reference page describes a Compulsory Rotatory Residential Internship (CRRI) at an associated teaching hospital, with exposure across Medicine, Surgery, Obstetrics & Gynecology, and Pediatrics. Confirm the current programme and stipend with the official institute.",
    postGraduation: "The reference page says the institute provides a foundation for INI-CET and NEET-PG preparation and that students pursue clinical specialities. This is general promotional wording, not an independently verified outcome claim.",
    documents: [
      "NEET UG admit card",
      "NEET UG scorecard",
      "Class 10 certificate and marksheet",
      "Class 12 certificate and marksheet",
      "Government identity proof (the reference lists Aadhaar/PAN/driving licence/passport)",
      "Passport-size photographs",
      "Provisional allotment letter",
      "Caste/category certificate, if applicable"
    ],
    documentNote: "Use the current official counselling and college reporting checklist. The reference page warns that failure to provide originals during verification may affect an allotment; this profile does not replace the allotment letter or official instructions.",
    defaultPlacementQuote: "The reference page describes clinical exposure and internship opportunities at associated hospitals, and says graduates pursue postgraduate study or join health organisations. This is unverified general promotional text.",
    sourceOnly: true
  };

  const records = [
    {
      order: 1, slug: "all-india-institute-of-medical-sciences-aiims",
      name: "All India Institute of Medical Sciences (AIIMS)", shortName: "AIIMS New Delhi", city: "New Delhi", state: "Delhi", type: "Government",
      seats: 125, ranking: "#1 in India (ranking system/year not stated)", annualTuition: "₹1,500 per year", approximateAnnualTotal: "₹1,500 per year", nriFee: "Not available (reference-page claim)",
      academicHighlights: ["World-class medical research", "Premier faculty and mentorship", "Advanced tertiary care exposure", "State-of-the-art simulation labs", "Extensive library and digital resources"],
      about: "The reference page describes AIIMS as a government medical institution in New Delhi and claims 125 MBBS seats and a #1-in-India ranking. The page's ranking method and year are not stated.",
      admissionIntro: "The reference page says AIIMS New Delhi admission is solely through NEET UG, followed by MCC counselling. Verify the current quota, authority, eligibility and process with official sources.",
      placementQuote: "The reference page claims that AIIMS Delhi graduates secure the highest medical packages in India and attributes figures to NIRF 2025: a ₹34 LPA median for PG students, around ₹16 LPA for UG graduates, and an internship stipend of ₹26,300 per month. These figures and their interpretation are not independently verified here.",
      stipendClaim: "₹26,300 per month (reference-page claim; not verified)",
      sourceUrl: "https://www.futuremindedu.in/colleges/all-india-institute-of-medical-sciences-aiims",
      flags: ["Ranking, seats, tuition and the NIRF/placement/stipend statements are reference-page claims only. The ranking system and data year for most figures are not supplied."]
    },
    {
      order: 2, slug: "maulana-azad-medical-college-mamc",
      name: "Maulana Azad Medical College (MAMC)", shortName: "MAMC Delhi", city: "New Delhi", state: "Delhi", type: "Government",
      seats: 250, ranking: "#5 in India (ranking system/year not stated)", annualTuition: "₹2,000 per year", approximateAnnualTotal: "₹2,000 per year", nriFee: "Not available (reference-page claim)",
      academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
      about: "The reference page describes MAMC as a government medical institution in New Delhi and claims 250 MBBS seats and a #5-in-India ranking. The page's ranking method and year are not stated.",
      placementQuote: "The reference page claims a near-100% placement rate, an average package of ₹10–15 LPA, top clinical-specialty packages up to ₹25 LPA, and internship stipends of approximately ₹25,000 per month. None of these figures is independently verified here.",
      stipendClaim: "Approximately ₹25,000 per month (reference-page claim; not verified)",
      sourceUrl: "https://www.futuremindedu.in/colleges/maulana-azad-medical-college-mamc",
      flags: ["Ranking, seats, tuition and all placement/package/stipend claims are unverified source-page content; no academic year or methodology is stated."]
    },
    {
      order: 3, slug: "lady-hardinge-medical-college-lhmc",
      name: "Lady Hardinge Medical College (LHMC)", shortName: "LHMC Delhi", city: "New Delhi", state: "Delhi", type: "Government",
      seats: 200, ranking: "#8 in India (ranking system/year not stated)", annualTuition: "₹1,800 per year", approximateAnnualTotal: "₹1,800 per year", nriFee: "Not available (reference-page claim)",
      academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
      about: "The reference page describes LHMC as a government medical institution in New Delhi and claims 200 MBBS seats and a #8-in-India ranking. The page's ranking method and year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/lady-hardinge-medical-college-lhmc",
      flags: ["Ranking, seats, tuition and recognition wording are unverified source-page content; the ranking year and method are not stated."]
    },
    {
      order: 4, slug: "university-college-of-medical-sciences-ucms",
      name: "University College of Medical Sciences (UCMS)", shortName: "UCMS Delhi", city: "New Delhi", state: "Delhi", type: "Government",
      seats: 150, ranking: "#12 in India (ranking system/year not stated)", annualTuition: "₹2,500 per year", approximateAnnualTotal: "₹2,500 per year", nriFee: "Not available (reference-page claim)",
      academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
      about: "The reference page describes UCMS as a government medical institution in New Delhi and claims 150 MBBS seats and a #12-in-India ranking. The page's ranking method and year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/university-college-of-medical-sciences-ucms",
      flags: ["Ranking, seats, tuition and recognition wording are unverified source-page content; confirm the current college/counselling data officially."]
    },
    {
      order: 5, slug: "vardhman-mahavir-medical-college-vmmc",
      name: "Vardhman Mahavir Medical College (VMMC)", shortName: "VMMC Delhi", city: "New Delhi", state: "Delhi", type: "Government",
      seats: 180, ranking: "#15 in India (ranking system/year not stated)", annualTuition: "₹2,200 per year", approximateAnnualTotal: "₹2,200 per year", nriFee: "Not available (reference-page claim)",
      academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
      about: "The reference page describes VMMC as a government medical institution in New Delhi and claims 180 MBBS seats and a #15-in-India ranking. The page's ranking method and year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/vardhman-mahavir-medical-college-vmmc",
      flags: ["Ranking, seats, tuition and recognition wording are unverified source-page content; the ranking year and method are not stated."]
    },
    {
      order: 6, slug: "hamdard-institute-of-medical-sciences",
      name: "Hamdard Institute of Medical Sciences", shortName: "Hamdard Institute", city: "New Delhi", state: "Delhi", type: "Private",
      seats: 150, ranking: "#45 in India (ranking system/year not stated)", annualTuition: "₹12,00,000 per year", approximateAnnualTotal: "₹12,00,000 per year", nriFee: "₹39,00,000 per year (reference-page claim)",
      academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
      about: "The reference page describes Hamdard Institute of Medical Sciences as a private medical institution in New Delhi and claims 150 MBBS seats and a #45-in-India ranking. The page's ranking method and year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/hamdard-institute-of-medical-sciences",
      flags: ["The source uses the shortened name ‘Hamdard Institute of Medical Sciences’; verify the exact institution/programme name, current seat matrix and fee schedule officially."]
    },
    {
      order: 7, slug: "indira-gandhi-institute-of-medical-sciences",
      name: "Indira Gandhi Institute of Medical Sciences", shortName: "IGIMS (reference label)", city: "New Delhi (as shown by source)", state: "Delhi (as shown by source)", type: "Private (as shown by source)",
      seats: 120, ranking: "#52 in India (ranking system/year not stated)", annualTuition: "₹8,50,000 per year", approximateAnnualTotal: "₹8,50,000 per year", nriFee: "₹2,700,000 per year (as written by source; not verified)",
      academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
      about: "The reference page labels this entry as a private institute in New Delhi, with 120 seats and a #52-in-India ranking. The name/location/type combination is not independently verified and should not be relied on until the exact institution is confirmed.",
      sourceUrl: "https://www.futuremindedu.in/colleges/indira-gandhi-institute-of-medical-sciences",
      flags: ["Identity/location concern: the reference page pairs ‘Indira Gandhi Institute of Medical Sciences’ with New Delhi and labels it private. Confirm the exact institution and city before use; do not treat this record as a verified college listing.", "Fees and seat count are source-only claims with no year stated."]
    },
    {
      order: 8, slug: "army-college-of-medical-sciences",
      name: "Army College of Medical Sciences", shortName: "ACMS Delhi", city: "New Delhi", state: "Delhi", type: "Private (as shown by source)",
      seats: 100, ranking: "#38 in India (ranking system/year not stated)", annualTuition: "₹6,00,000 per year", approximateAnnualTotal: "₹6,00,000 per year", nriFee: "Not available (reference-page claim)",
      academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
      about: "The reference page describes Army College of Medical Sciences as a private institution in New Delhi and claims 100 MBBS seats and a #38-in-India ranking. The page's ranking method and year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/army-college-of-medical-sciences",
      flags: ["Verify the current admission eligibility/seat rules, institution classification and tuition with official sources; reference-page values are not verified."]
    },
    {
      order: 9, slug: "guru-gobind-singh-indraprastha-university",
      name: "Guru Gobind Singh Indraprastha University", shortName: "GGSIPU (reference label)", city: "New Delhi", state: "Delhi", type: "Private (as shown by source)",
      seats: 150, ranking: "#41 in India (ranking system/year not stated)", annualTuition: "₹10,00,000 per year", approximateAnnualTotal: "₹10,00,000 per year", nriFee: "Not available (reference-page claim)",
      academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
      about: "The reference page labels Guru Gobind Singh Indraprastha University as a private medical institution and reports 150 seats. It does not identify a specific constituent or affiliated medical college in this entry.",
      sourceUrl: "https://www.futuremindedu.in/colleges/guru-gobind-singh-indraprastha-university",
      flags: ["Institution identity concern: the source names a university rather than specifying the medical college/programme to which the seat, fee and ranking claims apply. Verify the exact college and counselling route officially."]
    },
    {
      order: 10, slug: "south-delhi-medical-college",
      name: "South Delhi Medical College", shortName: "South Delhi Medical College", city: "New Delhi", state: "Delhi", type: "Private (as shown by source)",
      seats: 120, ranking: "#55 in India (ranking system/year not stated)", annualTuition: "₹11,00,000 per year", approximateAnnualTotal: "₹11,00,000 per year", nriFee: "Not available (reference-page claim)",
      academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
      about: "The reference page lists a private ‘South Delhi Medical College’ in New Delhi, with 120 seats and a #55-in-India ranking. This entry's exact institution identity and recognition are not independently verified.",
      sourceUrl: "https://www.futuremindedu.in/colleges/south-delhi-medical-college",
      flags: ["Identity concern: the source does not provide an official institution name or official institutional link. Verify existence, approval, current seat matrix and fee schedule before use."]
    },
    {
      order: 11, slug: "delhi-medical-college-and-hospital",
      name: "Delhi Medical College and Hospital", shortName: "Delhi Medical College & Hospital", city: "New Delhi", state: "Delhi", type: "Private (as shown by source)",
      seats: 90, ranking: "#58 in India (ranking system/year not stated)", annualTuition: "₹6,80,000 per year", approximateAnnualTotal: "₹6,80,000 per year", nriFee: "$35,000 per year (reference-page claim)",
      academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
      about: "The reference page lists ‘Delhi Medical College and Hospital’ as a private medical institution in New Delhi, reporting 90 seats and a #58-in-India ranking. Its exact institution identity is not independently verified.",
      sourceUrl: "https://www.futuremindedu.in/colleges/delhi-medical-college-and-hospital",
      flags: ["Identity concern: the source provides no official institution name/link to substantiate this listing. Verify existence, NMC status, counselling route, seat matrix and fees before relying on it."]
    },
    {
      order: 12, slug: "metropolitan-medical-college-delhi",
      name: "Metropolitan Medical College Delhi", shortName: "Metropolitan Medical College", city: "New Delhi", state: "Delhi", type: "Private (as shown by source)",
      seats: 135, ranking: "#44 in India (ranking system/year not stated)", annualTuition: "₹9,80,000 per year", approximateAnnualTotal: "₹9,80,000 per year", nriFee: "$35,000 per year (reference-page claim)",
      academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
      about: "The reference page lists ‘Metropolitan Medical College Delhi’ as a private medical institution in New Delhi, reporting 135 seats and a #44-in-India ranking. Its exact institution identity is not independently verified.",
      sourceUrl: "https://www.futuremindedu.in/colleges/metropolitan-medical-college-delhi",
      flags: ["Identity concern: the source provides no official institution name/link to substantiate this listing. Verify existence, NMC status, counselling route, seat matrix and fees before relying on it."]
    },
    {
      order: 13, slug: "grant-medical-college-gmc",
      name: "Grant Medical College (GMC)", shortName: "Grant Medical College", city: "Mumbai", state: "Maharashtra", type: "Government",
      seats: 200, ranking: "#7 in India (ranking system/year not stated)", annualTuition: "₹3,000 per year", approximateAnnualTotal: "₹3,000 per year", nriFee: "Not available (reference-page claim)",
      academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
      about: "The reference page describes Grant Medical College as a government medical institution in Mumbai and claims 200 MBBS seats and a #7-in-India ranking. The page's ranking method and year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/grant-medical-college-gmc",
      flags: ["Ranking, seats, tuition and recognition wording are unverified source-page content; confirm current official data and the fee year."]
    },
    {
      order: 14, slug: "kem-hospital-and-seth-gs-medical-college",
      name: "KEM Hospital and Seth G.S. Medical College", shortName: "KEM & Seth G.S. Medical College", city: "Mumbai", state: "Maharashtra", type: "Government",
      seats: 250, ranking: "#9 in India (ranking system/year not stated)", annualTuition: "₹3,500 per year", approximateAnnualTotal: "₹3,500 per year", nriFee: "Not available (reference-page claim)",
      academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
      about: "The reference page describes KEM Hospital and Seth G.S. Medical College as a government medical institution in Mumbai and claims 250 MBBS seats and a #9-in-India ranking.",
      sourceUrl: "https://www.futuremindedu.in/colleges/kem-hospital-and-seth-gs-medical-college",
      flags: ["Potential duplicate: the same Seth G.S. Medical College/KEM Hospital pairing appears again as entry 16 under the reversed name, with different seats, ranking and fee claims. Resolve against official data before publication."]
    },
    {
      order: 15, slug: "bj-government-medical-college",
      name: "B.J. Government Medical College", shortName: "BJGMC Pune", city: "Pune", state: "Maharashtra", type: "Government",
      seats: 200, ranking: "#15 in India (ranking system/year not stated)", annualTuition: "₹2,800 per year", approximateAnnualTotal: "₹2,800 per year", nriFee: "Not available (reference-page claim)",
      academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
      about: "The reference page describes B.J. Government Medical College as a government medical institution in Pune and claims 200 MBBS seats and a #15-in-India ranking.",
      sourceUrl: "https://www.futuremindedu.in/colleges/bj-government-medical-college",
      flags: ["Ranking, seats, tuition and recognition wording are unverified source-page content; confirm current official data and the fee year."]
    },
    {
      order: 16, slug: "seth-gs-medical-college-and-kem-hospital",
      name: "Seth G.S. Medical College and KEM Hospital", shortName: "Seth G.S. & KEM (second source entry)", city: "Mumbai", state: "Maharashtra", type: "Government",
      seats: 180, ranking: "#11 in India (ranking system/year not stated)", annualTuition: "₹4,000 per year", approximateAnnualTotal: "₹4,000 per year", nriFee: "Not available (reference-page claim)",
      academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
      about: "The reference page describes Seth G.S. Medical College and KEM Hospital as a government medical institution in Mumbai and claims 180 MBBS seats and a #11-in-India ranking.",
      sourceUrl: "https://www.futuremindedu.in/colleges/seth-gs-medical-college-and-kem-hospital",
      flags: ["Potential duplicate: the same Seth G.S. Medical College/KEM Hospital pairing appears at entry 14 under a reversed name, with conflicting seats (250 vs 180), ranking (#9 vs #11) and fees (₹3,500 vs ₹4,000). This duplicate is preserved only to match the requested reference order."]
    },
    {
      order: 17, slug: "topiwala-national-medical-college",
      name: "Topiwala National Medical College", shortName: "TNMC Mumbai", city: "Mumbai", state: "Maharashtra", type: "Government",
      seats: 150, ranking: "#17 in India (ranking system/year not stated)", annualTuition: "₹3,200 per year", approximateAnnualTotal: "₹3,200 per year", nriFee: "Not available (reference-page claim)",
      academicHighlights: ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"],
      about: "The reference page describes Topiwala National Medical College as a government medical institution in Mumbai and claims 150 MBBS seats and a #17-in-India ranking.",
      sourceUrl: "https://www.futuremindedu.in/colleges/topiwala-national-medical-college",
      flags: ["Ranking, seats, tuition and recognition wording are unverified source-page content; confirm current official data and the fee year."]
    },

    {
      order: 18, slug: "lokmanya-tilak-municipal-medical-college",
      name: "Lokmanya Tilak Municipal Medical College", shortName: "Lokmanya Tilak Municipal Medical College", city: "Mumbai", state: "Maharashtra", type: "GOVERNMENT",
      seats: "200", ranking: "#13 IN INDIA", annualTuition: "₹3,800 per year", approximateAnnualTotal: "₹3,800 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Lokmanya Tilak Municipal Medical College as a government medical college in Mumbai and lists 200 MBBS seats, fees of ₹3,800 per year, and a ranking label of #13 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/lokmanya-tilak-municipal-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 19, slug: "armed-forces-medical-college-afmc",
      name: "Armed Forces Medical College (AFMC)", shortName: "Armed Forces Medical College (AFMC)", city: "Pune", state: "Maharashtra", type: "GOVERNMENT",
      seats: "150", ranking: "#4 IN INDIA", annualTuition: "₹25,000 per year", approximateAnnualTotal: "₹25,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Armed Forces Medical College (AFMC) as a government medical college in Pune and lists 150 MBBS seats, fees of ₹25,000 per year, and a ranking label of #4 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/armed-forces-medical-college-afmc",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 20, slug: "mahatma-gandhi-institute-of-medical-sciences",
      name: "Mahatma Gandhi Institute of Medical Sciences", shortName: "Mahatma Gandhi Institute of Medical Sciences", city: "Nagpur", state: "Maharashtra", type: "GOVERNMENT",
      seats: "180", ranking: "#19 IN INDIA", annualTuition: "₹4,200 per year", approximateAnnualTotal: "₹4,200 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Mahatma Gandhi Institute of Medical Sciences as a government medical college in Nagpur and lists 180 MBBS seats, fees of ₹4,200 per year, and a ranking label of #19 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/mahatma-gandhi-institute-of-medical-sciences",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 21, slug: "siddhartha-medical-college",
      name: "Siddhartha Medical College", shortName: "Siddhartha Medical College", city: "Nashik", state: "Maharashtra", type: "GOVERNMENT",
      seats: "150", ranking: "#26 IN INDIA", annualTuition: "₹3,400 per year", approximateAnnualTotal: "₹3,400 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Siddhartha Medical College as a government medical college in Nashik and lists 150 MBBS seats, fees of ₹3,400 per year, and a ranking label of #26 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/siddhartha-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 22, slug: "maharashtra-institute-of-medical-sciences",
      name: "Maharashtra Institute of Medical Sciences", shortName: "Maharashtra Institute of Medical Sciences", city: "Aurangabad", state: "Maharashtra", type: "GOVERNMENT",
      seats: "160", ranking: "#28 IN INDIA", annualTuition: "₹3,800 per year", approximateAnnualTotal: "₹3,800 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Maharashtra Institute of Medical Sciences as a government medical college in Aurangabad and lists 160 MBBS seats, fees of ₹3,800 per year, and a ranking label of #28 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/maharashtra-institute-of-medical-sciences",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 23, slug: "bharati-vidyapeeth-medical-college",
      name: "Bharati Vidyapeeth Medical College", shortName: "Bharati Vidyapeeth Medical College", city: "Pune", state: "Maharashtra", type: "PRIVATE",
      seats: "200", ranking: "#35 IN INDIA", annualTuition: "₹25,96,000 per year", approximateAnnualTotal: "₹25,96,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Bharati Vidyapeeth Medical College as a private medical college in Pune and lists 200 MBBS seats, fees of ₹25,96,000 per year, and a ranking label of #35 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/bharati-vidyapeeth-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 24, slug: "symbiosis-medical-college",
      name: "Symbiosis Medical College", shortName: "Symbiosis Medical College", city: "Pune", state: "Maharashtra", type: "PRIVATE",
      seats: "150", ranking: "#32 IN INDIA", annualTuition: "₹10,50,000 per year", approximateAnnualTotal: "₹10,50,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Symbiosis Medical College as a private medical college in Pune and lists 150 MBBS seats, fees of ₹10,50,000 per year, and a ranking label of #32 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/symbiosis-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 25, slug: "dy-patil-medical-college",
      name: "D.Y. Patil Medical College", shortName: "D.Y. Patil Medical College", city: "Navi Mumbai", state: "Maharashtra", type: "PRIVATE",
      seats: "250", ranking: "#30 IN INDIA", annualTuition: "₹25,00,000 per year", approximateAnnualTotal: "₹25,00,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes D.Y. Patil Medical College as a private medical college in Navi Mumbai and lists 250 MBBS seats, fees of ₹25,00,000 per year, and a ranking label of #30 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/dy-patil-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 26, slug: "kj-somaiya-medical-college",
      name: "K.J. Somaiya Medical College", shortName: "K.J. Somaiya Medical College", city: "Mumbai", state: "Maharashtra", type: "PRIVATE",
      seats: "150", ranking: "#37 IN INDIA", annualTuition: "₹12,00,000 per year", approximateAnnualTotal: "₹12,00,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes K.J. Somaiya Medical College as a private medical college in Mumbai and lists 150 MBBS seats, fees of ₹12,00,000 per year, and a ranking label of #37 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/kj-somaiya-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 27, slug: "tata-memorial-hospital-medical-college",
      name: "Tata Memorial Hospital Medical College", shortName: "Tata Memorial Hospital Medical College", city: "Mumbai", state: "Maharashtra", type: "PRIVATE",
      seats: "100", ranking: "#39 IN INDIA", annualTuition: "₹12,00,000 per year", approximateAnnualTotal: "₹12,00,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Tata Memorial Hospital Medical College as a private medical college in Mumbai and lists 100 MBBS seats, fees of ₹12,00,000 per year, and a ranking label of #39 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/tata-memorial-hospital-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 28, slug: "nashik-medical-college",
      name: "Nashik Medical College", shortName: "Nashik Medical College", city: "Nashik", state: "Maharashtra", type: "PRIVATE",
      seats: "120", ranking: "#50 IN INDIA", annualTuition: "₹14,00,000 per year", approximateAnnualTotal: "₹14,00,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Nashik Medical College as a private medical college in Nashik and lists 120 MBBS seats, fees of ₹14,00,000 per year, and a ranking label of #50 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/nashik-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 29, slug: "aurangabad-medical-college",
      name: "Aurangabad Medical College", shortName: "Aurangabad Medical College", city: "Aurangabad", state: "Maharashtra", type: "PRIVATE",
      seats: "110", ranking: "#53 IN INDIA", annualTuition: "₹13,00,000 per year", approximateAnnualTotal: "₹13,00,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Aurangabad Medical College as a private medical college in Aurangabad and lists 110 MBBS seats, fees of ₹13,00,000 per year, and a ranking label of #53 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/aurangabad-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 30, slug: "solapur-medical-college",
      name: "Solapur Medical College", shortName: "Solapur Medical College", city: "Solapur", state: "Maharashtra", type: "PRIVATE",
      seats: "100", ranking: "#57 IN INDIA", annualTuition: "₹11,00,000 per year", approximateAnnualTotal: "₹11,00,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Solapur Medical College as a private medical college in Solapur and lists 100 MBBS seats, fees of ₹11,00,000 per year, and a ranking label of #57 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/solapur-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 31, slug: "kolhapur-medical-college",
      name: "Kolhapur Medical College", shortName: "Kolhapur Medical College", city: "Kolhapur", state: "Maharashtra", type: "PRIVATE",
      seats: "90", ranking: "#59 IN INDIA", annualTuition: "₹10,00,000 per year", approximateAnnualTotal: "₹10,00,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Kolhapur Medical College as a private medical college in Kolhapur and lists 90 MBBS seats, fees of ₹10,00,000 per year, and a ranking label of #59 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/kolhapur-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 32, slug: "sangli-medical-college",
      name: "Sangli Medical College", shortName: "Sangli Medical College", city: "Sangli", state: "Maharashtra", type: "PRIVATE",
      seats: "80", ranking: "#61 IN INDIA", annualTuition: "₹9,00,000 per year", approximateAnnualTotal: "₹9,00,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Sangli Medical College as a private medical college in Sangli and lists 80 MBBS seats, fees of ₹9,00,000 per year, and a ranking label of #61 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/sangli-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 33, slug: "satara-medical-college",
      name: "Satara Medical College", shortName: "Satara Medical College", city: "Satara", state: "Maharashtra", type: "PRIVATE",
      seats: "70", ranking: "#63 IN INDIA", annualTuition: "₹8,00,000 per year", approximateAnnualTotal: "₹8,00,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Satara Medical College as a private medical college in Satara and lists 70 MBBS seats, fees of ₹8,00,000 per year, and a ranking label of #63 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/satara-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 34, slug: "amravati-medical-college",
      name: "Amravati Medical College", shortName: "Amravati Medical College", city: "Amravati", state: "Maharashtra", type: "PRIVATE",
      seats: "60", ranking: "#65 IN INDIA", annualTuition: "₹7,00,000 per year", approximateAnnualTotal: "₹7,00,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Amravati Medical College as a private medical college in Amravati and lists 60 MBBS seats, fees of ₹7,00,000 per year, and a ranking label of #65 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/amravati-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 35, slug: "acpm-medical-college",
      name: "ACPM Medical College", shortName: "ACPM Medical College", city: "Dhule", state: "Maharashtra", type: "TRUST",
      seats: "100", ranking: "Not stated by source", annualTuition: "₹8,00,000 per year", approximateAnnualTotal: "₹8,00,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes ACPM Medical College as a trust medical college in Dhule and lists 100 MBBS seats, fees of ₹8,00,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/acpm-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 36, slug: "ashwini-rural-medical-college",
      name: "Ashwini Rural Medical College", shortName: "Ashwini Rural Medical College", city: "Solapur", state: "Maharashtra", type: "TRUST",
      seats: "150", ranking: "Not stated by source", annualTuition: "₹1,033,000 per year", approximateAnnualTotal: "₹1,033,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Ashwini Rural Medical College as a trust medical college in Solapur and lists 150 MBBS seats, fees of ₹1,033,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/ashwini-rural-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 37, slug: "bharatratna-atal-bihari-vajpayee-medical-college",
      name: "Bharatratna Atal Bihari Vajpayee Medical College", shortName: "Bharatratna Atal Bihari Vajpayee Medical College", city: "Pune", state: "Maharashtra", type: "TRUST",
      seats: "100", ranking: "Not stated by source", annualTuition: "₹750,000 per year", approximateAnnualTotal: "₹750,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Bharatratna Atal Bihari Vajpayee Medical College as a trust medical college in Pune and lists 100 MBBS seats, fees of ₹750,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/bharatratna-atal-bihari-vajpayee-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 38, slug: "bkl-walawalkar-rural-medical-college",
      name: "B.K.L. Walawalkar Rural Medical College", shortName: "B.K.L. Walawalkar Rural Medical College", city: "Ratnagiri", state: "Maharashtra", type: "TRUST",
      seats: "150", ranking: "Not stated by source", annualTuition: "₹1,165,000 per year", approximateAnnualTotal: "₹1,165,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes B.K.L. Walawalkar Rural Medical College as a trust medical college in Ratnagiri and lists 150 MBBS seats, fees of ₹1,165,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/bkl-walawalkar-rural-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 39, slug: "dr-d-y-patil-medical-college",
      name: "Dr. D Y Patil Medical College", shortName: "Dr. D Y Patil Medical College", city: "Navi Mumbai", state: "Maharashtra", type: "TRUST",
      seats: "250", ranking: "Not stated by source", annualTuition: "₹2,700,000 per year", approximateAnnualTotal: "₹2,700,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Dr. D Y Patil Medical College as a trust medical college in Navi Mumbai and lists 250 MBBS seats, fees of ₹2,700,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/dr-d-y-patil-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 40, slug: "tasgaonkar-medical-college",
      name: "Tasgaonkar Medical College", shortName: "Tasgaonkar Medical College", city: "Raigad", state: "Maharashtra", type: "TRUST",
      seats: "100", ranking: "Not stated by source", annualTuition: "₹621,500 per year", approximateAnnualTotal: "₹621,500 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Tasgaonkar Medical College as a trust medical college in Raigad and lists 100 MBBS seats, fees of ₹621,500 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/tasgaonkar-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 41, slug: "panjabrao-deshmukh-memorial-medical-college",
      name: "Panjabrao Deshmukh Memorial Medical College", shortName: "Panjabrao Deshmukh Memorial Medical College", city: "Amravati", state: "Maharashtra", type: "TRUST",
      seats: "150", ranking: "Not stated by source", annualTuition: "₹1,078,000 per year", approximateAnnualTotal: "₹1,078,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Panjabrao Deshmukh Memorial Medical College as a trust medical college in Amravati and lists 150 MBBS seats, fees of ₹1,078,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/panjabrao-deshmukh-memorial-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 42, slug: "dr-ulhas-patil-medical-college",
      name: "Dr. Ulhas Patil Medical College", shortName: "Dr. Ulhas Patil Medical College", city: "Jalgaon", state: "Maharashtra", type: "TRUST",
      seats: "200", ranking: "Not stated by source", annualTuition: "₹700,000 per year", approximateAnnualTotal: "₹700,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Dr. Ulhas Patil Medical College as a trust medical college in Jalgaon and lists 200 MBBS seats, fees of ₹700,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/dr-ulhas-patil-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 43, slug: "dr-vasantrao-pawar-medical-college",
      name: "Dr. Vasantrao Pawar Medical College", shortName: "Dr. Vasantrao Pawar Medical College", city: "Nashik", state: "Maharashtra", type: "TRUST",
      seats: "150", ranking: "Not stated by source", annualTuition: "₹1,196,000 per year", approximateAnnualTotal: "₹1,196,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Dr. Vasantrao Pawar Medical College as a trust medical college in Nashik and lists 150 MBBS seats, fees of ₹1,196,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/dr-vasantrao-pawar-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 44, slug: "vithalrao-vikhe-patil-foundation-medical-college",
      name: "Vithalrao Vikhe Patil Foundation Medical College", shortName: "Vithalrao Vikhe Patil Foundation Medical College", city: "Ahmednagar", state: "Maharashtra", type: "TRUST",
      seats: "200", ranking: "Not stated by source", annualTuition: "₹1,300,000 per year", approximateAnnualTotal: "₹1,300,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Vithalrao Vikhe Patil Foundation Medical College as a trust medical college in Ahmednagar and lists 200 MBBS seats, fees of ₹1,300,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/vithalrao-vikhe-patil-foundation-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 45, slug: "indian-institute-of-medical-science",
      name: "Indian Institute of Medical Science", shortName: "Indian Institute of Medical Science", city: "Jalna", state: "Maharashtra", type: "TRUST",
      seats: "150", ranking: "Not stated by source", annualTuition: "₹750,000 per year", approximateAnnualTotal: "₹750,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Indian Institute of Medical Science as a trust medical college in Jalna and lists 150 MBBS seats, fees of ₹750,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/indian-institute-of-medical-science",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 46, slug: "jawaharlal-nehru-medical-college",
      name: "Jawaharlal Nehru Medical College", shortName: "Jawaharlal Nehru Medical College", city: "Wardha", state: "Maharashtra", type: "TRUST",
      seats: "250", ranking: "Not stated by source", annualTuition: "₹2,200,000 per year", approximateAnnualTotal: "₹2,200,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Jawaharlal Nehru Medical College as a trust medical college in Wardha and lists 250 MBBS seats, fees of ₹2,200,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/jawaharlal-nehru-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 47, slug: "krishna-institute-of-medical-sciences",
      name: "Krishna Institute of Medical Sciences", shortName: "Krishna Institute of Medical Sciences", city: "Karad", state: "Maharashtra", type: "TRUST",
      seats: "250", ranking: "Not stated by source", annualTuition: "₹2,450,000 per year", approximateAnnualTotal: "₹2,450,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Krishna Institute of Medical Sciences as a trust medical college in Karad and lists 250 MBBS seats, fees of ₹2,450,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/krishna-institute-of-medical-sciences",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 48, slug: "mimer-medical-college",
      name: "MIMER Medical College", shortName: "MIMER Medical College", city: "Pune", state: "Maharashtra", type: "TRUST",
      seats: "150", ranking: "Not stated by source", annualTuition: "₹1,130,000 per year", approximateAnnualTotal: "₹1,130,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes MIMER Medical College as a trust medical college in Pune and lists 150 MBBS seats, fees of ₹1,130,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/mimer-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 49, slug: "mimsr-medical-college",
      name: "MIMSR Medical College", shortName: "MIMSR Medical College", city: "Latur", state: "Maharashtra", type: "TRUST",
      seats: "150", ranking: "Not stated by source", annualTuition: "₹945,000 per year", approximateAnnualTotal: "₹945,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes MIMSR Medical College as a trust medical college in Latur and lists 150 MBBS seats, fees of ₹945,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/mimsr-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 50, slug: "mgm-medical-college",
      name: "MGM Medical College", shortName: "MGM Medical College", city: "Navi Mumbai", state: "Maharashtra", type: "TRUST",
      seats: "100", ranking: "Not stated by source", annualTuition: "₹2,350,000 per year", approximateAnnualTotal: "₹2,350,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes MGM Medical College as a trust medical college in Navi Mumbai and lists 100 MBBS seats, fees of ₹2,350,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/mgm-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 51, slug: "malati-vasantdada-patil-medical-college",
      name: "MALATI Vasantdada Patil Medical College", shortName: "MALATI Vasantdada Patil Medical College", city: "Sangli", state: "Maharashtra", type: "SOCIETY",
      seats: "50", ranking: "Not stated by source", annualTuition: "₹850,000 per year", approximateAnnualTotal: "₹850,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes MALATI Vasantdada Patil Medical College as a society medical college in Sangli and lists 50 MBBS seats, fees of ₹850,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/malati-vasantdada-patil-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 52, slug: "n-k-p-salve-institute-of-medical-sciences",
      name: "N. K. P. Salve Institute of Medical Sciences", shortName: "N. K. P. Salve Institute of Medical Sciences", city: "Nagpur", state: "Maharashtra", type: "TRUST",
      seats: "250", ranking: "Not stated by source", annualTuition: "₹1,300,000 per year", approximateAnnualTotal: "₹1,300,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes N. K. P. Salve Institute of Medical Sciences as a trust medical college in Nagpur and lists 250 MBBS seats, fees of ₹1,300,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/n-k-p-salve-institute-of-medical-sciences",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 53, slug: "padmashree-dr-dy-patil-medical-college",
      name: "Padmashree Dr. D.Y. Patil Medical College", shortName: "Padmashree Dr. D.Y. Patil Medical College", city: "Navi Mumbai", state: "Maharashtra", type: "TRUST",
      seats: "250", ranking: "Not stated by source", annualTuition: "₹2,700,000 per year", approximateAnnualTotal: "₹2,700,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Padmashree Dr. D.Y. Patil Medical College as a trust medical college in Navi Mumbai and lists 250 MBBS seats, fees of ₹2,700,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/padmashree-dr-dy-patil-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 54, slug: "parbhani-medical-college",
      name: "Parbhani Medical College", shortName: "Parbhani Medical College", city: "Parbhani", state: "Maharashtra", type: "SOCIETY",
      seats: "150", ranking: "Not stated by source", annualTuition: "₹754,000 per year", approximateAnnualTotal: "₹754,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Parbhani Medical College as a society medical college in Parbhani and lists 150 MBBS seats, fees of ₹754,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/parbhani-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 55, slug: "prakash-institute-of-medical-sciences",
      name: "Prakash Institute of Medical Sciences", shortName: "Prakash Institute of Medical Sciences", city: "Sangli", state: "Maharashtra", type: "TRUST",
      seats: "150", ranking: "Not stated by source", annualTuition: "₹851,000 per year", approximateAnnualTotal: "₹851,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Prakash Institute of Medical Sciences as a trust medical college in Sangli and lists 150 MBBS seats, fees of ₹851,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/prakash-institute-of-medical-sciences",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 56, slug: "rk-damani-medical-college",
      name: "RK Damani Medical College", shortName: "RK Damani Medical College", city: "Akola", state: "Maharashtra", type: "TRUST",
      seats: "150", ranking: "Not stated by source", annualTuition: "₹850,000 per year", approximateAnnualTotal: "₹850,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes RK Damani Medical College as a trust medical college in Akola and lists 150 MBBS seats, fees of ₹850,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/rk-damani-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 57, slug: "rural-medical-college",
      name: "Rural Medical College", shortName: "Rural Medical College", city: "Loni", state: "Maharashtra", type: "TRUST",
      seats: "200", ranking: "Not stated by source", annualTuition: "₹1,900,000 per year", approximateAnnualTotal: "₹1,900,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Rural Medical College as a trust medical college in Loni and lists 200 MBBS seats, fees of ₹1,900,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/rural-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 58, slug: "sindhudurg-medical-college",
      name: "Sindhudurg Medical College", shortName: "Sindhudurg Medical College", city: "Sindhudurg", state: "Maharashtra", type: "TRUST",
      seats: "149", ranking: "Not stated by source", annualTuition: "₹764,000 per year", approximateAnnualTotal: "₹764,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Sindhudurg Medical College as a trust medical college in Sindhudurg and lists 149 MBBS seats, fees of ₹764,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/sindhudurg-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 59, slug: "sakhubai-medical-college",
      name: "Sakhubai Medical College", shortName: "Sakhubai Medical College", city: "Solapur", state: "Maharashtra", type: "TRUST",
      seats: "100", ranking: "Not stated by source", annualTuition: "₹772,000 per year", approximateAnnualTotal: "₹772,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Sakhubai Medical College as a trust medical college in Solapur and lists 100 MBBS seats, fees of ₹772,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/sakhubai-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 60, slug: "terna-medical-college",
      name: "Terna Medical College", shortName: "Terna Medical College", city: "Navi Mumbai", state: "Maharashtra", type: "TRUST",
      seats: "150", ranking: "Not stated by source", annualTuition: "₹790,000 per year", approximateAnnualTotal: "₹790,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Terna Medical College as a trust medical college in Navi Mumbai and lists 150 MBBS seats, fees of ₹790,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/terna-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 61, slug: "datta-meghe-medical-college",
      name: "Datta Meghe Medical College", shortName: "Datta Meghe Medical College", city: "Nagpur", state: "Maharashtra", type: "PRIVATE",
      seats: "250", ranking: "Not stated by source", annualTuition: "₹2,325,000 per year", approximateAnnualTotal: "₹2,325,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Datta Meghe Medical College as a private medical college in Nagpur and lists 250 MBBS seats, fees of ₹2,325,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/datta-meghe-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 62, slug: "rajendra-gode-medical-college",
      name: "Rajendra Gode Medical College", shortName: "Rajendra Gode Medical College", city: "Amravati", state: "Maharashtra", type: "PRIVATE",
      seats: "150", ranking: "Not stated by source", annualTuition: "₹771,000 per year", approximateAnnualTotal: "₹771,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Rajendra Gode Medical College as a private medical college in Amravati and lists 150 MBBS seats, fees of ₹771,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/rajendra-gode-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 63, slug: "king-georges-medical-university-kgmu",
      name: "King George's Medical University (KGMU)", shortName: "King George's Medical University (KGMU)", city: "Lucknow", state: "Uttar Pradesh", type: "GOVERNMENT",
      seats: "250", ranking: "#3 IN INDIA", annualTuition: "₹2,500 per year", approximateAnnualTotal: "₹2,500 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes King George's Medical University (KGMU) as a government medical college in Lucknow and lists 250 MBBS seats, fees of ₹2,500 per year, and a ranking label of #3 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/king-georges-medical-university-kgmu",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 64, slug: "banaras-hindu-university-bhu",
      name: "Banaras Hindu University (BHU)", shortName: "Banaras Hindu University (BHU)", city: "Varanasi", state: "Uttar Pradesh", type: "GOVERNMENT",
      seats: "200", ranking: "#6 IN INDIA", annualTuition: "₹2,000 per year", approximateAnnualTotal: "₹2,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Banaras Hindu University (BHU) as a government medical college in Varanasi and lists 200 MBBS seats, fees of ₹2,000 per year, and a ranking label of #6 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/banaras-hindu-university-bhu",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 65, slug: "jawaharlal-nehru-medical-college-jnmc",
      name: "Jawaharlal Nehru Medical College (JNMC)", shortName: "Jawaharlal Nehru Medical College (JNMC)", city: "Aligarh", state: "Uttar Pradesh", type: "GOVERNMENT",
      seats: "150", ranking: "#18 IN INDIA", annualTuition: "₹3,000 per year", approximateAnnualTotal: "₹3,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Jawaharlal Nehru Medical College (JNMC) as a government medical college in Aligarh and lists 150 MBBS seats, fees of ₹3,000 per year, and a ranking label of #18 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/jawaharlal-nehru-medical-college-jnmc",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 66, slug: "sanjay-gandhi-post-graduate-institute-of-medical-sciences",
      name: "Sanjay Gandhi Post Graduate Institute of Medical Sciences", shortName: "Sanjay Gandhi Post Graduate Institute of Medical Sciences", city: "Lucknow", state: "Uttar Pradesh", type: "GOVERNMENT",
      seats: "180", ranking: "#10 IN INDIA", annualTuition: "₹4,000 per year", approximateAnnualTotal: "₹4,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Sanjay Gandhi Post Graduate Institute of Medical Sciences as a government medical college in Lucknow and lists 180 MBBS seats, fees of ₹4,000 per year, and a ranking label of #10 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/sanjay-gandhi-post-graduate-institute-of-medical-sciences",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 67, slug: "moti-lal-nehru-medical-college",
      name: "Moti Lal Nehru Medical College", shortName: "Moti Lal Nehru Medical College", city: "Allahabad", state: "Uttar Pradesh", type: "GOVERNMENT",
      seats: "200", ranking: "#22 IN INDIA", annualTuition: "₹2,800 per year", approximateAnnualTotal: "₹2,800 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Moti Lal Nehru Medical College as a government medical college in Allahabad and lists 200 MBBS seats, fees of ₹2,800 per year, and a ranking label of #22 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/moti-lal-nehru-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 68, slug: "gandhi-medical-college",
      name: "Gandhi Medical College", shortName: "Gandhi Medical College", city: "Bhopal", state: "Uttar Pradesh", type: "GOVERNMENT",
      seats: "150", ranking: "#24 IN INDIA", annualTuition: "₹3,200 per year", approximateAnnualTotal: "₹3,200 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Gandhi Medical College as a government medical college in Bhopal and lists 150 MBBS seats, fees of ₹3,200 per year, and a ranking label of #24 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/gandhi-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 69, slug: "maharani-laxmi-bai-medical-college",
      name: "Maharani Laxmi Bai Medical College", shortName: "Maharani Laxmi Bai Medical College", city: "Jhansi", state: "Uttar Pradesh", type: "GOVERNMENT",
      seats: "120", ranking: "#31 IN INDIA", annualTuition: "₹2,600 per year", approximateAnnualTotal: "₹2,600 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Maharani Laxmi Bai Medical College as a government medical college in Jhansi and lists 120 MBBS seats, fees of ₹2,600 per year, and a ranking label of #31 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/maharani-laxmi-bai-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 70, slug: "lala-lajpat-rai-medical-college",
      name: "Lala Lajpat Rai Medical College", shortName: "Lala Lajpat Rai Medical College", city: "Meerut", state: "Uttar Pradesh", type: "GOVERNMENT",
      seats: "160", ranking: "#34 IN INDIA", annualTuition: "₹3,000 per year", approximateAnnualTotal: "₹3,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Lala Lajpat Rai Medical College as a government medical college in Meerut and lists 160 MBBS seats, fees of ₹3,000 per year, and a ranking label of #34 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/lala-lajpat-rai-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 71, slug: "sarojini-naidu-medical-college",
      name: "Sarojini Naidu Medical College", shortName: "Sarojini Naidu Medical College", city: "Agra", state: "Uttar Pradesh", type: "GOVERNMENT",
      seats: "140", ranking: "#36 IN INDIA", annualTuition: "₹2,900 per year", approximateAnnualTotal: "₹2,900 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Sarojini Naidu Medical College as a government medical college in Agra and lists 140 MBBS seats, fees of ₹2,900 per year, and a ranking label of #36 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/sarojini-naidu-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 72, slug: "uttar-pradesh-university-of-medical-sciences",
      name: "Uttar Pradesh University of Medical Sciences", shortName: "Uttar Pradesh University of Medical Sciences", city: "Saifai", state: "Uttar Pradesh", type: "GOVERNMENT",
      seats: "100", ranking: "#38 IN INDIA", annualTuition: "₹3,100 per year", approximateAnnualTotal: "₹3,100 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Uttar Pradesh University of Medical Sciences as a government medical college in Saifai and lists 100 MBBS seats, fees of ₹3,100 per year, and a ranking label of #38 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/uttar-pradesh-university-of-medical-sciences",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 73, slug: "dr-ram-manohar-lohia-institute-of-medical-sciences",
      name: "Dr. Ram Manohar Lohia Institute of Medical Sciences", shortName: "Dr. Ram Manohar Lohia Institute of Medical Sciences", city: "Lucknow", state: "Uttar Pradesh", type: "GOVERNMENT",
      seats: "130", ranking: "#41 IN INDIA", annualTuition: "₹3,300 per year", approximateAnnualTotal: "₹3,300 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Dr. Ram Manohar Lohia Institute of Medical Sciences as a government medical college in Lucknow and lists 130 MBBS seats, fees of ₹3,300 per year, and a ranking label of #41 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/dr-ram-manohar-lohia-institute-of-medical-sciences",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 74, slug: "baba-raghav-das-medical-college",
      name: "Baba Raghav Das Medical College", shortName: "Baba Raghav Das Medical College", city: "Gorakhpur", state: "Uttar Pradesh", type: "GOVERNMENT",
      seats: "110", ranking: "#43 IN INDIA", annualTuition: "₹2,700 per year", approximateAnnualTotal: "₹2,700 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Baba Raghav Das Medical College as a government medical college in Gorakhpur and lists 110 MBBS seats, fees of ₹2,700 per year, and a ranking label of #43 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/baba-raghav-das-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 75, slug: "maharaja-gaj-singh-medical-college",
      name: "Maharaja Gaj Singh Medical College", shortName: "Maharaja Gaj Singh Medical College", city: "Kanpur", state: "Uttar Pradesh", type: "GOVERNMENT",
      seats: "120", ranking: "#45 IN INDIA", annualTuition: "₹3,400 per year", approximateAnnualTotal: "₹3,400 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Maharaja Gaj Singh Medical College as a government medical college in Kanpur and lists 120 MBBS seats, fees of ₹3,400 per year, and a ranking label of #45 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/maharaja-gaj-singh-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 76, slug: "shri-ram-murti-smarak-institute-of-medical-sciences",
      name: "Shri Ram Murti Smarak Institute of Medical Sciences", shortName: "Shri Ram Murti Smarak Institute of Medical Sciences", city: "Bareilly", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "200", ranking: "#54 IN INDIA", annualTuition: "₹19,78,214 per year", approximateAnnualTotal: "₹19,78,214 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Shri Ram Murti Smarak Institute of Medical Sciences as a private medical college in Bareilly and lists 200 MBBS seats, fees of ₹19,78,214 per year, and a ranking label of #54 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/shri-ram-murti-smarak-institute-of-medical-sciences",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 77, slug: "hind-institute-of-medical-sciences",
      name: "Hind Institute of Medical Sciences", shortName: "Hind Institute of Medical Sciences", city: "Sultanpur", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "150", ranking: "#58 IN INDIA", annualTuition: "₹12,92,675 per year", approximateAnnualTotal: "₹12,92,675 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Hind Institute of Medical Sciences as a private medical college in Sultanpur and lists 150 MBBS seats, fees of ₹12,92,675 per year, and a ranking label of #58 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/hind-institute-of-medical-sciences",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 78, slug: "santosh-medical-college",
      name: "Santosh Medical College", shortName: "Santosh Medical College", city: "Ghaziabad", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "150", ranking: "#47 IN INDIA", annualTuition: "₹24,00,000 per year", approximateAnnualTotal: "₹24,00,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Santosh Medical College as a private medical college in Ghaziabad and lists 150 MBBS seats, fees of ₹24,00,000 per year, and a ranking label of #47 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/santosh-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 79, slug: "saraswathi-institute-of-medical-sciences",
      name: "Saraswathi Institute of Medical Sciences", shortName: "Saraswathi Institute of Medical Sciences", city: "Ghaziabad", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "150", ranking: "#52 IN INDIA", annualTuition: "₹13,00,000 per year", approximateAnnualTotal: "₹13,00,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Saraswathi Institute of Medical Sciences as a private medical college in Ghaziabad and lists 150 MBBS seats, fees of ₹13,00,000 per year, and a ranking label of #52 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/saraswathi-institute-of-medical-sciences",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 80, slug: "teerthanker-mahaveer-medical-college",
      name: "Teerthanker Mahaveer Medical College", shortName: "Teerthanker Mahaveer Medical College", city: "Moradabad", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "250", ranking: "#56 IN INDIA", annualTuition: "₹16,20,000 per year", approximateAnnualTotal: "₹16,20,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Teerthanker Mahaveer Medical College as a private medical college in Moradabad and lists 250 MBBS seats, fees of ₹16,20,000 per year, and a ranking label of #56 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/teerthanker-mahaveer-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 81, slug: "rohilkhand-medical-college",
      name: "Rohilkhand Medical College", shortName: "Rohilkhand Medical College", city: "Bareilly", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "250", ranking: "#60 IN INDIA", annualTuition: "₹18,72,361 per year", approximateAnnualTotal: "₹18,72,361 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Rohilkhand Medical College as a private medical college in Bareilly and lists 250 MBBS seats, fees of ₹18,72,361 per year, and a ranking label of #60 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/rohilkhand-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 82, slug: "siddhartha-institute-of-medical-sciences",
      name: "Siddhartha Institute of Medical Sciences", shortName: "Siddhartha Institute of Medical Sciences", city: "Kanpur", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "80", ranking: "#62 IN INDIA", annualTuition: "₹8,00,000 per year", approximateAnnualTotal: "₹8,00,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Siddhartha Institute of Medical Sciences as a private medical college in Kanpur and lists 80 MBBS seats, fees of ₹8,00,000 per year, and a ranking label of #62 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/siddhartha-institute-of-medical-sciences",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 83, slug: "prasad-institute-of-medical-sciences",
      name: "Prasad Institute of Medical Sciences", shortName: "Prasad Institute of Medical Sciences", city: "Lucknow", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "150", ranking: "#64 IN INDIA", annualTuition: "₹11,03,932 per year", approximateAnnualTotal: "₹11,03,932 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Prasad Institute of Medical Sciences as a private medical college in Lucknow and lists 150 MBBS seats, fees of ₹11,03,932 per year, and a ranking label of #64 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/prasad-institute-of-medical-sciences",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 84, slug: "mayo-institute-of-medical-sciences",
      name: "Mayo Institute of Medical Sciences", shortName: "Mayo Institute of Medical Sciences", city: "Lucknow", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "50", ranking: "#66 IN INDIA", annualTuition: "₹6,00,000 per year", approximateAnnualTotal: "₹6,00,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Mayo Institute of Medical Sciences as a private medical college in Lucknow and lists 50 MBBS seats, fees of ₹6,00,000 per year, and a ranking label of #66 IN INDIA. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/mayo-institute-of-medical-sciences",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 85, slug: "autonomous-state-medical-college",
      name: "Autonomous State Medical College", shortName: "Autonomous State Medical College", city: "Uttar Pradesh", state: "Uttar Pradesh", type: "GOVERNMENT",
      seats: "100", ranking: "Not stated by source", annualTuition: "Contact for Fees", approximateAnnualTotal: "Contact for Fees", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Autonomous State Medical College as a government medical college in Uttar Pradesh and lists 100 MBBS seats, fees of Contact for Fees, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/autonomous-state-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 86, slug: "career-instt-of-medical-sciences",
      name: "Career Instt. Of Medical Sciences", shortName: "Career Instt. Of Medical Sciences", city: "Lucknow", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "150", ranking: "Not stated by source", annualTuition: "₹16,50,000 per year", approximateAnnualTotal: "₹16,50,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Career Instt. Of Medical Sciences as a private medical college in Lucknow and lists 150 MBBS seats, fees of ₹16,50,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/career-instt-of-medical-sciences",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 87, slug: "dr-bs-kushwah-medical-college",
      name: "Dr. B.S. Kushwah Medical College", shortName: "Dr. B.S. Kushwah Medical College", city: "Kanpur", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "150", ranking: "Not stated by source", annualTuition: "₹14,14,159 per year", approximateAnnualTotal: "₹14,14,159 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Dr. B.S. Kushwah Medical College as a private medical college in Kanpur and lists 150 MBBS seats, fees of ₹14,14,159 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/dr-bs-kushwah-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 88, slug: "dr-kns-memorial-medical-college",
      name: "Dr. KNS Memorial Medical College", shortName: "Dr. KNS Memorial Medical College", city: "Lucknow", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "250", ranking: "Not stated by source", annualTuition: "₹11,21,162 per year", approximateAnnualTotal: "₹11,21,162 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Dr. KNS Memorial Medical College as a private medical college in Lucknow and lists 250 MBBS seats, fees of ₹11,21,162 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/dr-kns-memorial-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 89, slug: "era-lucknow-medical-college",
      name: "Era Lucknow Medical College", shortName: "Era Lucknow Medical College", city: "Lucknow", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "250", ranking: "Not stated by source", annualTuition: "₹16,60,000 per year", approximateAnnualTotal: "₹16,60,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Era Lucknow Medical College as a private medical college in Lucknow and lists 250 MBBS seats, fees of ₹16,60,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/era-lucknow-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 90, slug: "fh-medical-college",
      name: "F.H. Medical College", shortName: "F.H. Medical College", city: "Agra", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "250", ranking: "Not stated by source", annualTuition: "₹17,95,000 per year", approximateAnnualTotal: "₹17,95,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes F.H. Medical College as a private medical college in Agra and lists 250 MBBS seats, fees of ₹17,95,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/fh-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 91, slug: "gs-medical-college",
      name: "G.S. Medical College", shortName: "G.S. Medical College", city: "Hapur", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "250", ranking: "Not stated by source", annualTuition: "₹14,42,654 per year", approximateAnnualTotal: "₹14,42,654 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes G.S. Medical College as a private medical college in Hapur and lists 250 MBBS seats, fees of ₹14,42,654 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/gs-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 92, slug: "heritage-institute-of-medical-sciences",
      name: "Heritage Institute of Medical Sciences", shortName: "Heritage Institute of Medical Sciences", city: "Varanasi", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "200", ranking: "Not stated by source", annualTuition: "₹13,21,492 per year", approximateAnnualTotal: "₹13,21,492 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Heritage Institute of Medical Sciences as a private medical college in Varanasi and lists 200 MBBS seats, fees of ₹13,21,492 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/heritage-institute-of-medical-sciences",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 93, slug: "integral-institute-of-medical-sciences",
      name: "Integral Institute of Medical Sciences", shortName: "Integral Institute of Medical Sciences", city: "Lucknow", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "200", ranking: "Not stated by source", annualTuition: "₹18,00,000 per year", approximateAnnualTotal: "₹18,00,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Integral Institute of Medical Sciences as a private medical college in Lucknow and lists 200 MBBS seats, fees of ₹18,00,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/integral-institute-of-medical-sciences",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 94, slug: "kd-medical-college",
      name: "K.D. Medical College", shortName: "K.D. Medical College", city: "Mathura", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "250", ranking: "Not stated by source", annualTuition: "₹12,28,240 per year", approximateAnnualTotal: "₹12,28,240 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes K.D. Medical College as a private medical college in Mathura and lists 250 MBBS seats, fees of ₹12,28,240 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/kd-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 95, slug: "kmc-medical-college",
      name: "KMC Medical College", shortName: "KMC Medical College", city: "Meerut", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "200", ranking: "Not stated by source", annualTuition: "₹14,14,159 per year", approximateAnnualTotal: "₹14,14,159 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes KMC Medical College as a private medical college in Meerut and lists 200 MBBS seats, fees of ₹14,14,159 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/kmc-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 96, slug: "krishna-mohan-medical-college",
      name: "Krishna Mohan Medical College", shortName: "Krishna Mohan Medical College", city: "Mathura", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "200", ranking: "Not stated by source", annualTuition: "₹11,73,856 per year", approximateAnnualTotal: "₹11,73,856 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Krishna Mohan Medical College as a private medical college in Mathura and lists 200 MBBS seats, fees of ₹11,73,856 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/krishna-mohan-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 97, slug: "major-s-d-singh-medical-college",
      name: "Major S D Singh Medical College", shortName: "Major S D Singh Medical College", city: "Farrukhabad", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "100", ranking: "Not stated by source", annualTuition: "Contact for Fees", approximateAnnualTotal: "Contact for Fees", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Major S D Singh Medical College as a private medical college in Farrukhabad and lists 100 MBBS seats, fees of Contact for Fees, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/major-s-d-singh-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 98, slug: "muzaffarnagar-medical-college",
      name: "Muzaffarnagar Medical College", shortName: "Muzaffarnagar Medical College", city: "Muzaffarnagar", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "200", ranking: "Not stated by source", annualTuition: "₹16,72,660 per year", approximateAnnualTotal: "₹16,72,660 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Muzaffarnagar Medical College as a private medical college in Muzaffarnagar and lists 200 MBBS seats, fees of ₹16,72,660 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/muzaffarnagar-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 99, slug: "naraina-medical-college",
      name: "Naraina Medical College", shortName: "Naraina Medical College", city: "Kanpur", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "250", ranking: "Not stated by source", annualTuition: "₹12,14,683 per year", approximateAnnualTotal: "₹12,14,683 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Naraina Medical College as a private medical college in Kanpur and lists 250 MBBS seats, fees of ₹12,14,683 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/naraina-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 100, slug: "national-capital-region-institute",
      name: "National Capital Region Institute", shortName: "National Capital Region Institute", city: "Meerut", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "200", ranking: "Not stated by source", annualTuition: "₹12,19,917 per year", approximateAnnualTotal: "₹12,19,917 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes National Capital Region Institute as a private medical college in Meerut and lists 200 MBBS seats, fees of ₹12,19,917 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/national-capital-region-institute",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 101, slug: "noida-international-institute",
      name: "Noida International Institute", shortName: "Noida International Institute", city: "Noida", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "150", ranking: "Not stated by source", annualTuition: "₹17,16,784 per year", approximateAnnualTotal: "₹17,16,784 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Noida International Institute as a private medical college in Noida and lists 150 MBBS seats, fees of ₹17,16,784 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/noida-international-institute",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 102, slug: "punyashloka-medical-college",
      name: "Punyashloka Medical College", shortName: "Punyashloka Medical College", city: "Uttar Pradesh", state: "Uttar Pradesh", type: "GOVERNMENT",
      seats: "100", ranking: "Not stated by source", annualTuition: "Contact for Fees", approximateAnnualTotal: "Contact for Fees", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Punyashloka Medical College as a government medical college in Uttar Pradesh and lists 100 MBBS seats, fees of Contact for Fees, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/punyashloka-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 103, slug: "rajshree-medical-research-institute",
      name: "Rajshree Medical Research Institute", shortName: "Rajshree Medical Research Institute", city: "Bareilly", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "250", ranking: "Not stated by source", annualTuition: "₹17,68,904 per year", approximateAnnualTotal: "₹17,68,904 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Rajshree Medical Research Institute as a private medical college in Bareilly and lists 250 MBBS seats, fees of ₹17,68,904 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/rajshree-medical-research-institute",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 104, slug: "rama-medical-college",
      name: "Rama Medical College", shortName: "Rama Medical College", city: "Kanpur", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "250", ranking: "Not stated by source", annualTuition: "₹11,73,856 per year", approximateAnnualTotal: "₹11,73,856 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Rama Medical College as a private medical college in Kanpur and lists 250 MBBS seats, fees of ₹11,73,856 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/rama-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 105, slug: "saraswati-institute-of-medical-sciences",
      name: "Saraswati Institute of Medical Sciences", shortName: "Saraswati Institute of Medical Sciences", city: "Hapur", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "250", ranking: "Not stated by source", annualTuition: "₹11,81,671 per year", approximateAnnualTotal: "₹11,81,671 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Saraswati Institute of Medical Sciences as a private medical college in Hapur and lists 250 MBBS seats, fees of ₹11,81,671 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/saraswati-institute-of-medical-sciences",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 106, slug: "saraswati-medical-college",
      name: "Saraswati Medical College", shortName: "Saraswati Medical College", city: "Unnao", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "150", ranking: "Not stated by source", annualTuition: "₹11,59,610 per year", approximateAnnualTotal: "₹11,59,610 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Saraswati Medical College as a private medical college in Unnao and lists 150 MBBS seats, fees of ₹11,59,610 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/saraswati-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 107, slug: "sharda-school-of-medical-sciences",
      name: "Sharda School of Medical Sciences", shortName: "Sharda School of Medical Sciences", city: "Greater Noida", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "250", ranking: "Not stated by source", annualTuition: "₹15,23,183 per year", approximateAnnualTotal: "₹15,23,183 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Sharda School of Medical Sciences as a private medical college in Greater Noida and lists 250 MBBS seats, fees of ₹15,23,183 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/sharda-school-of-medical-sciences",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 108, slug: "shri-gorakhnath-medical-college",
      name: "Shri Gorakhnath Medical College", shortName: "Shri Gorakhnath Medical College", city: "Gorakhpur", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "150", ranking: "Not stated by source", annualTuition: "₹14,14,159 per year", approximateAnnualTotal: "₹14,14,159 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Shri Gorakhnath Medical College as a private medical college in Gorakhpur and lists 150 MBBS seats, fees of ₹14,14,159 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/shri-gorakhnath-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 109, slug: "shri-siddhi-vinayak-medical-college",
      name: "Shri Siddhi Vinayak Medical College", shortName: "Shri Siddhi Vinayak Medical College", city: "Bareilly", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "150", ranking: "Not stated by source", annualTuition: "₹14,14,159 per year", approximateAnnualTotal: "₹14,14,159 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Shri Siddhi Vinayak Medical College as a private medical college in Bareilly and lists 150 MBBS seats, fees of ₹14,14,159 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/shri-siddhi-vinayak-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 110, slug: "sks-hospital-medical-college",
      name: "SKS Hospital Medical College", shortName: "SKS Hospital Medical College", city: "Mathura", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "200", ranking: "Not stated by source", annualTuition: "₹12,14,683 per year", approximateAnnualTotal: "₹12,14,683 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes SKS Hospital Medical College as a private medical college in Mathura and lists 200 MBBS seats, fees of ₹12,14,683 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/sks-hospital-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 111, slug: "subharti-medical-college",
      name: "Subharti Medical College", shortName: "Subharti Medical College", city: "Meerut", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "200", ranking: "Not stated by source", annualTuition: "₹14,22,160 per year", approximateAnnualTotal: "₹14,22,160 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Subharti Medical College as a private medical college in Meerut and lists 200 MBBS seats, fees of ₹14,22,160 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/subharti-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 112, slug: "t-s-misra-medical-college",
      name: "T S Misra Medical College", shortName: "T S Misra Medical College", city: "Lucknow", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "250", ranking: "Not stated by source", annualTuition: "₹18,70,847 per year", approximateAnnualTotal: "₹18,70,847 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes T S Misra Medical College as a private medical college in Lucknow and lists 250 MBBS seats, fees of ₹18,70,847 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/t-s-misra-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 113, slug: "united-institute-of-medical-sciences",
      name: "United Institute of Medical Sciences", shortName: "United Institute of Medical Sciences", city: "Prayagraj", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "150", ranking: "Not stated by source", annualTuition: "₹11,90,401 per year", approximateAnnualTotal: "₹11,90,401 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes United Institute of Medical Sciences as a private medical college in Prayagraj and lists 150 MBBS seats, fees of ₹11,90,401 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/united-institute-of-medical-sciences",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 114, slug: "varun-arjun-medical-college",
      name: "Varun Arjun Medical College", shortName: "Varun Arjun Medical College", city: "Shahjahanpur", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "250", ranking: "Not stated by source", annualTuition: "₹14,52,000 per year", approximateAnnualTotal: "₹14,52,000 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Varun Arjun Medical College as a private medical college in Shahjahanpur and lists 250 MBBS seats, fees of ₹14,52,000 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/varun-arjun-medical-college",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
    {
      order: 115, slug: "venkateshwara-institute-of-medical-sciences",
      name: "Venkateshwara Institute of Medical Sciences", shortName: "Venkateshwara Institute of Medical Sciences", city: "Gajraula", state: "Uttar Pradesh", type: "PRIVATE",
      seats: "250", ranking: "Not stated by source", annualTuition: "₹11,10,508 per year", approximateAnnualTotal: "₹11,10,508 per year", nriFee: "Not stated on the extracted directory card",
      academicHighlights: ["Clinical training (source-page wording)", "Teaching faculty (source-page wording)", "Hospital exposure (verify officially)"],
      about: "The reference directory describes Venkateshwara Institute of Medical Sciences as a private medical college in Gajraula and lists 250 MBBS seats, fees of ₹11,10,508 per year, and a ranking label of Not stated by source. These are source-page claims and the ranking method/year are not stated.",
      sourceUrl: "https://www.futuremindedu.in/colleges/venkateshwara-institute-of-medical-sciences",
      flags: ["All name, type, location, recognition, seat, fee and ranking values in this profile are unverified reference-page claims. Confirm the exact institution, current NMC status, seat matrix, fee year and counselling route with official sources."]
    },
  ];

  const result = records.map((record) => ({
    ...common,
    ...record,
    recognition: record.recognition || common.recognition,
    annualTotal: record.approximateAnnualTotal,
    sourceAccessed: "2026-10-16",
    sourceLabel: "Future Mind Educare reference page (not an official college or counselling authority)",
    placementQuote: record.placementQuote || common.defaultPlacementQuote,
    stipendClaim: record.stipendClaim || "Not stated on the extracted profile page",
    academicHighlights: record.academicHighlights || ["Experienced faculty", "Modern laboratories", "Clinical training", "Research opportunities"]
  }));

  window.MEDICURA_COLLEGE_PROFILES = result;
})();
