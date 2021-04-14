export interface WidgetConfig {
    header: any;
    dataSource?: {
        serviceName: string;
        applicationName: string;
    }
}

// TODO: should be provided by @kaa/widget-sdk
export interface WidgetModuleContext<Configuration> {
    dashboardId: string;
    widgetId: string;
    configuration: Configuration;
}
