import { useEffect, useState } from 'react';
import { getImages } from '../../apiService/images-api';
import ImageGallery from '../ImageGallery/ImageGallery';
import SearchBar from '../SearchBar/SearchBar';

// import
export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  // ===============================
  useEffect(() => {
    if (searchQuery.trim() === '') {
      return;
    }
    async function fetchImages() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedImages = await getImages(searchQuery, page);
        setImages(prevState => [...prevState, ...fetchedImages]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, [page, searchQuery]);
  const handleSearch = async topic => {
    setSearchQuery(topic);
    setPage(1);
    setImages([]);
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {isError && <p>error</p>}
      {images.length > 0 && <ImageGallery items={images} />}
      {images.length > 0 && !isLoading && (
        <button onClick={handleLoadMore}>load more</button>
      )}
      {isLoading && <p>Loading...</p>}
    </>
  );
}
//   useEffect(() => {
// async function fetchImages() {
//   try {
//     setIsLoading(true);
//     const fetchedImages = await getImages('dog');
//     setImages(fetchedImages);
//   } catch (error) {
//     console.log('error');
//     setIsError(true);
//   } finally {
//     setIsLoading(false);
//   }
// }
// fetchImages();
//   }, []);
