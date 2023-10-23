import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import useNewContact from './useNewContact';

export default function NewContact() {
  const { contactFormRef, handleSubmit } = useNewContact();
  return (
    <>
      <PageHeader
        title="Create new contact"
      />
      <ContactForm
        ref={contactFormRef}
        buttonText="Create Contact"
        onSubmit={handleSubmit}
      />
    </>
  );
}
