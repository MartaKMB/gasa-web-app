const ButtonComponent = ({ name, handleOnClick, withPulse, invisible }) => {
  return (
    <button
      className={`gasa-app-button ${
        withPulse && 'gasa-app-button--with-pulse'
      } ${invisible && 'gasa-app-button--invisible'}`}
      onClick={handleOnClick}
    >
      {name}
    </button>
  );
};

export default ButtonComponent;
