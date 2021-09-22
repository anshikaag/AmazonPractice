$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/91798/eclipse-workspace/AMAZON/src/test/resources/features/Signup.feature");
formatter.feature({
  "line": 2,
  "name": "Signup",
  "description": "",
  "id": "signup",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User is not able to singup the amazon",
  "description": "Given: User is already on Amazon page\nWhen:  User clicks on Start Here button",
  "id": "signup;user-is-not-able-to-singup-the-amazon",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Signup"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Create account form is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters details \"\u003cYour name\u003e\", \"\u003cMobile number\u003e\",\"\u003cEmail\u003e\" , \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Continue button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User is not able to create an account and error message is shown",
  "keyword": "But "
});
formatter.step({
  "line": 12,
  "name": "Browser gets closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "signup;user-is-not-able-to-singup-the-amazon;",
  "rows": [
    {
      "cells": [
        "Your name",
        "Mobile number",
        "Email",
        "Password"
      ],
      "line": 15,
      "id": "signup;user-is-not-able-to-singup-the-amazon;;1"
    },
    {
      "cells": [
        "Test1",
        "7983818749",
        "aanshikaag@gmail.com",
        "Anshika1@"
      ],
      "line": 16,
      "id": "signup;user-is-not-able-to-singup-the-amazon;;2"
    },
    {
      "cells": [
        "Test2",
        "7983818748",
        "aanshika04@gmail.com",
        "Anshika1!"
      ],
      "line": 17,
      "id": "signup;user-is-not-able-to-singup-the-amazon;;3"
    },
    {
      "cells": [
        "Test3",
        "7983887497",
        "aanshika87@gmail.com",
        "Anshika1$"
      ],
      "line": 18,
      "id": "signup;user-is-not-able-to-singup-the-amazon;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "User is not able to singup the amazon",
  "description": "Given: User is already on Amazon page\nWhen:  User clicks on Start Here button",
  "id": "signup;user-is-not-able-to-singup-the-amazon;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Signup"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Create account form is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters details \"Test1\", \"7983818749\",\"aanshikaag@gmail.com\" , \"Anshika1@\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Continue button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User is not able to create an account and error message is shown",
  "keyword": "But "
});
formatter.step({
  "line": 12,
  "name": "Browser gets closed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 17,
  "name": "User is not able to singup the amazon",
  "description": "Given: User is already on Amazon page\nWhen:  User clicks on Start Here button",
  "id": "signup;user-is-not-able-to-singup-the-amazon;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Signup"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Create account form is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters details \"Test2\", \"7983818748\",\"aanshika04@gmail.com\" , \"Anshika1!\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Continue button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User is not able to create an account and error message is shown",
  "keyword": "But "
});
formatter.step({
  "line": 12,
  "name": "Browser gets closed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 18,
  "name": "User is not able to singup the amazon",
  "description": "Given: User is already on Amazon page\nWhen:  User clicks on Start Here button",
  "id": "signup;user-is-not-able-to-singup-the-amazon;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Signup"
    },
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Create account form is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters details \"Test3\", \"7983887497\",\"aanshika87@gmail.com\" , \"Anshika1$\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Continue button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User is not able to create an account and error message is shown",
  "keyword": "But "
});
formatter.step({
  "line": 12,
  "name": "Browser gets closed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});