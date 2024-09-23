**classnames3** • [**Docs**](globals.md)

***

# **classnames3** • [**Documentation**](https://github.com/idimetrix/classnames3/blob/main/docs/classes/ProDate.md)

A utility for conditionally joining classNames together.
Handles various argument types: string, object, arrays, etc.

## Installation

You can install the package using **npm**, **yarn**, or **pnpm**.

```bash
pnpm add classnames3

yarn install classnames3

npm install classnames3
```

## Usage

```tsx
import cn from "classnames3";

cn("foo", "bar"); // => 'foo bar'
cn("foo", { bar: true }); // => 'foo bar'
cn({ "foo-bar": true }); // => 'foo-bar'
cn({ "foo-bar": false }); // => ''
cn({ foo: true }, { bar: true }); // => 'foo bar'
cn({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
cn("foo", { bar: true, duck: false }, "baz", { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
cn(null, false, "bar", undefined, 0, 1, { baz: null }, ""); // => 'bar 1'
```

## tsup

Bundle your TypeScript library with no config, powered by esbuild.

https://tsup.egoist.dev/

## How to use this

1. install dependencies

```
# pnpm
$ pnpm install

# yarn
$ yarn install

# npm
$ npm install
```

2. Add your code to `src`
3. Add export statement to `src/index.ts`
4. Test build command to build `src`.
   Once the command works properly, you will see `dist` folder.

```zsh
# pnpm
$ pnpm run build

# yarn
$ yarn run build

# npm
$ npm run build
```

5. Publish your package

```zsh
$ npm publish
```

## test package

https://www.npmjs.com/package/classnames3
