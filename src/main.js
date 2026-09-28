import './style.css';

const icons = {
  grid: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  users: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  code: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/></svg>',
  megaphone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 18-5v12L3 14v-3ZM3 14l2 6h4l-2-6M7 10v5"/></svg>',
  settings: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.7 1.7-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V20h-2.4v-.2a1.7 1.7 0 0 0-1.03-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.7-1.7.06-.06A1.7 1.7 0 0 0 8.4 15a1.7 1.7 0 0 0-1.56-1.03H6v-2.4h.2A1.7 1.7 0 0 0 7.76 10a1.7 1.7 0 0 0-.34-1.88l-.06-.06 1.7-1.7.06.06A1.7 1.7 0 0 0 11 6.76 1.7 1.7 0 0 0 12.03 5.2V5h2.4v.2A1.7 1.7 0 0 0 15.46 6.76a1.7 1.7 0 0 0 1.88-.34l.06-.06 1.7 1.7-.06.06A1.7 1.7 0 0 0 18.7 10a1.7 1.7 0 0 0 1.56 1.03h.2v2.4h-.2A1.7 1.7 0 0 0 18.7 15Z"/></svg>',
  plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  bell: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/></svg>',
  menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
  external: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9"/><path d="M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/></svg>'
};

const state = {
  activePage: 'Overview',
  modal: null,
  currentUser: JSON.parse(localStorage.getItem('git-club-user') || 'null'),
  notificationsOpen: false,
  searchOpen: false,
  events: [
    { title: 'Open Source Sprint', date: 'Oct 12', time: '10:00 AM', type: 'Workshop', theme: 'Open source collaboration', venue: 'Innovation Lab', attendees: 42, color: 'violet' },
    { title: 'Git & GitHub 101', date: 'Oct 18', time: '4:30 PM', type: 'Learning', theme: 'Version control basics', venue: 'Room 204', attendees: 68, color: 'blue' },
    { title: 'Hacktoberfest Night', date: 'Oct 26', time: '6:00 PM', type: 'Community', theme: 'Build, contribute, celebrate', venue: 'Main Auditorium', attendees: 91, color: 'pink' },
    { title: 'Portfolio Review Circle', date: 'Nov 02', time: '11:00 AM', type: 'Career', theme: 'Portfolio feedback', venue: 'Design Studio', attendees: 36, color: 'violet', isNew: true },
    { title: 'Build with APIs', date: 'Nov 09', time: '3:00 PM', type: 'Workshop', theme: 'Connect ideas with APIs', venue: 'Innovation Lab', attendees: 54, color: 'blue', isNew: true },
    { title: 'Winter Code Jam', date: 'Nov 16', time: '9:00 AM', type: 'Community', theme: 'Ship something useful', venue: 'Tech Hub', attendees: 76, color: 'pink', isNew: true }
  ],
  chartRange: 'Last 6 months',
  participationYear: [70, 95, 88, 120, 135, 160, 148, 184, 201, 224, 218, 238],
  projects: [
    { name: 'Campus Connect', lead: 'Aarav Mehta', status: 'In progress', progress: 72, color: 'blue' },
    { name: 'Club Website v2', lead: 'Maya Singh', status: 'In progress', progress: 48, color: 'violet' },
    { name: 'Git Starter Kit', lead: 'Rohan Das', status: 'Planning', progress: 18, color: 'orange' },
    { name: 'Alumni Directory', lead: 'Nisha Shah', status: 'Review', progress: 86, color: 'green' }
  ],
  members: [
    { name: 'Om Rashiya', role: 'Club Lead', initials: 'OR', color: 'green' },
    { name: 'Aditya Mehta', role: 'Events Lead', initials: 'AM', color: 'green' },
    { name: 'Maya Singh', role: 'Project Lead', initials: 'MS', color: 'purple' },
    { name: 'Rohan Das', role: 'Community Lead', initials: 'RD', color: 'orange' },
    { name: 'Nisha Shah', role: 'Design Lead', initials: 'NS', color: 'blue' },
    { name: 'Ishita Rao', role: 'Tech Lead', initials: 'IR', color: 'pink' },
  ],
  announcements: [
    { title: 'Hacktoberfest Night registrations are open', meta: 'Maya Singh · 2 hours ago', kind: 'announcement' },
    { title: 'Campus Connect reached 70% completion', meta: 'Project update · 5 hours ago', kind: 'project' },
    { title: 'New member joined the Design Guild', meta: 'Aarav Mehta · Yesterday', kind: 'member' },
    { title: 'Weekly stand-up notes published', meta: 'Rohan Das · Yesterday', kind: 'note' }
  ]
};

const navItems = [
  ['Overview', 'grid'], ['Events', 'calendar'], ['Members', 'users'], ['Projects', 'code'], ['Announcements', 'megaphone']
];

function icon(name) { return icons[name] || ''; }
function initials(name) { return name.split(' ').map((part) => part[0]).join('').slice(0, 2); }
function isAuthenticated() { return Boolean(state.currentUser); }
function canEdit(action) { return isAuthenticated() && action; }
function todayLabel() { return new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'long', day: '2-digit', year: 'numeric' }).format(new Date()).toUpperCase(); }
function currentYear() { return new Date().getFullYear(); }
function totalParticipants() { return state.events.reduce((total, event) => total + event.attendees, 0); }
function projectStatusCounts() { return state.projects.reduce((counts, project) => { const status = project.status === 'In progress' ? 'inProgress' : project.status.toLowerCase(); counts[status] = (counts[status] || 0) + 1; return counts; }, { inProgress: 0, completed: 0, planning: 0, review: 0 }); }
function allMembers() { return isAuthenticated() && !state.members.some((member) => member.name.toLowerCase() === state.currentUser.name.toLowerCase()) ? [{ name: state.currentUser.name, role: 'Community Lead', initials: initials(state.currentUser.name), color: 'purple' }, ...state.members] : state.members; }
function eventList() { const query = (state.eventQuery || '').trim().toLowerCase(); return state.events.filter((event) => { const matchesSearch = !query || `${event.title} ${event.type} ${event.date}`.toLowerCase().includes(query); const matchesFilter = state.eventFilter === 'Recently added' ? event.isNew : state.eventFilter === 'Needs attention' ? event.attendees < 45 : true; return matchesSearch && matchesFilter; }); }

function notificationItems() {
  return [
    ...state.events.slice(0, 3).map((event) => ({ title: `New event added: ${event.title}`, meta: `${event.date} · ${event.time}`, kind: 'announcement' })),
    ...state.announcements.slice(0, 2)
  ];
}

function renderNotifications() {
  return `<div class="popover notifications-popover"><div class="popover-heading"><div><strong>Notifications</strong><span>Latest club updates</span></div><button class="popover-close" data-toggle="notifications" aria-label="Close notifications">${icon('close')}</button></div><div class="notification-list">${notificationItems().map((item) => `<div class="notification-item"><div class="activity-icon ${item.kind}">${icon(item.kind === 'announcement' ? 'calendar' : 'megaphone')}</div><div><strong>${item.title}</strong><span>${item.meta}</span></div></div>`).join('')}</div></div>`;
}

function renderSearch() {
  const query = state.searchQuery?.trim().toLowerCase() || '';
  const results = query ? [
      ...state.events.filter((event) => event.title.toLowerCase().includes(query)).map((event) => ({ title: event.title, meta: `Event · ${event.date}`, page: 'Events', kind: 'announcement' })),
    ...state.projects.filter((project) => project.name.toLowerCase().includes(query)).map((project) => ({ title: project.name, meta: `Project · ${project.status}`, page: 'Projects', kind: 'project' })),
    ...state.announcements.filter((item) => item.title.toLowerCase().includes(query)).map((item) => ({ title: item.title, meta: 'Announcement', page: 'Announcements', kind: 'note' }))
  ] : [];
    return `<div class="search-popover"><div class="search-popover-input">${icon('search')}<input id="global-search" autofocus placeholder="Search events, projects, announcements..." value="${state.searchQuery || ''}" /><button class="popover-close" data-toggle="search" aria-label="Close search">${icon('close')}</button></div><div class="search-results">${query ? (results.length ? results.map((result) => `<button class="search-result" data-search-page="${result.page}"><div class="activity-icon ${result.kind}">${icon(result.kind === 'project' ? 'code' : 'calendar')}</div><span><strong>${result.title}</strong><small>${result.meta}</small></span>${icon('arrow')}</button>`).join('') : '<p class="empty-search">No matching club records found.</p>') : '<p class="search-hint">Search across the club workspace.</p>'}</div></div>`;
}

function renderShell(content) {
  return `<div class="app-shell">
    <aside class="sidebar" id="sidebar">
      <div class="brand"><div class="brand-mark" aria-label="Git Club logo">&lt;/&gt;</div><span>Git Club</span></div>
      <div class="workspace-label">WORKSPACE</div>
      <nav class="nav-list" aria-label="Main navigation">
        ${navItems.map(([label, name]) => `<button class="nav-item ${state.activePage === label ? 'active' : ''}" data-page="${label}">${icon(name)}<span>${label}</span>${label === 'Announcements' ? '<span class="nav-badge">3</span>' : ''}</button>`).join('')}
      </nav>
      <div class="sidebar-bottom"><div class="status-dot"></div><div><strong>All systems normal</strong><span>Last synced just now</span></div></div>
    </aside>
    <main class="main-content">
      <header class="topbar"><button class="icon-button menu-button" id="menu-button" aria-label="Open menu">${icon('menu')}</button><div class="breadcrumb"><span>Git Club</span><b>/</b><strong>${state.activePage}</strong></div><div class="topbar-actions"><button class="icon-button" data-toggle="search" aria-label="Search">${icon('search')}</button><button class="icon-button notification-button" data-toggle="notifications" aria-label="Notifications">${icon('bell')}<i></i></button><button class="profile profile-button" data-toggle="profile" aria-label="${isAuthenticated() ? 'Open profile menu' : 'Log in'}">${isAuthenticated() ? `<div class="avatar avatar-purple">${initials(state.currentUser.name)}</div><span class="profile-name">${state.currentUser.name}</span><span class="chevron">⌄</span>` : `<div class="avatar avatar-purple">${icon('users')}</div><span class="profile-name">Log in</span>`}</button></div></header>
      <div class="page-content">${content}</div>
    </main>
    <div class="sidebar-overlay" id="sidebar-overlay"></div>
    ${state.notificationsOpen ? renderNotifications() : ''}
    ${state.searchOpen ? renderSearch() : ''}
    ${state.profileOpen && isAuthenticated() ? `<div class="popover profile-popover"><div class="profile-popover-user"><div class="avatar avatar-purple">${initials(state.currentUser.name)}</div><div><strong>${state.currentUser.name}</strong><span>${state.currentUser.role}</span></div></div><button class="logout-button" data-action="logout">Log out ${icon('arrow')}</button></div>` : ''}
    ${state.modal ? renderModal() : ''}
  </div>`;
}

function renderOverview() {
  return `<section class="page-heading reveal"><div><p class="eyebrow">${todayLabel()}</p><h1>${isAuthenticated() ? `Good morning, ${state.currentUser.name.split(' ')[0]}` : 'Welcome to Git Club'} <span class="wave">✦</span></h1><p class="heading-subtitle">Here is what is happening across the club today.</p></div>${isAuthenticated() ? `<button class="primary-button" data-action="new-event">${icon('plus')} Create event</button>` : ''}</section>
    <section class="metrics-grid reveal-delay-1">
      ${metricCard('Total members', allMembers().length, 'users', 'purple')}
      ${metricCard('Upcoming events', state.events.length, 'calendar', 'blue')}
      ${metricCard('Active projects', state.projects.length, 'code', 'pink')}
      ${metricCard('Event participants', totalParticipants(), 'grid', 'orange')}
    </section>
    <section class="dashboard-grid reveal-delay-2"><div class="panel participation-panel"><div class="panel-heading"><div><h2>Event participation</h2><p>Attendance across the selected timeframe</p></div><select id="participation-range" aria-label="Participation timeframe"><option ${state.chartRange === 'Last 6 months' ? 'selected' : ''}>Last 6 months</option><option ${state.chartRange === 'This year' ? 'selected' : ''}>This year</option></select></div>${participationChart()}</div><div class="panel status-panel"><div class="panel-heading"><div><h2>Project status</h2><p>Current project distribution</p></div><button class="more-button" aria-label="More project status options">•••</button></div>${statusChart()}</div></section>
    <section class="lower-grid reveal-delay-3"><div class="panel events-panel"><div class="panel-heading"><div><h2>Upcoming events</h2><p>Keep an eye on what is next</p></div><button class="text-button" data-page="Events">View all ${icon('arrow')}</button></div><div class="event-list">${state.events.map(eventRow).join('')}</div></div><div class="panel activity-panel"><div class="panel-heading"><div><h2>Recent activity</h2><p>Latest updates from the club</p></div><button class="more-button" aria-label="More activity options">•••</button></div><div class="activity-list">${state.announcements.slice(0, 4).map(activityRow).join('')}</div></div></section>`;
}

function metricCard(label, value, iconName, color) {
  return `<article class="metric-card"><div class="metric-top"><div class="metric-icon ${color}">${icon(iconName)}</div></div><strong>${value}</strong><div class="metric-label">${label}</div></article>`;
}

function participationChart() {
  const maxValue = 300;
  const allLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const values = state.chartRange === 'This year' ? state.participationYear : state.participationYear.slice(-6);
  const labels = state.chartRange === 'This year' ? allLabels : allLabels.slice(-6);
  const points = values.map((value, index) => `${(index / (values.length - 1)) * 520},${130 - (value / maxValue) * 112}`).join(' ');
  const lastPoint = points.split(' ').at(-1).split(',');
  return `<div class="chart-wrap"><div class="chart-y"><span>300</span><span>200</span><span>100</span><span>0</span></div><div class="chart-main"><div class="chart-gridlines"><i></i><i></i><i></i><i></i></div><svg class="line-chart" viewBox="0 0 520 130" preserveAspectRatio="none" role="img" aria-label="Event participation chart"><defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#8b5cf6" stop-opacity=".32"/><stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/></linearGradient></defs><polygon points="${points} 520,130 0,130" fill="url(#chartFill)"/><polyline points="${points}" fill="none" stroke="#a78bfa" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="${lastPoint[0]}" cy="${lastPoint[1]}" r="5" fill="#0d1117" stroke="#c4b5fd" stroke-width="3"/></svg><div class="chart-x">${labels.map((label) => `<span>${label}</span>`).join('')}</div></div></div><div class="chart-legend"><span><i class="legend-dot purple-dot"></i>Participants</span><strong>${totalParticipants()} total</strong></div>`;
}

function statusChart() {
  const counts = projectStatusCounts();
  return `<div class="donut-area"><div class="donut"><div class="donut-center"><strong>${state.projects.length}</strong><span>projects</span></div></div><div class="status-legend"><div><i class="status-dot-ui blue-bg"></i><span>In progress</span><strong>${String(counts.inProgress).padStart(2, '0')}</strong></div><div><i class="status-dot-ui green-bg"></i><span>Completed</span><strong>${String(counts.completed).padStart(2, '0')}</strong></div><div><i class="status-dot-ui orange-bg"></i><span>Planning</span><strong>${String(counts.planning).padStart(2, '0')}</strong></div><div><i class="status-dot-ui purple-bg"></i><span>Review</span><strong>${String(counts.review).padStart(2, '0')}</strong></div></div></div><button class="outlined-button full-width" data-page="Projects">Manage projects ${icon('arrow')}</button>`;
}

function eventRow(event) {
  return `<div class="event-row"><div class="date-tile ${event.color}"><strong>${event.date.split(' ')[1]}</strong><span>${event.date.split(' ')[0]}</span></div><div class="event-details"><strong>${event.title}</strong><span>${event.time} · ${event.type}</span></div><div class="attendees"><div class="mini-avatars"><i class="avatar avatar-green">MS</i><i class="avatar avatar-orange">RD</i><i class="avatar avatar-blue">+${Math.max(event.attendees - 2, 0)}</i></div><span>${event.attendees} going</span></div><button class="row-arrow" data-event-title="${event.title}" aria-label="Open ${event.title}">${icon('arrow')}</button></div>`;
}

function activityRow(item) {
  const activityIcon = item.kind === 'member' ? 'users' : item.kind === 'project' ? 'code' : item.kind === 'note' ? 'calendar' : 'megaphone';
  return `<div class="activity-row"><div class="activity-icon ${item.kind}">${icon(activityIcon)}</div><div><strong>${item.title}</strong><span>${item.meta}</span></div></div>`;
}

function renderListPage(title, description, type) {
  const isEvents = type === 'events';
  const isProjects = type === 'projects';
  const isMembers = type === 'members';
  const items = isEvents ? eventList().map(eventRow).join('') : isProjects ? state.projects.map(projectRow).join('') : isMembers ? memberRows() : state.announcements.map(activityRow).join('');
  const action = isEvents ? 'new-event' : isProjects ? 'new-project' : isMembers ? 'new-member' : 'new-announcement';
  const buttonText = isEvents ? 'Create event' : isProjects ? 'Add project' : isMembers ? 'Add member' : 'Publish announcement';
  return `<section class="page-heading reveal"><div><p class="eyebrow">WORKSPACE / ${title.toUpperCase()}</p><h1>${title}</h1><p class="heading-subtitle">${description}</p></div>${isAuthenticated() ? `<button class="primary-button" data-action="${action}">${icon('plus')} ${buttonText}</button>` : ''}</section><section class="panel list-page-panel reveal-delay-1"><div class="list-toolbar"><div class="search-field">${icon('search')}<input id="${isEvents ? 'event-search' : 'page-search'}" placeholder="Search ${title.toLowerCase()}..." value="${isEvents ? state.eventQuery || '' : ''}" /></div><select id="${isEvents ? 'event-filter' : 'page-filter'}"><option>All ${title}</option><option ${state.eventFilter === 'Recently added' ? 'selected' : ''}>Recently added</option><option ${state.eventFilter === 'Needs attention' ? 'selected' : ''}>Needs attention</option></select></div><div class="full-list ${isMembers ? 'member-list' : ''} ${type === 'announcements' ? 'announcement-list-page' : ''}" id="${isEvents ? 'event-list' : 'page-list'}">${items || '<p class="empty-search">No events match this filter.</p>'}</div></section>`;
}

function projectRow(project) {
  return `<div class="project-row"><div class="project-symbol ${project.color}">${icon('code')}</div><div class="project-info"><strong>${project.name}</strong><span>Lead: ${project.lead}</span></div><div class="project-progress"><div class="progress-label"><span>${project.status}</span><strong>${project.progress}%</strong></div><div class="progress-track"><i class="${project.color}" style="width: ${project.progress}%"></i></div></div><button class="row-arrow" aria-label="Open ${project.name}">${icon('arrow')}</button></div>`;
}

function memberRows() {
  return allMembers().map((member) => `<div class="member-row"><div class="avatar avatar-${member.color}">${member.initials}</div><div class="member-info"><strong>${member.name}</strong><span>${member.role}</span></div><span class="member-status"><i></i> Active</span><span class="member-joined">Joined Sep ${currentYear()}</span></div>`).join('');
}

function renderModal() {
  if (state.modal === 'login') return `<div class="modal-backdrop" id="modal-backdrop"><div class="modal login-modal" role="dialog" aria-modal="true"><button class="modal-close" id="modal-close" aria-label="Close">${icon('close')}</button><div class="modal-icon">${icon('users')}</div><p class="eyebrow">COMMITTEE ACCESS</p><h2>Log in to Git Club</h2><p>Sign in to manage events, projects, members, and announcements.</p><form id="login-form"><label>Username<input id="login-username" required autocomplete="username" placeholder="Enter your username" /></label><label>Email<input id="login-email" type="text" required autocomplete="email" placeholder="Enter your email" /></label><label>Password<input id="login-password" type="password" required autocomplete="current-password" placeholder="Enter your password" /></label><button class="primary-button full-width" type="submit">Log in ${icon('arrow')}</button></form></div></div>`;
  if (state.modal === 'event-details') { const event = state.selectedEvent; return `<div class="modal-backdrop" id="modal-backdrop"><div class="modal event-detail-modal" role="dialog" aria-modal="true"><button class="modal-close" id="modal-close" aria-label="Close">${icon('close')}</button><div class="date-tile ${event.color} detail-date"><strong>${event.date.split(' ')[1]}</strong><span>${event.date.split(' ')[0]}</span></div><p class="eyebrow">EVENT DETAILS</p><h2>${event.title}</h2><div class="detail-grid"><div><span>DATE</span><strong>${event.date}</strong></div><div><span>TIME</span><strong>${event.time}</strong></div><div><span>VENUE</span><strong>${event.venue || 'Club workspace'}</strong></div><div><span>THEME</span><strong>${event.theme || event.type}</strong></div></div><div class="detail-attendees">${icon('users')} ${event.attendees} registered participants</div></div></div>`; }
  const configs = { 'new-event': ['Create event', 'Add an upcoming activity to the club calendar.', 'Event name', 'Create event'], 'new-project': ['Add project', 'Track a new project and its committee owner.', 'Project name', 'Add project'], 'new-member': ['Add member', 'Invite a new teammate to the Git Club workspace.', 'Member name', 'Add member'], 'new-announcement': ['Publish announcement', 'Share an update with the whole committee.', 'Announcement title', 'Publish'] };
  const config = configs[state.modal] || configs['new-event'];
  const eventFields = state.modal === 'new-event' ? '<label>Date<input id="event-date" type="date" required /></label><label>Venue<input id="event-venue" required placeholder="Enter venue" /></label><label>Time<input id="event-time" type="time" required /></label><label>Event theme<input id="event-theme" required placeholder="e.g. Open source and collaboration" /></label>' : state.modal === 'new-member' ? '<label>Role<select id="member-role" required><option value="" selected disabled>Choose a role</option><option>Club Lead</option><option>Student Coordinator</option><option>Community Lead</option><option>Events Lead</option><option>Project Lead</option><option>Design Lead</option><option>Tech Lead</option><option>Member</option></select></label>' : '<label>Owner <input placeholder="Assign to committee member" /></label>';
  return `<div class="modal-backdrop" id="modal-backdrop"><div class="modal" role="dialog" aria-modal="true"><button class="modal-close" id="modal-close" aria-label="Close">${icon('close')}</button><div class="modal-icon">${icon('plus')}</div><p class="eyebrow">QUICK ACTION</p><h2>${config[0]}</h2><p>${config[1]}</p><form id="quick-form"><label>${config[2]}<input id="quick-input" required autofocus placeholder="Enter ${config[2].toLowerCase()}" /></label>${eventFields}<button class="primary-button full-width" type="submit">${config[3]} ${icon('arrow')}</button></form></div></div>`;
}

function currentContent() {
  if (state.activePage === 'Overview') return renderOverview();
  if (state.activePage === 'Events') return renderListPage('Events', 'Plan, manage, and review everything happening next.', 'events');
  if (state.activePage === 'Members') return renderListPage('Members', 'Keep the committee connected and moving together.', 'members');
  if (state.activePage === 'Projects') return renderListPage('Projects', 'Track progress across the club’s active initiatives.', 'projects');
  if (state.activePage === 'Announcements') return renderListPage('Announcements', 'Keep everyone aligned with the latest club updates.', 'announcements');
  return renderListPage('Settings', 'Manage your committee workspace preferences.', 'announcements');
}

function render() {
  document.querySelector('#app').innerHTML = renderShell(currentContent());
  bindEvents();
}

function bindSearchResults() {
  document.querySelectorAll('[data-search-page]').forEach((element) => element.addEventListener('click', () => { state.activePage = element.dataset.searchPage; state.searchOpen = false; state.searchQuery = ''; render(); }));
}

function bindEvents() {
  document.querySelectorAll('[data-page]').forEach((element) => element.addEventListener('click', () => { state.activePage = element.dataset.page; render(); }));
  document.querySelectorAll('[data-action]').forEach((element) => element.addEventListener('click', () => { if (element.dataset.action === 'logout') { state.currentUser = null; localStorage.removeItem('git-club-user'); state.profileOpen = false; render(); return; } if (!isAuthenticated()) { state.modal = 'login'; render(); return; } state.modal = element.dataset.action; render(); }));
  document.querySelectorAll('[data-toggle="notifications"]').forEach((element) => element.addEventListener('click', () => { state.notificationsOpen = !state.notificationsOpen; state.searchOpen = false; state.profileOpen = false; render(); }));
  document.querySelectorAll('[data-toggle="search"]').forEach((element) => element.addEventListener('click', () => { state.searchOpen = !state.searchOpen; state.notificationsOpen = false; state.profileOpen = false; render(); }));
  document.querySelectorAll('[data-toggle="profile"]').forEach((element) => element.addEventListener('click', () => { if (!isAuthenticated()) { state.modal = 'login'; render(); return; } state.profileOpen = !state.profileOpen; state.notificationsOpen = false; state.searchOpen = false; render(); }));
  bindSearchResults();
  document.querySelector('#global-search')?.addEventListener('input', (event) => { state.searchQuery = event.target.value; const currentResults = document.querySelector('.search-results'); const replacement = document.createElement('div'); replacement.innerHTML = renderSearch(); currentResults?.replaceWith(replacement.querySelector('.search-results')); bindSearchResults(); });
  document.querySelector('#event-search')?.addEventListener('input', (event) => { state.eventQuery = event.target.value; const eventListElement = document.querySelector('#event-list'); if (eventListElement) eventListElement.innerHTML = eventList().map(eventRow).join('') || '<p class="empty-search">No events match this search.</p>'; });
  document.querySelector('#event-filter')?.addEventListener('change', (event) => { state.eventFilter = event.target.value; render(); });
  document.querySelector('#participation-range')?.addEventListener('change', (event) => { state.chartRange = event.target.value; render(); });
  document.querySelector('#menu-button')?.addEventListener('click', () => document.querySelector('#sidebar').classList.add('open'));
  document.querySelector('#sidebar-overlay')?.addEventListener('click', () => document.querySelector('#sidebar').classList.remove('open'));
  document.querySelector('#modal-close')?.addEventListener('click', () => { state.modal = null; render(); });
  document.querySelectorAll('[data-event-title]').forEach((element) => element.addEventListener('click', () => { state.selectedEvent = state.events.find((event) => event.title === element.dataset.eventTitle); state.modal = 'event-details'; render(); }));
  document.querySelector('#modal-backdrop')?.addEventListener('click', (event) => { if (event.target.id === 'modal-backdrop') { state.modal = null; render(); } });
  document.querySelector('#quick-form')?.addEventListener('submit', (event) => { event.preventDefault(); const input = document.querySelector('#quick-input'); const value = input.value.trim(); if (!value) return; const action = state.modal; if (action === 'new-event') { const dateValue = document.querySelector('#event-date').value; const [year, month, day] = dateValue.split('-'); const formattedDate = new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit' }).format(new Date(Number(year), Number(month) - 1, Number(day))); state.events.unshift({ title: value, date: formattedDate, time: new Date(`1970-01-01T${document.querySelector('#event-time').value}`).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }), type: 'Community', theme: document.querySelector('#event-theme').value.trim(), venue: document.querySelector('#event-venue').value.trim(), attendees: 0, color: 'blue', isNew: true }); state.participationYear[state.participationYear.length - 1] += 12; } if (action === 'new-project') state.projects.unshift({ name: value, lead: state.currentUser.name, status: 'Planning', progress: 0, color: 'orange' }); if (action === 'new-member') { const role = document.querySelector('#member-role').value; state.members.push({ name: value, role, initials: initials(value), color: 'purple' }); } if (action === 'new-announcement') state.announcements.unshift({ title: value, meta: `${state.currentUser.name} · Just now`, kind: 'announcement' }); state.modal = null; render(); });
 document.querySelector('#login-form')?.addEventListener('submit', (event) => { event.preventDefault(); const username = document.querySelector('#login-username').value.trim(); const email = document.querySelector('#login-email').value.trim(); const password = document.querySelector('#login-password').value; if (!username || !email || password !== 'gitclub123') { document.querySelector('#login-password').setCustomValidity('Password must be gitclub123.'); document.querySelector('#login-password').reportValidity(); return; } document.querySelector('#login-password').setCustomValidity(''); state.currentUser = { name: username, role: 'Community Lead', email }; if (!state.members.some((member) => member.name.toLowerCase() === username.toLowerCase())) state.members.unshift({ name: username, role: 'Community Lead', initials: initials(username), color: 'purple' }); localStorage.setItem('git-club-user', JSON.stringify(state.currentUser)); state.modal = null; render(); });
}

render();
