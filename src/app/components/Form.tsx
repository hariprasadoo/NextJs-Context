'use client'
import React from 'react';
import classNames from 'classnames';

type ExcludeFromTuple<T extends any[], U> = {
  [K in keyof T]: T[K] extends U ? never : T[K];
}[number];

type Exclusive<T extends PropertyKey[], U = any> = T[number] extends infer E
  ? E extends string
    ? Record<E, U> & { [k in ExcludeFromTuple<T, E>]?: never }
    : never
  : never & {};

type AuthFormProps = React.FormHTMLAttributes<HTMLFormElement> &
  Partial<{
    outline?: boolean;
    rounded?: boolean;
    showSignIn?: boolean;
    showSignUp?: boolean;
  }> & Exclusive<["primary", "secondary", "danger"], boolean>;

export default function AuthForm({
  children,
  primary,
  secondary,
  danger,
  outline,
  rounded,
  showSignIn,
  showSignUp,
  ...rest
}: AuthFormProps) {
  const classes = classNames(
    rest.className,
    'flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8 px-3 py-1.5 border',
    {
      'border-blue-500 bg-blue-500': primary,
      'border-gray-900 bg-gray-900': secondary,
      'border-red-500 bg-red-500': danger,
      'rounded-full': rounded,
    }
  );

  return (
    <form {...rest} className={classes}>
      {/* {children} */}

      {showSignIn && (
        // Render forgot password component
        <>
        <h1>Sign In</h1>
        <label htmlFor="email">Email:</label>
        <input
         type="email"
         id="email"
         name="email"
         required
         className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
        </button>
        </>
      )}
       
      {showSignUp && (
       <>
       <h1>Sign Up</h1>
       <label htmlFor="email">Email:</label>
       <input
        type="email"
        id="email"
        name="email"
        required
        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
       <label htmlFor="email">Password:</label>
       <input
        type="text"
        id="password"
        name="password"
        required
        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
       <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
        </button>
       </>
      )}

      {/* {showSignIn && (
        // Render sign-in button component
        <SignInButton />
      )}

      {showSignIn && (
        // Render sign-up button component
        <SignUpButton />
      )} */}
    </form>
  );
}
