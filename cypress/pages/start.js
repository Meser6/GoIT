class StartPage {

    get goToCourseButton(){
        return cy.contains('do kursu')
    }

    goToCourse(){
       this.goToCourseButton.should('be.visible')
       cy.wait(2000)// wiem, że tu powinien być intercept ;) 
        this.goToCourseButton.click()
    }

} export default new StartPage()