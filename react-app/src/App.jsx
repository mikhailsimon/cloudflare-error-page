import React, { useState } from 'react';
import ErrorPage from './components/ErrorPage';

const defaultParams = {
  title: 'Internal server error',
  error_code: 500,
  browser_status: { status: 'ok', status_text: 'Working' },
  cloudflare_status: { status: 'error', status_text: 'Error' },
  host_status: { status: 'ok', status_text: 'Working' },
  error_source: 'cloudflare',
  what_happened: '<p>There is an internal server error on Cloudflare\'s network.</p>',
  what_can_i_do: '<p>Please try again in a few minutes.</p>',
};

const catastrophicParams = {
  title: 'Catastrophic infrastructure failure',
  error_code: 503,
  more_information: {
    text: "cloudflare.com",
    link: "https://youtube.com/watch?v=dQw4w9WgXcQ",
  },
  browser_status: { status: 'error', status_text: 'Out of Memory' },
  cloudflare_status: { status: 'error', location: 'Everywhere', status_text: 'Not Working' },
  host_status: { status: 'error', location: 'example.com', status_text: 'On Fire' },
  error_source: 'cloudflare',
  what_happened: '<p>There is a catastrophic failure.</p>',
  what_can_i_do: '<p>Please try again in a few years.</p>',
  perf_sec_by: {
    text: "Cloudflare",
    link: "https://youtube.com/watch?v=dQw4w9WgXcQ",
  },
};

const workingParams = {
  title: 'Web server is working',
  error_code: 200,
  more_information: { hidden: true },
  browser_status: { status: 'ok', status_text: 'Seems Working' },
  cloudflare_status: { status: 'ok', status_text: 'Often Working' },
  host_status: { status: 'ok', location: 'example.com', status_text: 'Just Working' },
  error_source: 'host',
  what_happened: '<p>This site is still working. And it looks great.</p>',
  what_can_i_do: '<p>Visit the site before it crashes someday.</p>',
};

import './styles/demo.css';

function App() {
  const [params, setParams] = useState(defaultParams);

  return (
    <div>
      <div className="demo-controller-trigger"></div>
      <div className="demo-controller">
        <span>Select Scenario:</span>
        <button onClick={() => setParams(defaultParams)}>Default (500)</button>
        <button onClick={() => setParams(catastrophicParams)}>Catastrophic</button>
        <button onClick={() => setParams(workingParams)}>Working (200)</button>
      </div>

      <div>
        <ErrorPage params={params} />
      </div>
    </div>
  );
}

export default App;
