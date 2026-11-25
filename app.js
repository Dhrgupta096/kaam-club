// काम CLUB — Editorial Minimalism & Fluid Motion Application
// Official Tagline: Less chaos, more kaam.

const STORAGE_KEY = 'kaam_club_state_v1';

// Clean 1.75px stroke geometric SVG icons (Zero emoji clutter)
const ICONS = {
  dashboard: `<svg class="icon-svg" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>`,
  planner: `<svg class="icon-svg" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>`,
  projects: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,
  contributions: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  portfolio: `<svg class="icon-svg" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  recognition: `<svg class="icon-svg" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  settings: `<svg class="icon-svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  plus: `<svg class="icon-svg" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  check: `<svg class="icon-svg" style="width:13px;height:13px;stroke-width:2.5;" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
  bell: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  spark: `<svg class="icon-svg" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  edit: `<svg class="icon-svg" style="width:14px;height:14px;" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  trash: `<svg class="icon-svg" style="width:14px;height:14px;" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  link: `<svg class="icon-svg" style="width:15px;height:15px;" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  arrowRight: `<svg class="icon-svg" style="width:15px;height:15px;" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  sliders: `<svg class="icon-svg" style="width:15px;height:15px;" viewBox="0 0 24 24"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`,
  file: `<svg class="icon-svg" style="width:15px;height:15px;" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`
};

function offsetDate(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

const PRIORITY_WEIGHT = { Urgent: 4, High: 3, Medium: 2, Low: 1 };

function createInitialState() {
  return {
    currentView: 'landing',
    authMode: 'login',
    isLoggedIn: false,
    mobileSidebarOpen: false,
    notifOpen: false,
    availabilityDrawerOpen: false,
    expandedTaskId: null,
    publicPortfolioPreview: false,
    selectedProjectId: 'proj-1',
    workspaceTab: 'overview',
    plannerTab: 'daily',
    plannerSearch: '',
    plannerPriorityFilter: 'ALL',
    projectSearch: '',
    user: {
      id: 'usr-1',
      name: 'Aarav Sharma',
      email: 'aarav.sharma@iitd.ac.in',
      college: 'Indian Institute of Technology, Delhi',
      course: 'B.Tech Computer Science & Design',
      year: '3rd Year (Semester 6)',
      bio: 'Full-stack student builder focused on human-computer interaction, autonomous systems, and sustainable campus tools.',
      avatarInitials: 'AS',
      skills: ['TypeScript', 'React', 'Python', 'UI/UX Research', 'SQL & Supabase', 'Embedded C', 'Figma'],
      certificates: [
        { id: 'cert-1', title: 'NPTEL Elite Gold — Design & Analysis of Algorithms', issuer: 'IIT Madras / NPTEL', date: 'Oct 2026' },
        { id: 'cert-2', title: 'Smart India Hackathon Finalist Certificate', issuer: 'Ministry of Education, Govt. of India', date: 'Aug 2026' }
      ],
      availability: {
        hoursPerDay: 5,
        preferredStart: '17:00',
        preferredEnd: '22:00',
        unavailableDays: ['Sunday'],
        dailyTaskLimit: 4
      },
      supabaseUrl: '',
      supabaseAnonKey: ''
    },
    projects: [
      {
        id: 'proj-1',
        title: 'Smart Campus Solar Microgrid Monitor',
        category: 'Research Project',
        description: 'IoT telemetry dashboard and load forecasting model for hostel rooftop solar arrays in collaboration with the Energy Engineering lab.',
        deadline: offsetDate(5),
        inviteCode: 'KAAM-SOLAR-26',
        inPortfolio: true,
        myRole: 'Lead Frontend & Telemetry Pipeline Engineer',
        members: [
          { id: 'usr-1', name: 'Aarav Sharma', role: 'Frontend & Data Pipeline', email: 'aarav.sharma@iitd.ac.in' },
          { id: 'usr-2', name: 'Diya Nair', role: 'ML Load Forecasting', email: 'diya.nair@iitd.ac.in' },
          { id: 'usr-3', name: 'Rohan Kulkarni', role: 'Hardware & ESP32 Nodes', email: 'rohan.k@iitd.ac.in' }
        ],
        milestones: [
          { id: 'ms-1', title: 'ESP32 MQTT Broker Ingestion Live', dueDate: offsetDate(-2), completed: true },
          { id: 'ms-2', title: 'Anomaly Alerting & Inversion Forecast UI', dueDate: offsetDate(2), completed: false },
          { id: 'ms-3', title: 'Faculty Demo & IEEE Poster Submission', dueDate: offsetDate(5), completed: false }
        ],
        files: [
          { id: 'fl-1', name: 'Microgrid_Architecture_v2.pdf', size: '2.4 MB', uploadedBy: 'Aarav Sharma', date: offsetDate(-3) },
          { id: 'fl-2', name: 'Hostel_Block_C_Inverter_Logs.csv', size: '5.1 MB', uploadedBy: 'Rohan Kulkarni', date: offsetDate(-1) }
        ],
        activity: [
          { id: 'act-1', text: 'Aarav Sharma completed MQTT WebSocket chart integration.', time: '2 hours ago' },
          { id: 'act-2', text: 'Diya Nair uploaded LSTM weather-adjusted weights.', time: 'Yesterday' }
        ]
      },
      {
        id: 'proj-2',
        title: 'Inter-IIT Tech Meet — Autonomous Rover UI',
        category: 'Competition',
        description: 'Operator mission control interface with ROS2 bridge, LiDAR point-cloud overlay, and battery fail-safe diagnostics.',
        deadline: offsetDate(9),
        inviteCode: 'KAAM-ROVER-09',
        inPortfolio: true,
        myRole: 'Mission Control UI Architect',
        members: [
          { id: 'usr-1', name: 'Aarav Sharma', role: 'Mission Control UI Architect', email: 'aarav.sharma@iitd.ac.in' },
          { id: 'usr-4', name: 'Kabir Verma', role: 'ROS2 Navigation Stack', email: 'kabir.v@iitd.ac.in' },
          { id: 'usr-5', name: 'Meera Joshi', role: 'Embedded Power Systems', email: 'meera.j@iitd.ac.in' }
        ],
        milestones: [
          { id: 'ms-4', title: 'ROSBridge WebSocket Telemetry Link', dueDate: offsetDate(-4), completed: true },
          { id: 'ms-5', title: 'Emergency Stop & Thermal Latency Audit', dueDate: offsetDate(3), completed: false }
        ],
        files: [
          { id: 'fl-3', name: 'Rover_Control_Protocol_Spec.md', size: '420 KB', uploadedBy: 'Kabir Verma', date: offsetDate(-2) }
        ],
        activity: [
          { id: 'act-3', text: 'Kabir Verma assigned "Latency stress test on 2.4GHz link" to Aarav Sharma.', time: '4 hours ago' }
        ]
      },
      {
        id: 'proj-3',
        title: 'BhashaBridge — Regional Lecture Transcriber',
        category: 'Hackathon',
        description: 'Open-source classroom transcription tool translating technical STEM lectures into Hindi, Tamil, and Marathi study notes.',
        deadline: offsetDate(-1),
        inviteCode: 'KAAM-BHASHA-11',
        inPortfolio: true,
        myRole: 'Full-Stack Developer & Prompt Engineer',
        members: [
          { id: 'usr-1', name: 'Aarav Sharma', role: 'Full-Stack & ASR Pipeline', email: 'aarav.sharma@iitd.ac.in' },
          { id: 'usr-6', name: 'Ananya Rao', role: 'NLP Glossary & Evaluation', email: 'ananya.rao@iitd.ac.in' }
        ],
        milestones: [
          { id: 'ms-6', title: 'Bilingual STEM Glossary Alignment', dueDate: offsetDate(-6), completed: true },
          { id: 'ms-7', title: 'Final Hackathon Jury Pitch Deck & Live Demo', dueDate: offsetDate(-1), completed: true }
        ],
        files: [
          { id: 'fl-4', name: 'BhashaBridge_Final_Paper.pdf', size: '1.8 MB', uploadedBy: 'Aarav Sharma', date: offsetDate(-1) }
        ],
        activity: [
          { id: 'act-4', text: 'Project marked 100% complete and added to Student Portfolio.', time: 'Yesterday' }
        ]
      }
    ],
    tasks: [
      {
        id: 'tsk-1',
        title: 'Build inverter voltage anomaly alert banner & CSV export',
        description: 'Trigger Berry Wine alert threshold when rooftop phase voltage drops below 210V.',
        projectId: 'proj-1',
        category: 'Research Project',
        assignee: 'Aarav Sharma',
        deadline: offsetDate(1),
        priority: 'Urgent',
        durationHours: 2.5,
        completed: false,
        completedAt: null,
        notes: 'Sync threshold constants with Diya before deployment.',
        verificationStatus: 'self',
        evidenceNote: '',
        verifiedBy: ''
      },
      {
        id: 'tsk-2',
        title: 'Operating Systems (CSL301) — Kernel Page Replacement Lab',
        description: 'Implement Clock and LRU page replacement simulation in C with benchmark plots.',
        projectId: 'personal',
        category: 'Academic Assignment',
        assignee: 'Aarav Sharma',
        deadline: offsetDate(0),
        priority: 'Urgent',
        durationHours: 3,
        completed: false,
        completedAt: null,
        notes: 'Submit tar.gz on Moodle before 11:59 PM.',
        verificationStatus: 'self',
        evidenceNote: '',
        verifiedBy: ''
      },
      {
        id: 'tsk-3',
        title: 'Rover UI: Latency stress-test over 2.4GHz field link',
        description: 'Measure frame drop rate and emergency-stop roundtrip latency at 150m range.',
        projectId: 'proj-2',
        category: 'Competition',
        assignee: 'Aarav Sharma',
        deadline: offsetDate(1),
        priority: 'High',
        durationHours: 3.5,
        completed: false,
        completedAt: null,
        notes: 'Test at main athletics ground at 5:30 PM.',
        verificationStatus: 'self',
        evidenceNote: '',
        verifiedBy: ''
      },
      {
        id: 'tsk-4',
        title: 'Draft IEEE 2-page methodology section for Solar Microgrid',
        description: 'Document MQTT telemetry schema and edge caching architecture.',
        projectId: 'proj-1',
        category: 'Research Project',
        assignee: 'Aarav Sharma',
        deadline: offsetDate(-1),
        priority: 'High',
        durationHours: 2,
        completed: false,
        completedAt: null,
        notes: 'Overdue from yesterday due to OS mid-term quiz.',
        verificationStatus: 'self',
        evidenceNote: '',
        verifiedBy: ''
      },
      {
        id: 'tsk-5',
        title: 'Prepare Computer Networks Viva flashcards (TCP Congestion)',
        description: 'Revise Tahoe, Reno, and CUBIC state transitions.',
        projectId: 'personal',
        category: 'Exam Prep',
        assignee: 'Aarav Sharma',
        deadline: offsetDate(3),
        priority: 'Medium',
        durationHours: 2,
        completed: false,
        completedAt: null,
        notes: '',
        verificationStatus: 'self',
        evidenceNote: '',
        verifiedBy: ''
      },
      {
        id: 'tsk-6',
        title: 'Integrate WebSocket MQTT stream for Hostel Block C',
        description: 'Live 5-second interval watt-hour chart using Canvas.',
        projectId: 'proj-1',
        category: 'Research Project',
        assignee: 'Aarav Sharma',
        deadline: offsetDate(-2),
        priority: 'High',
        durationHours: 3,
        completed: true,
        completedAt: offsetDate(-2),
        notes: 'Zero packet loss during 4-hour test.',
        verificationStatus: 'verified',
        evidenceNote: 'GitHub PR #42 + Live Grafana comparison capture (Microgrid_Telemetry_PR42.pdf)',
        verifiedBy: 'Prof. S. Chatterjee (Faculty Advisor) & Diya Nair'
      },
      {
        id: 'tsk-7',
        title: 'Build ROS2 WebSocket telemetry bridge & battery HUD',
        description: 'Subscribes to /odom and /battery_state topics with 60fps canvas gauge.',
        projectId: 'proj-2',
        category: 'Competition',
        assignee: 'Aarav Sharma',
        deadline: offsetDate(-3),
        priority: 'High',
        durationHours: 4,
        completed: true,
        completedAt: offsetDate(-3),
        notes: 'Tested on Jetson Orin Nano.',
        verificationStatus: 'evidence',
        evidenceNote: 'Commit 9f3c1a2 + bench video telemetry_hud_demo.mp4',
        verifiedBy: ''
      },
      {
        id: 'tsk-8',
        title: 'BhashaBridge STEM Glossary Alignment & Hindi UI export',
        description: 'Built deterministic LaTeX-preserving transcript parser and PDF study sheet generator.',
        projectId: 'proj-3',
        category: 'Hackathon',
        assignee: 'Aarav Sharma',
        deadline: offsetDate(-2),
        priority: 'Urgent',
        durationHours: 5,
        completed: true,
        completedAt: offsetDate(-2),
        notes: 'Won Best Social Impact Track!',
        verificationStatus: 'verified',
        evidenceNote: 'GitHub Repo + Jury Evaluation Sheet (BhashaBridge_Final_Paper.pdf)',
        verifiedBy: 'Ananya Rao (Teammate) & Hackathon Jury Panel'
      }
    ],
    peerFeedback: [
      {
        id: 'pf-1',
        projectId: 'proj-1',
        from: 'Diya Nair (ML Lead)',
        role: 'Teammate',
        comment: 'Aarav built the entire MQTT ingestion UI two days ahead of schedule so we could debug our LSTM forecast anomalies in real time.',
        date: offsetDate(-2),
        verified: true
      },
      {
        id: 'pf-2',
        projectId: 'proj-3',
        from: 'Ananya Rao (NLP Lead)',
        role: 'Teammate',
        comment: 'Handled the bilingual PDF export pipeline under huge time pressure during the final 6 hours of the hackathon.',
        date: offsetDate(-1),
        verified: true
      }
    ],
    notifications: [
      { id: 'nt-1', text: 'Smart Planner flagged a workload conflict on tomorrow’s schedule.', type: 'urgent', time: '10m ago', read: false },
      { id: 'nt-2', text: 'Prof. S. Chatterjee verified your contribution on Smart Campus Solar Microgrid.', type: 'verified', time: '2h ago', read: false },
      { id: 'nt-3', text: 'Kabir Verma assigned you "Rover UI: Latency stress-test" in Inter-IIT Rover.', type: 'info', time: '4h ago', read: false }
    ]
  };
}

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return { ...createInitialState(), ...parsed };
    }
  } catch (e) {
    console.warn('Could not load saved state:', e);
  }
  return createInitialState();
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Could not save state:', e);
  }
}

function showToast(message, variant = 'herb') {
  const root = document.getElementById('toast-root');
  if (!root) return;
  const el = document.createElement('div');
  el.className = `toast ${variant === 'berry' ? 'berry' : ''}`;
  el.innerHTML = `${ICONS.check}<span>${escapeHtml(message)}</span>`;
  root.appendChild(el);
  setTimeout(() => {
    el.remove();
  }, 3200);
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getProjectName(projectId) {
  if (!projectId || projectId === 'personal') return 'Personal Academic';
  const p = state.projects.find(x => x.id === projectId);
  return p ? p.title : 'Personal Academic';
}

function getShortProjectName(projectId) {
  const full = getProjectName(projectId);
  return full.length > 26 ? full.slice(0, 24) + '…' : full;
}

function getProjectProgress(projectId) {
  const projTasks = state.tasks.filter(t => t.projectId === projectId);
  if (projTasks.length === 0) return 0;
  const done = projTasks.filter(t => t.completed).length;
  return Math.round((done / projTasks.length) * 100);
}

// ============================================================================
// SIGNATURE USP: RULE-BASED SMART PLANNER SCHEDULING ALGORITHM
// ============================================================================
function generateSmartSchedule() {
  const avail = state.user.availability;
  const maxHoursPerDay = Number(avail.hoursPerDay) || 5;
  const maxTasksPerDay = Number(avail.dailyTaskLimit) || 4;
  const unavailableDays = avail.unavailableDays || [];
  const todayStr = offsetDate(0);

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const days = [];
  for (let i = 0; i < 7; i++) {
    const dateStr = offsetDate(i);
    const dObj = new Date(dateStr + 'T00:00:00');
    const dayName = dayNames[dObj.getDay()];
    const isUnavailable = unavailableDays.includes(dayName);
    days.push({
      date: dateStr,
      label: i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : `${dayName.slice(0, 3)}, ${dateStr.slice(5)}`,
      dayName,
      isUnavailable,
      capacityHours: isUnavailable ? 0 : maxHoursPerDay,
      usedHours: 0,
      assignedTasks: [],
      overloaded: false
    });
  }

  const pendingTasks = state.tasks
    .filter(t => !t.completed)
    .map(t => ({
      ...t,
      isOverdue: t.deadline < todayStr,
      weight: PRIORITY_WEIGHT[t.priority] || 2
    }));

  pendingTasks.sort((a, b) => {
    if (a.isOverdue !== b.isOverdue) return a.isOverdue ? -1 : 1;
    if (a.deadline !== b.deadline) return a.deadline.localeCompare(b.deadline);
    if (b.weight !== a.weight) return b.weight - a.weight;
    return (b.durationHours || 1) - (a.durationHours || 1);
  });

  const conflicts = [];

  for (const task of pendingTasks) {
    const dur = Number(task.durationHours) || 1;
    let placed = false;

    for (const day of days) {
      if (day.isUnavailable) continue;
      const fitsHours = (day.usedHours + dur) <= day.capacityHours;
      const fitsCount = day.assignedTasks.length < maxTasksPerDay;
      const beforeOrOnDeadline = task.isOverdue ? true : (day.date <= task.deadline);

      if (fitsHours && fitsCount && beforeOrOnDeadline) {
        day.assignedTasks.push({
          ...task,
          scheduledDate: day.date,
          conflictReason: task.isOverdue ? 'Rescheduled overdue task' : null
        });
        day.usedHours = Number((day.usedHours + dur).toFixed(1));
        placed = true;
        break;
      }
    }

    if (!placed) {
      let fallbackDay = days.find(d => !d.isUnavailable && (d.usedHours + dur) <= d.capacityHours && d.assignedTasks.length < maxTasksPerDay);
      if (fallbackDay) {
        const missesDeadline = fallbackDay.date > task.deadline;
        const reason = missesDeadline
          ? `Needs ${dur}h by ${task.deadline}; earliest available slot is ${fallbackDay.label}`
          : `Overdue carryover placed on ${fallbackDay.label}`;
        fallbackDay.assignedTasks.push({
          ...task,
          scheduledDate: fallbackDay.date,
          conflictReason: reason
        });
        fallbackDay.usedHours = Number((fallbackDay.usedHours + dur).toFixed(1));
        if (missesDeadline || task.isOverdue) {
          conflicts.push({ task, scheduledDate: fallbackDay.date, reason });
        }
      } else {
        const targetDay = days.find(d => d.date === task.deadline && !d.isUnavailable) || days.find(d => !d.isUnavailable) || days[0];
        const reason = `Overloaded Day: Exceeds ${maxHoursPerDay}h/day limit to meet ${task.deadline} deadline`;
        targetDay.assignedTasks.push({
          ...task,
          scheduledDate: targetDay.date,
          conflictReason: reason
        });
        targetDay.usedHours = Number((targetDay.usedHours + dur).toFixed(1));
        targetDay.overloaded = true;
        conflicts.push({ task, scheduledDate: targetDay.date, reason });
      }
    }
  }

  return {
    days,
    conflicts,
    totalPendingHours: pendingTasks.reduce((acc, t) => acc + (Number(t.durationHours) || 0), 0),
    weeklyCapacityHours: days.reduce((acc, d) => acc + d.capacityHours, 0)
  };
}

// ============================================================================
// DYNAMIC RECOGNITION & ACHIEVEMENT ENGINE
// ============================================================================
function computeRecognitionStats() {
  const completedTasks = state.tasks.filter(t => t.completed);
  const verifiedTasks = completedTasks.filter(t => t.verificationStatus === 'verified');
  const evidenceTasks = completedTasks.filter(t => t.verificationStatus === 'evidence' || t.verificationStatus === 'verified');
  const completedProjects = state.projects.filter(p => getProjectProgress(p.id) === 100);

  const points =
    (completedTasks.length * 40) +
    (evidenceTasks.length * 35) +
    (verifiedTasks.length * 60) +
    (completedProjects.length * 150);

  const badges = [
    {
      id: 'bdg-1',
      title: 'First Project Completed',
      description: 'Finish 100% of tasks in a multi-member project workspace.',
      unlocked: completedProjects.length >= 1,
      progressText: `${completedProjects.length}/1 Projects Completed`,
      code: '01'
    },
    {
      id: 'bdg-2',
      title: 'Team Player',
      description: 'Collaborate across 2+ team projects and receive verified peer feedback.',
      unlocked: state.projects.length >= 2 && state.peerFeedback.length >= 1,
      progressText: `${state.peerFeedback.length} Verified Peer Reviews`,
      code: '02'
    },
    {
      id: 'bdg-3',
      title: 'Consistency Streak',
      description: 'Complete at least 3 high-effort tasks with documented output.',
      unlocked: completedTasks.length >= 3,
      progressText: `${completedTasks.length}/3 Completed Tasks`,
      code: '03'
    },
    {
      id: 'bdg-4',
      title: 'Research Contributor',
      description: 'Attach evidence and earn faculty/peer verification on a Research Project task.',
      unlocked: verifiedTasks.some(t => t.category === 'Research Project'),
      progressText: verifiedTasks.some(t => t.category === 'Research Project') ? 'Verified by Faculty/Peer' : 'Pending Research Verification',
      code: '04'
    },
    {
      id: 'bdg-5',
      title: 'Deadline Champion',
      description: 'Resolve all overdue tasks so zero tasks remain past deadline.',
      unlocked: state.tasks.filter(t => !t.completed && t.deadline < offsetDate(0)).length === 0,
      progressText: state.tasks.filter(t => !t.completed && t.deadline < offsetDate(0)).length === 0
        ? '0 Overdue Tasks'
        : `${state.tasks.filter(t => !t.completed && t.deadline < offsetDate(0)).length} Overdue Task(s) Remaining`,
      code: '05'
    }
  ];

  return { points, badges, completedTasks, verifiedTasks, evidenceTasks, completedProjects };
}

// ============================================================================
// NAVIGATION & INTERACTIONS
// ============================================================================
function navigate(view, extra = {}) {
  state.currentView = view;
  state.mobileSidebarOpen = false;
  state.notifOpen = false;
  if (extra.projectId) state.selectedProjectId = extra.projectId;
  if (extra.workspaceTab) state.workspaceTab = extra.workspaceTab;
  if (extra.plannerTab) state.plannerTab = extra.plannerTab;
  if (extra.authMode) state.authMode = extra.authMode;
  saveState();
  render();
  if (typeof window !== 'undefined' && window.scrollTo) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function toggleTaskDrawer(taskId) {
  state.expandedTaskId = state.expandedTaskId === taskId ? null : taskId;
  render();
}

function toggleTaskCompletion(taskId) {
  const t = state.tasks.find(x => x.id === taskId);
  if (!t) return;
  t.completed = !t.completed;
  t.completedAt = t.completed ? offsetDate(0) : null;

  if (t.projectId && t.projectId !== 'personal') {
    const proj = state.projects.find(p => p.id === t.projectId);
    if (proj) {
      proj.activity.unshift({
        id: 'act-' + Date.now(),
        text: `${state.user.name} ${t.completed ? 'completed' : 'reopened'} "${t.title}".`,
        time: 'Just now'
      });
    }
  }

  saveState();
  render();
  showToast(
    t.completed
      ? `Completed "${t.title}" — Smart Planner & Contribution Tracker synced.`
      : `Reopened "${t.title}".`
  );
}

function rescheduleOverdueTasks() {
  const todayStr = offsetDate(0);
  const tomorrowStr = offsetDate(1);
  let count = 0;
  state.tasks.forEach(t => {
    if (!t.completed && t.deadline < todayStr) {
      t.deadline = tomorrowStr;
      count++;
    }
  });
  saveState();
  render();
  if (count > 0) {
    showToast(`Rescheduled ${count} overdue task(s) into realistic upcoming slots.`);
  } else {
    showToast(`Schedule recalculated — all tasks fit your availability window.`);
  }
}

// ============================================================================
// MODALS
// ============================================================================
function closeModal() {
  const root = document.getElementById('modal-root');
  if (root) root.innerHTML = '';
}

function openTaskModal(defaultProjectId = 'personal', editTaskId = null) {
  const existing = editTaskId ? state.tasks.find(t => t.id === editTaskId) : null;
  const projectOptions = [
    `<option value="personal" ${(!existing && defaultProjectId === 'personal') || (existing && existing.projectId === 'personal') ? 'selected' : ''}>Personal Academic / Exam Prep</option>`,
    ...state.projects.map(p => `<option value="${p.id}" ${(!existing && defaultProjectId === p.id) || (existing && existing.projectId === p.id) ? 'selected' : ''}>Project: ${escapeHtml(p.title)}</option>`)
  ].join('');

  const root = document.getElementById('modal-root');
  root.innerHTML = `
    <div class="modal-backdrop" onclick="if(event.target===this) closeModal()">
      <div class="modal-box">
        <div class="flex-between" style="margin-bottom:20px;">
          <h3>${existing ? 'Edit Task' : 'New Task'}</h3>
          <button class="btn btn-ghost btn-sm" onclick="closeModal()">Close</button>
        </div>
        <form onsubmit="handleSaveTask(event, '${editTaskId || ''}')">
          <div class="form-group">
            <label class="form-label">Task Title</label>
            <input class="form-input" name="title" required placeholder="e.g., Implement inverter telemetry alert threshold" value="${existing ? escapeHtml(existing.title) : ''}" />
          </div>
          <div class="form-group">
            <label class="form-label">Workspace / Category</label>
            <select class="form-select" name="projectId">
              ${projectOptions}
            </select>
          </div>
          <div class="grid-2" style="gap:14px;">
            <div class="form-group">
              <label class="form-label">Deadline</label>
              <input type="date" class="form-input" name="deadline" required value="${existing ? existing.deadline : offsetDate(2)}" />
            </div>
            <div class="form-group">
              <label class="form-label">Priority</label>
              <select class="form-select" name="priority">
                ${['Low', 'Medium', 'High', 'Urgent'].map(pr => `<option value="${pr}" ${(existing ? existing.priority : 'High') === pr ? 'selected' : ''}>${pr}</option>`).join('')}
              </select>
            </div>
          </div>
          <div class="grid-2" style="gap:14px;">
            <div class="form-group">
              <label class="form-label">Estimated Effort (Hours)</label>
              <input type="number" step="0.5" min="0.5" max="12" class="form-input" name="durationHours" required value="${existing ? existing.durationHours : 2}" />
            </div>
            <div class="form-group">
              <label class="form-label">Assignee</label>
              <input class="form-input" name="assignee" value="${existing ? escapeHtml(existing.assignee) : escapeHtml(state.user.name)}" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Description</label>
            <textarea class="form-textarea" rows="2" name="description" placeholder="Deliverables or submission details...">${existing ? escapeHtml(existing.description) : ''}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Notes (Optional)</label>
            <input class="form-input" name="notes" placeholder="Links, lab room, or dependency notes..." value="${existing ? escapeHtml(existing.notes) : ''}" />
          </div>
          <div class="flex-between" style="margin-top:22px;">
            <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
            <button type="submit" class="btn btn-primary">${existing ? 'Save & Recalculate' : 'Add to Smart Planner'}</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function handleSaveTask(e, editTaskId) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const projectId = fd.get('projectId');
  const proj = state.projects.find(p => p.id === projectId);
  const category = proj ? proj.category : 'Academic Assignment';

  if (editTaskId) {
    const t = state.tasks.find(x => x.id === editTaskId);
    if (t) {
      t.title = fd.get('title').trim();
      t.projectId = projectId;
      t.category = category;
      t.deadline = fd.get('deadline');
      t.priority = fd.get('priority');
      t.durationHours = parseFloat(fd.get('durationHours')) || 1.5;
      t.assignee = fd.get('assignee').trim() || state.user.name;
      t.description = fd.get('description').trim();
      t.notes = fd.get('notes').trim();
    }
    showToast('Task updated and schedule recalculated.');
  } else {
    const newTask = {
      id: 'tsk-' + Date.now(),
      title: fd.get('title').trim(),
      description: fd.get('description').trim(),
      projectId,
      category,
      assignee: fd.get('assignee').trim() || state.user.name,
      deadline: fd.get('deadline'),
      priority: fd.get('priority'),
      durationHours: parseFloat(fd.get('durationHours')) || 2,
      completed: false,
      completedAt: null,
      notes: fd.get('notes').trim(),
      verificationStatus: 'self',
      evidenceNote: '',
      verifiedBy: ''
    };
    state.tasks.unshift(newTask);
    if (proj) {
      proj.activity.unshift({
        id: 'act-' + Date.now(),
        text: `${state.user.name} added task "${newTask.title}" (${newTask.durationHours}h).`,
        time: 'Just now'
      });
    }
    showToast('Task added to Smart Planner.');
  }

  closeModal();
  saveState();
  render();
}

function deleteTask(taskId) {
  const t = state.tasks.find(x => x.id === taskId);
  if (!t) return;
  if (!confirm(`Delete task "${t.title}"?`)) return;
  state.tasks = state.tasks.filter(x => x.id !== taskId);
  saveState();
  render();
  showToast('Task removed and schedule recalculated.', 'berry');
}

function openProjectModal(editProjId = null) {
  const existing = editProjId ? state.projects.find(p => p.id === editProjId) : null;
  const root = document.getElementById('modal-root');
  root.innerHTML = `
    <div class="modal-backdrop" onclick="if(event.target===this) closeModal()">
      <div class="modal-box">
        <div class="flex-between" style="margin-bottom:20px;">
          <h3>${existing ? 'Edit Project' : 'New Project Workspace'}</h3>
          <button class="btn btn-ghost btn-sm" onclick="closeModal()">Close</button>
        </div>
        <form onsubmit="handleSaveProject(event, '${editProjId || ''}')">
          <div class="form-group">
            <label class="form-label">Project Title</label>
            <input class="form-input" name="title" required placeholder="e.g., Autonomous Drone Parcel Delivery" value="${existing ? escapeHtml(existing.title) : ''}" />
          </div>
          <div class="grid-2" style="gap:14px;">
            <div class="form-group">
              <label class="form-label">Category</label>
              <select class="form-select" name="category">
                ${['Research Project', 'Competition', 'Hackathon', 'Course Capstone', 'Club Initiative'].map(c => `<option value="${c}" ${(existing ? existing.category : 'Research Project') === c ? 'selected' : ''}>${c}</option>`).join('')}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Target Deadline</label>
              <input type="date" class="form-input" name="deadline" required value="${existing ? existing.deadline : offsetDate(14)}" />
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">Your Role in Team</label>
            <input class="form-input" name="myRole" required placeholder="e.g., Backend & Embedded Systems Lead" value="${existing ? escapeHtml(existing.myRole) : 'Project Lead & Full-Stack Builder'}" />
          </div>
          <div class="form-group">
            <label class="form-label">Description</label>
            <textarea class="form-textarea" rows="3" name="description" required placeholder="Project scope and deliverables...">${existing ? escapeHtml(existing.description) : ''}</textarea>
          </div>
          <div class="flex-between" style="margin-top:22px;">
            <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
            <button type="submit" class="btn btn-primary">${existing ? 'Save Changes' : 'Create Workspace'}</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function handleSaveProject(e, editProjId) {
  e.preventDefault();
  const fd = new FormData(e.target);
  if (editProjId) {
    const p = state.projects.find(x => x.id === editProjId);
    if (p) {
      p.title = fd.get('title').trim();
      p.category = fd.get('category');
      p.deadline = fd.get('deadline');
      p.myRole = fd.get('myRole').trim();
      p.description = fd.get('description').trim();
    }
    showToast('Project updated.');
  } else {
    const code = 'KAAM-' + Math.random().toString(36).substring(2, 6).toUpperCase() + '-26';
    const newProj = {
      id: 'proj-' + Date.now(),
      title: fd.get('title').trim(),
      category: fd.get('category'),
      description: fd.get('description').trim(),
      deadline: fd.get('deadline'),
      inviteCode: code,
      inPortfolio: false,
      myRole: fd.get('myRole').trim(),
      members: [
        { id: state.user.id, name: state.user.name, role: fd.get('myRole').trim(), email: state.user.email }
      ],
      milestones: [
        { id: 'ms-' + Date.now(), title: 'Architecture & Team Kickoff', dueDate: offsetDate(3), completed: false }
      ],
      files: [],
      activity: [
        { id: 'act-' + Date.now(), text: `${state.user.name} created the workspace.`, time: 'Just now' }
      ]
    };
    state.projects.unshift(newProj);
    state.selectedProjectId = newProj.id;
    showToast(`Created "${newProj.title}" (Invite: ${code})`);
  }
  closeModal();
  saveState();
  render();
}

function deleteProject(projId) {
  const p = state.projects.find(x => x.id === projId);
  if (!p) return;
  if (!confirm(`Delete project "${p.title}" and its tasks?`)) return;
  state.projects = state.projects.filter(x => x.id !== projId);
  state.tasks = state.tasks.filter(t => t.projectId !== projId);
  if (state.selectedProjectId === projId) {
    state.selectedProjectId = state.projects[0]?.id || '';
  }
  saveState();
  navigate('projects');
  showToast('Project deleted.', 'berry');
}

function openEvidenceModal(taskId) {
  const t = state.tasks.find(x => x.id === taskId);
  if (!t) return;
  const root = document.getElementById('modal-root');
  root.innerHTML = `
    <div class="modal-backdrop" onclick="if(event.target===this) closeModal()">
      <div class="modal-box">
        <div class="flex-between" style="margin-bottom:16px;">
          <h3>Contribution Proof & Verification</h3>
          <button class="btn btn-ghost btn-sm" onclick="closeModal()">Close</button>
        </div>
        <p style="font-size:0.86rem; color:var(--deep-ink-80); margin-bottom:16px;">
          <strong>${escapeHtml(t.title)}</strong> — ${escapeHtml(getProjectName(t.projectId))}
        </p>
        <form onsubmit="handleSaveEvidence(event, '${t.id}')">
          <div class="form-group">
            <label class="form-label">Deliverable Evidence (Link, Commit, or Document)</label>
            <textarea class="form-textarea" name="evidenceNote" rows="3" required placeholder="e.g., GitHub PR #48, Lab Report PDF filename, Figma prototype link...">${escapeHtml(t.evidenceNote || '')}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Verification Tier</label>
            <select class="form-select" name="verificationStatus">
              <option value="self" ${t.verificationStatus === 'self' ? 'selected' : ''}>Tier 1 — Self-Reported Task Completion</option>
              <option value="evidence" ${t.verificationStatus === 'evidence' || !t.verificationStatus ? 'selected' : ''}>Tier 2 — Evidence Submitted</option>
              <option value="verified" ${t.verificationStatus === 'verified' ? 'selected' : ''}>Tier 3 — Verified by Teammate or Faculty</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Verifier Name & Title (Required for Tier 3)</label>
            <input class="form-input" name="verifiedBy" placeholder="e.g., Prof. S. Chatterjee (Faculty Advisor)" value="${escapeHtml(t.verifiedBy || '')}" />
          </div>
          <div class="flex-between" style="margin-top:20px;">
            <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
            <button type="submit" class="btn btn-primary">Save Record</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function handleSaveEvidence(e, taskId) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const t = state.tasks.find(x => x.id === taskId);
  if (!t) return;

  const status = fd.get('verificationStatus');
  const verifier = fd.get('verifiedBy').trim();
  t.completed = true;
  if (!t.completedAt) t.completedAt = offsetDate(0);
  t.evidenceNote = fd.get('evidenceNote').trim();

  if (status === 'verified' && !verifier) {
    t.verificationStatus = 'evidence';
    showToast('Saved as Tier 2 (Evidence Submitted) — add a verifier name for Tier 3.', 'berry');
  } else {
    t.verificationStatus = status;
    t.verifiedBy = verifier;
    showToast('Contribution verification updated.');
  }

  closeModal();
  saveState();
  render();
}

// ============================================================================
// SHARED COMPONENT: UNCLUTTERED PROGRESSIVE-DISCLOSURE TASK ROW
// ============================================================================
function renderTaskRow(t, showConflict = false, index = 0) {
  const isOverdue = !t.completed && t.deadline < offsetDate(0);
  const hasConflict = showConflict && (t.conflictReason || isOverdue);
  const isExpanded = state.expandedTaskId === t.id;

  const priorityClass =
    t.priority === 'Urgent' ? 'badge-berry' :
    t.priority === 'High' ? 'badge-apricot' :
    'badge-subtle';

  return `
    <div class="task-item animate-in ${hasConflict ? 'urgent-conflict' : ''}" style="--stagger:${Math.min(index, 8)};">
      <div class="task-main-line">
        <div class="task-left">
          <button type="button" class="task-check-btn ${t.completed ? 'checked' : ''}" onclick="toggleTaskCompletion('${t.id}')" title="Toggle completion">
            ${ICONS.check}
          </button>
          <span class="task-title ${t.completed ? 'done' : ''}" onclick="toggleTaskDrawer('${t.id}')" title="Click to view details">
            ${escapeHtml(t.title)}
          </span>
        </div>

        <div class="task-meta-pills">
          <span class="badge badge-subtle">${escapeHtml(getShortProjectName(t.projectId))}</span>
          <span class="badge ${priorityClass}">${t.durationHours}h • ${isOverdue ? 'Overdue' : t.deadline.slice(5)}</span>
          ${t.verificationStatus === 'verified' ? `<span class="badge badge-herb">Verified</span>` : ''}
          <div class="task-actions">
            <button class="btn btn-ghost btn-sm" style="padding:4px 7px;" onclick="toggleTaskDrawer('${t.id}')" title="Details">
              ${isExpanded ? '−' : '+'}
            </button>
            <button class="btn btn-ghost btn-sm" style="padding:4px 7px;" onclick="openTaskModal('${t.projectId}', '${t.id}')" title="Edit">
              ${ICONS.edit}
            </button>
            <button class="btn btn-ghost btn-sm" style="padding:4px 7px;" onclick="deleteTask('${t.id}')" title="Delete">
              ${ICONS.trash}
            </button>
          </div>
        </div>
      </div>

      ${(hasConflict && t.conflictReason && !isExpanded) ? `
        <div style="margin-top:7px; padding-left:32px; font-size:0.77rem; color:var(--berry-wine); font-weight:600;">
          ${escapeHtml(t.conflictReason)}
        </div>
      ` : ''}

      ${isExpanded ? `
        <div class="task-drawer">
          <div class="grid-2" style="gap:12px; margin-bottom:10px;">
            <div>
              <div style="font-size:0.73rem; font-weight:600; color:var(--deep-ink-50); text-transform:uppercase;">Description</div>
              <div>${escapeHtml(t.description || 'No description provided.')}</div>
            </div>
            <div>
              <div style="font-size:0.73rem; font-weight:600; color:var(--deep-ink-50); text-transform:uppercase;">Metadata</div>
              <div>Priority: <strong>${t.priority}</strong> • Assignee: <strong>${escapeHtml(t.assignee)}</strong> • Due: <strong>${t.deadline}</strong></div>
              ${t.notes ? `<div style="margin-top:3px;">Note: ${escapeHtml(t.notes)}</div>` : ''}
            </div>
          </div>
          ${t.conflictReason ? `<div style="color:var(--berry-wine); font-weight:600; margin-bottom:10px;">Schedule Flag: ${escapeHtml(t.conflictReason)}</div>` : ''}
          <div class="flex-between">
            <span style="font-size:0.78rem; color:var(--deep-ink-50);">
              Verification: <strong>${t.verificationStatus === 'verified' ? `Tier 3 (${escapeHtml(t.verifiedBy)})` : t.verificationStatus === 'evidence' ? 'Tier 2 (Evidence Submitted)' : 'Tier 1 (Self-Reported)'}</strong>
            </span>
            <button class="btn btn-outline btn-sm" onclick="openEvidenceModal('${t.id}')">Attach Proof / Verify</button>
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function renderWordmark(extraClass = '') {
  return `<span class="brand-wordmark ${extraClass}"><span class="deva">काम</span><span class="club">CLUB</span></span>`;
}

// ============================================================================
// 1. LANDING PAGE (EDITORIAL MINIMALISM + DOUBLE-BEZEL LIVE PREVIEW)
// ============================================================================
function renderLandingPage() {
  const schedule = generateSmartSchedule();
  const todayBucket = schedule.days[0];

  return `
    <div>
      <!-- Floating Island Navbar -->
      <div class="landing-header-wrap">
        <header class="landing-nav">
          <div onclick="navigate('landing')">${renderWordmark()}</div>
          <nav class="landing-nav-links">
            <a href="#problem">Why It Exists</a>
            <a href="#smart-planner">Smart Planner</a>
            <a href="#modules">Five Modules</a>
            <a href="demo.html" style="color:var(--berry-wine); font-weight:600;">Live Demo Page</a>
          </nav>
          <div class="flex-row">
            <a href="demo.html" class="btn btn-outline btn-sm">Interactive Demo</a>
            <button class="btn btn-ghost btn-sm" onclick="navigate('auth', { authMode: 'login' })">Sign In</button>
            <button class="btn btn-berry btn-sm" onclick="demoLogin()">Get Started ${ICONS.arrowRight}</button>
          </div>
        </header>
      </div>

      <div class="landing-container">
        <!-- HERO SECTION -->
        <section class="hero-section">
          <div class="animate-in" style="--stagger:1;">
            <div class="eyebrow">
              <span class="eyebrow-dot berry"></span>
              <span>Less chaos, more kaam.</span>
            </div>
            <h1 class="hero-headline">
              Too much kaam?<br/>We've got a club for that.
            </h1>
            <p class="hero-subtext">
              Your projects, plans, people and progress — all in one calm workspace built for college students juggling coursework, labs, hackathons, and team deadlines.
            </p>
            <div class="flex-row" style="flex-wrap:wrap; gap:14px; margin-bottom:36px;">
              <button class="btn btn-berry btn-lg" onclick="demoLogin()">
                <span>Get Started</span>
                ${ICONS.arrowRight}
              </button>
              <a href="demo.html" class="btn btn-primary btn-lg">Open Live Demo Page</a>
              <a href="#modules" class="btn btn-outline btn-lg">Explore Features</a>
            </div>
            <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:18px; padding-top:22px; border-top:1px solid var(--deep-ink-10); font-size:0.82rem; color:var(--deep-ink-80);">
              <div><strong style="display:block; color:var(--deep-ink); font-family:var(--font-heading);">Smart Planner</strong>Realistic daily workload</div>
              <div><strong style="display:block; color:var(--deep-ink); font-family:var(--font-heading);">3-Tier Proof</strong>Verified group contributions</div>
              <div><strong style="display:block; color:var(--deep-ink); font-family:var(--font-heading);">Student Portfolio</strong>Shareable project record</div>
            </div>
          </div>

          <!-- DOUBLE-BEZEL INTERACTIVE WORKSPACE PREVIEW -->
          <div class="bezel-shell animate-in" style="--stagger:3;">
            <div class="bezel-core">
              <div style="background:var(--deep-ink); color:var(--warm-paper); padding:11px 18px; display:flex; align-items:center; justify-content:space-between; font-size:0.76rem; font-family:var(--font-heading);">
                <div class="flex-row" style="gap:6px;">
                  <span style="width:9px;height:9px;border-radius:50%;background:var(--burnt-apricot);display:inline-block;"></span>
                  <span style="width:9px;height:9px;border-radius:50%;background:var(--butter-yellow);display:inline-block;"></span>
                  <span style="width:9px;height:9px;border-radius:50%;background:var(--herb-green);display:inline-block;"></span>
                </div>
                <span>काम CLUB — Smart Planner Daily Engine</span>
                <span class="badge badge-berry">Live Preview</span>
              </div>

              <div style="padding:24px; background:var(--warm-paper-elevated);">
                <div class="flex-between" style="margin-bottom:14px;">
                  <div>
                    <div style="font-size:0.72rem; letter-spacing:0.08em; text-transform:uppercase; color:var(--deep-ink-50); font-family:var(--font-heading);">TODAY'S REALISTIC SCHEDULE</div>
                    <div style="font-size:1.12rem; font-weight:700; font-family:var(--font-heading);">${todayBucket.usedHours}h scheduled of ${todayBucket.capacityHours}h available</div>
                  </div>
                  <span class="badge badge-herb">Auto-Balanced</span>
                </div>

                <div class="progress-track" style="margin-bottom:18px;">
                  <div class="progress-fill" style="width:${Math.min(100, Math.round((todayBucket.usedHours / (todayBucket.capacityHours || 5)) * 100))}%;"></div>
                </div>

                <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:18px;">
                  ${state.tasks.slice(0, 3).map(t => `
                    <div style="padding:11px 14px; background:var(--pure-surface); border:1px solid var(--deep-ink-10); border-radius:var(--radius-xs); display:flex; align-items:center; justify-content:space-between; gap:10px;">
                      <div style="min-width:0;">
                        <div style="font-weight:500; font-size:0.86rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(t.title)}</div>
                        <div style="font-size:0.74rem; color:var(--deep-ink-50);">${escapeHtml(getProjectName(t.projectId))} • ${t.durationHours}h</div>
                      </div>
                      <span class="badge ${t.priority === 'Urgent' ? 'badge-berry-soft' : 'badge-subtle'}">${t.priority}</span>
                    </div>
                  `).join('')}
                </div>

                <div class="grid-3" style="gap:10px;">
                  <div class="card card-herb" style="padding:12px;">
                    <div class="stat-label">Projects</div>
                    <div style="font-size:1.2rem; font-weight:700; font-family:var(--font-heading);">${state.projects.length} Active</div>
                  </div>
                  <div class="card card-lilac" style="padding:12px;">
                    <div class="stat-label">Tracker</div>
                    <div style="font-size:1.2rem; font-weight:700; font-family:var(--font-heading);">3-Tier Proof</div>
                  </div>
                  <div class="card card-butter" style="padding:12px;">
                    <div class="stat-label">Portfolio</div>
                    <div style="font-size:1.2rem; font-weight:700; font-family:var(--font-heading);">Verified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- THE PROBLEM -->
        <section id="problem" class="landing-section reveal-on-scroll">
          <div style="max-width:600px; margin-bottom:44px;">
            <div class="eyebrow"><span class="eyebrow-dot"></span><span>The Problem</span></div>
            <h2 style="font-size:2.15rem; margin-bottom:12px;">Why student work turns into last-minute chaos</h2>
            <p style="color:var(--deep-ink-80);">Students juggle assignments, research labs, competitions, and group commitments across tools that never talk to one another.</p>
          </div>
          <div class="grid-4">
            <div class="card card-white">
              <span class="badge badge-butter" style="margin-bottom:14px;">01 / Scattered</span>
              <h3 style="font-size:1.1rem; margin-bottom:8px;">Fragmented deadlines</h3>
              <p style="font-size:0.88rem; color:var(--deep-ink-50);">Dates live across WhatsApp chats, Moodle portals, spreadsheets, and sticky notes.</p>
            </div>
            <div class="card card-white">
              <span class="badge badge-berry-soft" style="margin-bottom:14px;">02 / Overloaded</span>
              <h3 style="font-size:1.1rem; margin-bottom:8px;">Unrealistic schedules</h3>
              <p style="font-size:0.88rem; color:var(--deep-ink-50);">Standard to-do lists ignore whether you actually have enough study hours before a deadline.</p>
            </div>
            <div class="card card-white">
              <span class="badge badge-blue" style="margin-bottom:14px;">03 / Disconnected</span>
              <h3 style="font-size:1.1rem; margin-bottom:8px;">Chaotic group projects</h3>
              <p style="font-size:0.88rem; color:var(--deep-ink-50);">Team tasks and milestones rarely sync with each student's personal academic schedule.</p>
            </div>
            <div class="card card-white">
              <span class="badge badge-lilac" style="margin-bottom:14px;">04 / Unverified</span>
              <h3 style="font-size:1.1rem; margin-bottom:8px;">Invisible contributions</h3>
              <p style="font-size:0.88rem; color:var(--deep-ink-50);">Without an evidence trail, real builders and free-riders look identical on final submissions.</p>
            </div>
          </div>
        </section>

        <!-- SIGNATURE USP + 5 MODULES BENTO -->
        <section id="modules" class="landing-section reveal-on-scroll">
          <div class="flex-between" style="flex-wrap:wrap; margin-bottom:44px;">
            <div style="max-width:600px;">
              <div class="eyebrow"><span class="eyebrow-dot berry"></span><span>The Solution</span></div>
              <h2 style="font-size:2.15rem;">Five connected modules in one editorial workspace</h2>
            </div>
            <button class="btn btn-primary" onclick="demoLogin()">Open Interactive MVP ${ICONS.arrowRight}</button>
          </div>

          <div id="smart-planner" class="card card-berry" style="padding:36px; margin-bottom:24px;">
            <div class="grid-asymmetric" style="align-items:center;">
              <div>
                <span class="badge badge-berry" style="margin-bottom:12px;">Signature Feature • Main USP</span>
                <h3 style="font-size:1.75rem; margin-bottom:12px;">Smart Planner — Realistic Daily Workload Engine</h3>
                <p style="color:var(--deep-ink-80); margin-bottom:20px; max-width:580px;">
                  Collects tasks from <strong>all team projects and personal academic commitments</strong> and distributes them across your available daily hours. It flags overloaded days and deadline conflicts early so you can reschedule before burnout hits.
                </p>
                <div class="flex-row" style="flex-wrap:wrap; gap:10px;">
                  <span class="badge badge-ink">Deadline & Priority Sorting</span>
                  <span class="badge badge-ink">Daily Capacity Guardrails</span>
                  <span class="badge badge-ink">1-Click Overdue Rescheduling</span>
                </div>
              </div>
              <div class="card card-white" style="padding:22px;">
                <div class="flex-between" style="margin-bottom:12px;">
                  <span class="stat-label">LIVE CONFLICT ENGINE</span>
                  <span class="badge badge-berry">${schedule.conflicts.length} Conflict Flagged</span>
                </div>
                <p style="font-size:0.85rem; color:var(--deep-ink-50); margin-bottom:16px;">
                  Transparent rule-based scheduler respects your daily study window (${state.user.availability.preferredStart}–${state.user.availability.preferredEnd}) and rest days.
                </p>
                <button class="btn btn-berry btn-sm" style="width:100%;" onclick="demoLogin('planner')">Test Smart Planner Live</button>
              </div>
            </div>
          </div>

          <div class="grid-2">
            <div class="card card-white">
              <span class="badge badge-blue" style="margin-bottom:12px;">Module 02</span>
              <h3 style="font-size:1.25rem; margin-bottom:8px;">Project Workspace</h3>
              <p style="font-size:0.9rem; color:var(--deep-ink-50);">
                Create team workspaces, invite peers via code, assign tasks, track milestones, and share files. Assigned tasks automatically appear in the assignee's Smart Planner.
              </p>
            </div>
            <div class="card card-white">
              <span class="badge badge-lilac" style="margin-bottom:12px;">Module 03</span>
              <h3 style="font-size:1.25rem; margin-bottom:8px;">Contribution Tracker</h3>
              <p style="font-size:0.9rem; color:var(--deep-ink-50);">
                Clearly distinguishes <strong>Tier 1: Self-reported completion</strong>, <strong>Tier 2: Evidence submitted</strong>, and <strong>Tier 3: Teammate or Faculty verified</strong> work.
              </p>
            </div>
            <div class="card card-white">
              <span class="badge badge-butter" style="margin-bottom:12px;">Module 04</span>
              <h3 style="font-size:1.25rem; margin-bottom:8px;">Student Portfolio</h3>
              <p style="font-size:0.9rem; color:var(--deep-ink-50);">
                Publish completed projects, your specific role, verified deliverables, skills, and certificates into a clean, shareable student portfolio page.
              </p>
            </div>
            <div class="card card-white">
              <span class="badge badge-apricot" style="margin-bottom:12px;">Module 05</span>
              <h3 style="font-size:1.25rem; margin-bottom:8px;">Recognition Hub</h3>
              <p style="font-size:0.9rem; color:var(--deep-ink-50);">
                Earn milestone badges like <em>First Project Completed</em>, <em>Research Contributor</em>, and <em>Deadline Champion</em> from real verified output.
              </p>
            </div>
          </div>
        </section>

        <!-- HOW IT WORKS -->
        <section id="workflow" class="landing-section reveal-on-scroll">
          <div class="eyebrow"><span class="eyebrow-dot"></span><span>How It Works</span></div>
          <h2 style="font-size:2.15rem; margin-bottom:36px;">From scattered tasks to verified proof of work</h2>
          <div class="grid-3">
            <div class="card card-herb">
              <div class="stat-label" style="color:var(--herb-green-hover);">01 — PLAN</div>
              <h3 style="font-size:1.18rem; margin:8px 0;">Unify & auto-schedule</h3>
              <p style="font-size:0.88rem; color:var(--deep-ink-80);">Combine personal assignments and team tasks into one realistic daily schedule tailored to your available hours.</p>
            </div>
            <div class="card card-blue">
              <div class="stat-label" style="color:#2E4B75;">02 — COLLABORATE & TRACK</div>
              <h3 style="font-size:1.18rem; margin:8px 0;">Execute with evidence</h3>
              <p style="font-size:0.88rem; color:var(--deep-ink-80);">Collaborate inside Project Workspaces, attach deliverable proof, and collect peer or faculty verification.</p>
            </div>
            <div class="card card-butter">
              <div class="stat-label" style="color:#5E541B;">03 — SHOWCASE</div>
              <h3 style="font-size:1.18rem; margin:8px 0;">Build your verified portfolio</h3>
              <p style="font-size:0.88rem; color:var(--deep-ink-80);">Turn verified contributions and unlocked Recognition Hub badges into a shareable student portfolio link.</p>
            </div>
          </div>
        </section>

        <!-- CLOSING CTA -->
        <section style="padding:32px 0 96px;" class="reveal-on-scroll">
          <div class="card" style="background:var(--deep-ink); color:var(--warm-paper); padding:56px 40px; text-align:center; border-radius:var(--radius-lg);">
            <div style="margin-bottom:14px;">
              <span class="brand-wordmark" style="font-size:1.45rem;"><span class="deva" style="color:var(--burnt-apricot);">काम</span><span class="club" style="color:var(--warm-paper);">CLUB</span></span>
            </div>
            <h2 style="color:var(--warm-paper); font-size:2.4rem; margin-bottom:12px;">Less chaos. More kaam. Join the club.</h2>
            <p style="color:rgba(245,241,232,0.72); max-width:500px; margin:0 auto 28px;">
              Explore the complete student workspace with pre-loaded IIT Delhi projects or create a new student profile.
            </p>
            <div class="flex-row" style="justify-content:center; gap:14px; flex-wrap:wrap;">
              <button class="btn btn-berry btn-lg" onclick="demoLogin()">Launch Student Workspace ${ICONS.arrowRight}</button>
              <button class="btn btn-outline btn-lg" style="background:transparent; color:var(--warm-paper); border-color:rgba(245,241,232,0.28);" onclick="navigate('auth', { authMode: 'signup' })">Create Account</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  `;
}

// 2. SIGN UP / LOGIN PAGE
function renderAuthPage() {
  const isSignup = state.authMode === 'signup';
  return `
    <div style="min-height:100dvh; display:flex; flex-direction:column; justify-content:space-between;">
      <div class="landing-header-wrap">
        <header class="landing-nav">
          <div onclick="navigate('landing')">${renderWordmark()}</div>
          <button class="btn btn-ghost btn-sm" onclick="navigate('landing')">← Back to Home</button>
        </header>
      </div>

      <div style="max-width:440px; width:100%; margin:48px auto; padding:0 20px;" class="animate-in">
        <div class="card card-white" style="padding:32px;">
          <div style="margin-bottom:22px;">
            ${renderWordmark()}
            <h2 style="font-size:1.5rem; margin-top:12px;">${isSignup ? 'Create your student account' : 'Welcome back'}</h2>
            <p style="font-size:0.86rem; color:var(--deep-ink-50); margin-top:2px;">Less chaos, more kaam — your academic & project workspace.</p>
          </div>

          <div class="tabs-bar" style="width:100%; margin-bottom:20px; display:grid; grid-template-columns:1fr 1fr;">
            <button class="tab-btn ${!isSignup ? 'active' : ''}" onclick="navigate('auth', { authMode: 'login' })">Sign In</button>
            <button class="tab-btn ${isSignup ? 'active' : ''}" onclick="navigate('auth', { authMode: 'signup' })">Sign Up</button>
          </div>

          <form onsubmit="handleAuthSubmit(event)">
            ${isSignup ? `
              <div class="form-group">
                <label class="form-label">Full Name</label>
                <input class="form-input" name="name" required value="${escapeHtml(state.user.name)}" />
              </div>
              <div class="form-group">
                <label class="form-label">College / University</label>
                <input class="form-input" name="college" required value="${escapeHtml(state.user.college)}" />
              </div>
              <div class="grid-2" style="gap:12px;">
                <div class="form-group">
                  <label class="form-label">Course</label>
                  <input class="form-input" name="course" required value="${escapeHtml(state.user.course)}" />
                </div>
                <div class="form-group">
                  <label class="form-label">Year</label>
                  <input class="form-input" name="year" required value="${escapeHtml(state.user.year)}" />
                </div>
              </div>
            ` : ''}
            <div class="form-group">
              <label class="form-label">College Email</label>
              <input type="email" class="form-input" name="email" required value="${escapeHtml(state.user.email)}" />
            </div>
            <div class="form-group">
              <label class="form-label">Password</label>
              <input type="password" class="form-input" name="password" required value="kaamclub2026" />
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%; margin-top:6px;">
              ${isSignup ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <div style="margin-top:18px; padding-top:16px; border-top:1px solid var(--deep-ink-10); text-align:center;">
            <button class="btn btn-berry btn-sm" style="width:100%;" onclick="demoLogin()">
              Instant Demo Sign-In (Aarav Sharma • IIT Delhi)
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  `;
}

function handleAuthSubmit(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  if (state.authMode === 'signup') {
    state.user.name = fd.get('name').trim();
    state.user.college = fd.get('college').trim();
    state.user.course = fd.get('course').trim();
    state.user.year = fd.get('year').trim();
    state.user.avatarInitials = state.user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  }
  state.user.email = fd.get('email').trim();
  state.isLoggedIn = true;
  saveState();
  navigate('dashboard');
  showToast(`Welcome to काम CLUB, ${state.user.name}.`);
}

function demoLogin(targetView = 'dashboard') {
  state.isLoggedIn = true;
  saveState();
  navigate(targetView);
  showToast(`Signed in as ${state.user.name}.`);
}

function handleLogout() {
  state.isLoggedIn = false;
  saveState();
  navigate('landing');
  showToast('Signed out.');
}

// ============================================================================
// APP SHELL (SIDEBAR + TOPBAR)
// ============================================================================
function renderAppShell(innerContent) {
  const pendingCount = state.tasks.filter(t => !t.completed).length;
  const schedule = generateSmartSchedule();
  const unreadNotifs = state.notifications.filter(n => !n.read).length;

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: ICONS.dashboard, badge: '' },
    { id: 'planner', label: 'Smart Planner', icon: ICONS.planner, badge: schedule.conflicts.length > 0 ? `${schedule.conflicts.length}!` : pendingCount },
    { id: 'projects', label: 'My Projects', icon: ICONS.projects, badge: state.projects.length },
    { id: 'contributions', label: 'Contribution Tracker', icon: ICONS.contributions, badge: '' },
    { id: 'portfolio', label: 'My Portfolio', icon: ICONS.portfolio, badge: '' },
    { id: 'recognition', label: 'Recognition Hub', icon: ICONS.recognition, badge: '' },
    { id: 'settings', label: 'Settings', icon: ICONS.settings, badge: '' }
  ];

  const activeNavId = state.currentView === 'workspace' ? 'projects' : state.currentView;

  return `
    <div class="app-shell">
      <aside class="app-sidebar ${state.mobileSidebarOpen ? 'open' : ''}">
        <div>
          <div class="sidebar-brand">
            <div onclick="navigate('dashboard')">${renderWordmark()}</div>
            <div class="sidebar-tagline">Less chaos, more kaam.</div>
          </div>

          <nav class="sidebar-nav">
            ${navItems.map(item => `
              <button class="nav-item ${activeNavId === item.id ? 'active' : ''}" onclick="navigate('${item.id}')">
                <span class="nav-item-left">
                  ${item.icon}
                  <span>${item.label}</span>
                </span>
                ${item.badge !== '' ? `<span class="nav-badge">${item.badge}</span>` : ''}
              </button>
            `).join('')}
          </nav>

          <div style="margin-top:28px; padding-top:18px; border-top:1px solid var(--deep-ink-10);">
            <div style="font-size:0.68rem; font-weight:700; letter-spacing:0.08em; font-family:var(--font-heading); color:var(--deep-ink-50); padding:0 12px 8px;">WORKSPACES</div>
            ${state.projects.map(p => `
              <button class="nav-item ${state.currentView === 'workspace' && state.selectedProjectId === p.id ? 'active' : ''}" style="font-size:0.81rem; padding:7px 12px;" onclick="navigate('workspace', { projectId: '${p.id}', workspaceTab: 'overview' })">
                <span class="nav-item-left" style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
                  <span style="width:6px;height:6px;border-radius:50%;background:currentColor;opacity:0.6;flex-shrink:0;"></span>
                  <span style="overflow:hidden; text-overflow:ellipsis;">${escapeHtml(p.title)}</span>
                </span>
                <span class="nav-badge">${getProjectProgress(p.id)}%</span>
              </button>
            `).join('')}
          </div>
        </div>

        <div style="border-top:1px solid var(--deep-ink-10); padding-top:14px;">
          <div class="flex-between" style="padding:4px 6px;">
            <div class="flex-row" style="cursor:pointer; min-width:0;" onclick="navigate('portfolio')">
              <div style="width:32px; height:32px; border-radius:50%; background:var(--herb-green); color:#FFF; display:flex; align-items:center; justify-content:center; font-family:var(--font-heading); font-weight:700; font-size:0.78rem; flex-shrink:0;">
                ${escapeHtml(state.user.avatarInitials)}
              </div>
              <div style="overflow:hidden;">
                <div style="font-weight:600; font-size:0.82rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(state.user.name)}</div>
                <div style="font-size:0.71rem; color:var(--deep-ink-50);">IIT Delhi</div>
              </div>
            </div>
            <button class="btn btn-ghost btn-sm" style="font-size:0.75rem;" onclick="handleLogout()">Sign Out</button>
          </div>
        </div>
      </aside>

      <div class="app-main">
        <header class="app-topbar">
          <div class="flex-row">
            <button class="btn btn-outline btn-sm mobile-menu-btn" onclick="state.mobileSidebarOpen=!state.mobileSidebarOpen; render();">Menu</button>
            <span style="font-family:var(--font-heading); font-size:0.84rem; color:var(--deep-ink-50);">
              ${new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' })}
            </span>
          </div>

          <div class="flex-row">
            <button class="btn btn-outline btn-sm" onclick="openTaskModal()">${ICONS.plus}<span>Task</span></button>
            <button class="btn btn-primary btn-sm" onclick="openProjectModal()">${ICONS.plus}<span>Project</span></button>
            <div style="position:relative;">
              <button class="btn btn-ghost btn-sm" onclick="state.notifOpen=!state.notifOpen; render();" title="Notifications">
                ${ICONS.bell}
                ${unreadNotifs > 0 ? `<span class="badge badge-berry" style="padding:1px 6px; font-size:0.68rem;">${unreadNotifs}</span>` : ''}
              </button>
              ${state.notifOpen ? `
                <div class="notif-dropdown">
                  <div class="flex-between" style="margin-bottom:10px;">
                    <strong style="font-family:var(--font-heading); font-size:0.84rem;">Notifications</strong>
                    <button class="btn btn-ghost btn-sm" style="font-size:0.73rem;" onclick="state.notifications.forEach(n=>n.read=true); saveState(); render();">Mark all read</button>
                  </div>
                  ${state.notifications.map(n => `
                    <div style="padding:10px; border-radius:6px; background:${n.read ? 'transparent' : 'var(--warm-paper)'}; border-bottom:1px solid var(--deep-ink-10); font-size:0.81rem;">
                      <div>${escapeHtml(n.text)}</div>
                      <div style="font-size:0.71rem; color:var(--deep-ink-50); margin-top:3px;">${n.time}</div>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          </div>
        </header>

        <main class="app-content">
          ${innerContent}
        </main>
      </div>
    </div>
  `;
}

// ============================================================================
// 3. DASHBOARD (CLEAN BENTO HIERARCHY)
// ============================================================================
function renderDashboard() {
  const totalTasks = state.tasks.length;
  const completedTasks = state.tasks.filter(t => t.completed);
  const pendingTasks = state.tasks.filter(t => !t.completed);
  const overdueTasks = pendingTasks.filter(t => t.deadline < offsetDate(0));
  const completionRate = totalTasks > 0 ? Math.round((completedTasks.length / totalTasks) * 100) : 0;

  const schedule = generateSmartSchedule();
  const todayBucket = schedule.days[0];
  const rec = computeRecognitionStats();

  return `
    <div>
      <div class="page-header animate-in" style="--stagger:0;">
        <div>
          <div class="eyebrow"><span class="eyebrow-dot"></span><span>Student Workspace</span></div>
          <h1 class="page-title">Good evening, ${escapeHtml(state.user.name.split(' ')[0])}</h1>
          <p class="page-subtitle">
            ${pendingTasks.length} pending tasks across ${state.projects.length} project workspaces • ${todayBucket.usedHours}h scheduled today.
          </p>
        </div>
        <div class="flex-row">
          <button class="btn btn-berry" onclick="navigate('planner')">${ICONS.spark}<span>Open Smart Planner</span></button>
        </div>
      </div>

      <!-- 4 Clean Stat Cards -->
      <div class="grid-4" style="margin-bottom:32px;">
        <div class="card card-white stat-card animate-in" style="--stagger:1;">
          <span class="stat-label">Task Completion</span>
          <div class="stat-value">${completionRate}%</div>
          <div class="progress-track">
            <div class="progress-fill" style="width:${completionRate}%;"></div>
          </div>
          <span class="stat-meta">${completedTasks.length} of ${totalTasks} tasks done</span>
        </div>

        <div class="card ${schedule.conflicts.length > 0 ? 'card-berry' : 'card-white'} stat-card animate-in" style="--stagger:2;">
          <span class="stat-label">Smart Schedule</span>
          <div class="stat-value" style="color:${schedule.conflicts.length > 0 ? 'var(--berry-wine)' : 'var(--deep-ink)'};">
            ${schedule.conflicts.length > 0 ? `${schedule.conflicts.length} Alert` : 'Balanced'}
          </div>
          <span class="stat-meta">${schedule.totalPendingHours}h pending / ${schedule.weeklyCapacityHours}h weekly limit</span>
        </div>

        <div class="card card-white stat-card animate-in" style="--stagger:3;">
          <span class="stat-label">Active Projects</span>
          <div class="stat-value">${state.projects.length}</div>
          <span class="stat-meta">${rec.verifiedTasks.length} peer/faculty verified tasks</span>
        </div>

        <div class="card card-white stat-card animate-in" style="--stagger:4;">
          <span class="stat-label">Recognition</span>
          <div class="stat-value">${rec.points} <span style="font-size:1rem;font-weight:500;">pts</span></div>
          <span class="stat-meta">${rec.badges.filter(b => b.unlocked).length} of ${rec.badges.length} badges unlocked</span>
        </div>
      </div>

      <!-- Asymmetric 2-Column Workspace Grid -->
      <div class="grid-asymmetric">
        <!-- LEFT: Today's Smart Schedule + Active Projects -->
        <div style="display:flex; flex-direction:column; gap:28px;">
          <div class="card card-white animate-in" style="--stagger:2;">
            <div class="flex-between" style="margin-bottom:16px;">
              <div>
                <div class="flex-row" style="gap:8px; margin-bottom:2px;">
                  <h3>Today's Smart Schedule</h3>
                  <span class="badge badge-herb">${todayBucket.usedHours}h / ${todayBucket.capacityHours}h</span>
                </div>
                <p style="font-size:0.82rem; color:var(--deep-ink-50);">Click any task title to expand details or attach verification proof.</p>
              </div>
              <button class="btn btn-ghost btn-sm" onclick="navigate('planner')">Full Planner ${ICONS.arrowRight}</button>
            </div>

            <div class="task-list">
              ${todayBucket.assignedTasks.length === 0 ? `
                <div style="padding:24px; text-align:center; color:var(--deep-ink-50); background:var(--warm-paper); border-radius:var(--radius-sm);">
                  All tasks for today are complete.
                </div>
              ` : todayBucket.assignedTasks.map((t, i) => renderTaskRow(t, true, i)).join('')}
            </div>
          </div>

          <div class="card card-white animate-in" style="--stagger:3;">
            <div class="flex-between" style="margin-bottom:16px;">
              <h3>Active Project Workspaces</h3>
              <button class="btn btn-ghost btn-sm" onclick="navigate('projects')">All Projects ${ICONS.arrowRight}</button>
            </div>
            <div style="display:flex; flex-direction:column; gap:12px;">
              ${state.projects.map(p => {
                const prog = getProjectProgress(p.id);
                const pTasks = state.tasks.filter(t => t.projectId === p.id);
                return `
                  <div class="card card-interactive" style="padding:16px 18px; background:var(--warm-paper-elevated);" onclick="navigate('workspace', { projectId: '${p.id}', workspaceTab: 'overview' })">
                    <div class="flex-between" style="margin-bottom:8px;">
                      <div class="flex-row">
                        <strong style="font-family:var(--font-heading); font-size:0.98rem;">${escapeHtml(p.title)}</strong>
                        <span class="badge badge-subtle">${escapeHtml(p.category)}</span>
                      </div>
                      <span style="font-family:var(--font-heading); font-weight:700; font-size:0.86rem;">${prog}%</span>
                    </div>
                    <div class="progress-track" style="margin-bottom:10px;">
                      <div class="progress-fill" style="width:${prog}%;"></div>
                    </div>
                    <div class="flex-between" style="font-size:0.78rem; color:var(--deep-ink-50);">
                      <span>${escapeHtml(p.myRole)}</span>
                      <span>${pTasks.filter(t => t.completed).length}/${pTasks.length} tasks • Due ${p.deadline}</span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>

        <!-- RIGHT: Deadlines + 7-Day Load Chart + Recent Activity -->
        <div style="display:flex; flex-direction:column; gap:24px;">
          <div class="card ${overdueTasks.length > 0 ? 'card-berry' : 'card-white'} animate-in" style="--stagger:3;">
            <div class="flex-between" style="margin-bottom:14px;">
              <h3>Upcoming Deadlines</h3>
              ${overdueTasks.length > 0 ? `<button class="btn btn-berry btn-sm" onclick="rescheduleOverdueTasks()">Reschedule (${overdueTasks.length})</button>` : ''}
            </div>
            <div style="display:flex; flex-direction:column; gap:8px;">
              ${pendingTasks.slice(0, 4).map(t => {
                const isOver = t.deadline < offsetDate(0);
                return `
                  <div style="padding:11px 14px; background:var(--pure-surface); border-radius:var(--radius-xs); border:1px solid var(--deep-ink-10); display:flex; align-items:center; justify-content:space-between; gap:10px;">
                    <div style="min-width:0;">
                      <div style="font-weight:500; font-size:0.86rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(t.title)}</div>
                      <div style="font-size:0.74rem; color:var(--deep-ink-50);">${escapeHtml(getShortProjectName(t.projectId))} • ${t.durationHours}h</div>
                    </div>
                    <span class="badge ${isOver ? 'badge-berry' : 'badge-subtle'}">${isOver ? 'Overdue' : t.deadline.slice(5)}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- 7-Day Workload Distribution -->
          <div class="card card-white animate-in" style="--stagger:4;">
            <div class="flex-between" style="margin-bottom:4px;">
              <h3>7-Day Workload Rhythm</h3>
              <span class="badge badge-subtle">${state.user.availability.hoursPerDay}h/day cap</span>
            </div>
            <p style="font-size:0.78rem; color:var(--deep-ink-50); margin-bottom:16px;">Scheduled effort across the upcoming week</p>
            <div style="display:grid; grid-template-columns:repeat(7, 1fr); gap:10px; align-items:end; height:110px; padding-top:16px; border-bottom:1px solid var(--deep-ink-10);">
              ${schedule.days.map(d => {
                const pct = d.capacityHours > 0 ? Math.min(100, Math.round((d.usedHours / d.capacityHours) * 100)) : 0;
                const barColor = d.overloaded ? 'var(--berry-wine)' : d.isUnavailable ? 'var(--deep-ink-10)' : 'var(--herb-green)';
                return `
                  <div style="display:flex; flex-direction:column; align-items:center; height:100%; justify-content:flex-end;">
                    <span style="font-size:0.68rem; font-weight:600; color:var(--deep-ink-50); margin-bottom:5px;">${d.usedHours}h</span>
                    <div style="width:100%; max-width:22px; height:${Math.max(8, pct)}%; background:${barColor}; border-radius:4px 4px 0 0; transition:height 0.4s var(--ease-out-expo);"></div>
                  </div>
                `;
              }).join('')}
            </div>
            <div style="display:grid; grid-template-columns:repeat(7, 1fr); gap:10px; margin-top:8px; text-align:center; font-size:0.71rem; color:var(--deep-ink-50);">
              ${schedule.days.map(d => `<div>${d.dayName.slice(0, 3)}</div>`).join('')}
            </div>
          </div>

          <!-- Recent Activity & Badges -->
          <div class="card card-butter animate-in" style="--stagger:5;">
            <div class="flex-between" style="margin-bottom:10px;">
              <h3>Recent Team Activity</h3>
              <button class="btn btn-ghost btn-sm" onclick="navigate('recognition')">Badges ${ICONS.arrowRight}</button>
            </div>
            ${state.projects.flatMap(p => p.activity).slice(0, 3).map(a => `
              <div style="font-size:0.81rem; padding:7px 0; border-bottom:1px solid var(--deep-ink-10); color:var(--deep-ink-80);">
                ${escapeHtml(a.text)} <span style="color:var(--deep-ink-50);">• ${a.time}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// 4. SMART PLANNER (UNCLUTTERED WITH COLLAPSIBLE AVAILABILITY DRAWER)
// ============================================================================
function renderSmartPlanner() {
  const schedule = generateSmartSchedule();
  const avail = state.user.availability;
  const todayStr = offsetDate(0);

  let filteredTasks = [...state.tasks];
  if (state.plannerSearch) {
    const q = state.plannerSearch.toLowerCase();
    filteredTasks = filteredTasks.filter(t =>
      t.title.toLowerCase().includes(q) ||
      (t.description || '').toLowerCase().includes(q) ||
      getProjectName(t.projectId).toLowerCase().includes(q)
    );
  }
  if (state.plannerPriorityFilter !== 'ALL') {
    filteredTasks = filteredTasks.filter(t => t.priority === state.plannerPriorityFilter);
  }

  return `
    <div>
      <div class="page-header animate-in" style="--stagger:0;">
        <div>
          <div class="eyebrow"><span class="eyebrow-dot berry"></span><span>Signature Scheduling Engine</span></div>
          <h1 class="page-title">Smart Planner</h1>
          <p class="page-subtitle">
            Distributes tasks from all projects and personal academics across your realistic daily study hours.
          </p>
        </div>
        <div class="flex-row" style="flex-wrap:wrap;">
          <button class="btn btn-outline" onclick="state.availabilityDrawerOpen=!state.availabilityDrawerOpen; render();">
            ${ICONS.sliders}
            <span>Capacity: ${avail.hoursPerDay}h/day • ${avail.preferredStart}–${avail.preferredEnd}</span>
          </button>
          <button class="btn btn-berry" onclick="rescheduleOverdueTasks()">
            ${ICONS.spark}
            <span>Generate My Schedule</span>
          </button>
          <button class="btn btn-primary" onclick="openTaskModal()">
            ${ICONS.plus}
            <span>Add Task</span>
          </button>
        </div>
      </div>

      <!-- Collapsible Availability Drawer (Progressive Disclosure) -->
      ${state.availabilityDrawerOpen ? `
        <div class="card card-herb animate-in" style="margin-bottom:24px;">
          <form onsubmit="handleUpdateAvailability(event)" class="flex-between" style="flex-wrap:wrap; gap:16px;">
            <div>
              <h3 style="font-size:1rem;">Daily Study & Workload Guardrails</h3>
              <p style="font-size:0.81rem; color:var(--deep-ink-80);">Adjusting these limits immediately recalculates your 7-day schedule.</p>
            </div>
            <div class="flex-row" style="flex-wrap:wrap; gap:14px;">
              <div>
                <label class="form-label">Hours / Day</label>
                <input type="number" name="hoursPerDay" min="1" max="14" step="0.5" class="form-input" style="width:90px; padding:7px 10px;" value="${avail.hoursPerDay}" />
              </div>
              <div>
                <label class="form-label">Max Tasks / Day</label>
                <input type="number" name="dailyTaskLimit" min="1" max="12" class="form-input" style="width:85px; padding:7px 10px;" value="${avail.dailyTaskLimit}" />
              </div>
              <div>
                <label class="form-label">Preferred Hours</label>
                <div class="flex-row" style="gap:6px;">
                  <input type="time" name="preferredStart" class="form-input" style="width:112px; padding:7px 8px;" value="${avail.preferredStart}" />
                  <span>to</span>
                  <input type="time" name="preferredEnd" class="form-input" style="width:112px; padding:7px 8px;" value="${avail.preferredEnd}" />
                </div>
              </div>
              <div>
                <label class="form-label">Rest Day</label>
                <select name="unavailableDay" class="form-select" style="width:125px; padding:7px 10px;">
                  ${['None', 'Sunday', 'Saturday'].map(d => `<option value="${d}" ${(avail.unavailableDays[0] || 'None') === d ? 'selected' : ''}>${d}</option>`).join('')}
                </select>
              </div>
              <button type="submit" class="btn btn-primary btn-sm" style="margin-top:20px;">Apply & Recalculate</button>
            </div>
          </form>
        </div>
      ` : ''}

      <!-- Clean Conflict Notice -->
      ${schedule.conflicts.length > 0 ? `
        <div class="card card-berry animate-in" style="margin-bottom:24px; padding:16px 22px;">
          <div class="flex-between" style="flex-wrap:wrap; gap:12px;">
            <div class="flex-row" style="gap:12px;">
              <span class="badge badge-berry">Conflict Flagged</span>
              <span style="font-size:0.88rem;">
                <strong>${schedule.conflicts.length} task(s)</strong> need attention: ${schedule.conflicts.map(c => `${escapeHtml(c.task.title)} (${escapeHtml(c.reason)})`).join(' • ')}
              </span>
            </div>
            <button class="btn btn-berry btn-sm" onclick="rescheduleOverdueTasks()">Auto-Adjust Dates</button>
          </div>
        </div>
      ` : ''}

      <!-- View Tabs & Filters -->
      <div class="flex-between" style="flex-wrap:wrap; gap:14px; margin-bottom:24px;">
        <div class="tabs-bar">
          ${[
            { id: 'daily', label: 'Focus (Today & Tomorrow)' },
            { id: 'weekly', label: '7-Day Horizon' },
            { id: 'all', label: `All (${state.tasks.length})` },
            { id: 'upcoming', label: 'Upcoming' },
            { id: 'overdue', label: `Overdue (${state.tasks.filter(t => !t.completed && t.deadline < todayStr).length})` },
            { id: 'completed', label: `Completed (${state.tasks.filter(t => t.completed).length})` }
          ].map(tab => `
            <button class="tab-btn ${state.plannerTab === tab.id ? 'active' : ''}" onclick="navigate('planner', { plannerTab: '${tab.id}' })">
              ${tab.label}
            </button>
          `).join('')}
        </div>

        <div class="flex-row">
          <input class="form-input" style="width:200px; padding:7px 12px;" placeholder="Filter tasks..." value="${escapeHtml(state.plannerSearch)}" oninput="state.plannerSearch=this.value; render();" />
          <select class="form-select" style="width:135px; padding:7px 10px;" onchange="state.plannerPriorityFilter=this.value; render();">
            <option value="ALL" ${state.plannerPriorityFilter === 'ALL' ? 'selected' : ''}>All Priorities</option>
            <option value="Urgent" ${state.plannerPriorityFilter === 'Urgent' ? 'selected' : ''}>Urgent</option>
            <option value="High" ${state.plannerPriorityFilter === 'High' ? 'selected' : ''}>High</option>
            <option value="Medium" ${state.plannerPriorityFilter === 'Medium' ? 'selected' : ''}>Medium</option>
            <option value="Low" ${state.plannerPriorityFilter === 'Low' ? 'selected' : ''}>Low</option>
          </select>
        </div>
      </div>

      <!-- PLANNER VIEWS -->
      ${state.plannerTab === 'daily' ? `
        <div class="grid-2">
          ${schedule.days.slice(0, 2).map((day, dIdx) => `
            <div class="card card-white animate-in ${day.overloaded ? 'card-berry' : ''}" style="--stagger:${dIdx + 1};">
              <div class="flex-between" style="margin-bottom:12px;">
                <div>
                  <h3 style="font-size:1.18rem;">${day.label} — ${day.dayName}</h3>
                  <div style="font-size:0.78rem; color:var(--deep-ink-50);">${day.date} • Window ${avail.preferredStart}–${avail.preferredEnd}</div>
                </div>
                <span class="badge ${day.overloaded ? 'badge-berry' : day.isUnavailable ? 'badge-ink' : 'badge-herb'}">
                  ${day.isUnavailable ? 'Rest Day' : `${day.usedHours}h / ${day.capacityHours}h`}
                </span>
              </div>
              <div class="progress-track" style="margin-bottom:16px;">
                <div class="progress-fill ${day.overloaded ? 'berry' : ''}" style="width:${day.capacityHours > 0 ? Math.min(100, Math.round((day.usedHours / day.capacityHours) * 100)) : 0}%;"></div>
              </div>
              <div class="task-list">
                ${day.assignedTasks.length === 0 ? `
                  <div style="padding:24px; text-align:center; color:var(--deep-ink-50); background:var(--warm-paper); border-radius:var(--radius-sm);">
                    ${day.isUnavailable ? 'Scheduled rest day.' : 'No tasks queued for this slot.'}
                  </div>
                ` : day.assignedTasks.map((t, i) => renderTaskRow(t, true, i)).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      ${state.plannerTab === 'weekly' ? `
        <div style="display:flex; flex-direction:column; gap:16px;">
          ${schedule.days.map((day, dIdx) => `
            <div class="card card-white animate-in ${day.overloaded ? 'card-berry' : day.isUnavailable ? 'card-butter' : ''}" style="--stagger:${dIdx};">
              <div class="flex-between" style="margin-bottom:12px;">
                <div class="flex-row">
                  <strong style="font-family:var(--font-heading); font-size:1.02rem;">${day.label} (${day.dayName}, ${day.date})</strong>
                  ${day.overloaded ? `<span class="badge badge-berry">Overloaded</span>` : ''}
                  ${day.isUnavailable ? `<span class="badge badge-subtle">Rest Day</span>` : ''}
                </div>
                <span style="font-family:var(--font-heading); font-weight:600; font-size:0.84rem; color:var(--deep-ink-80);">
                  ${day.usedHours}h / ${day.capacityHours}h
                </span>
              </div>
              <div class="task-list">
                ${day.assignedTasks.length === 0 ? `
                  <div style="font-size:0.82rem; color:var(--deep-ink-50);">Open capacity — no tasks assigned.</div>
                ` : day.assignedTasks.map((t, i) => renderTaskRow(t, true, i)).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      ${state.plannerTab === 'all' ? `
        <div class="card card-white">
          <div class="task-list">
            ${filteredTasks.length === 0 ? `<p style="color:var(--deep-ink-50);">No matching tasks.</p>` : filteredTasks.map((t, i) => renderTaskRow(t, false, i)).join('')}
          </div>
        </div>
      ` : ''}

      ${state.plannerTab === 'upcoming' ? `
        <div class="card card-white">
          <div class="task-list">
            ${filteredTasks.filter(t => !t.completed && t.deadline >= todayStr).sort((a,b) => a.deadline.localeCompare(b.deadline)).map((t, i) => renderTaskRow(t, false, i)).join('') || `<p style="color:var(--deep-ink-50);">No upcoming deadlines.</p>`}
          </div>
        </div>
      ` : ''}

      ${state.plannerTab === 'overdue' ? `
        <div class="card card-berry">
          <div class="flex-between" style="margin-bottom:14px;">
            <h3>Overdue Tasks</h3>
            <button class="btn btn-berry btn-sm" onclick="rescheduleOverdueTasks()">Reschedule All to Tomorrow</button>
          </div>
          <div class="task-list">
            ${filteredTasks.filter(t => !t.completed && t.deadline < todayStr).map((t, i) => renderTaskRow(t, true, i)).join('') || `<p style="color:var(--deep-ink-50);">Zero overdue tasks.</p>`}
          </div>
        </div>
      ` : ''}

      ${state.plannerTab === 'completed' ? `
        <div class="card card-white">
          <div class="task-list">
            ${filteredTasks.filter(t => t.completed).map((t, i) => renderTaskRow(t, false, i)).join('') || `<p style="color:var(--deep-ink-50);">No completed tasks yet.</p>`}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function handleUpdateAvailability(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  state.user.availability.hoursPerDay = parseFloat(fd.get('hoursPerDay')) || 5;
  state.user.availability.dailyTaskLimit = parseInt(fd.get('dailyTaskLimit'), 10) || 4;
  state.user.availability.preferredStart = fd.get('preferredStart') || '17:00';
  state.user.availability.preferredEnd = fd.get('preferredEnd') || '22:00';
  const rest = fd.get('unavailableDay');
  state.user.availability.unavailableDays = rest && rest !== 'None' ? [rest] : [];
  state.availabilityDrawerOpen = false;
  saveState();
  render();
  showToast('Smart Planner recalculated with updated daily capacity.');
}

// ============================================================================
// 5. MY PROJECTS
// ============================================================================
function renderMyProjects() {
  const q = (state.projectSearch || '').toLowerCase();
  const list = state.projects.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );

  return `
    <div>
      <div class="page-header animate-in" style="--stagger:0;">
        <div>
          <div class="eyebrow"><span class="eyebrow-dot"></span><span>Team Collaboration</span></div>
          <h1 class="page-title">My Projects</h1>
          <p class="page-subtitle">
            Manage research groups, hackathons, and course teams. Tasks assigned here sync automatically to the Smart Planner.
          </p>
        </div>
        <div class="flex-row">
          <input class="form-input" style="width:210px;" placeholder="Filter projects..." value="${escapeHtml(state.projectSearch)}" oninput="state.projectSearch=this.value; render();" />
          <button class="btn btn-primary" onclick="openProjectModal()">${ICONS.plus}<span>New Project</span></button>
        </div>
      </div>

      <div class="grid-3">
        ${list.map((p, idx) => {
          const prog = getProjectProgress(p.id);
          const pTasks = state.tasks.filter(t => t.projectId === p.id);
          return `
            <div class="card card-white card-interactive animate-in" style="--stagger:${idx + 1}; display:flex; flex-direction:column; justify-content:space-between;" onclick="navigate('workspace', { projectId: '${p.id}', workspaceTab: 'overview' })">
              <div>
                <div class="flex-between" style="margin-bottom:12px;">
                  <span class="badge badge-subtle">${escapeHtml(p.category)}</span>
                  <span class="badge ${prog === 100 ? 'badge-herb' : 'badge-butter'}">${prog}%</span>
                </div>
                <h3 style="font-size:1.22rem; margin-bottom:8px;">${escapeHtml(p.title)}</h3>
                <p style="font-size:0.86rem; color:var(--deep-ink-50); margin-bottom:18px;">
                  ${escapeHtml(p.description)}
                </p>
              </div>

              <div>
                <div class="progress-track" style="margin-bottom:12px;">
                  <div class="progress-fill" style="width:${prog}%;"></div>
                </div>
                <div style="font-size:0.78rem; color:var(--deep-ink-80); margin-bottom:14px;">
                  <div style="font-weight:600;">${escapeHtml(p.myRole)}</div>
                  <div style="color:var(--deep-ink-50); margin-top:2px;">${p.members.length} members • ${pTasks.filter(t => t.completed).length}/${pTasks.length} tasks • Due ${p.deadline}</div>
                </div>
                <div class="flex-between" style="border-top:1px solid var(--deep-ink-10); padding-top:12px;" onclick="event.stopPropagation();">
                  <button class="btn btn-ghost btn-sm" style="padding-left:0;" onclick="navigate('workspace', { projectId: '${p.id}', workspaceTab: 'overview' })">Open Workspace ${ICONS.arrowRight}</button>
                  <div class="flex-row" style="gap:4px;">
                    <button class="btn btn-ghost btn-sm" onclick="openProjectModal('${p.id}')" title="Edit">${ICONS.edit}</button>
                    <button class="btn btn-ghost btn-sm" onclick="deleteProject('${p.id}')" title="Delete">${ICONS.trash}</button>
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// ============================================================================
// 6. PROJECT WORKSPACE (6 TABS)
// ============================================================================
function renderProjectWorkspace() {
  const project = state.projects.find(p => p.id === state.selectedProjectId) || state.projects[0];
  if (!project) {
    return `<div class="card">No project selected. <button class="btn btn-primary btn-sm" onclick="openProjectModal()">Create Project</button></div>`;
  }

  const prog = getProjectProgress(project.id);
  const pTasks = state.tasks.filter(t => t.projectId === project.id);

  return `
    <div>
      <div class="page-header animate-in" style="--stagger:0;">
        <div>
          <div class="flex-row" style="margin-bottom:8px;">
            <button class="btn btn-ghost btn-sm" style="padding-left:0;" onclick="navigate('projects')">← Projects</button>
            <span class="badge badge-subtle">${escapeHtml(project.category)}</span>
            <span class="badge badge-herb">${prog}% Complete</span>
          </div>
          <h1 class="page-title">${escapeHtml(project.title)}</h1>
          <p class="page-subtitle">${escapeHtml(project.description)}</p>
        </div>
        <div class="flex-row" style="flex-wrap:wrap;">
          <button class="btn btn-outline btn-sm" onclick="navigator.clipboard?.writeText('${project.inviteCode}'); showToast('Invite code ${project.inviteCode} copied.');">
            ${ICONS.link}<span>Invite: ${escapeHtml(project.inviteCode)}</span>
          </button>
          <button class="btn btn-outline btn-sm" onclick="togglePortfolioInclusion('${project.id}')">
            ${project.inPortfolio ? 'Featured in Portfolio' : '+ Add to Portfolio'}
          </button>
          <button class="btn btn-primary btn-sm" onclick="openTaskModal('${project.id}')">${ICONS.plus}<span>Assign Task</span></button>
        </div>
      </div>

      <!-- 6 Workspace Tabs -->
      <div class="tabs-bar" style="margin-bottom:24px;">
        ${[
          { id: 'overview', label: 'Overview' },
          { id: 'tasks', label: `Tasks (${pTasks.length})` },
          { id: 'members', label: `Team (${project.members.length})` },
          { id: 'milestones', label: `Milestones (${project.milestones.length})` },
          { id: 'files', label: `Files (${project.files.length})` },
          { id: 'activity', label: `Activity (${project.activity.length})` }
        ].map(t => `
          <button class="tab-btn ${state.workspaceTab === t.id ? 'active' : ''}" onclick="navigate('workspace', { projectId: '${project.id}', workspaceTab: '${t.id}' })">
            ${t.label}
          </button>
        `).join('')}
      </div>

      ${state.workspaceTab === 'overview' ? `
        <div class="grid-asymmetric">
          <div class="card card-white animate-in" style="--stagger:1;">
            <div class="flex-between" style="margin-bottom:14px;">
              <h3>Project Tasks (Synced with Smart Planner)</h3>
              <button class="btn btn-outline btn-sm" onclick="openTaskModal('${project.id}')">${ICONS.plus}<span>Task</span></button>
            </div>
            <div class="task-list">
              ${pTasks.length === 0 ? `<p style="color:var(--deep-ink-50);">No tasks assigned yet.</p>` : pTasks.map((t, i) => renderTaskRow(t, false, i)).join('')}
            </div>
          </div>

          <div style="display:flex; flex-direction:column; gap:20px;">
            <div class="card card-butter animate-in" style="--stagger:2;">
              <h3 style="margin-bottom:12px;">Milestones</h3>
              ${project.milestones.map(m => `
                <div class="flex-between" style="padding:9px 0; border-bottom:1px solid var(--deep-ink-10);">
                  <div class="flex-row" style="cursor:pointer;" onclick="toggleMilestone('${project.id}', '${m.id}')">
                    <span class="task-check-btn ${m.completed ? 'checked' : ''}">${ICONS.check}</span>
                    <span style="font-size:0.88rem; ${m.completed ? 'text-decoration:line-through; color:var(--deep-ink-50);' : 'font-weight:500;'}">${escapeHtml(m.title)}</span>
                  </div>
                  <span class="badge badge-subtle">${m.dueDate.slice(5)}</span>
                </div>
              `).join('')}
            </div>

            <div class="card card-white animate-in" style="--stagger:3;">
              <h3 style="margin-bottom:12px;">Team Members</h3>
              ${project.members.map(mem => `
                <div class="flex-between" style="padding:8px 0; border-bottom:1px solid var(--deep-ink-10);">
                  <div>
                    <div style="font-weight:600; font-size:0.88rem;">${escapeHtml(mem.name)}</div>
                    <div style="font-size:0.76rem; color:var(--deep-ink-50);">${escapeHtml(mem.role)}</div>
                  </div>
                  <span class="badge badge-subtle">${escapeHtml(mem.email.split('@')[0])}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      ` : ''}

      ${state.workspaceTab === 'tasks' ? `
        <div class="grid-2">
          <div class="card card-white">
            <h3 style="margin-bottom:14px;">In Progress (${pTasks.filter(t => !t.completed).length})</h3>
            <div class="task-list">
              ${pTasks.filter(t => !t.completed).map((t, i) => renderTaskRow(t, false, i)).join('') || `<p style="color:var(--deep-ink-50);">All tasks complete.</p>`}
            </div>
          </div>
          <div class="card card-herb">
            <h3 style="margin-bottom:14px;">Completed (${pTasks.filter(t => t.completed).length})</h3>
            <div class="task-list">
              ${pTasks.filter(t => t.completed).map((t, i) => renderTaskRow(t, false, i)).join('') || `<p style="color:var(--deep-ink-50);">No completed tasks yet.</p>`}
            </div>
          </div>
        </div>
      ` : ''}

      ${state.workspaceTab === 'members' ? `
        <div class="grid-2">
          <div class="card card-white">
            <h3 style="margin-bottom:14px;">Team Roster</h3>
            ${project.members.map(mem => `
              <div class="flex-between" style="padding:12px 14px; background:var(--warm-paper); border-radius:var(--radius-xs); margin-bottom:8px;">
                <div>
                  <strong style="font-size:0.9rem;">${escapeHtml(mem.name)}</strong>
                  <div style="font-size:0.78rem; color:var(--deep-ink-50);">${escapeHtml(mem.role)} • ${escapeHtml(mem.email)}</div>
                </div>
                <span class="badge badge-herb">Active</span>
              </div>
            `).join('')}
          </div>
          <div class="card card-white">
            <h3 style="margin-bottom:8px;">Invite Member</h3>
            <p style="font-size:0.84rem; color:var(--deep-ink-50); margin-bottom:16px;">Share code <strong>${escapeHtml(project.inviteCode)}</strong> or add a teammate directly:</p>
            <form onsubmit="handleAddMember(event, '${project.id}')">
              <div class="form-group">
                <label class="form-label">Full Name</label>
                <input class="form-input" name="name" required placeholder="e.g., Siddharth Mehta" />
              </div>
              <div class="form-group">
                <label class="form-label">College Email</label>
                <input type="email" class="form-input" name="email" required placeholder="siddharth@iitd.ac.in" />
              </div>
              <div class="form-group">
                <label class="form-label">Role</label>
                <input class="form-input" name="role" required placeholder="e.g., PCB Layout & Sensor Calibration" />
              </div>
              <button type="submit" class="btn btn-primary">Add to Team</button>
            </form>
          </div>
        </div>
      ` : ''}

      ${state.workspaceTab === 'milestones' ? `
        <div class="grid-2">
          <div class="card card-white">
            <h3 style="margin-bottom:14px;">Project Milestones</h3>
            ${project.milestones.map(m => `
              <div class="flex-between" style="padding:12px 14px; background:var(--warm-paper); border-radius:var(--radius-xs); margin-bottom:8px;">
                <div class="flex-row" style="cursor:pointer;" onclick="toggleMilestone('${project.id}', '${m.id}')">
                  <span class="task-check-btn ${m.completed ? 'checked' : ''}">${ICONS.check}</span>
                  <span style="font-weight:500; ${m.completed ? 'text-decoration:line-through; color:var(--deep-ink-50);' : ''}">${escapeHtml(m.title)}</span>
                </div>
                <span class="badge ${m.completed ? 'badge-herb' : 'badge-subtle'}">${m.completed ? 'Completed' : 'Due ' + m.dueDate}</span>
              </div>
            `).join('')}
          </div>
          <div class="card card-white">
            <h3 style="margin-bottom:14px;">New Milestone</h3>
            <form onsubmit="handleAddMilestone(event, '${project.id}')">
              <div class="form-group">
                <label class="form-label">Milestone Title</label>
                <input class="form-input" name="title" required placeholder="e.g., Complete Field Telemetry Test" />
              </div>
              <div class="form-group">
                <label class="form-label">Target Date</label>
                <input type="date" class="form-input" name="dueDate" required value="${offsetDate(5)}" />
              </div>
              <button type="submit" class="btn btn-primary">Add Milestone</button>
            </form>
          </div>
        </div>
      ` : ''}

      ${state.workspaceTab === 'files' ? `
        <div class="grid-2">
          <div class="card card-white">
            <h3 style="margin-bottom:14px;">Project Documents (${project.files.length})</h3>
            ${project.files.length === 0 ? `<p style="color:var(--deep-ink-50);">No files uploaded yet.</p>` : project.files.map(f => `
              <div class="flex-between" style="padding:12px 14px; background:var(--warm-paper); border-radius:var(--radius-xs); margin-bottom:8px;">
                <div class="flex-row">
                  ${ICONS.file}
                  <div>
                    <strong style="font-size:0.88rem;">${escapeHtml(f.name)}</strong>
                    <div style="font-size:0.75rem; color:var(--deep-ink-50);">${escapeHtml(f.uploadedBy)} • ${f.date} • ${f.size}</div>
                  </div>
                </div>
                <span class="badge badge-subtle">Stored</span>
              </div>
            `).join('')}
          </div>
          <div class="card card-white">
            <h3 style="margin-bottom:14px;">Upload Document</h3>
            <form onsubmit="handleAddFile(event, '${project.id}')">
              <div class="form-group">
                <label class="form-label">Choose File</label>
                <input type="file" class="form-input" name="fileObj" onchange="if(this.files[0]) this.form.fileName.value = this.files[0].name" />
              </div>
              <div class="form-group">
                <label class="form-label">Document Title</label>
                <input class="form-input" name="fileName" required placeholder="e.g., System_Architecture_v3.pdf" />
              </div>
              <button type="submit" class="btn btn-primary">Upload File</button>
            </form>
          </div>
        </div>
      ` : ''}

      ${state.workspaceTab === 'activity' ? `
        <div class="grid-2">
          <div class="card card-white">
            <h3 style="margin-bottom:14px;">Activity Stream</h3>
            ${project.activity.map(a => `
              <div style="padding:11px 14px; border-left:2.5px solid var(--herb-green); background:var(--warm-paper); margin-bottom:8px; border-radius:0 6px 6px 0;">
                <div style="font-size:0.88rem;">${escapeHtml(a.text)}</div>
                <div style="font-size:0.73rem; color:var(--deep-ink-50); margin-top:2px;">${escapeHtml(a.time)}</div>
              </div>
            `).join('')}
          </div>
          <div class="card card-white">
            <h3 style="margin-bottom:14px;">Post Team Update</h3>
            <form onsubmit="handleAddComment(event, '${project.id}')">
              <div class="form-group">
                <label class="form-label">Comment or Update</label>
                <textarea class="form-textarea" rows="3" name="text" required placeholder="Share progress, blockers, or lab notes..."></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Post Update</button>
            </form>
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function toggleMilestone(projectId, msId) {
  const p = state.projects.find(x => x.id === projectId);
  if (!p) return;
  const m = p.milestones.find(x => x.id === msId);
  if (!m) return;
  m.completed = !m.completed;
  p.activity.unshift({
    id: 'act-' + Date.now(),
    text: `${state.user.name} marked milestone "${m.title}" ${m.completed ? 'complete' : 'in progress'}.`,
    time: 'Just now'
  });
  saveState();
  render();
  showToast('Milestone updated.');
}

function handleAddMember(e, projectId) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const p = state.projects.find(x => x.id === projectId);
  if (!p) return;
  const name = fd.get('name').trim();
  const role = fd.get('role').trim();
  const email = fd.get('email').trim();
  p.members.push({ id: 'usr-' + Date.now(), name, role, email });
  p.activity.unshift({
    id: 'act-' + Date.now(),
    text: `${name} (${role}) joined the workspace.`,
    time: 'Just now'
  });
  saveState();
  render();
  showToast(`${name} added to team.`);
}

function handleAddMilestone(e, projectId) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const p = state.projects.find(x => x.id === projectId);
  if (!p) return;
  p.milestones.push({
    id: 'ms-' + Date.now(),
    title: fd.get('title').trim(),
    dueDate: fd.get('dueDate'),
    completed: false
  });
  saveState();
  render();
  showToast('Milestone added.');
}

function handleAddFile(e, projectId) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const p = state.projects.find(x => x.id === projectId);
  if (!p) return;
  const name = fd.get('fileName').trim();
  p.files.unshift({
    id: 'fl-' + Date.now(),
    name,
    size: '1.4 MB',
    uploadedBy: state.user.name,
    date: offsetDate(0)
  });
  p.activity.unshift({
    id: 'act-' + Date.now(),
    text: `${state.user.name} uploaded "${name}".`,
    time: 'Just now'
  });
  saveState();
  render();
  showToast(`Uploaded "${name}".`);
}

function handleAddComment(e, projectId) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const p = state.projects.find(x => x.id === projectId);
  if (!p) return;
  p.activity.unshift({
    id: 'act-' + Date.now(),
    text: `${state.user.name}: "${fd.get('text').trim()}"`,
    time: 'Just now'
  });
  saveState();
  render();
  showToast('Update posted.');
}

function togglePortfolioInclusion(projectId) {
  const p = state.projects.find(x => x.id === projectId);
  if (!p) return;
  p.inPortfolio = !p.inPortfolio;
  saveState();
  render();
  showToast(p.inPortfolio ? `Added "${p.title}" to Portfolio.` : `Removed "${p.title}" from Portfolio.`);
}

// ============================================================================
// 7. CONTRIBUTION TRACKER (3-TIER VERIFICATION MODEL)
// ============================================================================
function renderContributionTracker() {
  const completedTasks = state.tasks.filter(t => t.completed);
  const selfReported = completedTasks.filter(t => !t.verificationStatus || t.verificationStatus === 'self');
  const evidenceSubmitted = completedTasks.filter(t => t.verificationStatus === 'evidence');
  const verifiedContribs = completedTasks.filter(t => t.verificationStatus === 'verified');

  return `
    <div>
      <div class="page-header animate-in" style="--stagger:0;">
        <div>
          <div class="eyebrow"><span class="eyebrow-dot"></span><span>Group Project Accountability</span></div>
          <h1 class="page-title">Contribution Tracker</h1>
          <p class="page-subtitle">
            Distinguishes self-reported tasks, submitted evidence, and peer or faculty verified contributions.
          </p>
        </div>
        <button class="btn btn-outline" onclick="window.print()">Export Verification Report</button>
      </div>

      <!-- 3-Tier Cards -->
      <div class="grid-3" style="margin-bottom:32px;">
        <div class="card card-white stat-card animate-in" style="--stagger:1;">
          <span class="stat-label">Tier 01 • Self-Reported</span>
          <div class="stat-value">${selfReported.length}</div>
          <span class="stat-meta">Tasks marked complete without external deliverable files attached</span>
        </div>

        <div class="card card-blue stat-card animate-in" style="--stagger:2;">
          <span class="stat-label">Tier 02 • Evidence Submitted</span>
          <div class="stat-value">${evidenceSubmitted.length}</div>
          <span class="stat-meta">Commits, PDFs, or links attached awaiting peer/faculty sign-off</span>
        </div>

        <div class="card card-herb stat-card animate-in" style="--stagger:3;">
          <span class="stat-label">Tier 03 • Peer / Faculty Verified</span>
          <div class="stat-value">${verifiedContribs.length}</div>
          <span class="stat-meta">Reviewed and verified by a named teammate or faculty advisor</span>
        </div>
      </div>

      <div class="grid-asymmetric">
        <div class="card card-white animate-in" style="--stagger:2;">
          <h3 style="margin-bottom:16px;">Completed Contribution Ledger (${completedTasks.length})</h3>
          <div style="display:flex; flex-direction:column; gap:12px;">
            ${completedTasks.map(t => {
              const tierBadge =
                t.verificationStatus === 'verified'
                  ? `<span class="badge badge-berry">Tier 3 • Verified</span>`
                  : t.verificationStatus === 'evidence'
                  ? `<span class="badge badge-blue">Tier 2 • Evidence Attached</span>`
                  : `<span class="badge badge-subtle">Tier 1 • Self-Reported</span>`;
              return `
                <div style="padding:16px; background:var(--warm-paper-elevated); border:1px solid var(--deep-ink-10); border-radius:var(--radius-sm);">
                  <div class="flex-between" style="flex-wrap:wrap; gap:8px; margin-bottom:6px;">
                    <strong style="font-size:0.94rem;">${escapeHtml(t.title)}</strong>
                    ${tierBadge}
                  </div>
                  <div style="font-size:0.78rem; color:var(--deep-ink-50); margin-bottom:10px;">
                    ${escapeHtml(getProjectName(t.projectId))} • ${t.durationHours}h effort • Completed ${t.completedAt || t.deadline}
                  </div>
                  ${t.evidenceNote ? `
                    <div style="font-size:0.81rem; padding:9px 12px; background:var(--pure-surface); border-radius:var(--radius-xs); border:1px solid var(--deep-ink-10); margin-bottom:10px;">
                      <span style="color:var(--deep-ink-50); font-weight:600;">Proof:</span> ${escapeHtml(t.evidenceNote)}
                      ${t.verifiedBy ? `<div style="color:var(--herb-green-hover); font-weight:600; margin-top:3px;">Verified by ${escapeHtml(t.verifiedBy)}</div>` : ''}
                    </div>
                  ` : ''}
                  <div class="flex-between">
                    <span style="font-size:0.75rem; color:var(--deep-ink-50);">
                      ${t.verificationStatus === 'verified' ? 'Displayed on Public Portfolio' : 'Attach deliverable proof to upgrade verification tier'}
                    </span>
                    <button class="btn btn-outline btn-sm" onclick="openEvidenceModal('${t.id}')">
                      ${t.verificationStatus === 'verified' ? 'Update Proof' : 'Attach Proof / Verify'}
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div style="display:flex; flex-direction:column; gap:20px;">
          <div class="card card-white animate-in" style="--stagger:3;">
            <h3 style="margin-bottom:14px;">Peer & Faculty Endorsements</h3>
            ${state.peerFeedback.map(pf => `
              <div style="padding:13px 15px; background:var(--warm-paper); border-radius:var(--radius-xs); margin-bottom:10px; border-left:3px solid var(--herb-green);">
                <div class="flex-between" style="margin-bottom:4px;">
                  <strong style="font-size:0.86rem;">${escapeHtml(pf.from)}</strong>
                  <span class="badge badge-herb">Verified</span>
                </div>
                <p style="font-size:0.83rem; color:var(--deep-ink-80);">"${escapeHtml(pf.comment)}"</p>
                <div style="font-size:0.73rem; color:var(--deep-ink-50); margin-top:4px;">${escapeHtml(getShortProjectName(pf.projectId))} • ${pf.date}</div>
              </div>
            `).join('')}
          </div>

          <div class="card card-lilac animate-in" style="--stagger:4;">
            <h3 style="margin-bottom:12px;">Log Peer or Faculty Review</h3>
            <form onsubmit="handleAddPeerFeedback(event)">
              <div class="form-group">
                <label class="form-label">Project</label>
                <select class="form-select" name="projectId">
                  ${state.projects.map(p => `<option value="${p.id}">${escapeHtml(p.title)}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Reviewer Name & Role</label>
                <input class="form-input" name="from" required placeholder="e.g., Rohan Kulkarni (Hardware Lead)" />
              </div>
              <div class="form-group">
                <label class="form-label">Endorsement Note</label>
                <textarea class="form-textarea" rows="2" name="comment" required placeholder="Specific feedback on deliverables..."></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-sm">Record Endorsement</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
}

function handleAddPeerFeedback(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  state.peerFeedback.unshift({
    id: 'pf-' + Date.now(),
    projectId: fd.get('projectId'),
    from: fd.get('from').trim(),
    role: 'Peer/Faculty',
    comment: fd.get('comment').trim(),
    date: offsetDate(0),
    verified: true
  });
  saveState();
  render();
  showToast('Endorsement added to Contribution Tracker.');
}

// ============================================================================
// 8. STUDENT PORTFOLIO
// ============================================================================
function renderPortfolio() {
  const portfolioProjects = state.projects.filter(p => p.inPortfolio);
  const rec = computeRecognitionStats();

  return `
    <div>
      <div class="page-header animate-in" style="--stagger:0;">
        <div>
          <div class="eyebrow"><span class="eyebrow-dot"></span><span>Verified Proof-of-Work Profile</span></div>
          <h1 class="page-title">Student Portfolio</h1>
          <p class="page-subtitle">
            Shareable academic and project portfolio backed by verified team contributions.
          </p>
        </div>
        <div class="flex-row">
          <button class="btn ${state.publicPortfolioPreview ? 'btn-berry' : 'btn-outline'}" onclick="state.publicPortfolioPreview=!state.publicPortfolioPreview; render();">
            ${state.publicPortfolioPreview ? 'Exit Public Preview' : 'Preview Public View'}
          </button>
          <button class="btn btn-primary" onclick="copyPublicPortfolioLink()">
            ${ICONS.link}<span>Copy Share Link</span>
          </button>
        </div>
      </div>

      <div class="bezel-shell animate-in" style="--stagger:1;">
        <div class="bezel-core" style="padding:36px;">
          <!-- Profile Header -->
          <div class="flex-between" style="flex-wrap:wrap; gap:20px; padding-bottom:28px; border-bottom:1px solid var(--deep-ink-10);">
            <div class="flex-row" style="gap:20px;">
              <div style="width:68px; height:68px; border-radius:50%; background:var(--herb-green); color:#FFF; display:flex; align-items:center; justify-content:center; font-family:var(--font-heading); font-size:1.5rem; font-weight:700;">
                ${escapeHtml(state.user.avatarInitials)}
              </div>
              <div>
                <div class="flex-row" style="gap:10px; flex-wrap:wrap;">
                  <h2 style="font-size:1.75rem;">${escapeHtml(state.user.name)}</h2>
                  <span class="badge badge-herb">Verified Student</span>
                </div>
                <div style="font-weight:500; color:var(--deep-ink-80); margin-top:2px;">
                  ${escapeHtml(state.user.course)} • ${escapeHtml(state.user.year)}
                </div>
                <div style="font-size:0.84rem; color:var(--deep-ink-50);">
                  ${escapeHtml(state.user.college)} • ${escapeHtml(state.user.email)}
                </div>
              </div>
            </div>

            <div class="card card-butter" style="padding:14px 20px; text-align:right;">
              <div class="stat-label">VERIFIED RECORD</div>
              <div style="font-size:1.35rem; font-weight:700; font-family:var(--font-heading);">${rec.verifiedTasks.length} Verified Deliverables</div>
              <div style="font-size:0.78rem; color:var(--deep-ink-50);">${portfolioProjects.length} Projects • ${rec.points} Recognition Pts</div>
            </div>
          </div>

          <p style="margin:22px 0 28px; font-size:0.96rem; color:var(--deep-ink-80); max-width:780px;">
            ${escapeHtml(state.user.bio)}
          </p>

          <!-- Skills -->
          <div style="margin-bottom:32px;">
            <div class="stat-label" style="margin-bottom:10px;">Skills & Technologies</div>
            <div class="flex-row" style="flex-wrap:wrap; gap:8px;">
              ${state.user.skills.map(s => `<span class="badge badge-subtle" style="padding:5px 13px; font-size:0.8rem;">${escapeHtml(s)}</span>`).join('')}
              ${!state.publicPortfolioPreview ? `<button class="btn btn-outline btn-sm" onclick="promptAddSkill()">+ Add Skill</button>` : ''}
            </div>
          </div>

          <!-- Featured Projects -->
          <div style="margin-bottom:32px;">
            <div class="stat-label" style="margin-bottom:14px;">Featured Projects & Verified Individual Roles (${portfolioProjects.length})</div>
            <div class="grid-2">
              ${portfolioProjects.map(p => {
                const pTasks = state.tasks.filter(t => t.projectId === p.id && t.completed);
                const verifiedCount = pTasks.filter(t => t.verificationStatus === 'verified').length;
                return `
                  <div class="card" style="background:var(--warm-paper-elevated);">
                    <div class="flex-between" style="margin-bottom:8px;">
                      <span class="badge badge-subtle">${escapeHtml(p.category)}</span>
                      <span class="badge ${verifiedCount > 0 ? 'badge-herb' : 'badge-butter'}">
                        ${verifiedCount > 0 ? `${verifiedCount} Verified Deliverable(s)` : `${getProjectProgress(p.id)}% Complete`}
                      </span>
                    </div>
                    <h3 style="font-size:1.18rem; margin-bottom:4px;">${escapeHtml(p.title)}</h3>
                    <div style="font-size:0.83rem; font-weight:600; color:var(--herb-green-hover); margin-bottom:8px;">
                      Role: ${escapeHtml(p.myRole)}
                    </div>
                    <p style="font-size:0.85rem; color:var(--deep-ink-50); margin-bottom:14px;">
                      ${escapeHtml(p.description)}
                    </p>
                    <div style="border-top:1px solid var(--deep-ink-10); padding-top:10px;">
                      <div class="stat-label" style="margin-bottom:6px; font-size:0.68rem;">Completed Contributions</div>
                      ${pTasks.length === 0 ? `<div style="font-size:0.8rem; color:var(--deep-ink-50);">Active development</div>` : pTasks.map(t => `
                        <div style="font-size:0.8rem; margin-bottom:4px; color:var(--deep-ink-80);">
                          • ${escapeHtml(t.title)} (${t.durationHours}h)
                          ${t.verificationStatus === 'verified' ? `<strong style="color:var(--berry-wine);"> — Verified by ${escapeHtml(t.verifiedBy)}</strong>` : ''}
                        </div>
                      `).join('')}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Certificates & Achievements -->
          <div class="grid-2">
            <div>
              <div class="flex-between" style="margin-bottom:10px;">
                <span class="stat-label">Certificates & Credentials</span>
                ${!state.publicPortfolioPreview ? `<button class="btn btn-ghost btn-sm" onclick="promptAddCertificate()">+ Add</button>` : ''}
              </div>
              ${state.user.certificates.map(c => `
                <div style="padding:12px 14px; background:var(--warm-paper); border-radius:var(--radius-xs); margin-bottom:8px;">
                  <strong style="font-size:0.88rem;">${escapeHtml(c.title)}</strong>
                  <div style="font-size:0.76rem; color:var(--deep-ink-50);">${escapeHtml(c.issuer)} • ${escapeHtml(c.date)}</div>
                </div>
              `).join('')}
            </div>

            <div>
              <div class="stat-label" style="margin-bottom:10px;">Recognition Milestones</div>
              ${rec.badges.filter(b => b.unlocked).map(b => `
                <div style="padding:12px 14px; background:var(--herb-green-tint); border-radius:var(--radius-xs); margin-bottom:8px;">
                  <strong style="font-size:0.88rem;">${escapeHtml(b.title)}</strong>
                  <div style="font-size:0.76rem; color:var(--deep-ink-80);">${escapeHtml(b.description)}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function copyPublicPortfolioLink() {
  const baseUrl = (typeof window !== 'undefined' && window.location)
    ? window.location.origin + window.location.pathname
    : 'https://dhrgupta096.github.io/kaam-club/';
  const slug = (state.user.name || 'student').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const shareUrl = `${baseUrl}?view=portfolio&u=${slug}`;
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(shareUrl);
  }
  showToast(`Shareable Portfolio Link copied: ${shareUrl}`);
}

function promptAddSkill() {
  const s = prompt('Add a skill to your Student Portfolio:');
  if (!s || !s.trim()) return;
  state.user.skills.push(s.trim());
  saveState();
  render();
  showToast(`Added "${s.trim()}" to portfolio.`);
}

function promptAddCertificate() {
  const title = prompt('Certificate Title:');
  if (!title || !title.trim()) return;
  const issuer = prompt('Issuing Organization:') || 'Verified Issuer';
  state.user.certificates.unshift({
    id: 'cert-' + Date.now(),
    title: title.trim(),
    issuer: issuer.trim(),
    date: 'Nov 2026'
  });
  saveState();
  render();
  showToast('Certificate added.');
}

// ============================================================================
// 9. RECOGNITION HUB
// ============================================================================
function renderRecognitionHub() {
  const rec = computeRecognitionStats();

  const leaderboard = [
    { name: state.user.name + ' (You)', college: 'IIT Delhi', verified: rec.verifiedTasks.length, points: rec.points },
    { name: 'Diya Nair', college: 'IIT Delhi', verified: 2, points: 360 },
    { name: 'Kabir Verma', college: 'IIT Delhi', verified: 2, points: 325 },
    { name: 'Ananya Rao', college: 'IIT Delhi', verified: 1, points: 290 },
    { name: 'Rohan Kulkarni', college: 'IIT Delhi', verified: 1, points: 240 }
  ].sort((a, b) => b.points - a.points);

  return `
    <div>
      <div class="page-header animate-in" style="--stagger:0;">
        <div>
          <div class="eyebrow"><span class="eyebrow-dot"></span><span>Verified Achievement System</span></div>
          <h1 class="page-title">Recognition Hub</h1>
          <p class="page-subtitle">
            Rewards completed deliverables, evidence-backed teamwork, and deadline consistency.
          </p>
        </div>
        <div class="card card-berry" style="padding:12px 20px;">
          <span class="stat-label" style="color:var(--berry-wine);">TOTAL SCORE</span>
          <div style="font-size:1.5rem; font-weight:700; font-family:var(--font-heading); color:var(--berry-wine);">${rec.points} pts</div>
        </div>
      </div>

      <div class="grid-3" style="margin-bottom:32px;">
        ${rec.badges.map((b, idx) => `
          <div class="card ${b.unlocked ? 'card-white' : ''} animate-in" style="--stagger:${idx + 1}; opacity:${b.unlocked ? '1' : '0.68'};">
            <div class="flex-between" style="margin-bottom:12px;">
              <span class="stat-label">MILESTONE ${b.code}</span>
              <span class="badge ${b.unlocked ? 'badge-herb' : 'badge-subtle'}">${b.unlocked ? 'Unlocked' : 'In Progress'}</span>
            </div>
            <h3 style="font-size:1.15rem; margin-bottom:6px;">${escapeHtml(b.title)}</h3>
            <p style="font-size:0.84rem; color:var(--deep-ink-50); margin-bottom:14px;">${escapeHtml(b.description)}</p>
            <div style="font-size:0.76rem; font-weight:600; font-family:var(--font-heading); color:var(--herb-green-hover);">
              ${escapeHtml(b.progressText)}
            </div>
          </div>
        `).join('')}
      </div>

      <div class="grid-2">
        <div class="card card-white animate-in" style="--stagger:3;">
          <h3 style="margin-bottom:6px;">Campus Contributor Standings</h3>
          <p style="font-size:0.8rem; color:var(--deep-ink-50); margin-bottom:16px;">
            Calculated from completed tasks (+40), evidence (+35), verifications (+60), and finished projects (+150).
          </p>
          ${leaderboard.map((row, idx) => `
            <div class="flex-between" style="padding:11px 14px; background:${row.name.includes('(You)') ? 'var(--herb-green-tint)' : 'var(--warm-paper)'}; border-radius:var(--radius-xs); margin-bottom:8px;">
              <div class="flex-row">
                <strong style="width:24px; font-family:var(--font-heading); color:var(--deep-ink-50);">0${idx + 1}</strong>
                <div>
                  <strong style="font-size:0.88rem;">${escapeHtml(row.name)}</strong>
                  <div style="font-size:0.74rem; color:var(--deep-ink-50);">${escapeHtml(row.college)} • ${row.verified} Verified Deliverables</div>
                </div>
              </div>
              <span class="badge badge-berry">${row.points} pts</span>
            </div>
          `).join('')}
        </div>

        <div class="card card-butter animate-in" style="--stagger:4;">
          <h3 style="margin-bottom:6px;">Project Showcase</h3>
          <p style="font-size:0.8rem; color:var(--deep-ink-50); margin-bottom:16px;">
            Active and completed student initiatives across the club.
          </p>
          ${state.projects.map(p => {
            const prog = getProjectProgress(p.id);
            return `
              <div class="card card-white" style="margin-bottom:10px; padding:14px 16px;">
                <div class="flex-between" style="margin-bottom:4px;">
                  <strong style="font-size:0.92rem;">${escapeHtml(p.title)}</strong>
                  <span class="badge ${prog === 100 ? 'badge-herb' : 'badge-subtle'}">${prog}%</span>
                </div>
                <div class="flex-between" style="font-size:0.76rem; color:var(--deep-ink-50); margin-top:6px;">
                  <span>${escapeHtml(p.myRole)}</span>
                  <button class="btn btn-ghost btn-sm" onclick="navigate('workspace', { projectId: '${p.id}', workspaceTab: 'overview' })">Open ${ICONS.arrowRight}</button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}

// ============================================================================
// 10. SETTINGS
// ============================================================================
function renderSettings() {
  return `
    <div>
      <div class="page-header animate-in" style="--stagger:0;">
        <div>
          <div class="eyebrow"><span class="eyebrow-dot"></span><span>Preferences & Cloud Persistence</span></div>
          <h1 class="page-title">Settings</h1>
          <p class="page-subtitle">
            Manage your student profile, Supabase cloud credentials, and workspace data.
          </p>
        </div>
      </div>

      <div class="grid-2">
        <div class="card card-white animate-in" style="--stagger:1;">
          <h3 style="margin-bottom:16px;">Student Profile</h3>
          <form onsubmit="handleSaveProfileSettings(event)">
            <div class="form-group">
              <label class="form-label">Full Name</label>
              <input class="form-input" name="name" required value="${escapeHtml(state.user.name)}" />
            </div>
            <div class="form-group">
              <label class="form-label">College Email</label>
              <input type="email" class="form-input" name="email" required value="${escapeHtml(state.user.email)}" />
            </div>
            <div class="form-group">
              <label class="form-label">Institution</label>
              <input class="form-input" name="college" required value="${escapeHtml(state.user.college)}" />
            </div>
            <div class="grid-2" style="gap:12px;">
              <div class="form-group">
                <label class="form-label">Course</label>
                <input class="form-input" name="course" required value="${escapeHtml(state.user.course)}" />
              </div>
              <div class="form-group">
                <label class="form-label">Year</label>
                <input class="form-input" name="year" required value="${escapeHtml(state.user.year)}" />
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Bio</label>
              <textarea class="form-textarea" rows="3" name="bio">${escapeHtml(state.user.bio)}</textarea>
            </div>
            <button type="submit" class="btn btn-primary">Save Profile</button>
          </form>
        </div>

        <div style="display:flex; flex-direction:column; gap:20px;">
          <div class="card card-herb animate-in" style="--stagger:2;">
            <h3 style="margin-bottom:8px;">Supabase Cloud Connection</h3>
            <p style="font-size:0.83rem; color:var(--deep-ink-80); margin-bottom:14px;">
              Your workspace persists automatically in local storage and includes <code>supabase_schema.sql</code> with Row-Level Security (RLS) policies.
            </p>
            <form onsubmit="handleSaveSupabaseConfig(event)">
              <div class="form-group">
                <label class="form-label">Supabase Project URL</label>
                <input class="form-input" name="supabaseUrl" placeholder="https://your-project.supabase.co" value="${escapeHtml(state.user.supabaseUrl || '')}" />
              </div>
              <div class="form-group">
                <label class="form-label">Supabase Anon Public Key</label>
                <input type="password" class="form-input" name="supabaseAnonKey" placeholder="eyJhbGciOiJIUzI1NiIsInR5..." value="${escapeHtml(state.user.supabaseAnonKey || '')}" />
              </div>
              <button type="submit" class="btn btn-primary btn-sm">Save Connection</button>
            </form>
          </div>

          <div class="card card-berry animate-in" style="--stagger:3;">
            <h3 style="margin-bottom:8px;">Reset Sample Data</h3>
            <p style="font-size:0.83rem; color:var(--deep-ink-80); margin-bottom:14px;">
              Restore the default IIT Delhi sample projects, tasks, and verification records.
            </p>
            <button class="btn btn-berry btn-sm" onclick="handleResetDemoData()">Reset Workspace Data</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function handleSaveProfileSettings(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  state.user.name = fd.get('name').trim();
  state.user.email = fd.get('email').trim();
  state.user.college = fd.get('college').trim();
  state.user.course = fd.get('course').trim();
  state.user.year = fd.get('year').trim();
  state.user.bio = fd.get('bio').trim();
  state.user.avatarInitials = state.user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  saveState();
  render();
  showToast('Profile saved.');
}

function handleSaveSupabaseConfig(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  state.user.supabaseUrl = fd.get('supabaseUrl').trim();
  state.user.supabaseAnonKey = fd.get('supabaseAnonKey').trim();
  saveState();
  render();
  showToast('Supabase settings saved.');
}

function handleResetDemoData() {
  if (!confirm('Reset all tasks, projects, and contribution records back to default sample data?')) return;
  localStorage.removeItem(STORAGE_KEY);
  state = createInitialState();
  state.isLoggedIn = true;
  state.currentView = 'dashboard';
  saveState();
  render();
  showToast('Workspace reset to default data.');
}

// ============================================================================
// SCROLL REVEAL OBSERVER & MAIN RENDER DISPATCHER
// ============================================================================
function initScrollReveal() {
  if (typeof IntersectionObserver === 'undefined') return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
}

function render() {
  const app = document.getElementById('app');
  if (!app) return;

  if (state.currentView === 'landing') {
    app.innerHTML = renderLandingPage();
    initScrollReveal();
    return;
  }

  if (state.currentView === 'auth') {
    app.innerHTML = renderAuthPage();
    return;
  }

  let contentHtml = '';
  switch (state.currentView) {
    case 'dashboard':
      contentHtml = renderDashboard();
      break;
    case 'planner':
      contentHtml = renderSmartPlanner();
      break;
    case 'projects':
      contentHtml = renderMyProjects();
      break;
    case 'workspace':
      contentHtml = renderProjectWorkspace();
      break;
    case 'contributions':
      contentHtml = renderContributionTracker();
      break;
    case 'portfolio':
      contentHtml = renderPortfolio();
      break;
    case 'recognition':
      contentHtml = renderRecognitionHub();
      break;
    case 'settings':
      contentHtml = renderSettings();
      break;
    default:
      contentHtml = renderDashboard();
  }

  app.innerHTML = renderAppShell(contentHtml);
  initScrollReveal();
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof window !== 'undefined' && window.location && window.location.search) {
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view');
    if (viewParam === 'portfolio' || params.get('u')) {
      state.isLoggedIn = true;
      state.currentView = 'portfolio';
      state.publicPortfolioPreview = true;
    } else if (viewParam) {
      state.isLoggedIn = true;
      state.currentView = viewParam;
    }
  }
  render();
});
