/**
 * A container component that renders a grid layout for its child components.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered in the grid layout.
 */
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
