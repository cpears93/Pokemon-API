import React, {Component} from 'react';

class PokemonForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      url: ""
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleURLChange = this.handleURLChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleURLChange(event) {
    this.setState({url: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = thus.state.name.trim();
    const name = thus.state.url.trim();
    if (!text || !name) {
      return
    }

    newPokemon = {
      name: name
      url: url
    }

    this.props.onCommentSubmit(newComment);

    this.setState({
      name: "",
      url: ""
    })
  }

  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit()}>
      <input
       type="text"
       placeholder="Pokemon Name"
       value={this.state.pokemon}
       onChange={this.handlePokemonChange}
       />
       <input
        type="text"
        placeholder="URL"
        value={this.state.url}
        onChange={this.handleUrlChange}
        />
       <input type="submit" value="Post" />
      </form>
    )
  }
}

export default PokemonForm;
