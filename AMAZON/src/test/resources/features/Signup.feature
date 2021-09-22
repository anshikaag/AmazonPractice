@Regression
Feature: Signup

@Signup
Scenario Outline: User is not able to singup the amazon 
Given: User is already on Amazon page
When:  User clicks on Start Here button
Then  Create account form is visible 
And   User enters details "<Your name>", "<Mobile number>","<Email>" , "<Password>"
Then  User clicks on Continue button
But   User is not able to create an account and error message is shown
Then  Browser gets closed

Examples: 
| Your name| Mobile number | Email                | Password   |
| Test1    | 7983818749    | aanshikaag@gmail.com |  Anshika1@ |
| Test2    | 7983818748    | aanshika04@gmail.com |  Anshika1! |
| Test3    | 7983887497    | aanshika87@gmail.com |  Anshika1$ |