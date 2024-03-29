import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import ContactsService from '../../services/ContactService';
import toast from '../../utils/toast';
import useIsMounted from '../../hooks/useIsMounted';

export default function useEditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const contactFormRef = useRef(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const isMounted = useIsMounted();

  useEffect(() => {
    const controller = new AbortController();

    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id, controller.signal);

        if (isMounted()) {
          contactFormRef.current.setFieldsValues(contact);
          setIsLoading(false);
          setContactName(contact.name);
        }
      } catch (error) {
        if (!(error instanceof DOMException && error.name === 'AbortError')) {
          if (isMounted()) {
            navigate('/');
            toast({
              type: 'error',
              text: 'Contact couldn\'t be found!',
            });
          }
        }
      }
    }

    loadContact();

    return () => {
      controller.abort();
    };
  }, [id, navigate, isMounted]);

  const handleSubmit = async (contact) => {
    try {
      const contactData = await ContactsService.updateContact(id, contact);

      setContactName(contactData.name);
      toast({
        type: 'success',
        text: 'Contact edited successfully!',
      });
    } catch {
      toast({
        type: 'error',
        text: 'An error occurred while editing this contact!',
      });
    }
  };

  return {
    isLoading,
    contactName,
    contactFormRef,
    handleSubmit,
  };
}
