import React from "react";
import TextFieldContainer from "../components/TextFieldContainer";

export default {
  title: "Text Field"
};

export const TextField = () => (
  <>
    <TextFieldContainer type="text" placeholder="Enter your vaccine" />
    <TextFieldContainer type="text" placeholder="Select date" />
  </>
);
