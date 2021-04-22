export default {
  dataSource: {
    "ui:collapsed": false,
    applicationName: {
      "ui:options": {
        transformation: {
          dataset: {
            appName: {
              name: "applications",
              sourceName: "applications",
            },
          },
          select: {
            applicationNames: {
              type: "JSONPath",
              value: "$.applications.*.name",
            },
            applicationDisplayNames: {
              type: "JSONPath",
              value: "$.applications.*.displayName",
            },
          },
          updates: [
            {
              attribute: "enum",
              value: "${applicationNames}",
            },
            {
              attribute: "enumNames",
              value: "${applicationDisplayNames}",
            },
          ],
        },
      },
    },
  },
};
