import App from "./App";
import React from "react";
import { createRoot } from 'react-dom/client';
import configSchema from "./schemas/schema.json";
import uiSchema from "./schemas/uiSchema";
import { WidgetConfig } from "./types";
import { WidgetModuleContext } from "@kaaiot/services";

// Do some stuff before mounting
export const bootstrap = () => {};

export const mount = (
  nodeElement,
  context: WidgetModuleContext<WidgetConfig>
) => {
  const root = createRoot(nodeElement.rootNodeElement);
  root.render(<App widgetContext={context} />);
};

// Some teardown logic on unmount
export const unmount = () => {};

export const configurationSchema = () => {
  return {
    schema: configSchema,
    uiSchema,
  };
};
