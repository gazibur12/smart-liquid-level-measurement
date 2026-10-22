LEVEL LAB — SMART LIQUID LEVEL MONITOR WEBSITE

FILES
- index.html: website content and layout
- style.css: responsive styling
- script.js: interactive level demo, photo gallery, navigation and copy button
- assets/: project photos supplied in the conversation

HOW TO VIEW
1. Extract the ZIP file.
2. Open index.html in a modern browser.
3. Keep the assets folder beside index.html so project photos load.

HOW TO PUBLISH FREE
Option 1 — GitHub Pages:
1. Sign in to GitHub and create a public repository.
2. Upload index.html, style.css, script.js and the entire assets folder.
3. Open repository Settings > Pages.
4. Choose Deploy from a branch, select main and /(root), then Save.
5. GitHub will provide a public website URL.

Option 2 — Netlify:
1. Sign in to Netlify.
2. Drag the extracted project folder into Netlify's manual deploy area.
3. Use the generated public URL.

PROJECT NOTES
- The interactive slider is a browser simulation, not a live Arduino connection.
- The project page describes a 9.2 cm container and thresholds: below 30% = red, 30% to below 75% = yellow, 75% or above = green.
- The website does not send data to or control the physical hardware.
