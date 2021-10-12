import React from 'react';
import { Typography, Divider, Button, Space } from 'antd';
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import { useAuth } from 'reactfire';
import "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.addScope('profile');
googleProvider.addScope('email');

export function Login() {
  const auth = useAuth();
  const user = firebase.auth().currentUser;
  const db = firebase.firestore();

  function googleLogin() {
    // auth.signInWithRedirect(googleProvider);
  }

  return (
    <Hero>
      <Typography.Title style={{ margin: 0 }}>Guia</Typography.Title>
      <Divider />
      <Typography.Title level={2}>Portal de maestros</Typography.Title>
      <div>
        <div>
          <Typography.Title level={4}>Inicia con:</Typography.Title>
        </div>
        <Space>
          <Button icon={<FacebookOutlined />} >
            Facebook
          </Button>
          <Button icon={<GoogleOutlined />} onClick={googleLogin}>
            Google
          </Button>
        </Space>
      </div>
    </Hero>
  );
}

function Hero({ children }: { children: React.ReactNode }) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            maxWidth: 800,
            margin: 32,
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {children}
        </div>
      </div>
    );
  }