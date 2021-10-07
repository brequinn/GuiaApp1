import React from 'react';
import { FirebaseAppProvider } from 'reactfire';
import { AppRoutes } from './AppRoutes';  
import { Loading } from './Loading';

const firebaseConfig = {
  apiKey: "AIzaSyCNjEmxNEcqTfytXFkogstdxxKP_rejONs",
  authDomain: "guiaapp-9c636.firebaseapp.com",
  projectId: "guiaapp-9c636",
  storageBucket: "guiaapp-9c636.appspot.com",
  messagingSenderId: "932046445247",
  appId: "1:932046445247:web:7c820a6d040f53ebc0c40a"
};

export function App() {
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <React.Suspense fallback={<Loading />}>
        <AppRoutes />
      </React.Suspense>
    </FirebaseAppProvider>
  );
}

export default App;