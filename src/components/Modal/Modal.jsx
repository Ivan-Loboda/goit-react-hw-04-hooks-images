import { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

function Modal({ modalImage: { largeImageURL, tags }, handleToggleModalStatus }) {

    useEffect(() => {
        const onEsc = e => {
            if (e.code === 'Escape') { handleToggleModalStatus() }
        };

        window.addEventListener('keydown', onEsc);

        return () => { window.removeEventListener('keydown', onEsc) };

    }, [handleToggleModalStatus])



    const handleClickBackdrop = (e) => {
        if (e.currentTarget === e.target) {
            handleToggleModalStatus();
        }
    };

    // const { largeImageURL, tags } = this.props.modalImage;

    return (
        <div className={s.Overlay} onClick={handleClickBackdrop}>
            <div className={s.Modal}>
                <img src={largeImageURL} alt={tags} />
            </div>
        </div>
    );
};

export default Modal;

Modal.propTypes = {
    handleToggleModalStatus: PropTypes.func.isRequired,
    modalImage: PropTypes.shape({
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired
    }).isRequired
};