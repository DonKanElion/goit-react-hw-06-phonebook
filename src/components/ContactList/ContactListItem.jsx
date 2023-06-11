import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import s from './ContactList.module.css';
import { deleteContact } from 'redux/contactsSlice';

const ContactListItem = ({ id, name, number }) => {

  const dispatch = useDispatch();
  const hundleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={s.item}>
      <p className={s.item_text}>
        👉 {name}: {number}
      </p>
      <button
        className={s.btn_del}
        name="del"
        type="button"
        onClick={hundleDelete}
        // onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
