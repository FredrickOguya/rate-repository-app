import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
    constructor(namespace = 'auth') {
        this.namespace = namespace;
    }

    getAccessToken() {
        return AsyncStorage.getItem(`${this.namespace}`)
    }

    setAccessToken() {
        return AsyncStorage.setItem(`${this.namespace}`)
    }

    removeAccessToken() {
        return AsyncStorage.removeItem(`${this.namespace}`)
    }
}

export default AuthStorage;