import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    searchQuery: "",
  }

    handleQueryChange = event => {
    this.setState({ searchQuery: event.currentTarget.value });
  };

 handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchQuery.trim() === "") {
      return alert('Insert correct request');
    }
    const { searchQuery } = this.state;
    this.props.onSubmit(searchQuery);
    this.setState({ searchQuery: ""});
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <section className="Searchbar"> 
      <header class="searchbar">
  <form className="SearchForm" onSubmit={this.handleSubmit} >
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
            className="SearchForm-input"
            name="searchQuery"
            value = {searchQuery}
            type="text"
            onChange={this.handleQueryChange}
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
        </header>
        </section>
    )
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
