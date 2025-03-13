export default defineAppConfig({
  ui: {
    primary: "slate",
    notifications: {
      position: "top-[50px] bottom-[unset] left-1/2 transform -translate-x-1/2",
    },
    input: {
      wrapper: "dark:bg-surface-dark-300 bg-surface-light-300 rounded-lg",
      rounded: "rounded-lg",
      color: {
        white: {
          outline:
            "bg-surface-light-300 dark:bg-surface-dark-300 text-text-light dark:text-text-dark ring-0 dark:ring-3 ",
        },
      },
    },
    button: {
      default: {
        color: "personalizzato",
      },
      color: {
        personalizzato: {
          solid: "dark:bg-surface-dark-300 bg-surface-light-300 dark:hover:bg-hover-dark hover:bg-hover-light dark:text-text-dark text-text-light",
          ghost: "bg-transparent dark:hover:bg-hover-dark hover:bg-hover-light dark:text-text-dark text-text-light",
          link: "dark:text-text-dark text-text-light dark:hover:text-text-secondary-dark hover:text-text-secondary-light",
        },
      },
    },
    dropdown: {
      background: 'dark:bg-navbar-dark bg-navbar-light',
      wrapper: 'relative',
      item: {
        base: 'w-full flex items-center justify-between dark:hover:bg-hover-dark hover:bg-hover-light',
        disabled: 'cursor-not-allowed opacity-50',
        active: 'dark:bg-hover-dark hover:bg-hover-light bg-hover-light'
      },
    },
    checkbox: {
      background: 'dark:bg-text-secondary-dark bg-yellow',
      color: 'dark:text-surface-dark text-text-secondary-light',
      border: 'border-none',
    },
    textarea: {
      wrapper: "dark:bg-navbar-dark bg-navbar-light rounded-lg",
      rounded: "rounded-lg",
      color: {
        white: {
          outline:
            "bg-surface-light-300 dark:bg-surface-dark-300 text-text-light dark:text-text-dark ring-0 dark:ring-3 ",
        },
      },
    },
    badge: {
      default: {
        color: 'personalizzato',
      },
      color: {
        personalizzato: { solid: 'dark:bg-surface-dark-300 bg-surface-light-300 dark:text-text-dark text-text-light' }
      },
    },
  },
});