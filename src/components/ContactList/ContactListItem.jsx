import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

// import classNames from "classnames";
import s from './ContactList.module.css';
import { deleteContact } from 'redux/actions';


const ContactListItem = ({ id, name, number, onClick }) => {
  const dispatch = useDispatch();
  const hundleDelete = () => dispatch(deleteContact(id));

  return (
      <li className={s.item}>
          <p className={s.item_text}>
          👉 {name}: {number} 
          </p>
          
          {/* <button className={s.btn_del} name="del" type="button" onClick={() => onClick(id)}>
          Delete
        </button> */}

        <button className={s.btn_del} name="del" type="button" onClick={hundleDelete}>
          Delete
        </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  // onClick: PropTypes.func.isRequired,
};

export default ContactListItem;
