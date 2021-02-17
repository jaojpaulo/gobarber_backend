interface IMailConfig {
  driver: 'etherial' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'etherial',

  defaults: {
    from: {
      email: 'contato@devjpsantos.com',
      name: 'Equipe de contato',
    },
  },
} as IMailConfig;
