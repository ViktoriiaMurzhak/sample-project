import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { BiError } from 'react-icons/bi';
import css from './Error.module.css';

const Error = ({ errors, name }: { errors: object; name: string }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ messages }) => {
        return messages
          ? Object.entries(messages).map(([type, message]) => (
              <div
                key={type}
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-end',
                }}
              >
                <BiError color={'red'} />
                <p className={css.error}>{message}</p>
              </div>
            ))
          : null;
      }}
    />
  );
};

export default Error;
