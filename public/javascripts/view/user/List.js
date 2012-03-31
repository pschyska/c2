Ext.define('Cumulus.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.userlist',

    title : 'All Users',

    store: 'Users',

    initComponent: function() {

        this.columns = [
            {header: 'Id', dataIndex: 'id', flex: 1},
            {header: 'Name',  dataIndex: 'name',  flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1},
            {header: 'Created at', dataIndex: 'created_at', flex: 1},
            {header: 'Updated at', dataIndex: 'updated_at', flex: 1}
        ];

        this.callParent(arguments);
    }
});
