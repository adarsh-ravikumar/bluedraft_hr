export default {
    bootstrap(app   ) {
      // Patch the LeftMenu sidebar items
      app.registerHook('Admin.components.LeftMenu', ({ originalMenu }) => {
        // Clone the menu to avoid mutation
        const newMenu = { ...originalMenu };
  
        if (newMenu.items && Array.isArray(newMenu.items)) {
          newMenu.items = newMenu.items.map(item => {
            if (item.id === 'single-types') {
              return { ...item, label: 'Pages' };
            }
            return item;
          });
        }
  
        return newMenu;
      });
    },
  };
  