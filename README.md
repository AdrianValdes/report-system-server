<h1 align="center">Welcome to report-system-server 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> A mini-server for the spam protection team with lowdb

Comments on the server implementation:

1. I decided to use a simple data base like lowdb because I thought using something like MongoDB would have been and overkill for the required task.

2. I used a single error handler for all the errors for the same reason, the tasks are simple and straight forward and I thought it was not strictly necessary in this case to make a separated controller to handle individual errors. I would improve this first in case was needed.

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Author

👤 **Adrian Valdes**

- Github: [@AdrianValdes](https://github.com/AdrianValdes)
