# काम CLUB — Student Productivity & Collaboration Platform

> **Official Tagline:** *Less chaos, more kaam.*

**काम CLUB** (`Kaam Club`) is an all-in-one editorial productivity, team collaboration, 3-tier contribution verification, and shareable portfolio web application built for college students.

## 🌐 Live Demo Page
- **Live Demo (GitHub Pages):** [https://dhrgupta096.github.io/kaam-club/](https://dhrgupta096.github.io/kaam-club/)

---

## ✨ Core Modules & Signature USP

1. **Smart Planner (Signature Feature)**
   - Combines tasks from **all team projects and personal academic commitments** into one realistic daily schedule.
   - Rule-based scheduling engine sorts tasks by overdue status, deadline proximity, priority (`Urgent`, `High`, `Medium`, `Low`), and estimated effort hours.
   - Respects daily available study/work hours, max tasks per day, preferred study window, and rest days.
   - Automatically flags overloaded days and deadline conflicts in Berry Wine (`#713C4C`) and offers 1-click overdue rescheduling (**Generate My Schedule**).

2. **Live Student Dashboard**
   - 100% data-driven metrics calculated dynamically from stored tasks and projects.
   - Includes Today's Smart Schedule, 7-Day Workload Rhythm chart, Active Project Workspaces, Upcoming Deadlines, and Recent Team Activity.

3. **Project Workspace (6-Tab Team Collaboration)**
   - Create projects, copy team invite codes (`KAAM-SOLAR-26`), assign tasks, track milestones, upload files, and post updates across *Overview*, *Tasks*, *Team*, *Milestones*, *Files*, and *Activity*.
   - Any task assigned in a Project Workspace automatically syncs into the student's personal Smart Planner.

4. **3-Tier Contribution Tracker**
   - Solves the group project accountability problem by clearly distinguishing:
     - **Tier 1:** Self-Reported Task Completion
     - **Tier 2:** Evidence Submitted (commits, PDFs, links)
     - **Tier 3:** Verified by a Teammate or Faculty Member
   - Includes peer/faculty endorsement logging and printable verification reports.

5. **Student Portfolio & Recognition Hub**
   - **Student Portfolio:** Shareable proof-of-work student profile with a *Public View* toggle, skills, certificates, and verified project contribution summaries.
   - **Recognition Hub:** Unlocks milestone badges (*First Project Completed*, *Team Player*, *Consistency Streak*, *Research Contributor*, *Deadline Champion*) and calculates contributor standings from real completed work.

---

## 🎨 Brand Identity & Editorial Design System

- **Primary Wordmark:** `काम CLUB` (`Mukta` / `Hind` for Devanagari + `Space Grotesk` for headings + `DM Sans` for body/UI)
- **Approved Color Palette:**
  - Warm Paper: `#F5F1E8` (40% primary canvas)
  - Herb Green: `#526B55` & Deep Ink: `#292D29` (25% structure & signature brand core)
  - Soft Pastels: Lilac Milk `#D9BBD0`, Powder Blue `#B9C9E5`, Butter Yellow `#E8DFAE` (25% surface highlights)
  - Bold Accents: Berry Wine `#713C4C` & Burnt Apricot `#E6A04B` (10% urgent items, active navigation & key CTAs)

---

## 🚀 Running Locally

```bash
# Serve the static web app
python3 -m http.server 8420

# Run the Smart Planner & Recognition Engine verification check
node test_planner.js
```
