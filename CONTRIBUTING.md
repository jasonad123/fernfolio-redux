# Contributing

Thanks for taking a look at Fernfolio Redux! This is a small side project, so the
process here is deliberately lightweight.

## Local setup

```
git clone https://github.com/jasonad123/fernfolio-redux.git
cd fernfolio-redux
pnpm install
pnpm start
```

See the [README](./README.md) for more on local development, the CMS, and deployment.

## Making changes

1. Fork the repo and create a branch off `main`.
2. Make your change. Run `pnpm build` locally and confirm it completes cleanly.
3. Open a pull request describing what changed and why.

## Reporting bugs or requesting features

Please open a [GitHub issue](https://github.com/jasonad123/fernfolio-redux/issues) using
one of the provided templates. Include enough detail to reproduce the problem (Node
version, steps, expected vs. actual behavior).

## Code style

There's no enforced linter yet — just try to match the formatting already used in the
file you're editing (2-space indentation, no semicolons omitted inconsistently, etc.).
An `.editorconfig` is included to keep basic whitespace/indentation consistent across
editors.
