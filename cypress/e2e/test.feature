Feature: Test

jako zalogowany użytkownik
chcę wysłał ponownie pracę domową 

  Background: 
    Given Otwieram strone "pl/account/login"
      And Loguje sie jako "user888@gmail.com", "1234567890"
  
  Scenario: Zadanie rekrutacyjne
      And Przechodze do kursu
     When Wysylam prace domowa
     Then Praca domowa zostala wyslana 
