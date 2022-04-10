import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCategories, fetchTest } from '../../api/handleAPI';
import { saveGameConfig } from '../../redux/actions';
import './styles.css';

const FIVE = 5;

class Config extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      category: '',
      type: '',
      difficulty: '',
      noHaveQuestions: false,
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    const result = await fetchCategories();
    this.setState({ categories: result });
  };

  editConfigs = async ({ category, type, difficulty }) => {
    const { saveConfig, history } = this.props;
    saveConfig({ category, type, difficulty });
    const configs = {
      type,
      category,
      difficulty,
    };
    const questions = await fetchTest(configs);
    if (questions.results.length === FIVE) {
      history.push('/');
    } else {
      this.setState({ noHaveQuestions: true });
    }
  }

  render() {
    const {
      categories,
      category,
      type,
      difficulty,
      noHaveQuestions,
    } = this.state;
    return (
      <div className="default-container config-container">
        <div className="default-field">
          <h1 data-testid="settings-title">
            Configurações
          </h1>
          {categories.trivia_categories !== undefined ? (
            <label htmlFor="select-category-config">
              <span>Category:</span>
              {' '}
              <select
                id="select-category-config"
                onChange={ ({ target }) => this.setState({ category: target.value }) }
              >
                <option> </option>
                {categories.trivia_categories.map((element) => (
                  <option
                    value={ element.id }
                    key={ element.id }
                  >
                    {element.name}
                  </option>
                ))}
              </select>
            </label>
          ) : (
            <p>Loading...</p>
          )}
          <label htmlFor="select-difficulty-config">
            <span>Difficulty:</span>
            {' '}
            <select
              id="select-difficulty-config"
              onChange={ ({ target }) => this.setState({ difficulty: target.value }) }
            >
              <option> </option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
          <label htmlFor="select-type-config">
            <span>Type:</span>
            {' '}
            <select
              id="select-type-config"
              onChange={ ({ target }) => this.setState({ type: target.value }) }
            >
              <option> </option>
              <option value="multiple">Multiple choice</option>
              <option value="boolean">True / False</option>
            </select>
          </label>
          { noHaveQuestions && (
            <div className="alert-config">
              Não há questões para esse configuração, tente outra
            </div>
          )}
          <div className="config-field-button">
            <button
              className="default-purble-button"
              type="button"
              onClick={ () => this.editConfigs({ category, type, difficulty }) }
            >
              Confirmar edição
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveConfig: (payload) => dispatch(saveGameConfig(payload)),
});

Config.propTypes = {
  saveConfig: propTypes.func,
}.isRequired;

export default connect(null, mapDispatchToProps)(Config);
