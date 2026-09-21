import AuthForm from "../../components/form/Form";
import MainForm from "../../components/form/MainFormLayout";

function RegisterPage() {
  return (
    <div>
      <MainForm>
        <AuthForm
          formTitle="Crie sua conta"
          confirmPassword={true}
          buttonName="Cadastrar"
          link="/"
          linkText="Faça login"
          textparagraph="Já possui uma conta?"
        />
      </MainForm>
    </div>
  );
}

export default RegisterPage;
