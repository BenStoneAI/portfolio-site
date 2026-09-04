HOW TO ADD YOUR RESUME
======================

Resume links on the site currently point to /about#resume with an
honest "available on request" message — there is no /resume.pdf yet,
so the old PDF link was removed to avoid a 404.

To publish a downloadable resume later:

1. Add the PDF here as:

       public/resume.pdf

2. Set links.resumePdf = "/resume.pdf" in src/content/links.ts

3. Wire nav/about CTAs to prefer links.resumePdf when present
   (Footer/Header already use resumeRequestHref until that exists).

This file is safe to delete once resume.pdf is in place.
