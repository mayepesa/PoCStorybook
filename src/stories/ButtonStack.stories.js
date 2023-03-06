import ButtonStack from "../components/ButtonStack";

// First we need to tell it what component we are using
export default {
  // The title prop is optional.
  title: "Components/ButtonStack",
  component: ButtonStack,
  argTypes: {
    primaryAction: {
      // this next handleClick is the label that we see when the btn is clicked
      action: "primaryAction",
    },
    secondaryAction: {
      action: "secondaryAction",
    },
    tertiaryAction: {
      action: "tertiaryAction",
    },
  },
};

// template
const Template = (args) => <ButtonStack {...args} />;

export const Default = Template.bind({});

Default.args = {
  primaryName: "Primary Action",
  secondaryName: "Secondary Action",
  tertiaryName: "Tertiary Action",
};

Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/w1Eh2QDwWZCEqHslf2fW9c/Component-Library?node-id=1140%3A3790&t=TSJNXbiGrdNA00Yz-4",
  },
  // design: {
  //   type: 'figma',
  //   url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
  // },
};
