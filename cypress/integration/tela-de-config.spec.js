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

describe('Testes requisitos bônus', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
    
  it('Será validado se as questões foram geradas de acordo com as configurações Sports, Easy, Multiple choice', () => {
    cy.get(BUTTON_SETTINGS_SELECTOR).click();
    cy.wait(3000);
    cy.get('[data-testid="select-category-config"]').select('Sports');
    cy.get('[data-testid="select-difficulty-config"]').select('Easy');
    cy.get('[data-testid="select-type-config"]').select('Multiple choice');
    cy.get('[data-testid="button-edit-config"]').click();
    cy.get(INPUT_PLAYER_NAME_SELECTOR).type(name);
    cy.get(INPUT_PLAYER_EMAIL_SELECTOR).type(email);
    cy.get(BUTTON_PLAY_SELECTOR).click();
    cy.wait(3000);

    cy.get('[data-testid="question-category"]').should('have.text', 'Sports');
    cy.get('[data-testid="correct-answer"]').click();
    cy.get('.border-wrong').should('have.length', 3);
    cy.window().its('store').invoke('getState').then((state) => {
      const lastScore = state.player.score;
      expect(lastScore > 30 <= 40).to.be.eq(true);
    });

    cy.get(BUTTON_NEXT_QUESTION_SELECTOR).click();
    cy.get('[data-testid="question-category"]').should('have.text', 'Sports');
    cy.get('[data-testid="correct-answer"]').click();
    cy.get('.border-wrong').should('have.length', 3);
    cy.window().its('store').invoke('getState').then((state) => {
      const lastScore = state.player.score;
      expect(lastScore > 70 <= 80).to.be.eq(true);
    });

    cy.get(BUTTON_NEXT_QUESTION_SELECTOR).click();
    cy.get('[data-testid="question-category"]').should('have.text', 'Sports');
    cy.get('[data-testid="correct-answer"]').click();
    cy.get('.border-wrong').should('have.length', 3);
    cy.window().its('store').invoke('getState').then((state) => {
      const lastScore = state.player.score;
      expect(lastScore > 110 <= 120).to.be.eq(true);
    });

    cy.get(BUTTON_NEXT_QUESTION_SELECTOR).click();
    cy.get('[data-testid="question-category"]').should('have.text', 'Sports');
    cy.get('[data-testid="correct-answer"]').click();
    cy.get('.border-wrong').should('have.length', 3);
    cy.window().its('store').invoke('getState').then((state) => {
      const lastScore = state.player.score;
      expect(lastScore > 150 <= 160).to.be.eq(true);
    });

    cy.get(BUTTON_NEXT_QUESTION_SELECTOR).click();
    cy.get('[data-testid="question-category"]').should('have.text', 'Sports');
    cy.get('[data-testid="correct-answer"]').click();
    cy.get('.border-wrong').should('have.length', 3);
    cy.window().its('store').invoke('getState').then((state) => {
      const lastScore = state.player.score;
      expect(lastScore > 190 <= 200).to.be.eq(true);
    });

  })

  it('Será validado se as questões foram geradas de acordo com as configurações History, Medium, True / False', () => {
    cy.get(BUTTON_SETTINGS_SELECTOR).click();
    cy.wait(3000);
    cy.get('[data-testid="select-category-config"]').select('History');
    cy.get('[data-testid="select-difficulty-config"]').select('Medium');
    cy.get('[data-testid="select-type-config"]').select('True / False');
    cy.get('[data-testid="button-edit-config"]').click();

    cy.get(INPUT_PLAYER_NAME_SELECTOR).type(name);
    cy.get(INPUT_PLAYER_EMAIL_SELECTOR).type(email);
    cy.get(BUTTON_PLAY_SELECTOR).click();
    cy.wait(3000);

    cy.get('[data-testid="question-category"]').should('have.text', 'History');
    cy.get('[data-testid="correct-answer"]').click();
    cy.get('.border-wrong').should('have.length', 1);
    cy.window().its('store').invoke('getState').then((state) => {
      const lastScore = state.player.score;
      expect(lastScore > 60 <= 70).to.be.eq(true);;
    });

    cy.get(BUTTON_NEXT_QUESTION_SELECTOR).click();
    cy.get('[data-testid="question-category"]').should('have.text', 'History');
    cy.get('[data-testid="correct-answer"]').click();
    cy.get('.border-wrong').should('have.length', 1);
    cy.window().its('store').invoke('getState').then((state) => {
      const lastScore = state.player.score;
      expect(lastScore > 130 <= 140).to.be.eq(true);
    });

    cy.get(BUTTON_NEXT_QUESTION_SELECTOR).click();
    cy.get('[data-testid="question-category"]').should('have.text', 'History');
    cy.get('[data-testid="correct-answer"]').click();
    cy.get('.border-wrong').should('have.length', 1);
    cy.window().its('store').invoke('getState').then((state) => {
      const lastScore = state.player.score;
      expect(lastScore > 200 <= 210).to.be.eq(true);
    });

    cy.get(BUTTON_NEXT_QUESTION_SELECTOR).click();
    cy.get('[data-testid="question-category"]').should('have.text', 'History');
    cy.get('[data-testid="correct-answer"]').click();
    cy.get('.border-wrong').should('have.length', 1);
    cy.window().its('store').invoke('getState').then((state) => {
      const lastScore = state.player.score;
      expect(lastScore > 270 <= 280).to.be.eq(true);
    });

    cy.get(BUTTON_NEXT_QUESTION_SELECTOR).click();
    cy.get('[data-testid="question-category"]').should('have.text', 'History');
    cy.get('[data-testid="correct-answer"]').click();
    cy.get('.border-wrong').should('have.length', 1);
    cy.window().its('store').invoke('getState').then((state) => {
      const lastScore = state.player.score;
      expect(lastScore > 340 <= 350).to.be.eq(true);
    });
  });

  it('Será validado se as questões foram geradas de acordo com as configurações Politics, Hard, Multiple choice', () => {
    cy.get(BUTTON_SETTINGS_SELECTOR).click();
    cy.wait(3000);
    cy.get('[data-testid="select-category-config"]').select('Politics');
    cy.get('[data-testid="select-difficulty-config"]').select('Hard');
    cy.get('[data-testid="select-type-config"]').select('Multiple choice');
    cy.get('[data-testid="button-edit-config"]').click();

    cy.get(INPUT_PLAYER_NAME_SELECTOR).type(name);
    cy.get(INPUT_PLAYER_EMAIL_SELECTOR).type(email);
    cy.get(BUTTON_PLAY_SELECTOR).click();
    cy.wait(3000);

    cy.get('[data-testid="question-category"]').should('have.text', 'Politics');
    cy.get('[data-testid="correct-answer"]').click();
    cy.get('.border-wrong').should('have.length', 3);
    cy.window().its('store').invoke('getState').then((state) => {
      const lastScore = state.player.score;
      expect(lastScore > 90 <= 100).to.be.eq(true);
    });

    cy.get(BUTTON_NEXT_QUESTION_SELECTOR).click();
    cy.get('[data-testid="question-category"]').should('have.text', 'Politics');
    cy.get('[data-testid="correct-answer"]').click();
    cy.get('.border-wrong').should('have.length', 3);
    cy.window().its('store').invoke('getState').then((state) => {
      const lastScore = state.player.score;
      expect(lastScore > 190 <= 200).to.be.eq(true);
    });

    cy.get(BUTTON_NEXT_QUESTION_SELECTOR).click();
    cy.get('[data-testid="question-category"]').should('have.text', 'Politics');
    cy.get('[data-testid="correct-answer"]').click();
    cy.get('.border-wrong').should('have.length', 3);
    cy.window().its('store').invoke('getState').then((state) => {
      const lastScore = state.player.score;
      expect(lastScore > 290 <= 300).to.be.eq(true);
    });

    cy.get(BUTTON_NEXT_QUESTION_SELECTOR).click();
    cy.get('[data-testid="question-category"]').should('have.text', 'Politics');
    cy.get('[data-testid="correct-answer"]').click();
    cy.get('.border-wrong').should('have.length', 3);
    cy.window().its('store').invoke('getState').then((state) => {
      const lastScore = state.player.score;
      expect(lastScore > 390 <= 400).to.be.eq(true);
    });

    cy.get(BUTTON_NEXT_QUESTION_SELECTOR).click();
    cy.get('[data-testid="question-category"]').should('have.text', 'Politics');
    cy.get('[data-testid="correct-answer"]').click();
    cy.get('.border-wrong').should('have.length', 3);
    cy.window().its('store').invoke('getState').then((state) => {
      const lastScore = state.player.score;
      expect(lastScore > 490 <= 500).to.be.eq(true);
    });
  });

  it('Será validado se as questões foram geradas de acordo com as configurações Art, Hard, True / False', () => {
    cy.get(BUTTON_SETTINGS_SELECTOR).click();
    cy.wait(3000);
    cy.get('[data-testid="select-category-config"]').select('Art');
    cy.get('[data-testid="select-difficulty-config"]').select('Hard');
    cy.get('[data-testid="select-type-config"]').select('True / False');
    cy.get('[data-testid="button-edit-config"]').click();
    cy.get('[data-testid="noHaveQuestions"]').should('have.text', 'Não temos questões com essa configuração')
  });
});
