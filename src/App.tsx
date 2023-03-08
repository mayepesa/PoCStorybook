import React, { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Button from "./components/Button/Button";
import { INavList } from "./components/SideBar/types";
import { createContext } from "react";
import ButtonStack from "./components/ButtonStack/ButtonStack";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";
import Dropdown from "./components/Dropdown/Dropdown";
import Login from "./components/Login/Login";

interface IAppContext {
  setSelected: React.Dispatch<React.SetStateAction<INavList>> | null;
  navList: INavList[] | null;
}

export const AppContext = createContext<IAppContext>({
  setSelected: null,
  navList: null,
});

function App() {
  // this could be an object instead of a number, to access the name and other properties, for future me
  const [selected, setSelected] = useState<INavList>({ name: "PrimaryButton" });
  const componentList: INavList[] = [
    {
      name: "ButtonStack",
    },
    {
      name: "Button",
    },
    {
      name: "Dropdown",
    },
    {
      name: "PrimaryButton",
    },
    {
      name: "Login",
    },
  ];

  const renderComponent = () => {
    switch (selected.name) {
      case "Button":
        return (
          <Button
            label="Button"
            backgroundColor="gray"
            size="md"
            handleClick={() => console.log("clicked btn")}
          />
        );
      case "ButtonStack":
        return (
          <ButtonStack
            primaryAction={() => {}}
            primaryName="Primary Action"
            secondaryAction={function noRefCheck() {}}
            secondaryName="Secondary Action"
            tertiaryAction={function noRefCheck() {}}
            tertiaryName="Tertiary Action"
          />
        );
      case "Dropdown":
        return <Dropdown />;
      case "PrimaryButton":
        return <PrimaryButton handleClick={() => {}} label="Primary Button" />;
      case "Login":
        return <Login />;
      default:
        break;
    }
  };

  return (
    <AppContext.Provider
      value={{ setSelected: setSelected, navList: componentList }}
    >
      <Layout>{renderComponent()}</Layout>
    </AppContext.Provider>
  );
}

export default App;
