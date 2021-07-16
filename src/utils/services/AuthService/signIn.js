import * as axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

/**
  * respose with message, status, data
  * @param loginObj as request (emailId, password)
  */
export function forSignIn(authObj, saltValue) {
    return axios.post(`auth/signin?q=${saltValue}`, authObj)
        .then((res) => {
            // set localstorages
            AsyncStorage.setItem('accessToken', res.token);
            AsyncStorage.setItem('result', JSON.stringify(res.eRsul));
            return res;
        });
}