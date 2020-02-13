const express = require("express");
var cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());

let questionArr = [
  {
    id: 1,
    title: "Select All the Strings",
    additionalInfo:
      'Click on the boxes that are "strings". Remember that the easiest way to recognize a string is to check if it is surrounded by " or \'.',
    totalQuestions: 4,
    nextQuestionId: 2,
    possibleAnswers: [
      {
        image: "https://i.ibb.co/M6bQZ4R/bool.png",
        text: "true",
        type: "boolean"
      },
      {
        image: "https://i.ibb.co/9ncNJF1/number.png",
        text: "43",
        type: "number"
      },
      {
        image: "https://i.ibb.co/6wr1QbV/girls.png",
        text: "4 Girls",
        type: "string"
      },
      {
        image: "https://i.ibb.co/6BsyfRD/bus.png",
        text: "School Bus",
        type: "string"
      }
    ]
  },
  {
    id: 2,
    title: "Find the Integers",
    additionalInfo:
      "Integers are whole numbers. This means it is one number that doesn't include decimals",
    totalQuestions: 4,
    nextQuestionId: 3,
    possibleAnswers: [
      {
        image: "https://i.ibb.co/M6bQZ4R/bool.png",
        text: "142",
        type: "number"
      },
      {
        image: "https://i.ibb.co/9ncNJF1/number.png",
        text: "Thirteen",
        type: "string"
      },
      {
        image: "https://i.ibb.co/6wr1QbV/girls.png",
        text: "4 + 2",
        type: "expression"
      },
      {
        image: "https://i.ibb.co/6BsyfRD/bus.png",
        text: "6",
        type: "number"
      }
    ]
  },
  {
    id: 3,
    title: "Which of these are booleans?",
    additionalInfo:
      "Boolean are named after George Boole. Simply put, a boolean is a true or false value.",
    totalQuestions: 4,
    nextQuestionId: 4,
    possibleAnswers: [
      {
        image: "https://i.ibb.co/M6bQZ4R/bool.png",
        text: "null",
        type: "boolean"
      },
      {
        image: "https://i.ibb.co/9ncNJF1/number.png",
        text: "This is true.",
        type: "string"
      },
      {
        image: "https://i.ibb.co/6wr1QbV/girls.png",
        text: "4,453",
        type: "number"
      },
      {
        image: "https://i.ibb.co/6BsyfRD/bus.png",
        text: "false",
        type: "boolean"
      }
    ]
  },
  {
    id: 4,
    title: "Not to string you along but...let's practice again with strings!",
    additionalInfo:
      "Remeber strings are letters and symbols surrounded by single or double quotations.",
    totalQuestions: 4,
    nextQuestionId: 1,
    possibleAnswers: [
      {
        image: "https://i.ibb.co/M6bQZ4R/bool.png",
        text: "It's show time!",
        type: "boolean"
      },
      {
        image: "https://i.ibb.co/9ncNJF1/number.png",
        text: "sesame@open.com",
        type: "string"
      },
      {
        image: "https://i.ibb.co/6wr1QbV/girls.png",
        text: "45",
        type: "number"
      },
      {
        image: "https://i.ibb.co/6BsyfRD/bus.png",
        text: "false",
        type: "boolean"
      }
    ]
  }
];

app.get("/problems/:id", (req, res) => {
  let id = req.params.id;
  res.json(questionArr[id - 1]);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
