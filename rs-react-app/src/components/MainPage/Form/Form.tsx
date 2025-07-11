import { Component } from 'react';
import styles from './Form.module.css';
import type { FormProps } from './Form.types';
import Input from '../../Input/Input';
import Button from '../../Button/Button';

class Form extends Component<FormProps> {
  state = {
    userInput: localStorage.getItem('userInput') || '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ userInput: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.updateInput(this.state.userInput);
    localStorage.setItem('userInput', this.state.userInput);
  };

  render() {
    return (
      <div className={styles.formWrapper}>
        <form onSubmit={this.handleSubmit}>
          <Input
            inputType="text"
            placeholderText="Enter character name"
            value={this.state.userInput}
            onChange={this.handleChange}
          />
          <Button type="submit" buttonText="Search" />
        </form>
        <span className={styles.inputSpan}>
          Search Rick and Morty characters by full or partial name
        </span>
      </div>
    );
  }
}

export default Form;
