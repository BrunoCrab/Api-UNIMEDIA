const express = require('express');
const app = express();
const port = 3000;


//OBTENER USUARIOS---------------------------------------------------------------------------------------------------------------------------------------------
app.get('/usuarios/', (req, res) => {
  const { size } = req.query;
  const usuarios = [
    {
      USER_ID: '111111',
      EMAIL: '',
      USER_PWD: '',
      PROFILE_PIC: '',
      USER_FULL_NAME: '',
      USER_ALIAS: '',
      PHONE: '',
      STATUS: '',
      USER_TYPE_ID: '',
      CREATION_DATE: '',
      CREATED_BY: '',
      LAST_UDPATED_BY: '',
      LAST_UDPATE_DATE: '',
      ACTIVE: ''
    },
  ];

  res.send({
    size: size,
    succes: true,
    message: 'Hola mundo',
    data: usuarios,
  });
});

//OBTENER USUARIO ID
app.get('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    size: id,
    succes: true,
    message: 'Se encontro el usuario:',
    data: {
      USER_ID: '111111',
      EMAIL: '',
      USER_PWD: '',
      PROFILE_PIC: '',
      USER_FULL_NAME: '',
      USER_ALIAS: '',
      PHONE: '',
      STATUS: '',
      USER_TYPE_ID: '',
      CREATION_DATE: '',
      CREATED_BY: '',
      LAST_UDPATED_BY: '',
      LAST_UDPATE_DATE: '',
      ACTIVE: ''
    },
  });
});

//CREACION DE USUARIOS
app.post('/usuarios/', (req, res) => {
  const body = req.body;
  const usuario = body;
  res.json |
    {
      succes: true,
      message: 'Se ha creado el producto',
      Data: usuario,
    };
});



//OBTENER NOTICIAS--------------------------------------------------------------------------------------------------------------------------------
app.get('/noticias/', (req, res) => {
    const { size } = req.query;
    const usuarios = [
      {
        NEWS_ID: '111111',
        TEXT: '',
        TITLE: '',
        DESCRIPTION: '',
        THUMBNAIL_ID: '',
        SIGN: '',
        DATE_OF_NEWS: '',
        DATE_OF_EVENTS: '',
        LOCATION: '',
        STATUS: '',
        KEY_WORDS: '',
        LIKES: '',
        CREATION_DATE: '',
        CREATED_BY: '',
        LAST_UDPATED_BY: '',
        LAST_UDPATE_DATE: '',
        ACTIVE: ''
      },
    ];
  
    res.send({
      size: size,
      succes: true,
      message: 'Hola mundo',
      data: usuarios,
    });
  });
  
  //OBTENER NOTICIAS ID
  app.get('/noticias/:id', (req, res) => {
    const { id } = req.params;
    res.json({
      size: id,
      succes: true,
      message: 'Se encontro el usuario:',
      data: {
        NEWS_ID: '111111',
        TEXT: '',
        TITLE: '',
        DESCRIPTION: '',
        THUMBNAIL_ID: '',
        SIGN: '',
        DATE_OF_NEWS: '',
        DATE_OF_EVENTS: '',
        LOCATION: '',
        STATUS: '',
        KEY_WORDS: '',
        LIKES: '',
        CREATION_DATE: '',
        CREATED_BY: '',
        LAST_UDPATED_BY: '',
        LAST_UDPATE_DATE: '',
        ACTIVE: ''
      },
    });
  });
  
  //CREACION DE NOTICIAS
  app.post('/noticias/', (req, res) => {
    const body = req.body;
    const noticia = body;
    res.json |
      {
        succes: true,
        message: 'Se ha creado el producto',
        Data: noticia,
      };
  });


  //OBTENER Secciones--------------------------------------------------------------------------------------------------------------------------------
app.get('/secciones/', (req, res) => {
    const { size } = req.query;
    const usuarios = [
      {
        SECTION_ID: '111111',
        NAME: '',
        DESCRIPTION: '',
        COLOR: '',
        ORDER_CATEGORY: '',
        CREATION_DATE: '',
        CREATED_BY: '',
        LAST_UDPATED_BY: '',
        LAST_UDPATE_DATE: '',
        ACTIVE: ''
      },
    ];
  
    res.send({
      size: size,
      succes: true,
      message: 'Hola mundo',
      data: usuarios,
    });
  });
  
  //OBTENER secciones ID
  app.get('/secciones/:id', (req, res) => {
    const { id } = req.params;
    res.json({
      size: id,
      succes: true,
      message: 'Se encontro el usuario:',
      data: {
        SECTION_ID: '111111',
        NAME: '',
        DESCRIPTION: '',
        COLOR: '',
        ORDER_CATEGORY: '',
        CREATION_DATE: '',
        CREATED_BY: '',
        LAST_UDPATED_BY: '',
        LAST_UDPATE_DATE: '',
        ACTIVE: ''
      },
    });
  });
  
  //CREACION DE secciones
  app.post('/secciones/', (req, res) => {
    const body = req.body;
    const seccion = body;
    res.json |
      {
        succes: true,
        message: 'Se ha creado el producto',
        Data: seccion,
      };
  });

  //OBTENER COMENTARIOS--------------------------------------------------------------------------------------------------------------------------------
app.get('/comentarios/', (req, res) => {
    const { size } = req.query;
    const usuarios = [
      {
        COMMENT_ID: '111111',
        DESCRIPTION: '',
        CREATION_DATE: '',
        CREATED_BY: '',
        ACTIVE: ''
      },
    ];
  
    res.send({
      size: size,
      succes: true,
      message: 'Hola mundo',
      data: usuarios,
    });
  });
  
  //OBTENER COMENTARIOS
  app.get('/comentarios/:id', (req, res) => {
    const { id } = req.params;
    res.json({
      size: id,
      succes: true,
      message: 'Se encontro el usuario:',
      data: {
        COMMENT_ID: '111111',
        DESCRIPTION: '',
        CREATION_DATE: '',
        CREATED_BY: '',
        ACTIVE: ''
      },
    });
  });
  
  //CREACION DE COMENTARIOS
  app.post('/comentarios/', (req, res) => {
    const body = req.body;
    const product = body;
    res.json |
      {
        succes: true,
        message: 'Se ha creado el producto',
        Data: product,
      };
  });












app.listen(port, ()=>{
    console.log('Mi port '+ port);
});