import React from 'react';
import { FirebaseAppProvider, AuthProvider, useFirebaseApp } from 'reactfire';
import { AppRoutes } from './AppRoutes';  
import { getAuth } from 'firebase/auth';
import { Loading } from './Loading';
import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNjEmxNEcqTfytXFkogstdxxKP_rejONs",
  authDomain: "guiaapp-9c636.firebaseapp.com",
  projectId: "guiaapp-9c636",
  storageBucket: "guiaapp-9c636.appspot.com",
  messagingSenderId: "932046445247",
  appId: "1:932046445247:web:7c820a6d040f53ebc0c40a"
};

export function App() {
  firebase.initializeApp(firebaseConfig);
  const app = useFirebaseApp();
  const auth = getAuth(app);

  if (typeof window === "undefined") {
    return null;
  }
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
   <AuthProvider sdk={auth}>
    
      
      <React.Suspense fallback={<Loading />}>
        <AppRoutes />
      </React.Suspense>

    </AuthProvider>
    </FirebaseAppProvider>
  );
}

export default App;