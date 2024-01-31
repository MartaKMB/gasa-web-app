export function navigateTo(ownerChoice, navigate) {
  switch (ownerChoice) {
    case 'ALL_TECHNIQUES':
      navigate('/all-techniques');
      break;
    case 'DOG_CHOICE':
      navigate('/choice-body-techniques');
      break;
    case 'NO_TOUCH':
      navigate('/introductions-techniques/no_touch');
      break;
    case 'FIRST_TOUCH':
      navigate('/introductions-techniques/first_touch');
      break;
    case 'SESSIONS_CHOICE':
      navigate('/choice');
      break;
    case 'START_PAGE':
      navigate('/');
      break;
    case 'SETTINGS':
      console.log('SETTINGS');
      break;
    case 'CONTACT':
      navigate('/contact');
      break;
    default:
      console.log('nic nie zostało wybrane');
  }
}
