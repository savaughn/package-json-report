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
        {{#depDetails}}
            <tr>
                <td><h3><a href="{{repository}}">{{name}}</a></h3></td>
                <td style="text-align: center; vertical-align: middle;">{{version}}</td>
                <td style="text-align: center; vertical-align: middle;">{{latestVersion}}</td>
                <td style="text-align: center; vertical-align: middle;">{{isLatestInstalled}}</td>
                <td>{{description}}</td>
            </tr>
        {{/depDetails}}
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
        {{#devDepDetails}}
            <tr>
                <td><h3><a href="{{repository}}">{{name}}</a></h3></td>
                <td style="text-align: center; vertical-align: middle;">{{version}}</td>
                <td style="text-align: center; vertical-align: middle;">{{latestVersion}}</td>
                <td style="text-align: center; vertical-align: middle;">{{isLatestInstalled}}</td>
                <td>{{description}}</td>
            </tr>
        {{/devDepDetails}}
    </tbody>
</table>
