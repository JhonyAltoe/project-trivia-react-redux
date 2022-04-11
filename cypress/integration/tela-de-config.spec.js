const { fetch: fetchMock } = require('../mocks/fetch');

const INPUT_PLAYER_NAME_SELECTOR = '[data-testid="input-player-name"]';
const INPUT_PLAYER_EMAIL_SELECTOR = '[data-testid="input-gravatar-email"]';
const BUTTON_PLAY_SELECTOR = '[data-testid="btn-play"]';
const HEADER_IMAGE_SELECTOR = '[data-testid="header-profile-picture"]';
const HEADER_NAME_SELECTOR = '[data-testid="header-player-name"]';
const HEADER_SCORE_SELECTOR = '[data-testid="header-score"]';
const CORRECT_ALTERNATIVE_SELECTOR = '[data-testid="correct-answer"]';
const WRONG_ALTERNATIVES_SELECTOR = '[data-testid*="wrong-answer"]';
const BUTTON_NEXT_QUESTION_SELECTOR = '[data-testid="btn-next"]';
const FEEDBACK_TEXT_SELECTOR = '[data-testid="feedback-text"]';
const BUTTON_SETTINGS_SELECTOR = '[data-testid="btn-settings"]';

const name = 'Nome da pessoa';
const email = 'email@pessoa.com';

const BUTTON_RANKING_SELECTOR = '[data-testid="btn-ranking"]';
const RANKING_TITLE_SELECTOR = '[data-testid="ranking-title"]';

const FEEDBACK_TOTAL_SCORE_SELECTOR = '[data-testid="feedback-total-score"]';
const FEEDBACK_TOTAL_QUESTION_SELECTOR = '[data-testid="feedback-total-question"]';
const BUTTON_PLAY_AGAIN_SELECTOR = '[data-testid="btn-play-again"]';

describe('19 - Ao mudar o valor do dropdown categoria, apenas perguntas da categoria selecionada devem aparecer para a pessoa que está jogando. Essa configuração será identificada pela chave category no retorno da API', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/', {
      onBeforeLoad(win) {
        win.fetch = fetchMock;
      },
    });
    cy.get(BUTTON_SETTINGS_SELECTOR).click();
  });
    
    it('', () => {
      cy.get('[id="select-category-config"]').click();
      cy.get('[id="select-category-config"]').should('exist');
    })
    // cy.get(INPUT_PLAYER_NAME_SELECTOR).type(name);
    // cy.get(INPUT_PLAYER_EMAIL_SELECTOR).type(email);
    // cy.get(BUTTON_PLAY_SELECTOR).click();
    // cy.get(CORRECT_ALTERNATIVE_SELECTOR).click();
    // cy.get(BUTTON_NEXT_QUESTION_SELECTOR).click();
    // cy.get(CORRECT_ALTERNATIVE_SELECTOR).click();
    // cy.get(BUTTON_NEXT_QUESTION_SELECTOR).click();
    // cy.get(CORRECT_ALTERNATIVE_SELECTOR).click();
    // cy.get(BUTTON_NEXT_QUESTION_SELECTOR).click();
    // cy.get(CORRECT_ALTERNATIVE_SELECTOR).click();
    // cy.get(BUTTON_NEXT_QUESTION_SELECTOR).click();
    // cy.get(CORRECT_ALTERNATIVE_SELECTOR).click();
    // cy.get(BUTTON_NEXT_QUESTION_SELECTOR).click();
});
