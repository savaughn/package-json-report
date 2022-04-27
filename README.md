# package-version-report

Generate installed package version report from package.json contents

## Example Output
---

## Dependencies

<table>
    <thead>
        <tr>
            <th>Package Name</th>
            <th style="text-align: center; vertical-align: middle;">Installed Version</th>
            <th style="text-align: center; vertical-align: middle;">Latest Version</th>
            <th style="text-align: center; vertical-align: middle;">Is Latest Installed</th>
            <th>Package Description</th>
        </tr>
    </thead>
    <tbody>
            <tr>
                <td><h3><a href="https://ghub.io/github-url-to-object">github-url-to-object</a></h3></td>
                <td style="text-align: center; vertical-align: middle;">1.6.0</td>
                <td style="text-align: center; vertical-align: middle;">4.0.6</td>
                <td style="text-align: center; vertical-align: middle;">❌</td>
                <td>Extract user, repo, and other interesting properties from GitHub URLs</td>
            </tr>
            <tr>
                <td><h3><a href="https://ghub.io/hogan.js">hogan.js</a></h3></td>
                <td style="text-align: center; vertical-align: middle;">2.0.0</td>
                <td style="text-align: center; vertical-align: middle;">3.0.2</td>
                <td style="text-align: center; vertical-align: middle;">❌</td>
                <td>A mustache compiler.</td>
            </tr>
            <tr>
                <td><h3><a href="https://ghub.io/latest-version">latest-version</a></h3></td>
                <td style="text-align: center; vertical-align: middle;">6.0.0</td>
                <td style="text-align: center; vertical-align: middle;">6.0.0</td>
                <td style="text-align: center; vertical-align: middle;">✅ </td>
                <td>Get the latest version of an npm package</td>
            </tr>
            <tr>
                <td><h3><a href="https://ghub.io/strip-ansi">strip-ansi</a></h3></td>
                <td style="text-align: center; vertical-align: middle;">0.2.2</td>
                <td style="text-align: center; vertical-align: middle;">7.0.1</td>
                <td style="text-align: center; vertical-align: middle;">❌</td>
                <td>Strip ANSI escape codes</td>
            </tr>
            <tr>
                <td><h3><a href="https://ghub.io/yargs">yargs</a></h3></td>
                <td style="text-align: center; vertical-align: middle;">3.32.0</td>
                <td style="text-align: center; vertical-align: middle;">17.4.1</td>
                <td style="text-align: center; vertical-align: middle;">❌</td>
                <td>Light-weight option parsing with an argv hash. No optstrings attached.</td>
            </tr>
    </tbody>
</table>

## Dev Dependencies

<table>
    <thead>
        <tr>
            <th>Package Name</th>
            <th style="text-align: center; vertical-align: middle;">Installed Version</th>
            <th style="text-align: center; vertical-align: middle;">Latest Version</th>
            <th style="text-align: center; vertical-align: middle;">Is Latest Installed</th>
            <th>Package Description</th>
        </tr>
    </thead>
    <tbody>
            <tr>
                <td><h3><a href="https://ghub.io/mocha">mocha</a></h3></td>
                <td style="text-align: center; vertical-align: middle;">2.5.3</td>
                <td style="text-align: center; vertical-align: middle;">9.2.2</td>
                <td style="text-align: center; vertical-align: middle;">❌</td>
                <td>simple, flexible, fun test framework</td>
            </tr>
            <tr>
                <td><h3><a href="https://ghub.io/nixt">nixt</a></h3></td>
                <td style="text-align: center; vertical-align: middle;">0.3.0</td>
                <td style="text-align: center; vertical-align: middle;">0.5.1</td>
                <td style="text-align: center; vertical-align: middle;">❌</td>
                <td>Simple and powerful testing for command-line apps</td>
            </tr>
            <tr>
                <td><h3><a href="https://ghub.io/standard">standard</a></h3></td>
                <td style="text-align: center; vertical-align: middle;">8.6.0</td>
                <td style="text-align: center; vertical-align: middle;">17.0.0</td>
                <td style="text-align: center; vertical-align: middle;">❌</td>
                <td>JavaScript Standard Style</td>
            </tr>
            <tr>
                <td><h3><a href="https://ghub.io/semantic-release">semantic-release</a></h3></td>
                <td style="text-align: center; vertical-align: middle;">8.2.3</td>
                <td style="text-align: center; vertical-align: middle;">19.0.2</td>
                <td style="text-align: center; vertical-align: middle;">❌</td>
                <td>Automated semver compliant package publishing</td>
            </tr>
    </tbody>
</table>

<!-- ## Installation

This is a [Node.js](https://nodejs.org/) module available through the 
[npm registry](https://www.npmjs.com/). It can be installed using the 
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or 
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
npm install package-version-report --global
```

## Usage

```sh
# Write to stdout
readme package.json

# Pipe output into a new file
readme package.json > README.md

# Add a Travis badge
readme package.json --travis

# Run tests and add their output
readme package.json --tests

# Do it all
readme package.json --tests --travis > README.md

# If your package has an example.sh or example.js file, it will be used to
# generate a usage section like this one.

# If your example.js has a require("./") statement, the relative path will be
# replaced with the package name.

``` -->
## Usage

- `--report: Generates version report`
- `--template: Designates markdown template`
## Tests

```sh
npm install
npm test
```

## Dependencies

- [github-url-to-object](https://ghub.io/github-url-to-object): Extract user, repo, and other interesting properties from GitHub URLs
- [hogan.js](https://ghub.io/hogan.js): A mustache compiler.
- [latest-version](https://ghub.io/latest-version): Get the latest version of an npm package
- [strip-ansi](https://ghub.io/strip-ansi): Strip ANSI escape codes
- [yargs](https://ghub.io/yargs): Light-weight option parsing with an argv hash. No optstrings attached.

## Dev Dependencies

- [mocha](https://ghub.io/mocha): simple, flexible, fun test framework
- [nixt](https://ghub.io/nixt): Simple and powerful testing for command-line apps
- [standard](https://ghub.io/standard): JavaScript Standard Style
- [semantic-release](https://ghub.io/semantic-release): Automated semver compliant package publishing

## License

MIT
