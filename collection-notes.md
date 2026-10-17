# College collection notes

Source directory: https://www.futuremindedu.in/colleges/mbbs-india

The site presents a client-side paginated directory with 296 results across 25 pages. Pages expose college cards with name, slug, city, recognition text, fee, seats, type and ranking. The existing MediCura dataset already contains 17 records; new records must be deduplicated by slug before merging.

The collected page extraction for pages 2–10 is preserved in `collected-pages-2-10-raw.txt`. All values are source-page claims and must remain visibly marked as unverified reference data in the app.
