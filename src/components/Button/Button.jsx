import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
    return (
        <div>
            <button className={s.Button} type="button" onClick={onClick}>
                <span className={s.LoadButtonLabel}>Load more</span>
            </button>
        </div>
    );
}

export default Button;

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};