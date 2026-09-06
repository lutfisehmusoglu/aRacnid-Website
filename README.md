# aRacnid GamepadApp Website

Single-page landing site for **aRacnid GamepadApp**.

## Local preview

Open the project folder in VS Code and start `index.html` with the **Live Server** extension.

## Main files

- `index.html` — complete one-page website
- `css/custom.css` — dark navy theme and responsive layout
- `js/main.js` — navigation, scroll reveal, EN/TR language switching, download behavior
- `assets/` — app icon, aRacnid logo and application screenshots

The older Nexora page filenames remain as lightweight redirects so old local links do not break. The actual website content lives in `index.html`.

## Current release links

The main Windows and Setup buttons use the official Microsoft Store badge generator's **Launch mode: Direct** link for **9P63JVQ9ZTX2**:

`https://get.microsoft.com/installer/download/9P63JVQ9ZTX2?referrer=appbadge`

Generated using https://apps.microsoft.com/badge on 2026-09-06. This stable product endpoint resolves the current Web Installer; do not replace it with the resulting temporary EXE URL. The custom buttons use ordinary same-tab links, independent of the legacy download handler. No Microsoft badge script is required.

Non-Windows devices use https://apps.microsoft.com/detail/9P63JVQ9ZTX2 instead. A visible Store fallback is also available in the Setup card if the browser cannot download the installer. With JavaScript disabled, the official Direct endpoint still works.

The Portable card remains separate from Microsoft Store and links to the latest GitHub release asset: `aRacnid-win-Portable.zip`. Its legacy download handler remains active.

## Publishing

This is a static HTML/CSS/JS site without a build step. No Cloudflare/Wrangler configuration, deployment workflow, project identifier or domain was present in the checkout during inspection. Confirm the existing Cloudflare project and domain before reconnecting; do not create replacements. Deployment, commit and push require the owner's explicit approval. Never place credentials in the source or Git history.

## Verification (2026-09-06)

- On Windows, both the hero button (English) and Setup button (Turkish) emitted real browser download events while the site stayed open.
- The downloaded `aRacnid GamepadApp Installer.exe` was 815,136 bytes and had a valid Microsoft Corporation Authenticode signature. Running it opened the Microsoft Store installer for aRacnid GamepadApp and began downloading the app.
- The Store fallback page displayed the correct application. Windows/non-Windows URL selection passed isolated checks; non-Windows hardware was not available for an end-to-end test.
- The Portable card links to the latest GitHub release ZIP. Public download availability depends on the application repository and release asset being publicly accessible.
- JavaScript syntax, local linked assets, internal anchors, loaded images, EN/TR labels and the download section layout were checked. No browser console errors were captured.
- The signed-in Cloudflare account showed no Workers & Pages projects. Its existing `aracnidapi.xyz` zone had zero DNS records and reported the root/www hostnames unreachable. The intended existing hosting project/domain must be identified by the owner before reconnection. No cloud settings were changed, and nothing was deployed, committed or pushed.

## App project

https://github.com/lutfisehmusoglu/aRacnid-GamepadApp

The **aRacnid GamepadApp application** is licensed under GPL-3.0.

## Website template credit

This website was adapted from the **Nexora** Bootstrap 5 template by Harshad Mahadik and development team, distributed by ThemeWagon under the MIT license. The original template credit is intentionally preserved here even though the landing page has been substantially redesigned for aRacnid.

Original template: https://github.com/themewagon/nexora
