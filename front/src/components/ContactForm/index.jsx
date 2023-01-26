import FormGroup from '../FormGroup';
import * as Styled from './styles';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm() {
  return (
    <Styled.Form>
      <FormGroup>
        <Input placeholder="Name" />
      </FormGroup>
      <FormGroup>
        <Input placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Input placeholder="Phone" />
      </FormGroup>
      <FormGroup>
        <Select>
          <option value="Facebook">Facebook</option>
        </Select>
      </FormGroup>
      <Styled.ButtonContainer>
        <Button type="submit">
          Save Changes
        </Button>
      </Styled.ButtonContainer>
    </Styled.Form>
  );
}
