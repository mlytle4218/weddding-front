
import Cookies from 'js-cookie';
import axios from 'axios';
import jwt_decode from 'jwt-decode';



// const tokenExpiration = (20* 60 * 1000)

class AuthUser {

    login(loginCode, loginPassword, cb) {
        axios
            .post(
                "/api/user/signIn",
                {
                    email: loginCode,
                    password: loginPassword
                },
                // causes cors on dev
                // { withCredentials: true },
                { 'Access-Control-Allow-Credentials': true }
            )
            .then(response => {
                let token_json = jwt_decode(response.data.token)
                let tokenExpiration = token_json.exp - token_json.iat
                let d = new Date();
                d.setTime(d.getTime() + tokenExpiration);
                Cookies.set('adminToken', response.data.token, { expires: d, path: '/' });
                Cookies.set('invId', response.data.id, { expires: d, path: '/' });
                cb(response.data.result)
            })
            .catch(error => {
                if (error.response) {console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                     console.log('Error', error.message);
                }
                console.log(error.config);
            });
    }

    logout(cb) {
        let result = false
        try {
            Cookies.remove('invToken')
            Cookies.remove('invCode')
            this.authenticated = false;
            result = true
        } catch (error) {
            console.log(error)
        }
        cb(result);
    }
    isAuth() {
        let token = Cookies.get('adminToken')
        if (token){
            return token
        }
        return false
    }
}

export default new AuthUser();