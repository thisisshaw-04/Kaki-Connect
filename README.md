# KakiConnect

A clickable Singapore community companion demo. Journeys and copy follow the [Stitch](https://stitch.withgoogle.com/projects/15237305400784592082) screens (elderly + volunteer), with **Family** kept as a third role so daughter **Sarah Tan** can follow outing check-ins.

The UI uses a pastel wellness look: off-white canvas, mint / sky / butter / blush cards, large type, and a bottom tab bar that stays in the page flow so it never covers names, cards, or check-ins. Product copy, names, and tap paths are unchanged.

## Roles

- **Elderly:** splash → 10-step setup (name, age & estate, languages, mobility, support, favourite activity, Family Peace of Mind, voice note, text size, all set) → Today’s Choice → Discover → support preference → companion match → outing details → booking. Buddies: call Uncle Raymond → live kopi video → 18-minute wrap-up. Care Hub for Sarah, Fei Yue FSC, 995.
- **Family:** welcome → what you can see → today (live outing, quiet day, failed refresh) → check-in timeline → this week → a short note.
- **Volunteer:** welcome & scope → open requests (fishing tomorrow 3:30, dim sum with Mdm Wong) → route & timings → meeting plan (Sarah Tan + Sarah Lee / Fei Yue) → 1-tap live check-in → safety guidelines.

Demo characters: Uncle Tan (Tan Ah Kow), Sarah Tan, Rachel Lin, Uncle Raymond, Ahmad, Susan, Mr Tan. No login or database.

## Run locally

```bash
npm install
npm run dev -- --port 4321
```

Open [http://localhost:4321](http://localhost:4321) and choose a role.
