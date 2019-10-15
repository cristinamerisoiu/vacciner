import React from "react";
import TextFieldContainer from "../components/TextFieldContainer";

export default {
  title: "Text Field"
};

export const TextField = () => (
  <>
    <TextFieldContainer placeholder="Enter your vaccine" />
    <TextFieldContainer placeholder="Select date" />
  </>
);
