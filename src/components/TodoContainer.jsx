// import TodoItem from './TodoItem';

import PropTypes from 'prop-types';

const TodoContainer = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {children}
    </div>
  );
};

TodoContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoContainer;
