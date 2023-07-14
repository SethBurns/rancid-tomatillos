// ErrorPage.js //

import './ErrorPage.css';

function ErrorPage(error) {
  return (
    <div className="error-container">
      <h1>{error}</h1>
    </div>
  )
};