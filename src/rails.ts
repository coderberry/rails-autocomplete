import { filepaths } from "@fig/autocomplete-generators";

const RB_ICON =
  "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_ruby.svg";

const newCommand = {
  name: "new",
  description: "Create a new rails application",
  args: {
    name: "path",
    description:
      "Path to directory to be created containing the new application",
  },
  options: [
    {
      name: "-skip-namespace",
      description: "Skip namespace (affects only isolated applications)",
      args: {},
    },
    {
      name: ["-r", "--ruby"],
      description: "Path to the Ruby binary of your choice",
      args: {},
    },
    {
      name: "-m",
      description:
        "Path to some application template (can be a filesystem path or URL)",
    },
    {
      name: "-d",
      description: "Preconfigure for selected database - defaults to sqlite3",
      args: {
        name: "database",
        suggestions: [
          "mysql",
          "postgresql",
          "sqlite3",
          "oracle",
          "frontbase",
          "ibm_db",
          "sqlserver",
          "jdbcmysql",
          "jdbcsqlite3",
          "jdbcpostgresql",
          "jdbc",
        ],
      },
    },
    {
      name: "--skip-gemfile",
      description: "Don't create a Gemfile",
    },
    {
      name: "-G",
      description: "Skip .gitignore file",
    },
    {
      name: "--skip-keeps",
      description: "Skip source control .keep files",
    },
    {
      name: "-M",
      description: "Skip Action Mailer files",
    },
    {
      name: "--skip-action-mailbox",
      description: "Skip Action Mailbox gem",
    },
    {
      name: "--skip-action-text",
      description: "Skip Action Text gem",
    },
    {
      name: "-O",
      description: "Skip Active Record files",
    },
    {
      name: "--skip-active-storage",
      description: "Skip Active Storage files",
    },
    {
      name: "-P",
      description: "Skip Puma related files",
    },
    {
      name: "-C",
      description: "Skip Action Cable files",
    },
    {
      name: "-S",
      description: "Skip Sprockets files",
    },
    {
      name: "--skip-spring",
      description: "Don't install Spring application preloader",
    },
    {
      name: "--skip-listen",
      description:
        "Don't generate configuration that depends on the listen gem",
    },
    {
      name: "-J",
      description: "Skip JavaScript files",
    },
    {
      name: "--skip-turbolinks",
      description: "Skip turbolinks gem",
    },
    {
      name: "-T",
      description: "Skip test files",
    },
    {
      name: "--skip-system-test",
      description: "Skip system test files",
    },
    {
      name: "--skip-bootsnap",
      description: "Skip bootsnap gem",
    },
    {
      name: "--dev",
      description:
        "Setup the application with Gemfile pointing to your Rails checkout",
    },
    {
      name: "--edge",
      description:
        "Setup the application with Gemfile pointing to Rails repository",
    },
    {
      name: "--rc",
      description:
        "Path to file containing extra configuration options for rails command",
      args: { name: "path" },
    },
    {
      name: "--no-rc",
      description:
        "Skip loading of extra configuration options from .railsrc file",
    },
    {
      name: "--api",
      description: "Preconfigure smaller stack for API only apps",
    },
    {
      name: "-B",
      description: "Don't run bundle install",
    },
    {
      name: "--webpacker",
      description: "Preconfigure Webpack with a particular framework",
      args: {
        name: "framework",
        suggestions: ["react", "vue", "angular", "elm", "stimulus"],
      },
    },
    {
      name: "--skip-webpack-install]",
      description: "Don't run Webpack install",
    },
    {
      name: ["--f", "--force"],
      description: "Overwrite files that already exist",
    },
    {
      name: ["--p", "--pretend"],
      description: "Run but do not make any changes",
    },
    {
      name: ["--q", "--quiet"],
      description: "Suppress status output",
    },
    {
      name: ["--s", "--skip"],
      description: "Skip files that already exist",
    },
    {
      name: ["--h", "--help"],
      description: "Show this help message and quit",
    },
    {
      name: ["--v", "--version"],
      description: "Show Rails version number and quit",
    },
  ],
};

const generateCommand = {
  name: "generate",
  description: "Run a rails generator",
  args: {
    name: "path",
    description:
      "Path to directory to be created containing the new application",
  },
  options: [
    {
      name: "-skip-namespace",
      description: "Skip namespace (affects only isolated applications)",
      args: {},
    },
  ],
};

const dbOptions = [
  {
    name: "--skip-namespace",
    description: "Skip namespace (affects only isolated engines)",
  },
  {
    name: "--no-skip-namespace",
    description: "Do not skip namespace (affects only isolated engines)",
  },
  {
    name: "--skip-collision-check",
    description: "Skip collision check",
  },
  {
    name: "--no-skip-collision-check",
    description: "Do not skip collision check",
  },
  {
    name: ["-r", "--ruby"],
    description: "Path to the Ruby binary of your choice",
    args: { name: "path" },
  },
  {
    name: ["-m", "--template"],
    description: "Path to the Ruby binary of your choice",
    args: { name: "path" },
  },
];

const defaultCommands: Fig.Subcommand[] = [
  {
    name: ["c", "console"],
    description: "Interact with your Rails application from the command line",
    options: [
      {
        name: ["-s", "--sandbox"],
        description: "Rollback database modifications on exit",
      },
      {
        name: ["-e", "--environment"],
        description: "Specifies the environment to run this console under",
        args: {
          name: "environment",
        },
      },
    ],
  },
  {
    name: "server",
    description:
      "Launch a web server to access your application through a browser",
    options: [
      {
        name: ["-e", "--environment"],
        description:
          "Specifies the environment to run this server under (e.g. test/development/production)",
        args: { name: "environment" },
      },
      {
        name: ["-p", "--port"],
        description: "Runs Rails on the specified port - defaults to 3000",
        args: { name: "port" },
      },
      {
        name: ["-b", "--binding"],
        description:
          "Binds Rails to the specified IP - defaults to 'localhost' in development and '0.0.0.0' in other environments'",
        args: { name: "IP" },
      },
      {
        name: ["-c", "--config"],
        description:
          "Uses a custom rackup configuration - defaults to config.ru",
        args: { name: "file" },
      },
      {
        name: ["-d", "--daemon"],
        description: "Runs server as a Daemon",
      },
      {
        name: ["-u", "--using"],
        description:
          "Specifies the Rack server used to run the application (thin/puma/webrick)",
        args: { name: "server" },
      },
      {
        name: ["-P", "--pid"],
        description: "Specifies the PID file - defaults to tmp/pids/server.pid",
        args: { name: "PID" },
      },
      {
        name: ["-C", "--dev-caching"],
        description: "Specifies whether to perform caching in development",
      },
      {
        name: "--early-hints",
        description: "Enables HTTP/2 early hints",
      },
      {
        name: "--log-to-stdout",
        description:
          "Whether to log to stdout. Enabled by default in development when not daemonized",
      },
    ],
  },
  {
    name: "db:create",
    description: "Create your database",
    options: dbOptions,
  },
  {
    name: "db:migrate",
    description: "Run any pending database migrations",
    options: dbOptions,
  },
  {
    name: "dbconsole",
    description:
      "Opens a console to your database (supports MySQL, PostgreSQL, and SQLite3)",
    options: [
      {
        name: "-e",
        description:
          "Specifies the environment to run this dbconsole under (e.g. test/development/production)",
        args: {},
      },
      {
        name: "--mode",
        description:
          "Automatically put the sqlite3 database in the specified mode",
        args: {
          name: "mode",
          suggestions: ["html", "list", "line", "column"],
        },
      },
      {
        name: "-p",
        description: "Automatically provide the password from database.yml",
        args: {},
      },
      {
        name: "-c",
        description: "Specifies the connection to use",
        args: { name: "connection" },
      },
      {
        name: ["-db", "--database"],
        description: "Specifies the database to use",
      },
    ],
  },
  {
    name: "generate",
    description: "Use templates to generate Rails resources",
    args: [
      {
        name: "generator",
        generators: {
          script: "rails g --help",
          postProcess(out) {
            const lines = out.split("Rails:")[1].trim().split("\n");

            type GeneratorCommand = [string, string[]];

            const dict: GeneratorCommand[] = ["Rails:", ...lines].reduce(
              (arr, line) => {
                if (line.endsWith(":"))
                  return [...arr, [line.replace(":", ""), []]];

                const trimmed = line.trim();
                if (!trimmed.length) return arr;
                arr[arr.length - 1][1].push(line.trim());
                return arr;
              },
              []
            );

            return dict.reduce<Fig.Suggestion[]>((arr, [plugin, commands]) => {
              return [
                ...arr,
                ...commands.map((name) => ({
                  insertValue: name,
                  name: `${name} (${plugin})`,
                })),
              ];
            }, []);
          },
        },
      },
      {
        name: "args",
        isVariadic: true,
      },
    ],
    options: [
      {
        name: "-h",
        description: "Print generator's options and usage",
        args: {},
      },
      {
        name: "-p",
        description: "Run but do not make any changes",
        args: {},
      },
      {
        name: "-f",
        description: "Overwrite files that already exist",
        args: {},
      },
      {
        name: "-s",
        description: "Skip files that already exist",
        args: {},
      },
      {
        name: "-q",
        description: "Suppress status output",
        args: {},
      },
    ],
  },
  {
    name: "routes",
    description: "List all of the routes defined in your application",
    options: [
      {
        name: "-c",
        description:
          "Filter by a specific controller, e.g. PostsController or Admin::PostsController",
        args: {},
      },
      {
        name: "-g",
        description: "Grep routes by a specific pattern",
        args: {},
      },
      {
        name: "-E",
        description: "Print routes expanded vertically with parts explained",
        args: {},
      },
    ],
  },
  {
    name: "test",
    description: "Run your test suite",
    args: {
      name: "files or directories",
      generators: filepaths({
        extensions: ["rb"],
        editFileSuggestions: { icon: RB_ICON },
      }),
      isOptional: true,
    },
    async generateSpec(_, executeShellCommand) {
      const helpText = await executeShellCommand("rails test --help");
      const argRegex =
        /(?:(-[a-zA-Z]), )?(--[^ ]+?)[ =]([A-Z_]+)?[ \r\n]+([^\n]+)/g;

      const options = Array.from(helpText.matchAll(argRegex)).map((match) => {
        const [_match, _short, long, arg, description] = match;
        return {
          name: long.replace(/\[.+\]/g, ""),
          description,
          args: { name: arg },
        };
      });

      return { name: "test", options };
    },
  },
  newCommand,
];

// Generator that searches asynchronously for more Rails commands through the help command
export const railsCommandsGenerator: Fig.Generator = {
  custom: async (_, executeShellCommand) => {
    // parse help text to find more commands
    let commands: Fig.Subcommand[] = [];
    try {
      const helpText = await executeShellCommand("rails --tasks");

      const defaultCommandNames = defaultCommands.map((c) => c.name);
      const matches = Array.from(helpText.matchAll(/rails ([^ ]+)/g));
      commands = matches
        .map((match) => ({ name: match[1] }))
        .filter((cmd) => !defaultCommandNames.includes(cmd.name));
    } catch (e) {
      console.log("ERROR", e);
    }

    return commands;
  },
  cache: {
    strategy: "stale-while-revalidate",
    ttl: 1000 * 60 * 60 * 24 * 3, // 3 days
    cacheByDirectory: true,
  },
};

const completionSpec: Fig.Spec = {
  name: "rails",
  description: "Ruby on Rails CLI",
  generateSpec: async (_, executeShellCommand) => {
    const isRailsDirectory = !!(await executeShellCommand(
      `until [[ -f Gemfile ]] || [[ $PWD = '/' ]]; do cd ..; done; if [ -f Gemfile ]; then cat Gemfile | \\grep "gem ['\\"]rails['\\"]"; fi`
    ));

    if (!isRailsDirectory) {
      return {
        name: "rails",
        subcommands: [newCommand],
      };
    }

    return {
      name: "rails",
      subcommands: defaultCommands,
      args: {
        generators: railsCommandsGenerator,
        isOptional: true,
      },
    };
  },
};

export default completionSpec;
