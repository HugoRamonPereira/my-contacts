import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import ContactsService from '../../services/ContactService';

export default function NewContact() {
  const handleSubmit = async (formData) => {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };
      const response = await ContactsService.createContact(contact);
      console.log(response);
    } catch {
      alert('This email has already been taken!');
    }
  };

  return (
    <>
      <PageHeader
        title="Create new contact"
      />
      <ContactForm
        buttonText="Create Contact"
        onSubmit={handleSubmit}
      />
    </>
  );
}
