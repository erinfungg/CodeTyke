import React from "react";
import QuestionSelectionArea from "./QuestionSelectionArea";
import Button from "./Button";
import Modal from "./Modal";

const QuestionBody = props => {
  const [showModal, setShowModal] = React.useState(false);

  const handleSubmit = event => {
    // if button inactive prompt to select answer

    // else check for correct answer
    //handle incorrect

    // handle correct

    props.setLoading(true);
    if (props.currentQuestion.id >= props.currentQuestion.totalQuestions) {
      props.getQuestion(1);
    } else {
      props.getQuestion(props.currentQuestion.nextQuestionId);
    }
  };

  return (
    <>
      <div id="questionHeaderContainer">
        <div id="mainHeaderContainer">
          <div id="questionHeader">{props.currentQuestion.title}</div>
          <i
            onClick={() => setShowModal(!showModal)}
            className="material-icons"
          >
            info
          </i>
        </div>

        {showModal ? (
          <div
            className="modal-container"
            onClick={() => setShowModal(!showModal)}
          >
            <Modal info={props.currentQuestion.additionalInfo} />
          </div>
        ) : null}

        <div id="questionSubHeader">{props.currentQuestion.additionalInfo}</div>
      </div>
      <div id="outerBox">
        <QuestionSelectionArea
          possibleAnswers={props.currentQuestion.possibleAnswers}
        />
        <div id="submitButtonContainer">
          <Button handleSubmit={handleSubmit} loading={props.loading} />
        </div>
      </div>
    </>
  );
};

// className={`submitButton ${checkboxStatus.includes(true) ? "active" : "disabled"}`}
//  <img id="info-icon" alt="info" src="assets/info.png" />
export default QuestionBody;
