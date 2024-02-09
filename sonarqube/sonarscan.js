import scanner from "sonarqube-scanner";

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "sqp_89111c1ce748bf1cebbfc79e55e5270d200d8c92",
        options: {
            'sonar.projectName': 'times-article',
            'sonar.projectDescription': 'Shows the most popular articles from NY Times.',
            'sonar.projectKey': 'times-article',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    () => process.exit()
)