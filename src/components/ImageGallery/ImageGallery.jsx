import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

function ImageGallery({ images, showModaHandlelClick }) {
    return (
        <ul className={s.ImageGallery}>
            {images.map(({ id, ...image }) => {
                return (
                    <ImageGalleryItem
                        key={id}
                        image={image}
                        showModaHandlelClick={showModaHandlelClick}>
                    </ImageGalleryItem>
                );
            })}
        </ul>
    );
}

export default ImageGallery;

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })).isRequired,
    showModaHandlelClick: PropTypes.func.isRequired
};