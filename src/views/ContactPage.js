const ContactPage = () => {
  return (
    <div className='contact-page-container'>
      <h3 className='contact-page-container__email'>kontakt@martamucha.pl</h3>
      <h4 className='contact-page-container__website'>
        <a href='https://martamucha.pl/' target='_blank' rel="noreferrer">
          martamucha.pl
        </a>
      </h4>
      <p className='contact-page-container__link'>
        <span>IG: </span>
        <a href='https://www.instagram.com/gasa_martamb/' target='_blank' rel="noreferrer">
          gasa_martamb
        </a>
      </p>
      <p className='contact-page-container__link'>
        <span>FB: </span>
        <a href='https://www.facebook.com/gasa.martamucha' target='_blank' rel="noreferrer">
          gasa.martamucha
        </a>
      </p>
      <p className='contact-page-container__link'>
        <span>LIn: </span>
        <a
          href='https://www.linkedin.com/company/gasa-marta-mucha-balcerek'
          target='_blank' rel="noreferrer"
        >
          DeGaSa - Marta Mucha-Balcerek
        </a>
      </p>
    </div>
  );
};

export default ContactPage;
