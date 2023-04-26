import { useRef } from 'react';
import ContactsService from '../../services/ContactService';
import toast from '../../utils/toast';

export default function useNewContact() {
  const contactFormRef = useRef(null);

  const handleSubmit = async (contact) => {
    try {
      await ContactsService.createContact(contact);

      contactFormRef.current.clearFields();

      toast({
        type: 'success',
        text: 'Contact added successfully!',
      });
    } catch {
      toast({
        type: 'error',
        text: 'An error occurred while adding new contact!',
      });
    }
  };

  return {
    contactFormRef,
    handleSubmit,
  };
}
