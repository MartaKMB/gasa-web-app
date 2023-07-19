const ButtonComponent = ({ name, handleOnClick, withPulse }) => {
    return (
        <button className={`gasa-app-button ${withPulse && 'gasa-app-button--with-pulse'}`} onClick={handleOnClick}>{name}</button>
    )
}

export default ButtonComponent;