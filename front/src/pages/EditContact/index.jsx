import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import ContactsService from '../../services/ContactService';
import Loader from '../../components/Loader';
import toast from '../../utils/toast';
import useIsMounted from '../../hooks/useIsMounted';

export default function EditContact() {
  const [isLoading, setIsLoading] = useState(true);
  const contactFormRef = useRef(null);
  const [contactName, setContactName] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const isMounted = useIsMounted();

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id);

        if (isMounted()) {
          contactFormRef.current.setFieldsValues(contact);
          setIsLoading(false);
          setContactName(contact.name);
        }
      } catch {
        if (isMounted()) {
          navigate('/');
          toast({
            type: 'error',
            text: 'Contact couldn\'t be found!',
          });
        }
      }
    }

    loadContact();
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

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader
        title={isLoading ? 'Loading...' : `Edit ${contactName}`}
      />
      <ContactForm
        ref={contactFormRef}
        buttonText="Save Changes"
        onSubmit={handleSubmit}
      />
    </>
  );
}
