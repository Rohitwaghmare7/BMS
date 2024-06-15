import PropTypes from 'prop-types';

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    <div className="h-12">
      {props.alert && (
        <div
          className={`bg-${props.alert.type === 'success' ? 'green-100' : 'red-100'} border ${
            props.alert.type === 'success' ? 'border-green-400' : 'border-red-400'
          } text-${props.alert.type === 'success' ? 'green-700' : 'red-700'} px-4 py-3 rounded relative`}
          role="alert"
        >
          <strong className="font-bold">{capitalize(props.alert.type)}</strong>
          <span className="block sm:inline">{props.alert.msg}</span>
        </div>
      )}
    </div>
  );
}

Alert.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired,
  }),
};

Alert.defaultProps = {
  alert: null,
};

export default Alert;