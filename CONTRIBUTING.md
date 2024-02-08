# Contributing

PRs for issues are welcome. Before pushing the code, make sure that
linting and tests pass.

The publishing process is manual right now, so the current workflow is:

- Merge to main
- Checkout to main
- run npm run patch | minor | major - this will update the changelog,
  bump the package.json and create the release tag
- run npm publish (maybe 2fa will be asked here)
