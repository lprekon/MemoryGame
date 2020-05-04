import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App, { numSpaces } from 'components/App';
import { generateAnswers } from 'utils.js';

export async function serverRenderer() {
  const initialData = generateAnswers(numSpaces);

  const pageData = {
    title: `Hello ${initialData}`,
  };

  return Promise.resolve({
    initialData,
    initialMarkup: ReactDOMServer.renderToString(
      <App initialData={initialData} />
    ),
    pageData,
  });
}
