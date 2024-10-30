# CD / CD, Github Actions

## Video link:

https://youtu.be/3pWCkhj4bAA

yaml fájl:

```yaml
name: Node.js Package

on:
  push:
    branches: [dev]
  pull_request:
    branches: [dev]
jobs:
  test:
    name: Running JEST unit tests

    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version}}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version}}
      - name: Install test environment
        run: npm install
      - name: Run all Tests
        run: npm test
```
