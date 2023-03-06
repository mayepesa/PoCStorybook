import Login from "../components/Login";

// First we need to tell it what component we are using
export default {
  // The title prop is optional.
  title: "Components/Login",
  component: Login,
  argTypes: {
    handleClick: {
      // this next handleClick is the label that we see when the btn is clicked
      action: "handleClick",
    },
  },
};

// template
const Template = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {
};
