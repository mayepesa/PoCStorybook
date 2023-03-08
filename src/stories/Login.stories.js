import Login from "../components/Login/Login";
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

// First we need to tell it what component we are using
export default {
  // The title prop is optional.
  title: "Components/Login",
  component: Login,
};

// template
const Template = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const FilledLogin = Template.bind({})
FilledLogin.play = async({ canvasElement }) => {
  const canvas = await within(canvasElement)
  await userEvent.type(canvas.getByTestId("login-email"), 'email@gmail.com')
  await userEvent.type(canvas.getByTestId('login-pass'), 'hello-everyone')
  await userEvent.hover(canvas.getByRole('button'))
  await userEvent.click(canvas.getByRole('button'));
  await userEvent.unhover(canvas.getByRole('button'))

  await expect(canvas.getByText(
    'Login successful'
  )).toBeInTheDocument()
}
