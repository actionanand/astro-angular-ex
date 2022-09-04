# Welcome to [Astro](https://astro.build)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![basics](https://user-images.githubusercontent.com/4677417/186188965-73453154-fdec-4d6b-9c34-cb35c248ae5b.png)


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `yarn install`          | Installs dependencies                              |
| `yarn run dev`          | Starts local dev server at `localhost:3000`        |
| `yarn run build`        | Build your production site to `./dist/`            |
| `yarn run preview`      | Preview your build locally, before deploying       |
| `yarn run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `yarn run astro --help` | Get help using the Astro CLI                       |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Creating a New Astro Project

- With npm:

```bash
npm init astro
```

- With yarn:

```bash
yarn create astro
```

- Follow the prompts, along with choosing Just the `basics` to start. Next, is adding the `@analogjs/astro-angular` integration.

- Use the `astro add` command to install the integration:

```bash
astro add @analogjs/astro-angular
```

- Setting up the TypeScript config

    - Create a `tsconfig.app.json` in the root of the project.

```json
{
  "extends": "./tsconfig.json",
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "noEmit": false,
    "target": "es2020",
    "module": "es2020",
    "lib": ["es2020", "dom"]
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  },
  "files": [],
  "include": ["src/**/*.ts"]
}
```

## Resources

- [Bringing Angular Components to Astro Islands](https://dev.to/brandontroberts/bringing-angular-components-to-astro-islands-52jp)
- [Astro - Client Directives](https://docs.astro.build/en/reference/directives-reference/#client-directives)
- [Analog - Angular](https://analogjs.org/)
- [Visit ViteConf to learn more about "Vite, Meta-frameworks, and Angular"](https://viteconf.org/)
