module.exports = {
  root: true,
  env: { node: true, es2022: true },
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  rules: {
    "no-restricted-imports": ["error", {
      "paths": [
        { "name": "@solana/web3.js", "message": "Not allowed in core. Keep core pure." },
        { "name": "axios", "message": "No network libs in core." },
        { "name": "node-fetch", "message": "No network libs in core." }
      ],
      "patterns": ["**/server/**", "**/db/**"]
    }]
  }
};
