const WelcomeTxtComponent = ({ onlyTitle }) => {
    const explanationTxt = !onlyTitle
        ? <section className="gasa-app-welcome-txt__explanation-txt">
            <p>aby ręce mogły zająć się <br /> mizianiem podopiecznego</p>
        </section>
        : null;

    return (
        <div className='gasa-app-welcome-txt'>
            <section className='gasa-app-welcome-txt__welcome-txt'>
                <h1>MASAŻ GaSa</h1>
                <h2>wszystkie techniki pod ręką</h2>
            </section>
            {explanationTxt}
        </div>
    )
}

export default WelcomeTxtComponent;