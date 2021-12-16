import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ image: { webformatURL, largeImageURL, tags }, showModaHandlelClick }) {
    return (
        <li
            className={s.ImageGalleryItem}
            onClick={() =>
                showModaHandlelClick({
                    modalImage: {
                        largeImageURL,
                        tags
                    }
                })
            }>
            <img
                src={webformatURL}
                alt={tags}
                className={s.ImageGalleryItem_image} />
        </li>
    );
};

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }).isRequired,
    showModaHandlelClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;