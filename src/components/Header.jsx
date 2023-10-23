import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
        <h1>{ title }</h1>
        <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}/>
    </header>
  )
}

// Set default value, can be overwritten later
Header.defaultProps = {
    title: 'Task Tracker',
}

// Set a data type on the input:
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
