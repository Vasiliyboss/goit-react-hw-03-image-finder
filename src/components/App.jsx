import React from 'react';
import { Serchbar } from './Serchbar/Serchbar';
import ImageGallery from './ImageGallery/ImageGallery';
// import css from './App.module.css';
// axios.defaults.baseURL =
//   'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

export class App extends React.Component {
  state = {
    page: '',
    hits: [],
    name: '',
    loading: false,
    error: null,
  };
  handleSubmit = name => {
    this.setState({ name, page: 1, hits: [] });
  };
  componentDidUpdate(_, prevState) {
    const { name, page } = this.state;
    if (prevState.page !== page || prevState.name !== name) {
      console.log('Fetch data');
      fetch(
        `https://pixabay.com/api/?q=${name}&page=${page}&key=28547826-2a3958dff886d94a7e7d0694c&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error(`Нет картинки с таким именим ${name}`)
          );
        })
        .then(name => this.setState(name))
        .catch(error => this.setState(error));
    }
  }

  render() {
    return (
      <div>
        <Serchbar onSubmit={this.handleSubmit} />
        <ImageGallery items={this.state.hits} />
      </div>
    );
  }
}

// async componentDidMount() {
//     try {
//       const response = await axios.get(
//         'https://pixabay.com/api/?q=cat&page=1&key=28547826-2a3958dff886d94a7e7d0694c&image_type=photo&orientation=horizontal&per_page=12'
//       );
//       console.log(response.data);
//     } catch (error) {}
//   }
