import React, { Component } from 'react';
import { View } from 'react-native';
import { Layout, Input, Card, Button, Text, Icon } from '@ui-kitten/components';
import styles from './loginStyle';
import * as AuthService from '../../../utils/services/AuthService/signIn';
import * as axios from 'axios';
import * as CryptoEncDec from '../../../utils/helpers/crypto';

export default class LoginScreen extends Component {

    state = {
        email: '',
        password: '',
        secureTextEntry: true
    }

    constructor(props) {
        super(props);
    }

    pressRow() {
        const { navigate } = this.props.navigation;
        navigate('ForgottenPassword');
    }

    onIconPress = () => {
        this.setState({ secureTextEntry: !this.state.secureTextEntry })
    };

    renderEyeIcon = (style) => (
        <Icon {...style} name={this.state.secureTextEntry ? 'eye-off-outline' : 'eye-outline'} />
    );

    renderEmailIcon = (style) => (
        <Icon {...style} name='email-outline'/>
    )

    _SignInHandler() {
        const { navigate } = this.props.navigation;
        axios.post('auth/secret', { email: this.state.email })
            .then((res) => {
                const ePwd = CryptoEncDec.encryptPassword(this.state.password, res.secretSalt);
                if (ePwd.toString() === responseData.data) {
                    const authObj = {
                        email: this.state.email,
                        password: res.data,
                        isChecked: true
                    };
                    const authRes = AuthService.forSignIn(authObj, res.secretSalt);
                    if (!authRes.code) {
                        navigate('App');
                    }
                }
            });
    }

    render() {
        return (
            <Layout style={styles.container}>
                <Card style={styles.card}>
                    <Text style={styles.signInText} category='h5'>SignIn</Text>
                    <View style={styles.inputContainer}>
                        <Input
                            label='Email'
                            placeholder='john.doe@example.com'
                            icon={this.renderEmailIcon}
                            onChangeText={(email) => this.setState({ email })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Input
                            label='Password'
                            placeholder='********'
                            icon={this.renderEyeIcon}
                            secureTextEntry={this.state.secureTextEntry}
                            onIconPress={this.onIconPress}
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Button style={styles.button} appearance='outline' status='info' onChange={this.handleChange} onPress={() => this._SignInHandler()}>SignIn</Button>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.forgottenText} category='s1' status='info' onPress={() => this.pressRow()}>Forgotten Your Password?</Text>
                    </View>
                </Card>
            </Layout>
        );
    }
}

