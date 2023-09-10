/// <reference types='cypress' />

import "./commands";

declare global {
  namespace Cypress {
    interface Chainable {
      loginData(): Chainable<any>;
      clearDownloads(): null;
      setCurrentCookies(cookies: Cypress.Cookie[]): null;
    }
  }
}
export {};
