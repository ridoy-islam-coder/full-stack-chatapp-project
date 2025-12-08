import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  const clientId = '23601987612-4e3n9lf08s8hnh0o9m8ag8n22f82u2ki.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
