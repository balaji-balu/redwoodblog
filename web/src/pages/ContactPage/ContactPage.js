import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
  FormError
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { useForm } from 'react-hook-form'
import BlogLayout from 'src/layouts/BlogLayout'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: ContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm({ mode: 'onBlur' })
  const [create, {loading, error}] = useMutation(CREATE_CONTACT,{
    onCompleted: () => {
      alert('Thank you for your submission!')
      formMethods.reset()
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data }})
    console.log(data)
  }
  return (
    <BlogLayout>
      <Form
        onSubmit={onSubmit}
        validation={{ mode: 'onBlur' }}
        error={error}
        formMethods={formMethods}
        >
        <FormError
          error={error}
          wrapperStyle={{ color: 'red', backgroundColor: 'lavenderblush' }}
        />
        <Label name="name"
          style={{ display: 'block' }}
          errorStyle={{ display: 'block', color: 'red' }} >
          Name
        </Label>
        <TextField
          name="name"
          style={{ display: 'block' }}
          errorStyle={{ display: 'block', borderColor: 'red' }}
          validation={{ required: true }}
        />
        <FieldError name="name" />

        <Label name="email" style={{ display: 'block' }}
        errorStyle={{ display: 'block', color: 'red' }}>
          Email
        </Label>
        <TextField name="email"
          style={{ display: 'block' }}
          errorStyle={{ display: 'block', borderColor: 'red' }}
          validation={{
            required: true,
            message: 'Please enter a valid email address',
          }}
        />
        <FieldError name="email" />

        <Label name="message" style={{ display: 'block' }} errorStyle={{ display: 'block', color: 'red' }}>
          Message
        </Label>
        <TextAreaField
          name="message"
          style={{ display: 'block' }}
          errorStyle={{ display: 'block', borderColor: 'red' }}
          validation={{ required: true }}
        />
        <FieldError name="message" />

        <Submit style={{ display: 'block' }}
                  disabled={loading}>
          Save
        </Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
