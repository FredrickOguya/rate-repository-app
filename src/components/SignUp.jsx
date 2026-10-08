import { useMutation } from '@apollo/client/react'
import { Formik } from 'formik'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import * as yup from 'yup'
import { CREATE_USER } from '../graphql/mutations'
import { useNavigate } from 'react-router-native'

const styles = StyleSheet.create({
container: {
        padding: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#695859',
        padding: 10,
        marginBottom: 15,
        borderRadius: 4,
    },
    inputError: {
        borderColor: "#d73a4a"
    },
    errorText: {
        color: '#d73a4a',
        marginBottom: 10,
    },
})

const validationSchema = yup.object({
    username: yup
        .string()
        .required('Username is required')
        .min(5, 'username must be at least 5 characters')
        .max(30, 'username length must be at most 30 characters'),
    password: yup
        .string()
        .required('password is required')
        .min(5, 'Password must be at least 5 characters')
        .max(50, 'password length must be at most 50 characters'),
    passwordConfirmation: yup
        .string()
        .required('Password confirmation is required')
        .oneOf([yup.ref('password')], 'passwords must match')
})

const SignUp = () => {
    const navigate = useNavigate()
    const [createUser] = useMutation(CREATE_USER)

    const onSubmit = async (values) => {
        await createUser({
            variables: {
                user: {
                    username: values.username,
                    password: values.password
                }
            }
        })
        navigate('/signin')
    }
    return (
        <Formik
            initialValues={{
                username: '',
                password: '',
                passwordConfirmation: '',
            }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
                {({ handleChange, handleSubmit, values, errors }) => (
                    <View style={styles.container}>
                        <TextInput
                            style={styles.input}
                            placeholder="username"
                            value={values.username}
                            onChangeText={handleChange('username')}
                        />
                        {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
                        <TextInput
                            secureTextEntry
                            style={styles.input}
                            placeholder="password"
                            value={values.password}
                            onChangeText={handleChange('password')}
                        />
                        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
                        <TextInput
                            secureTextEntry
                            style={styles.input}
                            placeholder="confirm password"
                            value={values.passwordConfirmation}
                            onChangeText={handleChange('passwordConfirmation')}
                        />
                        {errors.passwordConfirmation && <Text style={styles.errorText}>{errors.passwordConfirmation}</Text>}
            

                        <Button title="Create account" onPress={handleSubmit} />
                    </View>
                )}
        </Formik>
    )
}

export default SignUp;