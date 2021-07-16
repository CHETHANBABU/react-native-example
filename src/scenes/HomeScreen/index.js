import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { List, Button, Card, CardHeader } from '@ui-kitten/components';

import * as axios from 'axios';
class HomeScreen extends React.Component {
    state = {
        appointments: [],
        isLoading: true,
        errors: null
    };

    constructor(props) {
        super(props);
    }

    async _getAppointments() {
        await axios.get('/appointment/user/12')
            .then(response => {
                this.setState({
                    appointments: response.bookings,
                    isLoading: false
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({ error, isLoading: false });
            });
    }


    componentDidMount() {
        this._getAppointments();
    }

    render() {
        const { isLoading, appointments } = this.state;
        return (
            <View style={isLoading ? styles.activityIndicatorContainer : 'none'}>
             <Button appearance='outline' status='info' onPress={() => _signOutAsync()}>Logout</Button>

                    {!isLoading ? (
                        <List data={appointments}
                            renderItem={renderItem} style={styles.container}/>
                    ) : (
                                <ActivityIndicator size="large" style={styles.progressBar} color="#EA0000" />
                        )}
            </View>
        );
    } 
}

const _signOutAsync = async () => {
    const { navigate } = useNavigation();
    await AsyncStorage.clear();
    navigate('Account');
}


const renderHeader = (item,index) => (
    <CardHeader title={`Appointment with ${item.slot.user.firstName}`}   />
);

const renderItem = ({ item, index }) => (
    <Card style={styles.card} header={() => renderHeader(item, index)} status={(item.status.statusName === 'Confirmed') ? 'success' : 'danger'} key={item.id}>
        <Text style={styles.text} category='c1'>{item.slot.startsAt}</Text>
        <Text style={styles.text} category='c2'>${item.practiceAppointmentType.customerFee}</Text>
        <Text style={styles.text} category='s1'>{item.slot.duration}</Text>
    </Card>
);

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    card: {
        marginVertical: 8,
    },
    activityIndicatorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },
    progressBar: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
    }
});

export default HomeScreen;