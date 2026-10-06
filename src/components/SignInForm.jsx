import { Formik } from "formik";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#586069",
    padding: 10,
    marginBottom: 15,
    borderRadius: 4,
  },
  inputError: {
    borderColor: "#d73a4a",
  },
  errorText: {
    color: "#d73a4a",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#0366d6",
    padding: 15,
    borderRadius: 4,
    alignItems: "center",
  },
  butonText: {
    color: "white",
    fontWeight: "bold",
  },
});

const SignInForm = ({ onSubmit }) => {
  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "username is required";
    }

    if (!values.password) {
      errors.password = "password is required";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={onSubmit}
      validate={validate}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            style={[
              styles.input,
              touched.username &&
                errors.username &&
                styles.inputError,
            ]}
            placeholder="Name"
            value={values.username}
            onChangeText={handleChange("username")}
          />

          {touched.username && errors.username && (
            <Text style={styles.errorText}>
              {errors.username}
            </Text>
          )}

          <TextInput
            style={[
              styles.input,
              touched.password &&
                errors.password &&
                styles.inputError,
            ]}
            placeholder="Password"
            value={values.password}
            onChangeText={handleChange("password")}
            secureTextEntry
          />

          {touched.password && errors.password && (
            <Text style={styles.errorText}>
              {errors.password}
            </Text>
          )}

          <Pressable
            style={styles.button}
            onPress={handleSubmit}
          >
            <Text style={styles.butonText}>
              Sign in
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default SignInForm