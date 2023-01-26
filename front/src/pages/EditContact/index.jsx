import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

export default function EditContact() {
  return (
    <>
      <PageHeader
        title="Edit Ramon Pereira"
      />
      <ContactForm
        buttonText="Save Changes"
      />
    </>
  );
}
