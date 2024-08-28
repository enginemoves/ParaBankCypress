import { TransferFundsPage } from "../support/page_objects/transferFundsPage"

describe('Transfer Funds Spec', () => {
    let driver
    let transferFundsPage
  before(()=>{
  
    cy.fixture("transferFundsElements").then((sel)=>{
      driver = sel
      transferFundsPage = new TransferFundsPage(driver)
    })
   
  })
  it('Login User', () => {
    cy.login()
  })
  it('Transfer Funds Successfully', () => {
    transferFundsPage.transferFunds("1000")
    transferFundsPage.logOut()
  })

})
