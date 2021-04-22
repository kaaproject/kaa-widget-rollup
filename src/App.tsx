import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { WidgetConfig } from "./types";
import { createEPRClient, WidgetModuleContext } from "@kaaiot/services";

type Props = {
  widgetContext: WidgetModuleContext<WidgetConfig>;
};

const App: React.FC<Props> = (props) => {
  const {
    widgetContext: { configuration },
  } = props;
  const eprClient = useRef(createEPRClient("/epr"));
  const [endpoints, setEndpoints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    eprClient.current
      .getEndpoints({
        applicationName:
          configuration.dataSource && configuration.dataSource.applicationName,
      })
      .then((r) => {
        setEndpoints(r.data.content);
        setLoading(false);
      });
  }, []);

  return (
    <div className="root">
      <table>
        <thead>
          <tr>
            <th>Endpoint ID</th>
            <th>Application version</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          {!loading &&
            endpoints &&
            endpoints.map((el) => (
              <tr key={el.endpointId}>
                <td>{el.endpointId}</td>
                <td>{el.appVersion.name}</td>
                <td>{el.createdDate}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {loading && <div className="spinner"></div>}
    </div>
  );
};

export default App;
