class LessonPage {

    get goToHomeworkMainButton(){
        return cy.get('[data-state="tooltip-hidden"]').contains('Zadanie domowe')
    }

    get homeworkWindow(){
        return cy.get('div[data-tour-step="homework-form"]')
    }

    get editorContainer(){
        return cy.get('div[data-tour-step="homework-form"] div.DraftEditor-editorContainer')
    }

    get sendHomeworkButton(){
        return cy.get('div[data-tour-step="homework-form"] button[type="submit"]')
    }
    
    get okWindow(){
        return cy.get('div[class^="go"]').contains('OK')
    }


    sendHomework(){
        this.goToHomeworkMainButton.click()
        this.homeworkWindow.should('be.visible')
        this.editorContainer.click()
        this.sendHomeworkButton.click()
    }

} export default new LessonPage()