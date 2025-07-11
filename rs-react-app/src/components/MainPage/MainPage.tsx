import { Component } from 'react';
import styles from './MainPage.module.css';
import type { Character } from '../../constants/types';
import { CHARACTER_API } from '../../constants/constants';
import Form from './Form/Form';
import Content from './Content/Content';
import Button from '../Button/Button';
import TestErrorComponent from '../TestErrorComponent';
import Preloader from '../Preloader/Preloader';

class MainPage extends Component {
  state = {
    characters: [] as Character[],
    userInput: '' as string,
    showError: false,
    isLoading: false,
  };

  fetchCharacters = async (input: string) => {
    this.setState({ isLoading: true });
    try {
      const params = input
        ? new URLSearchParams({ name: input, page: '1' })
        : new URLSearchParams({ page: '1' });

      const response = await fetch(`${CHARACTER_API}?${params.toString()}`);
      const data = await response.json();
      console.log('Fetched characters:', data.results);

      if (data.results && data.results.length !== 0) {
        const receivedCharacters = data.results.map((character: Character) => ({
          id: character.id,
          name: character.name,
          status: character.status,
          image: character.image,
          gender: character.gender,
          species: character.species,
        }));
        this.setState({ characters: receivedCharacters });
      } else {
        this.setState({ characters: [] });
      }
      this.setState({ isLoading: false, showError: false });
    } catch (error) {
      console.error('Error fetching characters:', error);
      this.setState({ isLoading: false });
    }
  };

  setUserInput = (newInput: string) => {
    this.setState({ userInput: newInput }, () => {
      this.fetchCharacters(newInput);
    });
  };

  componentDidMount(): void {
    const previousInput = localStorage.getItem('userInput');
    if (previousInput) {
      this.setState({ userInput: previousInput });
      this.fetchCharacters(previousInput);
    } else {
      this.fetchCharacters('');
    }
  }

  render() {
    return (
      <div className={styles.mainPageWrapper}>
        {this.state.isLoading && <Preloader />}
        {this.state.showError && <TestErrorComponent />}
        <h1>Rick and Morty Characters</h1>
        <Form updateInput={this.setUserInput} />
        <Content characters={this.state.characters} />
        <div className={styles.errorButtonWrapper}>
          <Button
            type="button"
            buttonText="Error"
            onClick={() => {
              this.setState({ showError: true });
            }}
          />
        </div>
      </div>
    );
  }
}

export default MainPage;
