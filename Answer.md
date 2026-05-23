# ANSWERS.md

## 1. How to Run

No installation needed. Just open `index.html` in any browser:

```
open index.html
```

It is a single HTML file with no dependencies.

---

## 2. Stack & Design Choices

**Stack:** Plain HTML, CSS, and JavaScript — no framework or libraries.

I chose this because it is the most straightforward approach for a single-page tool. No setup, no build step, just one file that works in any browser.

**Design decision 1 — Preset tip buttons above the custom input**

I placed the 10%, 15%, 20% buttons above the custom tip field so the user sees the quick options first. Most people pick a standard tip, so the presets save time. The active button turns green so it is clearly visible which one is selected.

**Design decision 2 — Results section always visible**

I kept the results box always on screen (showing Rs 0.00 by default) instead of hiding it until the user fills all fields. This way the user always knows where to look and sees the numbers update as they type.

---

## 3. Responsive & Accessibility

The layout is a centered white card that works on standard desktop screens.

**Accessibility consideration I handled:**

Error messages appear directly below the field that has the problem. The text is red so it is easy to spot. Each input has a label clearly describing what to enter.

**One I skipped:**

I did not add keyboard navigation for the preset tip buttons or test with a screen reader. That would require extra ARIA attributes which I am still learning.

---

## 4. AI Usage

I used Claude (Anthropic) for this project.

**What I asked:** I asked Claude to help me write the JavaScript for the calculator because I am still learning JS. I told it I wanted basic, readable code — no advanced syntax.

**What I changed:** The AI originally used `const` and `let` with arrow functions. I asked it to rewrite using `var` and regular `function` syntax since that is what I understand. I also asked it to remove animations and CSS variables because I wanted the code to stay simple and easy to read.

The HTML structure and CSS styling decisions — layout, colors, spacing — are things I understand and worked on directly.

---

## 5. Honest Gap

The JavaScript is the weakest part of my submission. I understand what each part does when I read it, but I could not have written it from scratch on my own yet. I am currently learning JS.

With more time, I would learn the JS logic well enough to write it myself — specifically the `calculate()` function and the input validation. That is the part I want to get better at.