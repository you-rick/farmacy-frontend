export const LOCALE = {
  roles: {
    user: 'User',
    admin: 'Admin',
  },
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
        searchPlaceholder: 'Search by ticket number...',
        profile: 'Profile',
        logout: 'Log out',
      },
      tickets: {
        headline: 'Tickets',
        noData: 'No data',
        dateFilter: 'Date',
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
          status: 'Status',
          priority: 'Priority',
          submitButton: 'Save',
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
        headlines: {
          newTickets: 'New Tickets',
          overdueTickets: 'Overdue Tickets',
          dueToday: 'Due Today Tickets',
          dueTomorrow: 'Due Tomorrow Tickets',
          dueNextWeek: 'Due Next Week',
        },
      },
      stats: {
        openTickets: {
          title: 'Open Tickets',
          newTickets: 'New',
          overdueTickets: 'Overdue',
        },
        dueTickets: {
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
      ticketSettings: {
        headline: 'Ticket Settings',
        tableHeaders: {
          type: 'Ticket type',
          overdue: 'Overdue in days',
        },
        form: {
          submit: 'Update',
        },
      },
    },
  },
  public: {
    companyName: 'Paraza Pharma Inc.',
    notFound: {
      headline: 'Page not found',
      body: 'Maybe the page you are looking for has been removed, or you typed in the wrong URL',
    },
    forgotPassword: {
      headline: 'Recover Your Password',
      form: {
        email: 'Enter your email',
        submit: 'Submit',
      },
    },
  },
  errors: {
    server: {
      request: 'Request Error',
      unknown: 'Unknown Error. Please try later',
      baseMsg: 'Server Error',
      auth: 'Incorrect email address or password provided',
    },
    validation: {
      required: 'Required field',
      loginEmailRequired: 'Login email is required',
      passwordRequired: 'Password is required',
      email: 'Invalid email address',
      confirmPassword: 'Passwords should match',
      isNumber: 'Must be a number',
      tooSmall: 'Must be at least 1',
      topbarSearchNumber: 'Invalid ticket number',
      firstName: 'Your first name can only contain alphabet, numbers and spaces.',
      lastName: 'Your last name can only contain alphabet, numbers and spaces.',
      maxChar: (number) => `You can enter a maximum of ${number} characters`,
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
    ticketSettings: {
      settingsUpdated: 'Ticket settings successfully updated',
    },
    forgotPassword: {
      requestReceived: 'Your request has been received. You wll receive an email shortly with your new password details.',
    },
  },
};
