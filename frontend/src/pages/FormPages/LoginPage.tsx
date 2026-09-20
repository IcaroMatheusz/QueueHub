import AuthForm from '../../components/form/Form'
import MainForm from '../../components/form/MainFormLayout'

function LoginPage() {
  return (
    <MainForm >
      <AuthForm
      formTitle='Login'
      buttonName='Login'
      link='/register'
      textparagraph='Don’t have an account? '
      />
    </MainForm>
  )
}

export default LoginPage
