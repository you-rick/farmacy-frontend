export const LOCALE = {
  auth: {
    login: {
      headline: 'Sign in to Office Aid',
      username: 'Email',
      password: 'Password',
      rememberMe: 'Remember me',
      signIn: 'Sign In',
      forgotPassword: 'Forgot my password',
      userLogin: 'Sign in as employee',
      adminLogin: 'Sign in as admin',
    },
    logout: 'logout',
  },
  common: {
    dashboard: {
      topbar: {
        searchPlaceholder: 'Search...',
      },
      tickets: {
        headline: 'Tickets',
        tableHeaders: {
          ticketNumber: 'Ticket Number',
          date: 'Date',
          subject: 'Subject',
          priority: 'Priority',
        },
      },
      users: {
        headline: 'Users',
        tableHeaders: {
          name: 'Name',
          email: 'Email',
          department: 'Department',
          role: 'Role',
          createdAt: 'Created At',
          action: 'Action',
        },
      },
      profile: {
        headline: 'My Account Profile',
        resetPassword: 'Reset Password',
        form: {
          firstName: 'First Name',
          lastName: 'Last Name',
          email: 'Email address',
          phoneNumber: 'Phone Number',
          extension: 'Ext.',
          mobileNumber: 'Mobile Number',
          submit: 'Save Changes',
        },
      },
      resetPassword: {
        headline: 'Reset your password',
        form: {
          oldPassword: 'Old Password',
          newPassword: 'New Password',
          confirmPassword: 'Confirm Password',
          submit: 'Submit',
        },
      },
    },
    confirmModal: {
      deleteUser: {
        headline: 'Delete User',
        body: 'Are you sure you want to delete this user?',
      },
      actions: {
        submit: 'Yes',
        cancel: 'No',
      },
    },
  },
  user: {
    dashboard: {
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
        headline: 'User Profile',
      },
      myTickets: {
        headline: 'My Tickets',
      },
      newTicket: {
        headline: 'New Ticket',
        form: {
          requester: 'Requester',
          department: 'Department',
          component: 'Component',
          tags: 'Tags',
          type: 'Type',
          priority: 'Priority',
          title: 'Subject',
          to: 'To',
          submitButton: 'Post',
        },
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
  admin: {
    dashboard: {
      leftbar: {
        home: 'Home',
        links: {
          dashboard: {
            title: 'Dashboard',
            overview: 'Overview',
            users: 'Users',
            tickets: 'Tickets',
          },
          teams: {
            title: 'Teams',
          },
          settings: {
            title: 'Ticket Settings',
          },
        },
      },
      profile: {
        headline: 'Admin Profile',
      },
      newTickets: {
        headline: 'New Tickets',
      },
      stats: {
        OpenTickets: {
          title: 'Open Tickets',
          new: 'New',
          overdue: 'Overdue',
        },
        TicketsDue: {
          title: 'Tickets Coming Due',
          dueNextWeek: 'Due Next Week',
          dueToday: 'Due Today',
          dueTomorrow: 'Due Tomorrow',
        },
      },
      createUser: {
        headline: 'New User',
        form: {
          firstName: 'First Name',
          lastName: 'Last Name',
          email: 'Email address',
          department: 'Department',
          role: 'Role',
          employedSince: 'Employed Since',
          submit: 'Create',
        },
      },
    },
  },
  public: {
    companyName: 'Offteck',
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
      confirmPassword: 'Passwords should match',
    },
  },
  success: {
    tickets: {
      ticketCreated: 'Ticket successfully created',
    },
    users: {
      userCreated: 'User successfully created',
      userRemoved: 'User successfully removed',
    },
    profile: {
      profileUpdated: 'Profile successfully updated',
      passwordUpdated: 'Password successfully updated',
    },
  },
};
