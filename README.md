# React CV Filler

A small React app for filling out a CV/résumé. Each section is a form that turns into plain text when saved, and back into a pre-filled form when you click Edit.

Built as the "CV Application" project from [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-cv-application).

## Live demo

The app is deployed with [Netlify](https://www.netlify.com/): **https://very-basic-cv-filler.netlify.app/**

## Description

The app has three sections, each independent of the others:

| Section | Fields |
|---|---|
| General information | Name, family name, email, phone |
| Education | School, degree/field, start date, end date |
| Practical experience | Company, position, responsibilities, start date, end date |

Each section works the same way:

1. It starts as a form.
2. **Save** replaces the inputs with the entered values as plain text.
3. **Edit** brings the inputs back, pre-filled with what you entered, so you can change it and save again.

In Education and Practical experience, empty fields show `N/A` once saved.

## Quick start

The repo contains the app's source files but no `package.json` or `index.html`, so run it inside a fresh [Vite](https://vite.dev/) React project:

```bash
git clone https://github.com/houssemeddinegraja/React-CV-Filler.git
npm create vite@latest cv-filler -- --template react
cd cv-filler
npm install

# copy the app files into the new project
cp ../React-CV-Filler/CV-App/src/CVApp.jsx ../React-CV-Filler/CV-App/src/main.jsx src/
cp -r ../React-CV-Filler/CV-App/components ../React-CV-Filler/CV-App/styles .

npm run dev
```

Open the local URL that Vite prints (usually `http://localhost:5173`).

On Windows, if `cp` isn't available in your shell, copy the files manually. The final layout must be:

```
cv-filler/
├── components/     ← from CV-App/components
├── styles/         ← from CV-App/styles
└── src/
    ├── CVApp.jsx   ← from CV-App/src
    └── main.jsx    ← from CV-App/src (replaces the template's main.jsx)
```

`CVApp.jsx` imports from `../components` and `../styles`, so those two folders must sit next to `src/`, not inside it.

## Technologies used

- **React**: function components and the `useState` hook
- **react-dom**: `createRoot` rendering with `React.StrictMode`
- **Plain CSS**: a single stylesheet, `styles/CVApp.css`
- **Vite**: recommended dev server and bundler (the repo itself doesn't include a Vite config)
- **Netlify**: hosting for the live demo

## How it works

`CVApp` renders a `Header` and the three section components in order. Each section owns two pieces of state:

- **The field values**: one object per section, for example `{ school, degree, startDate, endDate }` in Education.
- **`isEditing`**: a boolean that decides whether the section renders its form (`true`) or its saved values (`false`).

Every input is controlled: its `value` comes from state, and its `onChange` updates the state object by spreading the previous values and replacing the changed field:

```jsx
onChange={(e) => setEducation({ ...education, school: e.target.value })}
```

Because the saved text and the form both read from the same state object, the Edit button shows the previous values again without any extra code.

## Project structure

```
CV-App/
├── components/
│   ├── header.jsx      # App title and subtitle
│   ├── general.jsx     # General information section
│   ├── education.jsx   # Education section
│   └── practical.jsx   # Practical experience section
├── src/
│   ├── main.jsx        # Entry point: mounts <CVApp /> into #root
│   └── CVApp.jsx       # Root component: header + the three sections
└── styles/
    └── CVApp.css       # Layout, form and button styles
```

## Limitations

- Data lives only in component state, so refreshing the page clears everything.
- Each section is saved independently; there is no single submit or export step.
- There is no input validation beyond the browser's built-in `email` and `tel` input types.
