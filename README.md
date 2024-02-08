# rimraf-glob-inconsistency-showcase

This is a pure inconsistency showcasing repository for the all famous "rimraf" npm package

The inconsistency revolves around the handling of glob patterns when used within the rimraf CLI command. On mac, the behavior of rimraf differs from expectations when deleting files using glob patterns without the `--glob` flag.

### Usage

1. Clone this repository locally.
2. Navigate to the repository directory.
2. Install dependencies using `npm ci`.
4. Execute the testing scripts using `npm test` and `npm run test:fixed`.
5. Observe and compare the results to identify the inconsistency.

#### Behavior on windows

The command `test` will fail because `--glob` is not set.

#### Behavior on mac

The command `test` will not fail with the glob pattern even though `--glob` is not set.