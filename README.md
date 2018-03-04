# React Redux Typescript Boilerplate

> Opinionated boilerplate reference codebase

## Setup

1.  Install dependencies

    ```
    yarn install
    ```

2.  Update common submodule

    ```
    git submodule update --init --recursive
    ```

3.  Setup environment file

    ```
    cp .env-example .env
    ```

    * Replace with your environment variables in .env

4.  Starting development server

    ```
    yarn dev:start
    ```

5.  [Setup API server](https://github.com/sudhirt4/express-api-boilerplate)

## Environment variables

* Variables declared in `.env` file will be available under global "ENV" variable.
  [example](https://github.com/sudhirt4/boilerplate-react-redux-typescript/blob/master/src/constants/env.ts#L2)

* Multiple environment:

  Passing environment `NODE_ENV=<example>` will force use of env file `.env.<example>` file

  example: `"NODE_ENV=staging yarn start:dev"` will use `.env.staging` file

## Code formatting

* Opinionated code formatter [prettier](https://prettier.io) is integrated
* [husky](https://github.com/typicode/husky) is intergated for git precommit hook
* Can manually be run using `yarn prettify`
