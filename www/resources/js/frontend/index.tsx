// @NOTE: NOTE: Import library components.
import ReactDOM from 'react-dom';

// @NOTE: Import custom components.
import App from '@frontend/components';

// @NOTE: Import misc.
import 'bootstrap';
import '/css/app.css';

// @NOTE: App starts here.
const root = document.getElementById('resume');
if (root) {
    ReactDOM.render(<App />, root);
}
