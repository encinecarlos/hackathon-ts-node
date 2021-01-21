#!/usr/bin/env node
const exec = require("child_process").exec;
if (process.env.ENV === "dev") {
  exec("npm run dev", (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    }

    console.log(stdout);
  });
} else {
  exec("npm start", (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    }

    console.log(stdout);
  });
}