import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Layout2 } from './components/Layout2';
import Test from './pages/Test.tsx';
import Login from './pages/Login';
import NewContact from './pages/NewContact';
import Contacts from './pages/Contacs';
import EnterHospitalRFID from './pages/EnterHospitalRFID';
import ExitHospital from './pages/ExitHospital';
import EnterCorporation from './pages/EnterCorporation';
import ExitCorporation from './pages/ExitCorporation.tsx';
import ConfirmReceiptByHospital from './pages/ConfirmReceiptByHospital';
import NewEqipment from './pages/NewEqipment';
import EditableHtmlTable from './pages/test/EditableHtmlTable';
import Test2 from './pages/test/Test2';

function App() {
  return (
    <Router>
      <Layout2>
        <Routes>
          <Route path="/">
            <Route index element={<Test />} />
            <Route path="login" element={<Login />} />
            <Route path="test" element={<Test />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="newContact" element={<NewContact />} />
            <Route path="exitHospital" element={<ExitHospital />} />
            <Route
              path="enterHospitalRFID"
              element={<EnterHospitalRFID />}
            />
            <Route
              path="enterCorporation"
              element={<EnterCorporation />}
            />
            <Route
              path="exitCorporation"
              element={<ExitCorporation />}
            />
            <Route
              path="confirmReceiptByHospital"
              element={<ConfirmReceiptByHospital />}
            />
            <Route path="newEqipment" element={<NewEqipment />} />
            <Route path="test1" element={<EditableHtmlTable />} />
            <Route path="test2" element={<Test2 />} />
          </Route>
        </Routes>
      </Layout2>
    </Router>
  );
}

export default App;
