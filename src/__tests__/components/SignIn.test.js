import { fireEvent, render, screen, waitFor } from "@testing-library/react-native"
import SignInForm from "../../components/SignInForm"

describe('SignIn', () => {
    describe('SignInForm', () => {
        it('calls onSubmit function with correct arguments when a valid form is submited', async () => {
            const onSubmit = jest.fn();

            await render(<SignInForm onSubmit={onSubmit} />);

            const usernameInput = screen.getByPlaceholderText('Name');
            const passwordInput = screen.getByPlaceholderText('Password')
            
            await fireEvent.changeText(usernameInput, 'kalle');
            await fireEvent.changeText(passwordInput, 'password');

            await fireEvent.press(screen.getByText('Sign in'));

            await waitFor(() => {
                expect(onSubmit).toHaveBeenCalledTimes(1);

                expect(onSubmit.mock.calls[0][0]).toEqual({
                    username: 'kalle',
                    password: 'password'
                })
            })
        })
    })
})