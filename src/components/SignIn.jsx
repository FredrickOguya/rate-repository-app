import { Pressable, TextInput, View, StyleSheet } from "react-native";
import Text from "./Text"
import { Formik } from "formik";

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    input: {
        borderWidth: 1,
        borderColor: '#586069',
        padding: 10,
        marginBottom: 15,
        borderRadius: 4,
    },
    button: {
        backgroundColor: '#0366d6',
        padding: 15,
        borderRadius: 4,
        alignItems: 'center'
    },
    butonText: {
        color: 'white',
        fontWeight: 'bold'
    }
})
const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values)
    }
    return (
        <Formik
            initialValues={{
                username: '',
                password: '',
            }}
            onSubmit={onSubmit}
        >
            {({ handleChange, handleSubmit, values }) => (
                    <View style={styles.container}>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            value={values.username}
                            onChangeText={handleChange('username')}
                        />
                        <TextInput
                         style={styles.input}
                         placeholder="Password"
                         value={values.password}
                         onChangeText={handleChange('password')}
                         secureTextEntry
                        />

                        <Pressable
                            style={styles.button}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.butonText}>
                                Sign in
                            </Text>
                        </Pressable>
                    </View>
                )
            }
             
        </Formik>
        
    )
};

export default SignIn;