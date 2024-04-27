(async () => {
    const myNewObject = new Parse.Object('Chamado');
    myNewObject.set('Nome', 'A string');
    myNewObject.set('Email', 'A string');
    myNewObject.set('Assunto', 'A string');
    myNewObject.set('Mensagem', 'A string');
    myNewObject.set('Resposta', 'A string');
    myNewObject.set('Finalizado', true);
    try {
      const result = await myNewObject.save();
      // Access the Parse Object attributes using the .GET method
      console.log('Chamado created', result);
    } catch (error) {
      console.error('Error while creating Chamado: ', error);
    }
  })();