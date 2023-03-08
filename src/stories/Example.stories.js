import Button from "../components/Button/Button";
import { withDesign } from 'storybook-addon-designs';
// First we need to tell it what component we are using
export default {
  // The title prop is optional.
  title: "Components/Example",
  component: Button,
  decorators: [withDesign],
};

// template
const Template = (args) => <Button {...args}/>;

export const Red = Template.bind({});
Red.args = {
    // these are shown in the addons section below canvas
    backgroundColor: "red",
    label: "Press me",
    size: "md",
  };
Red.parameters = {
  // these are shown in the addons section below canvas
//   backgroundColor: "red",
//   label: "Press me",
//   size: "md",
design: {
    type: 'figma',
    url: "https://www.figma.com/file/Ui7iJmbHZPFwzuiNFdNplR/Untitled?node-id=475%3A443&t=J8sgmfkFln0UVeVn-4",
  },
  // design: {
  //   type: 'figma',
  //   url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
  // },
  
};