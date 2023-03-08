import Button from "../components/Button/Button";
import { within, userEvent } from "@storybook/testing-library";

import { expect } from "@storybook/jest";
// First we need to tell it what component we are using
export default {
  // The title prop is optional.
  title: "Components/Button",
  component: Button,
  argTypes: {
    handleClick: {
      // this next handleClick is the label that we see when the btn is clicked
      action: "handleClick",
    },
  },
};

// template
const Template = (args) => <Button {...args} />;

// diff stories, copy of the template fnc with bind
/* A story captures the rendered state of a UI component */
export const Default = Template.bind({});
Default.args = {
  // these are shown in the addons section below canvas
  label: "Press me",
};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("button"));
  await expect(canvas.getByText("You clicked me")).toBeInTheDocument();
};

export const Red = Template.bind({});
Red.args = {
  // these are shown in the addons section below canvas
  backgroundColor: "red",
  label: "Press me",
  size: "md",
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "green",
  label: "Press me",
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: "red",
  label: "Press me",
  size: "sm",
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: "red",
  label: "Press me",
  size: "lg",
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  backgroundColor: "red",
  label: "Very lonnnnnnnnnng label",
  size: "md",
};

// no we make it interactable (adding actions)
