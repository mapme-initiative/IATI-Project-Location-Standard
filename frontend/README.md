# Open Geodata Model Validator
This is a simple website which validates if an excel/geodata-file is valid according to the Open Geodata Model.

In case you're more interested in the Open Geodata Model specification you'll find it [here](https://github.com/openkfw/open-geodata-model)

The Validator - Tool itself can be accessed [here](https://mapme-initiative.github.io/ogm-validator/)

### This project is built with [Vite](https://vitejs.dev/) and React using TypeScript. Below are instructions to run and manage the project locally.

---

### Prerequisites

* **Node.js** (version 14 or higher)
* **npm** (version 6 or higher) or **yarn**

Ensure you have Node.js and npm installed:

```bash
node -v
npm -v
```

---

### Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/mapme-initiative/ogm-validator;
cd ogm-validator;
```



2. **Install dependencies**

```bash
npm install
# or using yarn
yarn install
````

---

### Running Locally

To start the development server and begin working on the project:

```bash
npm run dev
```

This will:

* Launch Vite in development mode.
* Enable hot module replacement (HMR).
* Serve the app on `http://localhost:5173/` by default.

You should see output similar to:

```
  vite vX.X.X dev server running at:
  > Local:    http://localhost:5173/
  > Network:  use --host to expose
```

Open your browser and navigate to `http://localhost:5173/` to view the app.

---

### Linting

To ensure code quality and consistency, run:

```bash
npm run lint
```

This will use ESLint to analyze all `.ts` and `.tsx` files and enforce rules, reporting any unused disable directives and failing if there are any warnings or errors.

---

### Configuration

* **Vite config:** `vite.config.ts` contains project-specific Vite configurations (e.g., path aliases, plugins).
* **TypeScript config:** `tsconfig.json` sets up TypeScript compilation options.
* **ESLint config:** `.eslintrc.*` contains linting rules and settings.

---

### Troubleshooting

* If you encounter port conflicts, you can specify a different port:

  ```bash
  vite --port 3000 --mode development
  ```

* Clear Vite cache:

  ```bash
  rm -rf node_modules/.vite
  ```

* For detailed error stacks, enable debug logging:

  ```bash
  DEBUG=vite:* npm run dev
  ```

---

### Contributing

Feel free to open issues or submit pull requests. Please follow the existing coding conventions and ensure all lint checks pass.

---


