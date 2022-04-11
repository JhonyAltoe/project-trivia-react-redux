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
    this.getConfigFromStore();
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

  getConfigFromStore = () => {
    const { configs } = this.props;
    console.log(configs);
    this.setState({ ...configs });
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
        <div className="default-field config-field">
          <h1 data-testid="settings-title">
            Configurações
          </h1>
          {categories.trivia_categories !== undefined ? (
            <label htmlFor="select-category-config">
              <span>Category:</span>
              {' '}
              <select
                id="select-category-config"
                data-testid="select-category-config"
                onChange={ ({ target }) => this.setState({ category: target.value }) }
                value={ category }
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
              data-testid="select-difficulty-config"
              id="select-difficulty-config"
              onChange={ ({ target }) => this.setState({ difficulty: target.value }) }
              value={ difficulty }
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
              data-testid="select-type-config"
              onChange={ ({ target }) => this.setState({ type: target.value }) }
              value={ type }
            >
              <option> </option>
              <option value="multiple">Multiple choice</option>
              <option value="boolean">True / False</option>
            </select>
          </label>
          { noHaveQuestions && (
            <div
              className="alert-config"
              data-testid="noHaveQuestions"
            >
              Não há questões para essa configuração, tente outra!
            </div>
          )}
          <div className="config-field-button">
            <button
              className="default-purble-button"
              data-testid="button-edit-config"
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

const mapStateToProps = (state) => ({
  configs: state.reducerConfig.configs,
});

const mapDispatchToProps = (dispatch) => ({
  saveConfig: (payload) => dispatch(saveGameConfig(payload)),
});

Config.propTypes = {
  saveConfig: propTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Config);
