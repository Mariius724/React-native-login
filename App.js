import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  Dimensions, Alert, Platform, KeyboardAvoidingView, Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const screen = Dimensions.get('window');
const isTablet = screen.width > 600;

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    Alert.alert("Welcome 🎉", `Welcome back, ${email || 'User'}!`);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        {/* Welcome Panel */}
        <LinearGradient
          colors={['#7F00FF', '#E100FF']}
          style={isTablet ? styles.leftPanel : styles.topPanel}
        >
          <Text style={styles.welcomeText}>Welcome{"\n"}Back!</Text>
        </LinearGradient>

        {/* Login Form */}
        <View style={styles.rightPanel}>
          <Text style={styles.loginTitle}>Login</Text>
          <Text style={styles.loginSubTitle}>Welcome back! Please login to your account.</Text>

          <TextInput
            placeholder="Email"
            placeholderTextColor="#999"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <View style={styles.passwordWrapper}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#999"
              style={styles.passwordInput}
              secureTextEntry={secure}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              <Ionicons name={secure ? 'eye-off' : 'eye'} size={22} color="#888" />
            </TouchableOpacity>
          </View>

          {/* Remember Me + Forgot */}
          <View style={styles.row}>
            <TouchableOpacity onPress={() => setRemember(!remember)} style={styles.checkboxRow}>
              <Ionicons
                name={remember ? 'checkbox' : 'square-outline'}
                size={20}
                color="#7F00FF"
              />
              <Text style={styles.checkboxLabel}>Remember Me</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <Text style={styles.signup}>New User? <Text style={{ color: '#7F00FF' }}>Signup</Text></Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const basePadding = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: isTablet ? 'row' : 'column',
    backgroundColor: '#fff',
  },
  leftPanel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: basePadding,
  },
  topPanel: {
    width: '100%',
    paddingVertical: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 34,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rightPanel: {
    flex: 1.5,
    padding: basePadding + 10,
    justifyContent: 'center',
  },
  loginTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#111',
  },
  loginSubTitle: {
    color: '#888',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f4f4f4',
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
  },
  passwordWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: 8,
    paddingHorizontal: 14,
    marginBottom: 16,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    color: '#444',
  },
  forgot: {
    color: '#7F00FF',
  },
  loginBtn: {
    backgroundColor: '#7F00FF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  loginText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  signup: {
    textAlign: 'center',
    color: '#777',
  },
});

export default LoginScreen;
