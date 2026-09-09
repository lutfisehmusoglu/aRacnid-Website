# aRacnid GamepadApp Website

Single-page landing site for **aRacnid GamepadApp**.

## Local preview

Open the project folder in VS Code and start `index.html` with the **Live Server** extension.

## Main files

- `index.html` — complete one-page website
- `css/custom.css` — dark navy theme and responsive layout
- `js/main.js` — navigation, scroll reveal, EN/TR language switching, download behavior
- `assets/` — app icon, optimized aRacnid logos and application screenshots

The older Nexora page filenames remain as lightweight redirects so old local links do not break. The actual website content lives in `index.html`.

## Current release links (1.1.4)

The main Windows and Setup buttons use the official Microsoft Store badge generator's **Launch mode: Direct** link for **9P63JVQ9ZTX2**:

`https://get.microsoft.com/installer/download/9P63JVQ9ZTX2?referrer=appbadge`

Generated using https://apps.microsoft.com/badge on 2026-09-06. This stable product endpoint resolves the current Web Installer; do not replace it with the resulting temporary EXE URL. The custom buttons use ordinary same-tab links, independent of the legacy download handler. No Microsoft badge script is required.

Non-Windows devices use https://apps.microsoft.com/detail/9P63JVQ9ZTX2 instead. A visible Store fallback is also available in the Setup card if the browser cannot download the installer. With JavaScript disabled, the official Direct endpoint still works.

The GitHub cards remain separate from Microsoft Store and use the stable latest-release asset URLs:

- Setup: `aRacnid-win-Setup.exe`
- Portable: `aRacnid-win-Portable.zip`

The Microsoft Store Web Installer is Microsoft-signed. The GitHub Setup and Portable packages are currently unsigned and may trigger Windows SmartScreen; their published SHA-256 values should be checked against `SHA256SUMS.txt` in the release.

The page uses `1.1.4` as its offline/API-failure fallback and replaces it with the latest stable GitHub release version when the API request succeeds.

## Current feature screenshots

- `tester-ds4.png` — DualShock 4 touch trail and touchpad-click highlight
- `remap-ds4.png` — DualShock 4 touchpad mode and button mappings
- `update-manager.png` — source-aware GitHub / Microsoft Store update manager

## Publishing

This is a static HTML/CSS/JS site without a build step. The intended host is GitHub Pages from the main branch; Cloudflare is used only for anonymous Web Analytics/Insights. Enable GitHub Pages in the repository settings with main and the root directory, then use the generated github.io URL. Never place credentials in the source or Git history.

## Verification

- On 2026-09-06, both the hero button (English) and Store button (Turkish) emitted real browser download events on Windows while the site stayed open.
- The Store Web Installer downloaded during that check was 815,136 bytes and had a valid Microsoft Corporation Authenticode signature. Running it opened the Microsoft Store installer for aRacnid GamepadApp and began downloading the app.
- During that check, the Store fallback page displayed the correct application. Windows/non-Windows URL selection passed isolated checks; non-Windows hardware was not available for an end-to-end test.
- The GitHub Setup and Portable cards use the current stable latest-release asset names. Public download availability depends on the application repository and release assets being publicly accessible.
- The website content covers 1.1.4 motion/touchpad support, source-aware updates, direct minimize-to-tray behavior and low-battery warnings in English and Turkish.
- On 2026-09-09, JavaScript syntax, local linked assets, internal anchors, EN/TR translation keys and the download section structure were checked.
- Cloudflare is not the host for this site; it is used only for the Insights beacon included in the page. The aracnidapi.xyz zone currently has no DNS records, so the GitHub Pages URL should be used until a custom domain is configured.

## App project

https://github.com/lutfisehmusoglu/aRacnid-GamepadApp

The **aRacnid GamepadApp application** is licensed under GPL-3.0.

## Website template credit

This website was adapted from the **Nexora** Bootstrap 5 template by Harshad Mahadik and development team, distributed by ThemeWagon under the MIT license. The original template credit is intentionally preserved here even though the landing page has been substantially redesigned for aRacnid.

Original template: https://github.com/themewagon/nexora
