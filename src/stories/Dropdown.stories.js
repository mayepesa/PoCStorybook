import Dropdown from "../components/Dropdown";

// First we need to tell it what component we are using
export default {
  // The title prop is optional.
  title: "Components/Dropdown",
  component: Dropdown,
};

// template
const Template = (args) => <Dropdown {...args} />;

export const Default= Template.bind({})
Default.args={

}