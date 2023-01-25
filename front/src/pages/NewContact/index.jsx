import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { Button } from '../../components/Button';
import PageHeader from '../../components/PageHeader';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="Create new contact"
      />
      <Input type="text" placeholder="Name" />
      <Select>
        <option value="123">Instagram</option>
        <option value="123">Facebook</option>
        <option value="123">Snapchat</option>
        <option value="123">Twitter</option>
      </Select>
      <Button type="button">
        Save changes
      </Button>
    </>
  );
}
