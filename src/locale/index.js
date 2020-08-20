export const LOCALE = {
  user: {
    login: {
      headline: 'Sign in to Office Aid',
      username: 'Email',
      password: 'Password',
      rememberMe: 'Remember me',
      signIn: 'Sign In',
      forgotPassword: 'Forgot my password',
    },
    dashboard: {
      topbar: {
        searchPlaceholder: 'Search...',
      },
      leftbar: {
        home: 'Home',
        views: 'Views',
        createButton: 'Create new',
        ticketsFilter: {
          all: 'All Tickets',
          unresolved: 'Unresolved Tickets',
          recentlyUpdated: 'Recently updated',
          solved: 'Solved Tickets',
        },
        logout: 'Logout',
      },
      profile: {
        headline: 'My Profile',
      },
      myTickets: {
        headline: 'My Tickets',
        tableHeaders: {
          ticketNumber: 'Ticket Number',
          date: 'Date',
          issue: 'Issue',
        },
      },
      newTicket: {
        headline: 'New Ticket',
      },
      ticketInfo: {
        messages: 'Messages',
        conversions: 'Conversations',
        form: {
          to: 'To',
          submitButton: 'Post',
        },
      },
    },
  },
  public: {
    notFound: {
      headline: 'Page not found',
      body: 'Maybe the page you are looking for has been removed, or you typed in the wrong URL',
    },
  },
  errors: {
    server: {
      request: 'Request Error',
      unknown: 'Unknown Error. Please try later',
    },
    validation: {
      required: 'Required field',
      email: 'Invalid email address',
    },
  },
};
