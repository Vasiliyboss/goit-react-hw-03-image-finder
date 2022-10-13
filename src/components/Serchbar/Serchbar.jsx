import React from 'react';
import css from './Serchbar.module.css';
export class Serchbar extends React.Component {
  state = {
    name: '',
  };
  handleChangeInput = e => {
    this.setState({ name: e.currentTarget.value.toLowerCase() });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim() === ' ') {
      alert('Add word');
      return;
    }
    this.props.onSubmit(this.state.name);
    this.setState({
      name: '',
    });
    // e.target.reset();
  };
  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleFormSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            value={this.state.name}
            onChange={this.handleChangeInput}
            className={css.SearchFormInput}
            type="text"
            name="name"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
