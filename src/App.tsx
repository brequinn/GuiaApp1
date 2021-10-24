import React from 'react';
import { FirebaseAppProvider, AuthProvider, useFirebaseApp } from 'reactfire';
import { AppRoutes } from './AppRoutes';  
import { getAuth } from 'firebase/auth';
import { Loading } from './Loading';
import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCNjEmxNEcqTfytXFkogstdxxKP_rejONs",
  authDomain: "guiaapp-9c636.firebaseapp.com",
  projectId: "guiaapp-9c636",
  storageBucket: "guiaapp-9c636.appspot.com",
  messagingSenderId: "932046445247",
  appId: "1:932046445247:web:7c820a6d040f53ebc0c40a"
};

firebase.initializeApp(firebaseConfig);

export function App() {
  if (typeof window === "undefined") {
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