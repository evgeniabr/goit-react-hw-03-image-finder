import React, { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { fetchImg } from './ApiService/ApiService';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import css from './App.module.css';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    totalImg: '',
    page: null,
    isLoading: false,
    showModal: false,
    modalImg: null,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      this.setState({ isLoading: true });
      fetchImg(nextQuery, nextPage)
        .then(data =>
          this.setState(({ images }) => ({
            images: [...images, ...data.hits],
            totalImg: data.totalHits,
            isLoading: false,
          }))
        )
        .catch(error => this.setState({ error }));
    }
  }

  handleSubmit = query => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  incrementPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  setModalImg = imgUrl => {
    this.setState({ modalImg: imgUrl });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { images, isLoading, totalImg, showModal, modalImg, error } =
      this.state;
    const showMoreButton = totalImg > images.length;

    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 && (
          <ImageGallery>
            {images.map(image => (
              <ImageGalleryItem
                key={image.id}
                img={image}
                setModalImg={this.setModalImg}
                toggleModal={this.toggleModal}
              />
            ))}
          </ImageGallery>
        )}

        {isLoading && <Loader />}
        {showMoreButton && <Button incrementPage={this.incrementPage} />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImg} alt="#" />
          </Modal>
        )}
        {error && <h2>No results found</h2>}
      </div>
    );
  }
}
