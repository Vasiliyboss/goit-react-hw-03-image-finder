import React from 'react';
import { Serchbar } from './Serchbar/Serchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMore from './LoadMore/LoadMore';
import hitsApi from '../services/hits-api';
import Spinner from './Spinner/Spinner';
import Modal from './Modal/Modal';

export class App extends React.Component {
  state = {
    page: '',
    hits: [],
    name: '',
    loading: false,
    error: null,
    showModal: false,
    modalImage: null,
  };

  componentDidUpdate(_, prevState) {
    const { name, page } = this.state;
    if (prevState.page !== page || prevState.name !== name) {
      this.setState({ loading: true, hits: [] });

      hitsApi
        .hits(name, page)
        .then(name => this.setState(name))
        .catch(error => this.setState(error))
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleSubmit = name => {
    this.setState({ name, page: 1, hits: [] });
  };

  togleModal = modalImage => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    this.setState({ modalImage });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { hits, loading, showModal, modalImage } = this.state;

    return (
      <div>
        <Serchbar onSubmit={this.handleSubmit} />
        {loading && <Spinner />}
        <ImageGallery items={hits} openModal={this.togleModal} />
        {showModal && (
          <Modal
            image={hits}
            modalImage={modalImage}
            onClose={this.togleModal}
          />
        )}
        {hits.length > 0 && (
          <LoadMore onclick={this.loadMore}>Load more</LoadMore>
        )}
      </div>
    );
  }
}
