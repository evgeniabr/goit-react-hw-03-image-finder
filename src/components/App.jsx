import React, { Component } from 'react'

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { fetchImg } from './ApiService/ApiService';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';


export class App extends Component {
  state = {
    searchQuery: "",
    images: [],
    totalImg: "",
    page: null,
    isLoading: false,
    showModal: false,
    modalImg: null,
    error: false,
  }

 async componentDidUpdate(_, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

   if (prevQuery !== nextQuery || prevPage !== nextPage) {
     try {
       this.setState({ isLoading: true });
       const { data } = await fetchImg(nextQuery, nextPage);
      
       this.setState(({ images }) => ({
         images: [...images, ...data.hits],
         totalImg: data.totalHits,
         
       }))
     } catch (error) {
       alert('something went wrong :( Please enter a valid request');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = query => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

    changePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  setModalImg = imgUrl => {
    this.setState({ modalImg: imgUrl });
  };

    toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
      const { searchQuery, images, isLoading, totalImg, showModal, modalImg } =
      this.state;
    const showMoreButton = totalImg > images.length;
    const errorRequest = totalImg === 0;
    return (
      <div className='App'>
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
        {showMoreButton && <Button onClick={this.changePage} />}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={modalImg} alt="#" />
          </Modal>
        )}
        {errorRequest && (
          `No results found for ${searchQuery}`
        )}

      </div>
    )
  }
      
    
  

}
