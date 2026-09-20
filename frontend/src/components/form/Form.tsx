type AuthFormProps = {
  formTitle: string,
  confirmPassword?: boolean,
  buttonName: string,
  link: string,
  textparagraph: string
}

import { Link } from 'react-router-dom'

function AuthForm( {formTitle, confirmPassword, buttonName, link, textparagraph}: AuthFormProps ) {

  return (
    <div className="bg-base-200 p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4">{formTitle}</h2>
      <form>
        <input type="text" name="email" id="email" placeholder="Email" className="w-full border rounded-lg p-3 mt-4"/>
        <input type="password" name="password" id="password" placeholder="Password" className="w-full border rounded-lg p-3 mt-4"/>
        {confirmPassword && (
          <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" className="w-full border rounded-lg p-3 mt-4"/>
        )}
        <p className="text-sm text-slate-300 mt-2">{textparagraph} 
          <Link to={link}>
            <span className='text-sky-300 font-bold hover:underline'>Click here</span>
          </Link>
          </p>
        <button type="submit" className="bg-base-700 text-white py-2 px-4 rounded-lg hover:bg-base-800 mt-4 font-bold transition-all">
          {buttonName}
        </button>
      </form>
    </div>
  )
}

export default AuthForm
