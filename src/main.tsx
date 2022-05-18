import * as React from 'react';
import { render } from 'react-dom';
import {Hello} from 'hello';

export const index = (async () => {
  try {
    render(
      (
        <div>
          <div>Hello from the host</div>
          <Hello></Hello>
        </div>
      ),
      document.getElementById('root'),
    );
  } catch (e) {
    console.log(e);
    render(
      <h1>Error loading application</h1>,
      document.getElementById('root'),
    );
  }
})();
