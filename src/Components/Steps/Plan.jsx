import React from "react";
import StepInfo from "../StepInfo";
import FormPlan from "../Form/FormPlan";
import Footer from "../Footer";

const Plan = () => {
  return (
    <div className="box h-full  rounded-lg">
      <StepInfo
        heading="Select your plan"
        title="You have the option of monthly or yearly billing."
      />

      <FormPlan />
      <Footer />
    </div>
  );
};

export default Plan;
