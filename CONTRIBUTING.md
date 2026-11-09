# Contributing to snowfall

First off, thank you for considering contributing to `snowfall`! It's people like you that make open-source such a great community to learn, inspire, and create.

## Where do I go from here?

If you've noticed a bug or have a feature request, please make sure to check the [Issues](../../issues) tab to see if someone else has already created a ticket. If not, go ahead and create one!

## Setting up for local development

To contribute code, you can set up the project locally:

1. **Fork the repository** to your own GitHub account.
2. **Clone the project** to your machine:
   ```bash
   git clone [https://github.com/sabtain05/snowfall.git](https://github.com/sabtain05/snowfall.git)
   cd snowfall

```

3. **Create a new branch** for your feature or bug fix:
```bash
git checkout -b feature/your-feature-name

```


*(or `bugfix/your-bug-fix-name`)*
4. **Make your changes** to the `index.js` file.
*Note: Try to keep the logic in vanilla JavaScript and maintain the zero-dependency, plug-and-play nature of the package.*
5. **Test your changes locally** by linking or using it in a basic `index.html` file to ensure the snowfall renders correctly without blocking user interactions.

## Submitting a Pull Request

1. Commit your changes with a clear and descriptive commit message.
```bash
git commit -m "Add wind direction configuration"

```


2. Push your branch to your forked repository:
```bash
git push origin feature/your-feature-name

```


3. Open a Pull Request (PR) from your fork to the `main` branch of the original repository.
4. Describe your changes in the PR description, referencing any related issues.

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
