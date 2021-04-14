import React, { useEffect, useRef, useState } from 'react';
import styles from './App.css';
import { WidgetConfig, WidgetModuleContext } from './types';
import { createEPRClient } from '@kaaiot/services';

type Props = {
	widgetContext: WidgetModuleContext<WidgetConfig>;
};

const App: React.FC<Props> = (props) => {
	const {
		widgetContext: { configuration },
	} = props;
	const eprClient = useRef(createEPRClient('/epr'));
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
		<div className={styles.root}>
			<table>
				<tr>
					<th>Endpoint ID</th>
					<th>Application version</th>
					<th>Created Date</th>
				</tr>
				{!loading &&
					endpoints &&
					endpoints.map((el) => (
						<tr>
							<td>{el.endpointId}</td>
							<td>{el.appVersion.name}</td>
							<td>{el.createdDate}</td>
						</tr>
					))}
			</table>
			{loading && <div className={styles.spinner}></div>}
		</div>
	);
};

export default App;
