import { Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/login"
import StartPage from "../../pages/start"
import LessonPage from "../../pages/lesson"



Given("Otwieram strone {string}", url =>{
  cy.visit(url)
  LoginPage.subbmitButton.should('be.visible')
})
Given("Loguje sie jako {string}, {string}", (username, password) =>{
  LoginPage.login(username, password)
})
Given("Przechodze do kursu", () =>{
    StartPage.goToCourse()
    cy.url().should('contain', '/learn')
})
 When("Wysylam prace domowa", () =>{
  LessonPage.sendHomework()
 })
 Then("Praca domowa zostala wyslana", () =>{
  LessonPage.okWindow.should('be.visible')
 })