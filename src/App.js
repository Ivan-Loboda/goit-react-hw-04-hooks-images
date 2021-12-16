import { useState, useEffect } from 'react';
import { fetchImages } from './api';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';

import './App.css';

function App() {

  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modalImage, setModalImage] = useState({});
  const [modalIsHidden, setModalIsHidden] = useState(true);

  // state = {
  //   search: '',
  //   images: [],
  //   page: 1,
  //   error: null,
  //   isLoading: false,
  //   modalImage: {},
  //   modalIsHidden: true,
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.search !== this.state.search) {
  //     this.setState({ images: [] }, () => {
  //       this.loadImages(1);
  //     });
  //   }





  const handleFormSubmit = (searchString) => {
    setSearch(searchString);
    setImages([]);
    setPage(1);
    setError(null);
  };

  const handleToggleModalStatus = () => {
    setModalIsHidden(!modalIsHidden);
  };

  const showModaHandlelClick = ({ modalImage }) => {
    setModalImage({ ...modalImage });
    handleToggleModalStatus();
  };

  const loadMoreHandleClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const loadImages = () => {

      setIsLoading(true);

      fetchImages(search, page)
        .then((response) => {
          if (response.length === 0) {
            return Promise.reject(
              new Error(`There is no pictures by ${search} name, please try another request`));
          } else {
            console.log(response)
            setImages(prevImages => [...(prevImages || []), ...response]);
          }
        })
        .catch(error => setError(error))
        .finally(() => setIsLoading(false));
    };

    if (search === '') return;

    loadImages()

  }, [page, search]);

  useEffect(() => {
    if (page !== 1) {
      window.scrollTo({ top: document.body.clientHeight, behavior: 'smooth' });
    }
  }, [images])


  return (
    <>
      <Searchbar
        onSubmit={handleFormSubmit} />
      {error &&
        <h1>{error.message}</h1>}

      <ImageGallery
        images={images}
        showModaHandlelClick={showModaHandlelClick} />

      {isLoading &&
        <Loader />}

      {!!images.length && !isLoading &&
        <Button
          onClick={loadMoreHandleClick} />}

      {!modalIsHidden &&
        <Modal
          handleToggleModalStatus={handleToggleModalStatus}
          modalImage={modalImage} />}
      {/* <h1>WTF</h1> */}
    </>
  );
};

export default App;