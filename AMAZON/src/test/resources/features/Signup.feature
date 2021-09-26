Feature: Signup

@Signup
Scenario Outline: User is not able to singup the amazon 
Given: User is already on Amazon page
When:  User clicks on Start Here button
Then  Create account form is visible 
And   User enters details "<Your_name>", "<Mobile_number>","<Email>" , "<Password>"
Then  User clicks on Continue button
But   User is not able to create an account and error message is shown
Then  Browser gets closed

Examples: 
| Your_name| Mobile_number | Email                | Password   |
| Test1    | 7983818749    | aanshikaag@gmail.com |  Anshika1@ |
| Test2    | 7983818748    | aanshika04@gmail.com |  Anshika1! |
| Test3    | 7983887497    | aanshika87@gmail.com |  Anshika1$ |


@Conditions 
Scenario Outline: Checking for Conditions of use page  
Given: User is already on Aamzon Registration page
When:  User clicks on Conditions of use page
Then   Check user navigates to Conditions of use page
Then   User enters "<item>" in search tab 
And    Click on search icon 
Then   User Navigates back to Conditions of use page
Then   User clicks on Conditions of Use link 
Then   User clicks on Conditions of Sale link
Then   User clicks on Privacy Notice link
Then   User Navigates back to Conditions of use page
Then   User clicks on Notice and Procedure for Making Claims of Right Infringements link 
Then   User clicks on www.amazon.in/gp/help/contact-us link
Then   User Navigates back to Conditions of use page
Then   User clicks on Notice Form link
And    User clicks on Was this information helpful? link as yes
Then  Browser gets quit

 Examples: 
 | item       |
 | Conditions |
 | Amazon.in  |
 | Privacy    |
