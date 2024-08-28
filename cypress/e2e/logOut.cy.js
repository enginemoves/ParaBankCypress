import { logOutPage } from '../support/page_objects/logoutPage'; 

describe('Logout Spec', () => {
  let logOut;

  before(() => {
    logOut = new logOutPage(); 
  });

  it('User can log out successfully', () => {
    logOut.logOut(); 
  });
});
