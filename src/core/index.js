export const roles = {
  user: 'ROLE_USER',
  admin: 'ROLE_ADMIN',
};

export const ticketType = {
  incident: 'INCIDENT',
};

export const department = {
  INFORMATION_TECHNOLOGY: 'Information Technology',
  BIOLOGY: 'Biology',
  DMPK: 'DMPK',
  CHEMISTRY: 'Chemistry',
  HUMAN_RESOURCES: 'Human Resources',
  ADMINISTRATION: 'Administration',
  FINANCE: 'Finance',
};

export const ticketStatus = {
  new: 'NEW',
  open: 'OPEN',
  in_progress: 'IN_PROGRESS',
  hold: 'HOLD',
  re_open: 'RE_OPEN',
  resolved: 'RESOLVED',
  closed: 'CLOSED',
};

export const ticketPriority = {
  low: 'LOW',
  medium: 'MEDIUM',
  high: 'HIGH',
  critical: 'CRITICAL',
};

export const userTicketFilter = {
  solved: [ticketStatus.resolved, ticketStatus.closed],
  unresolved: [ticketStatus.new, ticketStatus.open, ticketStatus.in_progress, ticketStatus.hold, ticketStatus.re_open],
};
