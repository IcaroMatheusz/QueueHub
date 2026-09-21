import AuthForm from "../../components/form/Form";
import MainForm from "../../components/form/MainFormLayout";

function LoginPage() {
  return (
    <MainForm>
      <AuthForm
        formTitle="Bem-vindo de volta!"
        buttonName="Entrar"
        link="/register"
        linkText="Cadastre-se"
        textparagraph="Ainda não tem uma conta?"
      />
    </MainForm>
  );
}

export default LoginPage;
