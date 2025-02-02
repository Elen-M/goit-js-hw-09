const formData = {
    email: "",
    message: ""
}
const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form')
};

refs.form.addEventListener('input', onFormInput);
function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    const parsedData = JSON.parse(savedData);

    refs.form.elements.email.value = parsedData.email || '';
    refs.form.elements.message.value = parsedData.message || '';
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
  }
}
populateForm();

refs.form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
    e.preventDefault();
    const email = e.target.elements.email.value.trim();
    const message = e.target.elements.message.value.trim();
    
    if (email === '' || message === '') {
        alert('Fill please all fields');
        return;
    }


    localStorage.removeItem(STORAGE_KEY);
    e.target.reset();
    formData.email = '';
    formData.message = '';
}
