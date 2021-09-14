# Documentation

1. [Introduction](#introduction)
2. [Commands](#commands)
   1. Npm
   2. Makefile
3. [Naming conventions](#naming-conventions)
   1. Migrations
4. [Features](#features)
5. [References](#references)
   1. Projects

## Introduction

Resume generator prototype - simple prototype for future, actual resume generator. It contains
only necessary functionality, such as PDF resume generation.

## Commands

### NPM

| Command | Description                                                                                                                                                                                                                                                                                                                                 |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| jsdoc   | Generate JSDoc documentation for the whole project. It generates api folder with HTML files that describe API.                                                                                                                                                                                                                              |
| gr-cli  | Should be used as much as possible to create components or pages. It takes templates defined in [templates folder](resources/ts/templates) and generates component with the given name. Example usage: `npm run gr-cli -- layout/Home --type=component` - this will generate Home folder and inside will be index.tsx file (from template). |

### Makefile

Run `make help` to view description of each command defined in Makefile.

## Naming conventions

Note if there's no suitable naming convetion listed in this document, you can create your own and list it here.

### Migrations

Migrations should have one of the following name patterns:

- `create_{table_name}_table` - when creating new, {table_name}, table;
- `add_{column_name}_column_to{table_name}_table` - when adding {column_name} column to {table_name}, table;
- `remove_{column_name}_column_to{table_name}_table` - when removing {column_name} column to {table_name}, table;

## Features

- (Essential) Generate files in PDF, LateX and JSON formats.
- (Essential) Save resumes in database.

## References

### Projects

- [resumake](https://github.com/saadq/resumake.io)
- [jsonresume](https://jsonresume.org/)
