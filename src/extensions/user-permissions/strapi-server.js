// src/extensions/users-permissions/strapi-server.js

module.exports = {
    async register(ctx) {
      const { email } = ctx.request.body;
  
      // Validar correo electrónico con dominio institucional
      const emailPattern = /^[a-zA-Z0-9._%+-]+@est\.uepdc\.edu\.ec$/;
      if (!emailPattern.test(email)) {
        return ctx.badRequest('Correo electrónico debe ser institucional con el dominio @est.uepdc.edu.ec');
      }
  
      // Llamar a la función original para el registro
      return await strapi.plugins['users-permissions'].services.user.add(ctx.request.body);
    }
  };
  