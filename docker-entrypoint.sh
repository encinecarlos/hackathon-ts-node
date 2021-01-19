#!/usr/bin/env node
const exec = require("child_process").exec;
if (process.env.ENV === "dev") {
  exec("cd app && npm run dev", (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    }

    console.log(stdout);
  });
} else {
  exec("cd app && npm start", (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    }

    console.log(stdout);
  });
}
