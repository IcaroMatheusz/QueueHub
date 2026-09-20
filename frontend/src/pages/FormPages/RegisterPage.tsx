import AuthForm from "../../components/form/Form";
import MainForm from "../../components/form/MainFormLayout";

function RegisterPage() {
  return (
    <>
      <MainForm>
        <AuthForm
          formTitle="Register"
          buttonName="Register"
          confirmPassword={true}
          link="/"
          textparagraph="Already have an account? "
        />
      </MainForm>
    </>
  );
}

export default RegisterPage;
