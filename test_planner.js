// Runnable self-check for काम CLUB Smart Planner scheduling & Recognition Engine
const fs = require('fs');
const vm = require('vm');

const code = fs.readFileSync(__dirname + '/app.js', 'utf8');
const sandbox = {
  localStorage: { getItem: () => null, setItem: () => {}, removeItem: () => {} },
  document: { addEventListener: () => {}, getElementById: () => null },
  window: { scrollTo: () => {} },
  console
};
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

const schedule = vm.runInContext('generateSmartSchedule()', sandbox);
const rec = vm.runInContext('computeRecognitionStats()', sandbox);

if (!schedule || schedule.days.length !== 7) {
  throw new Error('Smart Planner must generate a 7-day schedule');
}
if (schedule.conflicts.length < 1) {
  throw new Error('Smart Planner must detect overdue / deadline conflicts');
}
if (rec.points <= 0 || rec.badges.length !== 5) {
  throw new Error('Recognition engine must compute points and 5 badges');
}
console.log('PASS: काम CLUB Smart Planner & Recognition Engine verified:', {
  days: schedule.days.length,
  conflictsDetected: schedule.conflicts.length,
  totalPendingHours: schedule.totalPendingHours,
  recognitionPoints: rec.points,
  unlockedBadges: rec.badges.filter(b => b.unlocked).length
});
