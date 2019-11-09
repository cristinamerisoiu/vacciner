import React from "react";
import Headline from "../components/Headline";
import VaccineContent from "../components/VaccineContent";
import Footer from "../components/Footer";

export default function Standard() {
  return (
    <>
      <Headline>Standard Vaccines</Headline>
      <VaccineContent />
      <Footer />
    </>
  );
}
