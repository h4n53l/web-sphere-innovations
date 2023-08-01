import {useState} from 'react';

const useContactForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event: any) => {
    setValues(prevState => {
      return {
        ...prevState,
        [event.target.id]: event.target.value,
      };
    });
  };

  return {values, handleChange};
};

export default useContactForm;