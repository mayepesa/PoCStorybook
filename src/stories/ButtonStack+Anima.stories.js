import ButtonStack from "../components/ButtonStack+Anima";

// First we need to tell it what component we are using
export default {
  // The title prop is optional.
  title: "Components/ButtonStack+Anima",
  component: ButtonStack,
};

// template
const Template = (args) => <ButtonStack {...args} />;

export const Default = Template.bind({});
Default.args = {
  // these are shown in the addons section below canvas
  spanText1: 'Primary action',
  spanText2: 'Secondary action',
  spanText3: 'Tertiary action',


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