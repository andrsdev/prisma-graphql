const types = [
  "build",
  "chore",
  "docs",
  "feat",
  "fix",
  "refactor",
  "revert",
  "test",
];

const scopes = ["core"];

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", types],
    "scope-enum": [2, "always", scopes],
  },
};
