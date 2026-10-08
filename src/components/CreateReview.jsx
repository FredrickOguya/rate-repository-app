import { useMutation } from "@apollo/client/react";
import { Formik } from "formik";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import * as yup from 'yup';
import { CREATE_REVIEW } from "../graphql/mutations";
import { useNavigate } from "react-router-native";


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
    ownerName: yup
        .string()
        .required('Repository owner name is required'),
    repositoryName: yup
        .string()
        .required('repository name is required'),
    rating: yup
        .number()
        .typeError('Rating must be a number')
        .required('rating is required')
        .min(0, 'Rating must be at least 0')
        .max(100, 'Rating must be at most 100'),
    review: yup
        .string()
})

const CreateReview= () => {

    const navigate = useNavigate()

    const [ createReview ] = useMutation(CREATE_REVIEW);

    const onSubmit = async (values) => {
       const result = await createReview({
        variables: {
            review: {
                repositoryName: values.repositoryName,
                ownerName: values.ownerName,
                rating: Number(values.rating),
                text: values.review
            }
        }
       });

       const repositoryId = result.data.createReview.repositoryId;
       navigate(`/repositories/${repositoryId}`)
    }
   return ( <Formik
    initialValues={ {
        ownerName: '',
        repositoryName: '',
        rating: '',
        review: '',
    }}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
>
    {({ handleChange, handleSubmit, values, errors }) => (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Repository owner name"
                value={values.ownerName}
                onChangeText={handleChange('ownerName')}
            />
            {errors.ownerName && <Text style={styles.errorText}>{errors.ownerName}</Text>}
                        <TextInput
                style={styles.input}
                placeholder="Repository name"
                value={values.repositoryName}
                onChangeText={handleChange('repositoryName')}
            />
            {errors.repositoryName && <Text style={styles.errorText}>{errors.repositoryName}</Text>}
            <TextInput
                style={styles.input}
                placeholder="Rating between 0 and 100"
                value={values.rating}
                onChangeText={handleChange('rating')}
            />
            {errors.rating && <Text style={styles.errorText}>{errors.rating}</Text>}

            <TextInput
                multiline
                style={styles.input}
                placeholder="Review"
                value={values.review}
                onChangeText={handleChange('review')}
            />
            <Button title="Create review" onPress={handleSubmit} />
        </View>
    )}
</Formik>
   )
}

export default CreateReview