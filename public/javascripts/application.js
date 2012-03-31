// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

Ext.Loader.setConfig({
  enabled: true
});

Ext.application({
  name: 'Cumulus',

  appFolder: 'javascripts',

  controllers: ['Users'],

  paths: {
    'Cumulus.model': 'model', // using ModelController#model
    'Cumulus.store': 'store'  // using ModelController#store
  },

  launch: function() {
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      items: {
        xtype: 'userlist'
      }
    });
  }
});
