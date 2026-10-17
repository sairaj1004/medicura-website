MediCura unified directory update

Included files:
- app.js: shared searchable/filterable/paginated directory UI for MBBS India, MBBS Abroad, and MD/MS.
- index.html: loads both profile data files before app.js.
- styles.css: retained existing styles.
- college-profiles.js: existing India data.
- college-profiles-aborad.js: abroad data exposed separately as MEDICURA_ABROAD_COLLEGE_PROFILES.

Copy these files into the same frontend folder, replacing matching files. Keep the spelling college-profiles-aborad.js exactly as shown because it is the current project filename.

Note: MD/MS currently uses the available India institution records for the shared UI because a separate MD/MS course dataset was not included in the supplied project. It is not an MD/MS seat/specialty dataset.
