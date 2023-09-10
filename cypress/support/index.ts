/// <reference types='cypress' />

import "./commands";

declare global {
  namespace Cypress {
    interface Chainable {
      clearDownloads(): null;
      setCurrentCookies(cookies: Cypress.Cookie[]): null;
    }
  }
}
export {};
