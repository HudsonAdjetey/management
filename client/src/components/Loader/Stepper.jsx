import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StudentInfo from "../paymentCard/StudentInfo";

const steps = ["Student Info", "Make payment", "Confirm"];

const PaymentPage = React.memo(() => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  React.useEffect(() => {
    if (completedSteps() == steps.length) {
      console.log("Finished");
    }
  }, [completedSteps()]);

  const func = React.useCallback(() => {
    const handleNext = () => {
      const newActiveStep =
        isLastStep() && !allStepsCompleted()
          ? // It's the last step, but not all steps have been filled out
            steps.findIndex((step, i) => !(i in completed))
          : activeStep + 1;
      setActiveStep(newActiveStep);
    };
    return handleNext();
  }, [activeStep, steps]);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };
  const emptyText = [];
  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    func();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  const [data, setData] = React.useState(["country"]);

  return (
    <Box className={"md:w-[75%] w-[98%]"} sx={{ margin: "auto" }}>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step
            sx={{ fontWeight: "bold" }}
            key={label}
            completed={completed[index]}
          >
            <StepButton
              sx={{
                color: "red",
                backgroundColor: "transparent",

                path: {
                  color: "green",
                },
                "& .Mui-active": {
                  svg: {
                    fill: "#000",
                  },
                },
              }}
              color="inherit"
              onClick={handleStep(index)}
            >
              <span className="font-medium text-[.8rem]">{label}</span>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div className=" w-[100%] ml-auto mr-auto my-10">
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 4, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <div>
            {/* Step {`${activeStep + 1}`} of {steps.length} */}
            {activeStep + 1 == 1 && <StudentInfo dataInfo={data} />}
            {activeStep + 1 == 2 && "page 2"}
            {activeStep + 1 == 3 && "page 3"}

            {data.length > 0 && (
              <Box
                className={"md:w-[75%] w-[98%] flex mx-auto my-3 items-center"}
                sx={{
                  pt: 2,
                  alignItems: "center",
                }}
              >
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{
                    mr: 1,
                    color: "red",
                    background: "transparent",
                    fontWeight: "600",
                    fontSize: ".89rem",
                  }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button
                  onClick={func}
                  sx={{ mr: 1, fontWeight: "600", fontSize: ".89rem" }}
                  className="text-[.9rem] text-red-500"
                >
                  Next
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography
                      variant="caption"
                      sx={{ display: "inline-block" }}
                    >
                      Step {activeStep + 1} already completed
                    </Typography>
                  ) : (
                    <Button
                      onClick={handleComplete}
                      sx={{
                        fontWeight: "600",
                        fontSize: ".89rem",
                      }}
                    >
                      {completedSteps() === totalSteps() - 1
                        ? "Finish"
                        : "Complete Step"}
                    </Button>
                  ))}
              </Box>
            )}
          </div>
        )}
      </div>
    </Box>
  );
});

export default PaymentPage;
