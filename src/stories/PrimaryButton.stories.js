import PrimaryButton from "../components/PrimaryButton/PrimaryButton";

// First we need to tell it what component we are using
export default {
  // The title prop is optional.
  title: "Components/PrimaryButton",
  component: PrimaryButton,
  argTypes: {
    handleClick: {
      // this next handleClick is the label that we see when the btn is clicked
      action: "handleClick",
    },
  },
};

// template
const Template = (args) => <PrimaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Primary Button'
};
